import classNames from 'classnames';
import styles from './ClientPortfolio.module.scss';
import { montserrat } from '../utils/fonts';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
    {
        name: 'greenscapes-treeservices.co.uk',
        type: 'Local Business',
        url: 'https://www.greenscapes-treeservices.co.uk',
        src: 'cover-greenscapes-tree-services.png',
    },

    {
        name: 'nurseryrhymesnursery.co.uk',
        type: 'Local Business',
        url: 'https://www.nurseryrhymesnursery.co.uk/',
        src: 'cover-greenscapes-nursery-rhymes.png',
    },
    {
        name: 'ka-therapy.co.uk',
        type: 'Local Business',
        url: 'https://www.ka-therapy.co.uk',
        src: 'cover-katherapy.png',
    },
    {
        name: 'greenscapes-gardening.co.uk',
        type: 'Local Business',
        url: 'https://www.greenscapes-treeservices.co.uk',
        src: 'cover-greenscapes-gardening.png',
    },
];

export const ClientPortfolio = () => {
    return (
        <section className={styles['main']} id="client-portfolio-summary">
            <div className="container">
                <div className={styles['sections']}>
                    <div className={styles['content-section']}>
                        <h2 className={classNames(montserrat.className)}>
                            A selection of client projects
                        </h2>
                        <p>
                            {
                                'I have also done the occasional website and marketing for local businesses, some of which are shown here.'
                            }
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
