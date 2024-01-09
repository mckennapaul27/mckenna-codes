//'use client';
//import { a, useTrail } from 'react-spring';
// import { useInView } from 'react-intersection-observer';
import styles from './Hero.module.scss';
import Link from 'next/link';
import { AnimatedText } from '../animations/AnimatedText';

const services = [
    { a: 'Web Design', link: '/web-development' },
    { a: 'Paid Ads', link: '/paid-advertising' },
    { a: 'Google Ads', link: '/paid-advertising' },
    { a: 'SEO', link: '/seo' },
    { a: 'Local SEO & Listings', link: '/local-business-strategy' },
    { a: 'Custom Software', link: '/custom-software' },
    { a: 'AI', link: '/ai-developer' },
    { a: '+ More', link: '#services' },
];

export const HeroServices = () => {
    // const { ref, inView, entry } = useInView({
    //     /* Optional options */
    //     threshold: 0.25,
    // });
    // const trail = useTrail(services.length, {
    //     opacity: inView ? 1 : 0,
    //     transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0, 40px,0)',
    //     config: { mass: 5, tension: 2000, friction: 200 },
    //     from: { opacity: 0, transform: 'translate3d( 0,40px,0)' },
    // });
    return (
        <div
            className={styles.services}
            // ref={ref}
        >
            {services.map((service, i) => (
                // <a.span
                //     style={trail[i]}
                //     className={styles['service-wrapper']}
                //     key={`hero_service-${i}`}
                // >
                //     <Link
                //         href={
                //             service.link.startsWith('#')
                //                 ? `/#services`
                //                 : service.link
                //         }
                //         className={styles['service']}
                //         key={`hero_service-${i}`}
                //     >
                //         {service.a}
                //     </Link>
                // </a.span>
                // <AnimatedText key={`hero_service-${i}`}>
                <span
                    // style={trail[i]}
                    key={`hero_service-${i}`}
                    className={styles['service-wrapper']}
                >
                    <Link
                        href={
                            service.link.startsWith('#')
                                ? `/#services`
                                : service.link
                        }
                        className={styles['service']}
                        key={`hero_service-${i}`}
                    >
                        {service.a}
                    </Link>
                </span>
                // </AnimatedText>
            ))}
        </div>
    );
};
