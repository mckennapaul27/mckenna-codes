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
        src: 'portfolio-ewb-160.png',
    },
    {
        name: 'ewalletbooster.com',
        type: 'SAAS/Affiliate website',
        url: 'https://www.ewalletbooster.com',
        src: 'portfolio-ewb-160.png',
    },
    {
        name: 'volumekings.com',
        type: 'SAAS/Affiliate website',
        url: 'https://www.volumekings.com',
        src: 'portfolio-ewb-160.png',
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Etiam sit amet nisl purus in mollis nunc sed id
                            semper risus. In fermentum et sollicitudin ac orci
                            phasellus egestas tellus. Orci a scelerisque purus
                            semper eget duis. Amet nisl purus in mollis nunc sed
                            id semper risus. In fermentum et sollicitudin ac
                            orci phasellus egestas tellus.
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
