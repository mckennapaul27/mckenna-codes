import classNames from 'classnames';
import styles from './SimpleCTA.module.scss';
import { montserrat } from '../utils/fonts';
import Link from 'next/link';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { FaArrowRight } from 'react-icons/fa';

export const SimpleCTA = () => {
    return (
        <section className={styles['main']}>
            <div className="container">
                <div className={styles['sections']}>
                    <div className={styles['content-section']}>
                        <h2 className={classNames(montserrat.className)}>
                            Have a project or idea? Get in touch.
                        </h2>
                        <p>
                            I&apos;m always interested in any opportunity
                            whether that&apos;s freelance work, consulting work
                            or employment opportunities. If you have a project
                            that you want to get started, think you need my help
                            with something or just fancy connecting, then please
                            get in touch.
                        </p>
                        <Link
                            className={classNames(
                                'button primary',
                                montserrat.className
                            )}
                            href={`/contact`}
                        >
                            contact me
                        </Link>
                    </div>
                    <div>
                        <div className={styles['find-me-para']}>
                            <span className={styles['text']}>Find me on</span>{' '}
                            <span className={styles['icon-arrow']}>
                                <FaArrowRight />
                            </span>
                            <p className={'social-icons alt'}>
                                <span className={'icon'}>
                                    <GithubIcon />
                                </span>{' '}
                                <span className={'icon'}>
                                    <TwitterIcon />
                                </span>
                                <span className={'icon'}>
                                    <LinkedinIcon />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
