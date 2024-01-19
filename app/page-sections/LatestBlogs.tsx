import classNames from 'classnames';
import styles from './LatestBlogs.module.scss';
import { montserrat } from '../utils/fonts';
import { BlogCard } from '../components/blog/BlogCard';
import Link from 'next/link';
import { Pagination } from '../components/blog/Pagination';
import { type Tag } from '@/types';

export const LatestBlogs = ({
    latestBlogs,
    extra,
    tags,
    theme,
}: {
    latestBlogs: {
        title: string;
        description: string;
        updatedAt: string;
        slug: string;
        tags: Tag[];
        image: {
            url: string;
            alt: string;
            width: number;
            height: number;
            public_id: string;
        };
    }[];
    tags: Tag[];
    extra?: string;
    theme?: string;
}) => {
    return (
        <section
            className={classNames(styles['main'], theme ? styles[theme] : '')}
        >
            <div className="container">
                <h2 className={classNames(montserrat.className)}>
                    My Latest Posts
                </h2>
                <div className={styles['sections']}>
                    <div className={styles['left-column']}>
                        <div>
                            {latestBlogs.map((blog, i) => (
                                <div
                                    className={styles['blog-card-wrapper']}
                                    key={`blog-card-${i}`}
                                >
                                    <BlogCard {...blog} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles['right-column']}>
                        <div className={styles['popular-tags']}>
                            <p
                                className={classNames(
                                    styles['tags-title'],
                                    montserrat.className
                                )}
                            >
                                Popular Tags
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
                                            key={tag._id}
                                            href={`/blog/tag/${tag.slug}`}
                                        >
                                            {tag.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* {extra === 'pagination' && (
                    <div className={styles['pagination-wrapper']}>
                        <Pagination />
                    </div>
                )} */}
                {extra === 'button' && (
                    <div className={styles['button-wrapper']}>
                        <Link
                            href="/blog"
                            className={classNames(
                                'button secondary',
                                montserrat.className,
                                styles['']
                            )}
                        >
                            More blogs
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};
