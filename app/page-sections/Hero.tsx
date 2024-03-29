import Link from 'next/link';
import styles from './Hero.module.scss';
import Image from 'next/image';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { TitleTypist } from '../components/common/TitleTypist';
import { Title } from '../components/common/Title';
import { FaArrowRight } from 'react-icons/fa';

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
                        {/* <Title
                            title={'Paul McKenna'}
                            subtitle={'Software Engineer'}
                        /> */}
                        <div className="primary-line"></div>
                        <p className={styles['intro-text']}>
                            Hello and welcome to my personal website. You can
                            find out more <Link href={'/about'}>about me</Link>,
                            my work and my technical{' '}
                            <Link href={'/about#skills'}>skills</Link> on this
                            site. On my <Link href={'/blog'}>blog</Link> I write
                            about a range of topics related to coding, software
                            development and my personal projects.
                        </p>
                        <div className={styles['profile-pic-800px-wrapper']}>
                            <Image
                                src={
                                    '/paul-mckenna-web-develop-profile-pic-square.png'
                                }
                                // width={350}
                                // height={350}
                                fill
                                alt={'Paul McKenna Web Developer Profile Pic'}
                                priority
                                className={styles['profile-pic-800px']}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                        <div className={styles['find-me-para']}>
                            <span className={styles['text']}>Find me on</span>{' '}
                            <span className={styles['icon-arrow']}>
                                <FaArrowRight />
                            </span>
                            <p className={'social-icons'}>
                                <a
                                    className={'icon'}
                                    href="https://github.com/mckennapaul27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GithubIcon />
                                </a>
                                <a
                                    className={'icon'}
                                    href="https://twitter.com/paulmckenna181"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <TwitterIcon />
                                </a>
                                <a
                                    className={'icon'}
                                    href="https://www.linkedin.com/in/mckennapaul27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedinIcon />
                                </a>
                            </p>
                        </div>
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
            </div>
        </main>
    );
};
