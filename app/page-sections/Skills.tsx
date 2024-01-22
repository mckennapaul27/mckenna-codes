import classNames from 'classnames';
import styles from './Skills.module.scss';
import { montserrat } from '../utils/fonts';

export const Skills = () => {
    return (
        <section className={styles['main']} id="skills">
            <div className="container">
                <div className={styles['content-section']}>
                    <h2 className={classNames(montserrat.className)}>
                        My Skills
                    </h2>
                    <p>
                        Each level is colour-coded to give you a visual guide to
                        my proficiency in each domain.
                    </p>
                    <p>
                        I have included languages, common frameworks such as
                        Next.js and Express.js, and I&apos;ve included my
                        proficiency with using different platforms such as
                        Google Cloud Platform and systems such as Google Tag
                        Manager and Google Ads.
                    </p>
                    <p>
                        Please bear in mind that I don&apos;t update this
                        section on a very regular basis so it will not always be
                        entirely up-to-date and current (especially relevant how
                        quickly technology changes!).
                    </p>
                    <p>
                        This list is also not extensive. There will be
                        technologies that I have used in the past that I have
                        not included here. There&apos;s also a lot of
                        technologies that I have not used but I am confident
                        that I could pick up quickly.
                    </p>
                    <p>
                        It&apos;s also useful to note that the pace of learning
                        can vary. For example, every new project I have worked
                        on over the last few months I am using TypeScript
                        whereas prior to this, I had not used TypeScript at all.
                        So my pace of learning with TypeScript is currently
                        faster than anything else.
                    </p>
                    <p>
                        Likewise, if I don&apos;t use something very frequently
                        (Google Cloud Platform for example) then it can take a
                        small period to reacquaint myself with it. I think this
                        is pretty common.
                    </p>

                    <p>
                        However, I believe I can master most
                        frameworks/platforms etc within a short space of time.
                        The aim of this section is to give you a general idea of
                        my current skillset.
                    </p>

                    <div className={styles['skills-grades']}>
                        <p className={styles['skills-grade']}>
                            <span
                                className={classNames(
                                    styles['color-block'],
                                    styles['green']
                                )}
                            ></span>
                            <span>
                                <span className={styles['level-title']}>
                                    Fundamental Awareness
                                </span>{' '}
                                - At this level, I possess a basic understanding
                                of the skill. I can perform simple tasks and
                                follow instructions related to this area but
                                might require further guidance.
                            </span>
                        </p>
                        <p className={styles['skills-grade']}>
                            <span
                                className={classNames(
                                    styles['color-block'],
                                    styles['pink']
                                )}
                            ></span>
                            <span>
                                <span className={styles['level-title']}>
                                    Novice
                                </span>{' '}
                                - I have a working knowledge of the skill and
                                can handle basic tasks independently. I have had
                                some practical experience and have worked on a
                                few projects. I can troubleshoot common problems
                                and understand the fundamental concepts
                                thoroughly.
                            </span>
                        </p>
                        <p className={styles['skills-grade']}>
                            <span
                                className={classNames(
                                    styles['color-block'],
                                    styles['yellow']
                                )}
                            ></span>
                            <span>
                                <span className={styles['level-title']}>
                                    Competent
                                </span>{' '}
                                - I can handle complex tasks, troubleshoot
                                nuanced problems, and work autonomously. I have
                                a solid track record of successful projects
                                under my belt, showcasing my ability to apply
                                this skill effectively.
                            </span>
                        </p>
                        <p className={styles['skills-grade']}>
                            <span
                                className={classNames(
                                    styles['color-block'],
                                    styles['red']
                                )}
                            ></span>
                            <span>
                                <span className={styles['level-title']}>
                                    Expert
                                </span>{' '}
                                - I have a deep and intuitive understanding of
                                the skill. I can handle advanced projects and
                                use-cases, introduce innovative solutions, and
                                drive strategy based on this competency.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
