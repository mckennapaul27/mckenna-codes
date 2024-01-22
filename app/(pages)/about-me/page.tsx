import { ContentBlock } from '@/app/page-sections/ContentBlock';
import { HeroAlt } from '@/app/page-sections/HeroAlt';
import { SimpleCTA } from '@/app/page-sections/SimpleCTA';
import { Skills } from '@/app/page-sections/Skills';
import { SkillsBlock } from '@/app/page-sections/SkillsBlock';
import { type Metadata } from 'next';
import qs from 'qs';
import { url } from '@/config';

export default async function Page() {
    const slug = 'about-me';
    const query = qs.stringify(
        {
            filters: {
                slug: slug,
            },
            select: 'slug body image updatedAt createdAt',
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    try {
        const { data } = await fetch(url + '/api/api-pages?' + query, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
            },
            // cache: 'no-store',
            next: { revalidate: 3600 }, // revaildate every 60 minutes
        }).then((res) => res.json());

        // console.log('data: ', data);

        // const blog = {
        //     title: data.data[0].title,
        //     updatedAt: data.data[0].updatedAt,
        //     createdAt: data.data[0].createdAt,
        //     slug: data.data[0].slug,
        //     tags: data.data[0].tags,
        //     image: data.data[0].image,
        //     body: data.data[0].body,
        // };
        return (
            <>
                <HeroAlt />
                <Skills />
                <SkillsBlock />
                <ContentBlock body={data[0].body} />
                <SimpleCTA />
            </>
        );
    } catch (error) {
        console.log('error: ', error);
    }
}
