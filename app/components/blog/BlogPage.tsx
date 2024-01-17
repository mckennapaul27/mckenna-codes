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

export const BlogPage = ({
    title,
    updatedAt,
    slug,
    tags,
    image,
    body,
}: BlogType) => {
    console.log(body);
    const parsedBody = JSON.parse(body as string);
    // console.log(parsedBody);
    const toc = createTableOfContents(parsedBody);
    const content = convertBlocksToHtml(parsedBody);
    console.log(toc);
    const options = {
        replace: (domNode) => {
            if (domNode.name === 'code') {
                console.log(domNode);
                return (
                    <SyntaxHighlighter
                        language="javascript"
                        style={highlightStyle}
                    >
                        {domNode.children[0].data}
                    </SyntaxHighlighter>
                );
                // return <NextImage {...domNode.attribs} />;
            }
            //    if (domNode.attribs && domNode.name === 'a') {
            //        if (
            //            domNode.attribs.href &&
            //            domNode.attribs.href.startsWith('/')
            //        ) {
            //            if (domNode.children[0] && domNode.children[0].data) {
            //                return (
            //                    <Link href={domNode.attribs.href}>
            //                        <a>{domNode.children[0].data}</a>
            //                    </Link>
            //                );
            //            }
            //        }
            //        if (
            //            domNode.attribs.href &&
            //            domNode.attribs.href.startsWith('http')
            //        ) {
            //            if (domNode.children[0] && domNode.children[0].data) {
            //                return (
            //                    <a
            //                        href={domNode.attribs.href}
            //                        target="_blank"
            //                        rel="noreferrer"
            //                    >
            //                        {domNode.children[0].data}
            //                    </a>
            //                );
            //            }
            //        }
            //    }
            //    if (domNode.attribs && domNode.name === 'img') {
            //        return <NextImage {...domNode.attribs} />;
            //    }
            //    if (domNode.data && domNode.data === '--skrill vip promo--') {
            //        // const SkrillVIPOne = dynamic(() =>
            //        //     import('@/components/call-to-actions/SkrillVIPOne')
            //        // );
            //        return <SkrillVIPOne />;
            //    }
        },
    };
    return (
        <div className={styles['blog-page']}>
            <div className="container">
                <div className={styles['sections']}>
                    <main className={styles['article']}>
                        <h1
                            className={classNames(
                                montserrat.className,
                                styles['title']
                            )}
                        >
                            {title}
                        </h1>
                        <div className={styles['tags-dates']}>
                            <p className={styles['update-date']}>
                                Updated on:{' '}
                                {dayjs(updatedAt).format('MMMM D, YYYY')}
                            </p>
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
                            <div className={styles['blog-card-image-wrapper']}>
                                <Image
                                    src={image.url}
                                    alt={title}
                                    width={image.width}
                                    height={image.height}
                                    className={styles['blog-image']}
                                    priority
                                    // style={{
                                    //     width: '100%',
                                    //     height: '100%',
                                    //     objectFit: 'cover',
                                    // }}
                                    // className={styles['blog-card-img']}
                                    // fill
                                />
                            </div>
                            <div className={styles['markdown']}>
                                {parse(content, options)}
                            </div>
                        </div>
                    </main>
                    <aside>dsfds</aside>
                </div>
            </div>
            <SimpleCTA />
        </div>
    );
};
