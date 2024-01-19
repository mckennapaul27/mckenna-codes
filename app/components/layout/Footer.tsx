import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className="container">
                {' '}
                <div>
                    <Link href={'/contact-me'}> Contact me</Link>
                </div>
            </div>
        </footer>
    );
};
