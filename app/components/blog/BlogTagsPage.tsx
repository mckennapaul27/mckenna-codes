import { Tag } from '@/types';
import styles from './BlogTagsPage.module.scss';
import classNames from 'classnames';
import { montserrat } from '@/app/utils/fonts';
import { BlogCard } from './BlogCard';

export const BlogTagsPage = ({
    blogs,
    tagName,
}: {
    blogs: {
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
    tagName: string;
}) => {
    return (
        <section className={styles['main']}>
            <div className="container">
                <h1 className={classNames(montserrat.className)}>#{tagName}</h1>
                <div className={styles['blogs-wrapper']}>
                    {blogs.map((blog, i) => (
                        <div
                            className={styles['blog-card-wrapper']}
                            key={`blog-card-${i}`}
                        >
                            <BlogCard {...blog} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
