// app/sitemap.js

import { url } from '@/config';
import qs from 'qs';

const URL = 'https://www.mckenna.codes';

export default async function sitemap() {
    const { data: blogs } = await fetch(
        url +
            '/api/api-blogs?' +
            qs.stringify(
                {
                    select: 'slug updatedAt',
                },
                {
                    encodeValuesOnly: true, // prettify URL
                }
            ),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
            },
            next: { revalidate: 3600 }, // revaildate every 60 minutes
        }
    ).then((res) => res.json());
    const { data: tags } = await fetch(
        url +
            '/api/api-tags?' +
            qs.stringify(
                {
                    select: 'slug updatedAt',
                },
                {
                    encodeValuesOnly: true, // prettify URL
                }
            ),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
            },
            next: { revalidate: 3600 }, // revaildate every 60 minutes
        }
    ).then((res) => res.json());

    // console.log('blogs', blogs);
    const posts = blogs.map(
        ({ slug, updatedAt }: { slug: string; updatedAt: string }) => ({
            url: `${URL}/blog/${slug}`,
            lastModified: new Date(updatedAt).toISOString(),
        })
    );

    console.log('posts', posts);
    const tagsPosts = tags.map(
        ({ slug, updatedAt }: { slug: string; updatedAt: string }) => ({
            url: `${URL}/blog/tag/${slug}`,
            lastModified: new Date(updatedAt).toISOString(),
        })
    );

    const lastModified = new Date('2023-11-15T17:40:58.454Z').toISOString();

    const routes = ['', '/about', '/contact', '/blog'].map((route) => ({
        url: `${URL}${route}`,
        lastModified,
    }));

    return [...routes, ...posts, ...tagsPosts];
}
