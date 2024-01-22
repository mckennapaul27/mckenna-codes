import styles from './Projects.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { portfolio } from '@/app/data/portfolio';
import { fontImgLookup, montserrat } from '@/app/utils/fonts';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// https://codesandbox.io/s/to6uf for animated card
// https://codesandbox.io/s/cju2d?file=/src/App.tsx
// https://codesandbox.io/s/8s3kf - carousel
// https://codesandbox.io/s/1t9hh image fade

const projects = [
    {
        name: 'Fraffles.co.uk',
        type: 'Cashback/prize platform',
        url: 'https://www.fraffles.co.uk',
        src: 'fraffles-200-100.png',
    },
    {
        name: 'volumekings.com',
        type: 'SAAS/Affiliate website',
        url: 'https://www.volumekings.com',
        src: 'volumekings-200-100.png',
    },
    {
        name: 'ewalletbooster.com',
        type: 'SAAS/Affiliate website',
        url: 'https://www.ewalletbooster.com',
        src: 'ewalletbooster-200-100.png',
    },
];
export const Projects = () => {
    return (
        <section className={styles['main']}>
            <div className="container">
                <div className={styles['sections']}>
                    <div className={styles['content-section']}>
                        <h2 className={classNames(montserrat.className)}>
                            Personal projects
                        </h2>
                        <p>
                            I&apos;ve developed numerous projects over the
                            years, some of which are shown here.
                        </p>
                        <p>
                            My main source of income over the last decade has
                            come from ewalletbooster.com which I originally
                            created from an earlier project couponarbitrage.com.
                            At it&apos;s peak, ewalletbooster.com was generating
                            over $3m monthly affiliate sales volume for the
                            affiliate networks I was working with.
                        </p>
                        <p>
                            I have also developed a number of other projects
                            including volumekings.com and fraffles.co.uk.
                        </p>
                        <p>
                            And of course there are many projects that I have
                            created over the years that have not worked out, the
                            biggest being cashbackmad.co.uk which was hacked in
                            2015! I lost the entire site and database and it was
                            was the moment I decided I needed to learn to code
                            and understand how to build secure and performant
                            websites!
                        </p>
                    </div>
                    <div className={styles['projects-section-wrapper']}>
                        <div className={styles['projects-section']}>
                            {projects.map((project, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={styles['project-card']}
                                    >
                                        <div className={styles['img-wrapper']}>
                                            <Image
                                                src={`/${project.src}`}
                                                // width={180}
                                                // height={90}
                                                alt={project.name}
                                                fill
                                                style={{
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </div>
                                        <div className={styles['text-wrapper']}>
                                            <p
                                                className={classNames(
                                                    styles['title'],
                                                    montserrat.className
                                                )}
                                            >
                                                {project.name}
                                            </p>
                                            <p
                                                className={
                                                    styles['project-type']
                                                }
                                            >
                                                {project.type}
                                            </p>
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ArrowTopRightOnSquareIcon
                                                    className={styles['icon']}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
