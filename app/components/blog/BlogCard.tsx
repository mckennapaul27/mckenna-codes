import Image from 'next/image';
import styles from './BlogCard.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { montserrat } from '@/app/utils/fonts';

export const BlogCard = ({
    title,
    description,
    date,
    slug,
    tags,
    src,
}: {
    title: string;
    description: string;
    date: string;
    slug: string;
    tags: string[];
    src: string;
}) => {
    return (
        <div className={styles['blog-card-wrapper']}>
            <div className={styles['blog-card']}>
                <div className={styles['text-section']}>
                    <div className={styles['top-section']}>
                        <div className={styles['blog-card-tags']}>
                            {tags.map((tag, i) => (
                                <div className={styles['blog-tag-wrapper']}>
                                    <Link
                                        className={classNames(
                                            styles['blog-card-tag'],
                                            montserrat.className
                                        )}
                                        key={`blog-card-tag-${i}`}
                                        href={`/blog/tag/${tag}`}
                                    >
                                        {tag}
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <p className={styles['blog-card-date']}>
                            Last updated: {date}
                        </p>
                    </div>
                    <div className={styles['blog-card-content']}>
                        <div
                            className={classNames(
                                styles['blog-card-title'],
                                montserrat.className
                            )}
                        >
                            {title}
                        </div>
                        <p className={styles['blog-card-description']}>
                            {description}
                        </p>
                    </div>
                </div>
                <div className={styles['blog-card-image-wrapper']}>
                    <Image
                        src={`/${src}`}
                        alt={title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        className={styles['blog-card-img']}
                        fill
                    />
                </div>
            </div>
        </div>
    );
};
