import styles from './HeroAlt.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { classNames } from '../utils/form-helpers';
import { montserrat } from '../utils/fonts';
import { Title } from '../components/common/Title';

const details = [
    {
        name: 'full name',
        value: 'Paul McKenna',
    },
    {
        name: 'date of birth',
        value: '27th November',
    },
    {
        name: 'location',
        value: 'Manchester, UK',
    },
    {
        name: 'phone',
        value: '+44 7895 008 966',
    },
    {
        name: 'email',
        value: 'paul@mckenna.codes',
    },
    {
        name: 'website',
        value: 'mckenna.codes',
    },
];

export const HeroAlt = () => {
    return (
        <main className={styles.main}>
            <div className="container">
                <div className={styles['sections']}>
                    <div className={styles['img-section-wrapper']}>
                        <Image
                            src={'/paul-mckenna-web-develop-profile-pic.png'}
                            width={450}
                            height={450}
                            alt={'Paul McKenna Web Developer Profile Pic'}
                            priority
                        />
                    </div>
                    <div className={styles['text-section']}>
                        <Title title={'Profile'} subtitle={'About Me'} />
                        <p className={styles['intro-text']}>
                            I&apos;m Paul. I am a self-employed developer and
                            solopreneur based in Manchester, UK. I am passionate
                            about creating user-friendly and visually appealing
                            websites. I&apos;m also passionate about assisting
                            small and local businesses (with smaller budgets) to
                            thrive online. I enjoy incorporating UI/UX, SEO
                            optimisation and paid search elements into my work.
                            In addition to my work, I am also a proud father of
                            two beautiful daughters.
                        </p>
                        <div className={styles['img-section-wrapper-800px']}>
                            <Image
                                src={
                                    '/paul-mckenna-web-develop-profile-pic-square.png'
                                }
                                width={450}
                                height={450}
                                alt={'Paul McKenna Web Developer Profile Pic'}
                                priority
                            />
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
                </div>
                <div className={styles['about-details-blocks']}>
                    {details.map((detail, i) => (
                        <div
                            className={styles['about-details-block-wrapper']}
                            key={`about-details-block-${i}`}
                        >
                            <div className={styles['about-details-block']}>
                                <div
                                    className={classNames(
                                        styles['about-details-block-name'],
                                        montserrat.className
                                    )}
                                >
                                    {detail.name}
                                </div>
                                <div
                                    className={classNames(
                                        montserrat.className,
                                        styles['about-details-block-value']
                                    )}
                                >
                                    {detail.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};
