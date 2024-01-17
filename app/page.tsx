import styles from './page.module.scss';
import { Hero } from './page-sections/Hero';
import { Projects } from './page-sections/Projects';
import { ClientPortfolio } from './page-sections/ClientPortfolio';
import { Testimonials } from './page-sections/Testimonials';
import { SimpleCTA } from './page-sections/SimpleCTA';
import { LatestBlogs } from './page-sections/LatestBlogs';
import { CounterBlock } from './page-sections/CounterBlock';
import qs from 'qs';
import { url } from '@/config';

export default async function Home() {
    const blog_query = qs.stringify(
        {
            select: 'slug description title tags image updatedAt',
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
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
        },
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
    });
    const { data: tags } = await tag_res.json();
    return (
        <>
            <Hero />
            <CounterBlock />
            <Projects />
            <ClientPortfolio />
            <Testimonials />
            <SimpleCTA />
            <LatestBlogs latestBlogs={blogs} extra={'button'} tags={tags} />
        </>
    );
}
