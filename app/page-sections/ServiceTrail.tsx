'use client';

import styles from './Services.module.scss';
import { iconLookUp } from '@/app/utils/icon-lookup';
// import { Button } from '../elements/Button';
import { a, useTrail } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const services = [
    {
        title: 'Web Development',
        description:
            'Bespoke web design and development using modern technology, purposely built to drive conversions – be it calls, contacts, leads, or sales.',
        href: '/web-development',
        icon_code: 'code-bracket',
    },
    {
        title: 'Paid Advertising',
        description:
            'Paid advertising services including keyword research, and optimal setup of Google Ads and Bing Ads – from campaigns and ad groups to ad copy creation and keyword optimisation.',
        href: '/paid-advertising',
        icon_code: 'rocket-launch',
    },
    {
        title: 'Local Business Strategy',
        description:
            'Bolster your online presence locally, manage customer reviews, track local rankings, optimising your Google Business Profile and get your business listed on reputable platforms',
        href: '/local-business-strategy',
        icon_code: 'map-pin',
    },
    {
        title: 'SEO',
        description:
            'Comprehensive on-page SEO services including thorough audits, integration with Google tools, meta tag optimisation, and website speed enhancement making it easier for potential customers to find you.',
        href: '/seo',
        icon_code: 'arrow-trending-up',
    },
    {
        title: 'Custom Software Development',
        description:
            'Custom software solutions that runs in the browser, tailored to streamline your business processes and improve operational efficiency.',
        href: '/custom-software',
        icon_code: 'command-line',
    },
    {
        title: 'AI development',
        description:
            'AI development services including machine learning, natural language processing, and computer vision to help you leverage the power of AI for your business.',
        href: '/ai-developer',
        icon_code: 'bolt',
    },
];

export const ServiceTrail = () => {
    return (
        <div className={styles['services-section']}>
            {services.map((service, i) => (
                <Service service={service} i={i} key={`service-${i}`} />
            ))}
        </div>
    );
};

const Service = ({
    service,
    i,
}: {
    service: {
        title: string;
        description: string;
        href: string;
        icon_code: string;
    };
    i: number;
}) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });
    const trail = useTrail(services.length, {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0, 40px,0)',
        config: { mass: 5, tension: 2000, friction: 200 },
        from: { opacity: 0, transform: 'translate3d( 0,40px,0)' },
    });
    return (
        <a.div className={styles['service-wrapper']} style={trail[i]}>
            <div className={styles['service']} ref={ref}>
                <div>
                    <span className={styles['service-icon']}>
                        {iconLookUp(
                            service.icon_code,
                            '32px',
                            '32px',
                            'block',
                            '#ffffff'
                        )}
                    </span>
                    <span className={styles['service-icon-touch']}>
                        {iconLookUp(
                            service.icon_code,
                            '16px',
                            '16px',
                            'block',
                            '#ffffff'
                        )}
                    </span>
                    <p className={styles['service-title']}>{service.title}</p>
                    <p className={styles['service-description']}>
                        {service.description}
                    </p>
                </div>
                <div className={styles['service-link']}>
                    {/* <Button
                        text="Learn More"
                        href={service.href}
                        plain={true}
                        size="small"
                        display="is-inline"
                    /> */}
                </div>
            </div>
        </a.div>
    );
};
