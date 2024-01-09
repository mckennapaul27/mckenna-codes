'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './NavbarTouch.module.scss';
import Image from 'next/image';
import { Turn as Hamburger } from 'hamburger-react';
import { Button } from '../elements/Button';
import {
    EnvelopeOpenIcon,
    PhoneArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import { animated, useTransition } from 'react-spring';
import { ContactDeets } from '../common/ContactDeets';

export const mobile_navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        hasDropdown: false,
        items: [],
    },
    {
        id: 2,
        title: 'Work',
        path: '/work',
        hasDropdown: false,
        items: [],
    },
    {
        id: 3,
        title: 'About',
        path: '/about',
        hasDropdown: false,
        items: [],
    },
];
const services = [
    {
        id: 41,
        title: 'Websites',
        subtitle: 'Conversion-Driven Web Design',
        path: '/web-development',
        hasIcon: false,
    },
    {
        id: 44,
        title: 'Paid Ads',
        subtitle: 'Optimal Ad Campaigns',
        path: '/paid-advertising',
        hasIcon: false,
    },
    {
        id: 45,
        title: 'SEO',
        subtitle: 'Enhanced Online Visibility',
        path: '/seo',
        hasIcon: false,
    },
    {
        id: 46,
        title: 'Local Business Experts',
        subtitle: 'Local Presence Amplification',
        path: '/local-business-strategy',
        hasIcon: false,
    },
    {
        id: 47,
        title: 'Custom Software',
        subtitle: 'Tailored Tech Solutions',
        path: '/custom-software',
        hasIcon: false,
    },
    {
        id: 48,
        title: 'AI Development',
        subtitle: 'Launch your AI project',
        path: '/ai-developer',
        hasIcon: false,
    },
    {
        id: 49,
        title: 'Working partnerships',
        subtitle: 'Management & Consultancy',
        path: '/consultancy',
        hasIcon: false,
    },
];
export const NavbarTouch = () => {
    const [isOpen, setOpen] = useState(false);

    const transitions = useTransition(isOpen, {
        from: { transform: 'translate3d(-100%,0,0)' },
        enter: { transform: 'translate3d(0%,0,0)' },
        leave: { transform: 'translate3d(-100%,0,0)' },
    });

    return (
        <nav className={styles['navbar']}>
            <div className={styles['top-section']}>
                <div className={styles['logo-wrapper']}>
                    <Link
                        href="/"
                        // className={styles['navbar-item']}
                    >
                        <Image
                            // src="/bunker-digital-logo-lg.svg"
                            src="/logos/bunker-digital-logo-new.svg"
                            alt="bunker digital logo"
                            width={95 / 1.2}
                            height={51 / 1.2}
                            priority
                            className={styles['navbar-logo']}
                        />
                    </Link>
                </div>
                <div className={styles['hamburger-wrapper']}>
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        color={isOpen ? '#000' : '#fff'}
                    />
                </div>
            </div>
            {transitions((style, item) =>
                item ? (
                    <animated.div style={style} className={styles['menu']}>
                        {mobile_navbar.map((item) => {
                            return (
                                <div
                                    className={styles['navbar-item']}
                                    key={item.id}
                                >
                                    <Link
                                        href={item.path}
                                        className={styles['navbar-link']}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            );
                        })}
                        <div className={styles['button-wrapper']}>
                            <Button
                                text={'Discuss project'}
                                href="/discuss-project"
                                display="block"
                                plain={true}
                                // size="small"
                                click_event={() => setOpen(false)}
                                has_click_event={true}
                            />
                        </div>
                        <div className={styles['contact-deets-wrapper']}>
                            <ContactDeets isDark={true} isColumn={true} />
                        </div>
                        <div className="services">
                            {services.map((item) => {
                                return (
                                    <div
                                        className={styles['service']}
                                        key={item.id}
                                    >
                                        <Link
                                            href={item.path}
                                            className={styles['service-link']}
                                            onClick={() => setOpen(false)}
                                        >
                                            <div
                                                className={
                                                    styles['service-title']
                                                }
                                            >
                                                {item.title}
                                            </div>
                                            <div
                                                className={
                                                    styles['service-subtitle']
                                                }
                                            >
                                                {item.subtitle}
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </animated.div>
                ) : null
            )}
        </nav>
    );
};
