import styles from './ContactPage.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { classNames } from '../utils/form-helpers';
import { montserrat } from '../utils/fonts';
import { Title } from '../components/common/Title';
import { ContactForm } from '../components/common/ContactForm';

export const ContactPage = () => {
    return (
        <main className={styles.main}>
            <div className="container">
                <div className={styles['sections']}>
                    <div className={styles['text-section']}>
                        <Title title={"Let's talk"} subtitle={'Contact Me'} />
                        <div className={styles['intro-text']}>
                            <p>
                                I&apos;m always interested in any opportunity
                                whether that&apos;s freelance work, consulting
                                work or employment opportunities. If you have a
                                project that you want to get started, think you
                                need my help with something or just fancy
                                connecting, then please get in touch.
                            </p>
                        </div>
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
                    <div className={styles['form-wrapper']}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
};
