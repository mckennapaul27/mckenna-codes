import classNames from 'classnames';
import styles from './ClientPortfolio.module.scss';
import { montserrat } from '../utils/fonts';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
    {
        name: 'greenscapes-treeservices.co.uk',
        type: 'Business website',
        url: 'https://www.greenscapes-treeservices.co.uk',
        src: 'green-ts-test.png',
    },
    {
        name: 'ewalletbooster.com',
        type: 'SAAS/Affiliate website',
        url: 'https://www.ewalletbooster.com',
        src: 'vk-group-540-270.png',
    },
    {
        name: 'volumekings.com',
        type: 'SAAS/Affiliate website',
        url: 'https://www.volumekings.com',
        src: 'vk-540-270.png',
    },
    {
        name: 'ewalletbooster.com',
        type: 'SAAS/Affiliate website',
        url: 'https://www.ewalletbooster.com',
        src: 'green-ts-test.png',
    },
];

export const ClientPortfolio = () => {
    return (
        <section className={styles['main']}>
            <div className="container">
                <div className={styles['sections']}>
                    <div className={styles['content-section']}>
                        <h2 className={classNames(montserrat.className)}>
                            A selection of client projects
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <div className={styles['projects']}>
                        {projects.map((project, index) => {
                            return (
                                <div
                                    className={styles['project-wrapper']}
                                    key={`portfolio-${index}`}
                                >
                                    <div className={styles['project']}>
                                        <div className={styles['text-section']}>
                                            <p
                                                className={
                                                    styles['project-type']
                                                }
                                            >
                                                {project.type}
                                            </p>
                                            <p
                                                className={
                                                    styles['project-name']
                                                }
                                            >
                                                {project.name}
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
                                        <div className={styles['img-holder']}>
                                            <div
                                                className={
                                                    styles['img-wrapper']
                                                }
                                            >
                                                <Image
                                                    src={`/${project.src}`}
                                                    alt={project.name}
                                                    fill
                                                    className={styles['img']}
                                                    style={{
                                                        objectFit: 'cover',
                                                        objectPosition:
                                                            'center',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        {/* <Image
                                            src={`/${project.src}`}
                                            alt={project.name}
                                            width={540}
                                            height={270}
                                            className={styles['img']}
                                           
                                        /> */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
