import Image from 'next/image';
import styles from './page.module.scss';
import { Hero } from './page-sections/Hero';
import { Projects } from './page-sections/Projects';
import { Portfolio } from './page-sections/Portfolio';
import { Testimonials } from './page-sections/Testimonials';
import { SimpleCTA } from './page-sections/SimpleCTA';

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Portfolio />
            <Testimonials />
            <SimpleCTA />
        </>
    );
}
