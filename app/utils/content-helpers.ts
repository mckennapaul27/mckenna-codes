// 'use client';

import slugify from 'slugify';

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
    children: any[];
};
export const createTableOfContents = (blocks: {
    type: string;
    content: Block[];
}) => {
    const toc: Heading[] = [];
    let currentH2: { title: string; id: string; children: any[] } | null = null;

    blocks.content.forEach((block: Block) => {
        if (block.type === 'heading') {
            const content = block.content.map((c) => c.text).join('');
            const id = slugify(content, {
                lower: true,
                trim: true,
            });
            if (block.attrs.level === 2) {
                currentH2 = { title: content, id, children: [] };
                toc.push(currentH2);
            } else if (block.attrs.level === 3 && currentH2) {
                currentH2.children.push({ title: content, id, children: [] });
            }
            // Extend to other heading levels if needed
        }
    });

    return toc;
};

export const convertBlocksToHtml = (blocks: {
    type: string;
    content: Block[];
}) => {
    let htmlContent = '';

    const parseContent = (blocks) => {
        return blocks
            .map((block) => {
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
                            block.marks.forEach((mark) => {
                                if (mark.type === 'bold') {
                                    html += '<strong>';
                                } else if (mark.type === 'italic') {
                                    html += '<em>';
                                } else if (mark.type === 'underline') {
                                    html += '<u>';
                                } else if (mark.type === 'link') {
                                    html += `<a href="${mark.attrs.href}" target="${mark.attrs.target}" rel="${mark.attrs.rel}" class="${mark.attrs.class}">`;
                                }
                            });
                        }
                        html += block.text;
                        if (block.marks && block.marks.length > 0) {
                            block.marks
                                .slice()
                                .reverse()
                                .forEach((mark) => {
                                    if (mark.type === 'bold') {
                                        html += '</strong>';
                                    } else if (mark.type === 'italic') {
                                        html += '</em>';
                                    } else if (mark.type === 'underline') {
                                        html += '</u>';
                                    } else if (mark.type === 'link') {
                                        html += '</a>';
                                    }
                                });
                        }
                        break;
                    case 'hardBreak':
                        html += '<br/>';
                        break;
                    case 'heading':
                        html += `<h${block.attrs.level}>${parseContent(
                            block.content
                        )}</h${block.attrs.level}>`;
                        break;
                    case 'codeBlock':
                        const codeContent = block.content
                            .map((c) => c.text)
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
