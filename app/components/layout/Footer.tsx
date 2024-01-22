import Link from 'next/link';
import styles from './Footer.module.scss';
import { HomeIcon } from 'lucide-react';
import classNames from 'classnames';
import { montserrat } from '@/app/utils/fonts';
export const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className="container">
                <div className={styles['footer-items']}>
                    <div className={styles['footer-item']}>
                        <Link
                            href={'/contact'}
                            className={classNames(
                                styles['footer-link'],
                                montserrat.className
                            )}
                        >
                            <HomeIcon />
                        </Link>
                    </div>
                    <div className={styles['footer-item']}>
                        <Link
                            href={'/about'}
                            className={classNames(
                                styles['footer-link'],
                                montserrat.className
                            )}
                        >
                            {' '}
                            About me
                        </Link>
                    </div>
                    <div className={styles['footer-item']}>
                        <Link
                            href={'/contact'}
                            className={classNames(
                                styles['footer-link'],
                                montserrat.className
                            )}
                        >
                            {' '}
                            Contact me
                        </Link>
                    </div>
                    <div className={styles['footer-item']}>
                        <Link
                            href={'/blog'}
                            className={classNames(
                                styles['footer-link'],
                                montserrat.className
                            )}
                        >
                            {' '}
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
