import Link from 'next/link';
import styles from './Hero.module.scss';
import classNames from 'classnames';
import { montserrat } from '../utils/fonts';
import Image from 'next/image';
import {
    GithubIcon,
    XIcon,
    XSquareIcon,
    TwitterIcon,
    LinkedinIcon,
} from 'lucide-react';
import {} from '@heroicons/react/24/outline';
import { FaArrowRight, FaGithub, FaTwitter } from 'react-icons/fa';
import { Title } from '../components/common/Title';
import { TitleTypist } from '../components/common/TitleTypist';

export const Hero = () => {
    return (
        <main className={styles.main}>
            <div className="container">
                <div className={styles['sections']}>
                    <div className={styles['text-section']}>
                        <TitleTypist
                            title={'Paul McKenna'}
                            subtitle={'Software Engineer'}
                        />
                        <div className="primary-line"></div>
                        <p className={styles['intro-text']}>
                            Hello and welcome to my personal website. You can
                            find out more <Link href={'/about'}>about me</Link>,
                            my work and my skills here. On my blog I write about
                            a range of topics related to software development
                            and my personal projects.
                        </p>
                    </div>
                    <div className={styles['img-section-wrapper']}>
                        <Image
                            src={'/paul-mckenna-web-develop-profile-pic.png'}
                            width={450}
                            height={450}
                            alt={'Paul McKenna Web Developer Profile Pic'}
                            priority
                        />
                    </div>
                </div>
                <div className={styles['banner']}>
                    <div className={styles['inside-block']}>
                        <div>
                            <p className={styles['find-me-para']}>
                                <span className={styles['text']}>
                                    Find me on
                                </span>{' '}
                                <span className={styles['icon-arrow']}>
                                    <FaArrowRight />
                                </span>
                                <span className={styles['icon']}>
                                    <GithubIcon />
                                </span>{' '}
                                <span className={styles['icon']}>
                                    <TwitterIcon />
                                </span>
                                <span className={styles['icon']}>
                                    <LinkedinIcon />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['absolute-bg']}></div>
        </main>
    );
};
