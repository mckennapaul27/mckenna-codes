import styles from './page.module.scss';
import { Hero } from './page-sections/Hero';
import { Projects } from './page-sections/Projects';
import { ClientPortfolio } from './page-sections/ClientPortfolio';
import { Testimonials } from './page-sections/Testimonials';
import { SimpleCTA } from './page-sections/SimpleCTA';
import { LatestBlogs } from './page-sections/LatestBlogs';
import { CounterBlock } from './page-sections/CounterBlock';

const latestBlogs = [
    {
        title: 'Build Dynamic Forms with React Hook Form',
        description:
            'It is easier to entrust the work to the experts because they are able to provide the best results with reliable quality',
        date: 'January 8th 2024',
        slug: 'build-dynamic-forms-with-react-hook-form',
        tags: ['react', 'javascript', 'forms', 'nextjs'],
        src: 'blog-card-placeholder-768-384.png',
    },
    {
        title: 'Build Dynamic Forms with React Hook Form',
        description:
            'It is easier to entrust the work to the experts because they are able to provide the best results with reliable quality',
        date: 'January 8th 2024',
        slug: 'build-dynamic-forms-with-react-hook-form',
        tags: ['react', 'javascript', 'forms', 'nextjs'],
        src: 'blog-card-placeholder-768-384.png',
    },
];

export default function Home() {
    return (
        <>
            <Hero />
            <CounterBlock />
            <Projects />
            <ClientPortfolio />
            <Testimonials />
            <SimpleCTA />
            <LatestBlogs latestBlogs={latestBlogs} />
        </>
    );
}
