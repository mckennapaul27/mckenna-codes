import { LatestBlogs } from '@/app/page-sections/LatestBlogs';
import { url } from '@/config';
import { type Metadata } from 'next';
import qs from 'qs';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Paul McKenna's Blog | Insights on Web Development and Design",
        description:
            'Explore my latest articles where I share insights, tips, and trends in web development and design. Stay ahead with practical advice and stories from my personal experiences in the industry.',
    };
}

export default async function Page() {
    const blog_query = qs.stringify(
        {
            select: 'slug description title tags image createdAt updatedAt',
            pageIndex: 0,
            pageSize: 1,
            sort: {
                createdAt: -1,
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    const blog_res = await fetch(url + '/api/api-blogs?' + blog_query, {
        // cache: 'no-store',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
        },
        next: { revalidate: 3600 }, // revaildate every 60 minutes
    });
    const { data: blogs } = await blog_res.json();

    const tag_query = qs.stringify(
        {
            select: 'name slug',
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    const tag_res = await fetch(url + '/api/api-tags?' + tag_query, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
        },
        next: { revalidate: 3600 }, // revaildate every 60 minutes
    });
    const { data: tags } = await tag_res.json();
    return <LatestBlogs latestBlogs={blogs} tags={tags} extra={'pagination'} />;
}
