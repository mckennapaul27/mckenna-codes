import Link from 'next/link';
import styles from './Footer.module.scss';
import { HomeIcon } from 'lucide-react';
export const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className="container">
                <div className={styles['footer-items']}>
                    <div className={styles['footer-item']}>
                        <Link
                            href={'/contact-me'}
                            className={styles['footer-link']}
                        >
                            <HomeIcon />
                        </Link>
                    </div>
                    <div className={styles['footer-item']}>
                        <Link
                            href={'/about-me'}
                            className={styles['footer-link']}
                        >
                            {' '}
                            About me
                        </Link>
                    </div>
                    <div className={styles['footer-item']}>
                        <Link
                            href={'/contact-me'}
                            className={styles['footer-link']}
                        >
                            {' '}
                            Contact me
                        </Link>
                    </div>
                    <div className={styles['footer-item']}>
                        <Link href={'/blog'} className={styles['footer-link']}>
                            {' '}
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
