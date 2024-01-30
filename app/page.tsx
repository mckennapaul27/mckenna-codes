import { Hero } from './page-sections/Hero';
import { Projects } from './page-sections/Projects';
import { ClientPortfolio } from './page-sections/ClientPortfolio';
import { Testimonials } from './page-sections/Testimonials';
import { SimpleCTA } from './page-sections/SimpleCTA';
import { LatestBlogs } from './page-sections/LatestBlogs';
import { CounterBlock } from './page-sections/CounterBlock';
import qs from 'qs';
import { url } from '@/config';
import { Metadata } from 'next';
import { ProjectsNew } from './page-sections/ProjectsNew';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Freelance Developer & Solopreneur | Paul McKenna',
        description:
            'Paul McKenna, a Manchester-based developer passionate about creating high-performance, SEO-optimised websites and software.',
    };
}
//
export default async function Home() {
    const blog_query = qs.stringify(
        {
            select: 'slug description title tags image updatedAt createdAt',
            filters: {
                status: 'published',
            },
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
        next: { revalidate: 3600 }, // refresh every 60 minutes
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
        // cache: 'no-store',
        next: { revalidate: 3600 }, // refresh every 60 minutes
        headers: {
            'Content-Type': 'application/json',
            authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
        },
    });
    const { data: tags } = await tag_res.json();
    const project_query = qs.stringify(
        {
            select: 'title slug description url cover_image body skills technologies updatedAt createdAt primary_color secondary_color accent_color primary_font secondary_font accent_font project_type',
            sort: {
                createdAt: -1,
            },
            filters: {
                status: 'published',
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    const project_res = await fetch(
        url + '/api/api-projects?' + project_query,
        {
            method: 'GET',
            // cache: 'no-store',
            next: { revalidate: 3600 }, // refresh every 60 minutes
            headers: {
                'Content-Type': 'application/json',
                authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
            },
        }
    );
    const { data: projects } = await project_res.json();
    // console.log('projects: ', projects);
    return (
        <>
            <Hero />
            <CounterBlock />
            {/* <Projects /> */}
            <ProjectsNew projects={projects} />
            <ClientPortfolio />
            <Testimonials />
            <SimpleCTA />
            <LatestBlogs
                latestBlogs={blogs}
                extra={'button'}
                tags={tags}
                theme="light"
            />
        </>
    );
}
