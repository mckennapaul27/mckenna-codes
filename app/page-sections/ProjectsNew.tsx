import styles from './ProjectsNew.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { montserrat } from '@/app/utils/fonts';
import { convertBlocksToHtml } from '../utils/content-helpers';
import Carousel from '../components/common/Carousel';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// https://codesandbox.io/s/to6uf for animated card
// https://codesandbox.io/s/cju2d?file=/src/App.tsx
// https://codesandbox.io/s/8s3kf - carousel
// https://codesandbox.io/s/1t9hh image fade

type Project = {
    cover_image: {
        url: string;
        alt: string;
        width: number;
        height: number;
        public_id: string;
    };
    _id: string;
    title: string;
    description: string;
    body: string;
    skills: any[];
    technologies: any[];
    primary_color: string;
    accent_color: string;
    primary_font: string;
    project_type: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    accent_font: string;
    secondary_color: string;
    secondary_font: string;
    url: string;
};
export const ProjectsNew = ({ projects }: { projects: Project[] }) => {
    return (
        <section className={styles['main']} id="projects">
            <div className="container">
                <div className={styles['content-section']}>
                    <h2 className={classNames(montserrat.className)}>
                        Personal projects
                    </h2>
                    <p>
                        I&apos;ve developed numerous projects over the years,
                        some of which are shown here.
                    </p>
                    <p>
                        My main source of income over the last decade has come
                        from ewalletbooster.com which I originally created from
                        an earlier project couponarbitrage.com. At it&apos;s
                        peak, ewalletbooster.com was generating over $3m monthly
                        affiliate sales volume for the affiliate networks I was
                        working with.
                    </p>
                    <p>
                        I have also developed a number of other projects
                        including volumekings.com and fraffles.co.uk.
                    </p>
                    <p>
                        And of course there are many projects that I have
                        created over the years that have not worked out, the
                        biggest being cashbackmad.co.uk which was hacked in
                        2015! I lost the entire site and database and it was the
                        moment I decided I needed to learn to code and
                        understand how to build secure and performant websites!
                    </p>
                </div>
                <div className={styles['slides']}>
                    <Carousel show={1} infiniteLoop={true}>
                        {projects.map((project, index) => {
                            return (
                                <ProjectSlide
                                    project={project}
                                    index={index}
                                    key={project._id}
                                />
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export const ProjectSlide = ({
    project,
    index,
}: {
    project: Project;
    index: number;
}) => {
    const parsedBody = JSON.parse(project.body as string);
    const content = convertBlocksToHtml(parsedBody);
    return (
        <div>
            <div className={styles['main_section']}>
                <div className={styles['image_slider_section']}>
                    <div className={styles['image_wrapper']}>
                        <div className={styles['project_title_section']}>
                            <h3
                                className={classNames(
                                    styles['title'],
                                    montserrat.className
                                )}
                            >
                                {project.title}
                            </h3>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ArrowTopRightOnSquareIcon
                                    className={styles['icon']}
                                />
                            </a>
                            {/* <p className={styles['description']}>{project.description}</p> */}
                        </div>
                        <Image
                            src={project.cover_image.url}
                            alt={project.cover_image.alt}
                            fill
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>
                <div className={styles['project_card_content_section']}>
                    <div dangerouslySetInnerHTML={{ __html: `${content}` }} />
                    <p>
                        <strong>Tech Stack:</strong>
                    </p>
                    <ul className={styles['tech-list']}>
                        {project.technologies.map((technology) => {
                            return (
                                <li key={technology._id}>{technology.name}</li>
                            );
                        })}
                    </ul>
                    <p>
                        <strong>Skills:</strong>
                    </p>
                    <ul className={styles['tech-list']}>
                        {project.skills.map((skill) => {
                            return <li key={skill._id}>{skill.name}</li>;
                        })}
                    </ul>
                    <p>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
