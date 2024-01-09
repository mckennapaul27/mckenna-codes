import classNames from 'classnames';
import styles from './LatestBlogs.module.scss';
import { montserrat } from '../utils/fonts';
import { BlogCard } from '../components/blog/BlogCard';
import Link from 'next/link';

const popularTags = [
    'react',
    'javascript',
    'nextjs',
    'web-development',
    'react-hook-form',
    'typescript',
];

export const LatestBlogs = ({
    latestBlogs,
}: {
    latestBlogs: {
        title: string;
        description: string;
        date: string;
        slug: string;
        tags: string[];
        src: string;
    }[];
}) => {
    return (
        <section className={styles['main']}>
            <div className="container">
                <h2 className={classNames(montserrat.className)}>
                    My Latest Posts
                </h2>
                <div className={styles['sections']}>
                    <div>
                        <div>
                            {latestBlogs.map((blog, i) => (
                                <BlogCard {...blog} key={`blog-card-${i}`} />
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
                                {popularTags.map((tag, i) => (
                                    <div
                                        className={styles['blog-tag-wrapper']}
                                        key={`blog-tag-wrapper-${i}`}
                                    >
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
