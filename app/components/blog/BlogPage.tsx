// 'use client';
import { BlogType } from '@/types';
import styles from './BlogPage.module.scss';
import dayjs from 'dayjs';
import { montserrat } from '@/app/utils/fonts';
import Link from 'next/link';
import classNames from 'classnames';
import Image from 'next/image';
import {
    convertBlocksToHtml,
    createTableOfContents,
} from '@/app/utils/content-helpers';
import parse from 'html-react-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark as highlightStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { SimpleCTA } from '@/app/page-sections/SimpleCTA';
import { NextImage } from './NextImage';
import { TOC } from './TOC';

export const BlogPage = ({
    title,
    updatedAt,
    slug,
    tags,
    image,
    body,
}: BlogType) => {
    const parsedBody = JSON.parse(body as string);
    const toc = createTableOfContents(parsedBody);
    const content = convertBlocksToHtml(parsedBody);
    // console.log(JSON.stringify(toc, null, 2));
    const options = {
        replace: (domNode: any) => {
            if (domNode.name === 'code') {
                const parentNode = domNode.parent;
                if (parentNode && parentNode.name === 'pre') {
                    // It's a code block
                    return (
                        <SyntaxHighlighter
                            language="javascript"
                            style={highlightStyle}
                        >
                            {domNode.children[0].data}
                        </SyntaxHighlighter>
                    );
                } else {
                    // It's inline code
                    return <code>{domNode.children[0].data}</code>;
                }
            }
            if (domNode.attribs && domNode.name === 'a') {
                if (
                    domNode.attribs.href &&
                    domNode.attribs.href.startsWith('/')
                    // it's an internal link
                ) {
                    if (domNode.children[0] && domNode.children[0].data) {
                        return (
                            <Link href={domNode.attribs.href}>
                                {domNode.children[0].data}
                            </Link>
                        );
                    }
                }
                if (
                    domNode.attribs.href &&
                    domNode.attribs.href.startsWith('http')
                ) {
                    if (domNode.children[0] && domNode.children[0].data) {
                        return (
                            <a
                                href={domNode.attribs.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {domNode.children[0].data}
                            </a>
                        );
                    }
                }
            }
            if (domNode.attribs && domNode.name === 'img') {
                return <NextImage {...domNode.attribs} />;
            }
        },
    };
    return (
        <div className={styles['blog-page']}>
            <div className="container">
                <div className={styles['title-section']}>
                    <h1
                        className={classNames(
                            montserrat.className,
                            styles['title']
                        )}
                    >
                        {title}
                    </h1>
                    <p className={styles['update-date']}>
                        Updated on {dayjs(updatedAt).format('MMMM D, YYYY')}
                    </p>
                </div>
                <div className={styles['main-wrapper']}>
                    <div className={styles['main-content']}>
                        <div className={styles['blog-card-image-wrapper']}>
                            <Image
                                src={image.url}
                                alt={title}
                                fill
                                className={styles['blog-image']}
                                priority
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                        <div className={styles['main-content-wrapper']}>
                            <div className={styles['markdown']}>
                                {parse(content, options)}
                            </div>
                            <div className={styles['blog-card-tags']}>
                                {tags.map((tag, i) => (
                                    <div
                                        className={styles['blog-tag-wrapper']}
                                        key={tag._id}
                                    >
                                        <Link
                                            className={classNames(
                                                styles['blog-card-tag'],
                                                montserrat.className
                                            )}
                                            key={`tag-${i}`}
                                            href={`/blog/tag/${tag.name}`}
                                        >
                                            {tag.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles['right-column']}>
                        <div className={styles['toc-wrapper']}>
                            <p
                                className={classNames(
                                    styles['right-column-title'],
                                    montserrat.className
                                )}
                            >
                                Table of Contents
                            </p>
                            <TOC toc={toc} />
                        </div>
                    </div>
                </div>
            </div>
            <SimpleCTA />
        </div>
    );
};
