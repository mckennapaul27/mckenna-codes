// 'use client';

import slugify from 'slugify';

type Mark = {
    type: string;
    attrs: {
        href?: string;
        target?: string;
        rel?: string;
        class?: string;
    };
};

type Block = {
    type: string;
    attrs: {
        level: number;
    };
    content: {
        type: string;
        marks: any[];
        text: string;
        content: Block[];
    }[];
};
type Heading = {
    title: string;
    id: string;
    level: number;
    children: any[];
};
export const createTableOfContents = (blocks: {
    type: string;
    content: Block[];
}) => {
    const toc: Heading[] = [];
    let currentH2: {
        title: string;
        id: string;
        level: number;
        children: any[];
    } | null = null;

    blocks.content.forEach((block: Block) => {
        if (block.type === 'heading') {
            const content = block.content.map((c) => c.text).join('');
            const id = slugify(content, {
                lower: true,
                trim: true,
            });
            if (block.attrs.level === 2) {
                currentH2 = {
                    title: content,
                    id,
                    level: block.attrs.level,
                    children: [],
                };
                toc.push(currentH2);
            } else if (block.attrs.level === 3 && currentH2) {
                currentH2.children.push({
                    title: content,
                    id,
                    level: block.attrs.level,
                    children: [],
                });
            }
        }
    });

    return toc;
};

export const convertBlocksToHtml = (blocks: {
    type: string;
    content: Block[];
}) => {
    let htmlContent = '';

    const parseContent = (blocks: any) => {
        return blocks
            .map((block: any) => {
                let html = '';
                switch (block.type) {
                    case 'paragraph':
                        html += '<p>';
                        if (block.content) {
                            html += parseContent(block.content);
                        }
                        html += '</p>';
                        break;
                    case 'text':
                        if (block.marks && block.marks.length > 0) {
                            block.marks.forEach((mark: Mark) => {
                                if (mark.type === 'bold') {
                                    html += '<strong>';
                                } else if (mark.type === 'italic') {
                                    html += '<em>';
                                } else if (mark.type === 'underline') {
                                    html += '<u>';
                                } else if (mark.type === 'link') {
                                    html += `<a href="${mark.attrs.href}" target="${mark.attrs.target}" rel="${mark.attrs.rel}" class="${mark.attrs.class}">`;
                                } else if (mark.type === 'code') {
                                    html += '<code>';
                                }
                            });
                        }
                        html += escapeHtml(block.text); // Make sure to escape the text
                        if (block.marks && block.marks.length > 0) {
                            block.marks
                                .slice()
                                .reverse()
                                .forEach((mark: Mark) => {
                                    if (mark.type === 'bold') {
                                        html += '</strong>';
                                    } else if (mark.type === 'italic') {
                                        html += '</em>';
                                    } else if (mark.type === 'underline') {
                                        html += '</u>';
                                    } else if (mark.type === 'link') {
                                        html += '</a>';
                                    } else if (mark.type === 'code') {
                                        html += '</code>';
                                    }
                                });
                        }
                        break;
                    case 'hardBreak':
                        html += '<br/>';
                        break;
                    case 'heading':
                        html += `<h${block.attrs.level} id=${slugify(
                            parseContent(block.content),
                            {
                                lower: true,
                                trim: true,
                            }
                        )}>${parseContent(block.content)}</h${
                            block.attrs.level
                        }>`;
                        break;
                    case 'codeBlock':
                        const codeContent = block.content
                            .map((c: any) => c.text)
                            .join('\n');
                        html += `<pre><code>${escapeHtml(
                            codeContent
                        )}</code></pre>`;
                        break;
                    case 'bulletList':
                        html += '<ul>';
                        if (block.content) {
                            html += parseContent(block.content);
                        }
                        html += '</ul>';
                        break;
                    case 'orderedList':
                        html += `<ol start="${block.attrs.start || 1}">`;
                        if (block.content) {
                            html += parseContent(block.content);
                        }
                        html += '</ol>';
                        break;
                    case 'listItem':
                        html += '<li>';
                        if (block.content) {
                            html += parseContent(block.content);
                        }
                        html += '</li>';
                        break;
                    case 'image':
                        html += `<img src="${
                            block.attrs.src
                        }" alt="${escapeHtml(block.attrs.alt)}" width="${
                            block.attrs.width
                        }" height="${block.attrs.height}" />`;
                        break;
                    case 'table':
                        html +=
                            '<div class="table-container"><table class="table"><tbody>';
                        block.content.forEach(
                            (row: { type: string; content: any[] }) => {
                                html += '<tr>';
                                // Check if row.content is not empty
                                if (row.content && row.content.length > 0) {
                                    row.content.forEach((cell: any) => {
                                        // Check if cell.content is not empty
                                        if (
                                            cell.content &&
                                            cell.content.length > 0
                                        ) {
                                            html += `<td>${parseContent(
                                                cell.content
                                            )}</td>`;
                                        } else {
                                            // Render a td even if there is no content to maintain the structure
                                            html += '<td></td>';
                                        }
                                    });
                                }
                                html += '</tr>';
                            }
                        );
                        html += '</tbody></table></div>';
                        break;
                    default:
                        console.error(`Unknown block type: ${block.type}`);
                }
                return html;
            })
            .join('');
    };

    htmlContent = parseContent(blocks.content);
    return htmlContent;
};

const escapeHtml = (unsafe: string) => {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};
