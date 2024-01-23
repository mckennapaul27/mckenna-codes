import styles from './ContactPage.module.scss';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';

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
                            <a
                                className={'icon'}
                                href="https://github.com/mckennapaul27"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubIcon />
                            </a>{' '}
                            <a
                                className={'icon'}
                                href="https://twitter.com/paulmckenna181"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TwitterIcon />
                            </a>
                            <a className={'icon'}>
                                <LinkedinIcon />
                            </a>
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
