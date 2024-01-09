//'use client';

import styles from './Services.module.scss';
import { iconLookUp } from '@/app/utils/icon-lookup';
import { Button } from '../elements/Button';
import { AnimatedText } from '../animations/AnimatedText';

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
            'Management of customer reviews, local rankings tracking, optimisation of your Google Business Profile and listings management on reputable platforms',
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
            'Broad-spectrum custom software solutions built to streamline your business processes and improve operational efficiency. Your vision, our expertise.',
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
    return (
        <div className={styles['service-wrapper']}>
            <AnimatedText>
                <div className={styles['service']}>
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
                        <p className={styles['service-title']}>
                            {service.title}
                        </p>
                        <p className={styles['service-description']}>
                            {service.description}
                        </p>
                    </div>
                    <div className={styles['service-link']}>
                        <Button
                            text={`${service.title} - learn more`}
                            href={service.href}
                            plain={true}
                            size="small"
                            display="is-inline"
                        />
                    </div>
                </div>
            </AnimatedText>
        </div>
    );
};
