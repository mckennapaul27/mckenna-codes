import { type Metadata } from 'next';
import { FC } from 'react';
import qs from 'qs';
import { url } from '@/config';
import { BlogPage } from '@/app/components/blog/BlogPage';
import { BlogType, type Tag } from '@/types';

interface PageProps {
    params: {
        slug: string;
    };
}

// export async function generateMetadata({
//     params,
// }: PageProps): Promise<Metadata> {
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${params.postId}`
//     );
//     const data = await res.json();
//     console.log(data);
//     return {
//         title: data.title,
//     };
// }

interface Blog {}

export async function generateStaticParams() {
    const res = await fetch(url + '/api/api-blogs?select=slug', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
        },
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
    const query = qs.stringify(
        {
            filters: {
                slug: slug,
            },
            select: 'slug title tags body image updatedAt',
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    const res = await fetch(url + '/api/api-blogs?' + query, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
        },
        next: { revalidate: 120 }, // refresh every 60 seconds
    });
    const data = await res.json();

    const blog = {
        title: data.data[0].title,
        updatedAt: data.data[0].updatedAt,
        slug: data.data[0].slug,
        tags: data.data[0].tags,
        image: data.data[0].image,
        body: data.data[0].body,
    };

    return <BlogPage {...blog} />;
}
