'use client';

import { montserrat } from '@/app/utils/fonts';
import styles from './NavbarDesktop.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

export const NavbarDesktop = () => {
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles['navbar-container']}>
                    <p
                        className={classNames(
                            styles['logo'],
                            montserrat.className
                        )}
                    >
                        paul <span>mckenna</span>
                    </p>
                    <ul className={styles['navbar-menu']}>
                        <li className={styles['navbar-item']}>
                            <Link href="/" className={styles['navbar-link']}>
                                Home
                            </Link>
                        </li>
                        <li className={styles['navbar-item']}>
                            <Link
                                href="/about"
                                className={styles['navbar-link']}
                            >
                                About Me
                            </Link>
                        </li>
                        <li className={styles['navbar-item']}>
                            <Link
                                href="/blog"
                                className={styles['navbar-link']}
                            >
                                Blog{' '}
                            </Link>
                        </li>
                        <li className={styles['navbar-item']}>
                            <Link
                                href="/contact"
                                className={styles['navbar-link']}
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
