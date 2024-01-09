import Link from 'next/link';
import styles from './Hero.module.scss';
import Image from 'next/image';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { TitleTypist } from '../components/common/TitleTypist';
import { classNames } from '../utils/form-helpers';
import { montserrat } from '../utils/fonts';

const bannerItems = [
    { title: '5+', description: 'Personal Projects' },
    { title: '10+', description: 'Client Projects' },
    { title: '7+', description: 'Years Experience' },
    { title: '957', description: 'Github Contributions Last Year' },
];

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
                        <p className={'social-icons'}>
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
                        <div className={styles['banner-items']}>
                            {bannerItems.map((item, i) => (
                                <div
                                    className={styles['banner-item']}
                                    key={`banner-item-${i}`}
                                >
                                    <div
                                        className={classNames(
                                            styles['banner-item-title'],
                                            montserrat.className
                                        )}
                                    >
                                        {item.title}
                                    </div>
                                    <div
                                        className={
                                            styles['banner-item-description']
                                        }
                                    >
                                        {item.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['absolute-bg']}></div>
        </main>
    );
};
