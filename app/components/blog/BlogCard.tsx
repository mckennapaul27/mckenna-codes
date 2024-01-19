import Image from 'next/image';
import styles from './BlogCard.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { montserrat } from '@/app/utils/fonts';
import { type Tag } from '@/types';
import dayjs from 'dayjs';

export const BlogCard = ({
    title,
    description,
    createdAt,
    updatedAt,
    slug,
    tags,
    image,
}: {
    title: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    slug: string;
    tags: Tag[];
    image: {
        url: string;
        alt: string;
        width: number;
        height: number;
        public_id: string;
    };
}) => {
    return (
        <div className={styles['blog-card']}>
            <div className={styles['text-section']}>
                <div className={styles['top-section']}>
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
                                    key={`blog-card-tag-${i}`}
                                    href={`/blog/tag/${tag.name}`}
                                >
                                    {tag.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <p className={styles['blog-card-date']}>
                        Last updated: {dayjs(updatedAt).format('MMMM D, YYYY')}
                    </p>
                </div>
                <div className={styles['blog-card-content']}>
                    <Link
                        className={classNames(
                            styles['blog-card-title'],
                            montserrat.className
                        )}
                        href={`/blog/${slug}`}
                    >
                        {title}
                    </Link>
                    <p className={styles['blog-card-description']}>
                        {description}
                    </p>
                </div>
            </div>
            <div className={styles['blog-card-image-wrapper']}>
                <Image
                    src={image.url}
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
    );
};
