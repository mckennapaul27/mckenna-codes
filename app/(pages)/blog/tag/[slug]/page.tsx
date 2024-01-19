import { type Metadata } from 'next';
import qs from 'qs';
import { url } from '@/config';
import { BlogTagsPage } from '@/app/components/blog/BlogTagsPage';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = params;
    const query = qs.stringify(
        {
            filters: {
                slug: slug,
            },
            select: 'metaTitle metaDescription',
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    const { data } = await fetch(url + '/api/api-tags?' + query, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
        },
        cache: 'no-store',
    }).then((res) => res.json());
    return {
        title: data[0].metaTitle,
        description: data[0].metaDescription,
    };
}

export async function generateStaticParams() {
    const res = await fetch(url + '/api/api-tags?select=slug', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
        },
        cache: 'no-store',
    });
    const data = await res.json();
    return data.data.map((blog: { _id: string; slug: string }) => {
        return {
            params: {
                slug: blog.slug,
            },
        };
    });
}

export default async function Page({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    const { slug } = params;
    const tag_query = qs.stringify(
        {
            filters: {
                slug: slug,
            },
            select: 'slug name',
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    const { data: tag_data } = await fetch(url + '/api/api-tags?' + tag_query, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
        },
        cache: 'no-store',
    }).then((res) => res.json());
    const blog_query = qs.stringify(
        {
            filters: {
                tags: [tag_data[0]._id],
            },
            select: 'slug title tags body image updatedAt createdAt',
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    const { data: blog_data } = await fetch(
        url + '/api/api-blogs/tags?' + blog_query,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
            },
            cache: 'no-store',
            // next: { revalidate: 5 }, // refresh every hour
        }
    ).then((res) => res.json());
    return <BlogTagsPage blogs={blog_data} tagName={tag_data[0].name} />;
}
