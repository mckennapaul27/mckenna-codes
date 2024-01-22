import Link from 'next/link';
import { convertBlocksToHtml } from '../utils/content-helpers';
import styles from './ContentBlock.module.scss';
import { NextImage } from '../components/blog/NextImage';
import parse from 'html-react-parser';

export const ContentBlock = ({ body }: { body: string }) => {
    const parsedBody = JSON.parse(body as string);
    const content = convertBlocksToHtml(parsedBody);
    const options = {
        replace: (domNode: any) => {
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
                    // it's an external link
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
        <div className={styles['main']}>
            <div className="container">
                <div className={styles['content-section']}>
                    <div className={styles['markdown']}>
                        {parse(content, options)}
                    </div>
                </div>
            </div>
        </div>
    );
};
