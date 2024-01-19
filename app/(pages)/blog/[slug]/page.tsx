import { type Metadata } from 'next';
import qs from 'qs';
import { url } from '@/config';
import { BlogPage } from '@/app/components/blog/BlogPage';

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
    const { data } = await fetch(url + '/api/api-blogs?' + query, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
        },
        // cache: 'no-store',
    }).then((res) => res.json());
    return {
        title: data[0].metaTitle,
        description: data[0].metaDescription,
    };
}

export async function generateStaticParams() {
    const res = await fetch(url + '/api/api-blogs?select=slug', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
        },
        // cache: 'no-store',
    });
    const data = await res.json();
    console.log('paths: ', data);
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
    // console.log(`The slug on this page is ${slug}`);
    const query = qs.stringify(
        {
            filters: {
                slug: slug,
            },
            select: 'slug title description tags body image updatedAt createdAt',
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    console.log('query: ', query);
    try {
        const res = await fetch(url + '/api/api-blogs?' + query, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
            },
            // cache: 'no-store',
        });
        const data = await res.json();
        console.log('data: ', data);

        const blog = {
            title: data.data[0].title,
            updatedAt: data.data[0].updatedAt,
            createdAt: data.data[0].createdAt,
            slug: data.data[0].slug,
            tags: data.data[0].tags,
            image: data.data[0].image,
            body: data.data[0].body,
        };
        console.log('blog >> ', blog);

        return <BlogPage {...blog} />;
        return <h1>This is a blog</h1>;
    } catch (error) {
        console.log('error: ', error);
    }
}
