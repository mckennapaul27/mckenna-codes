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
                    <p>Introduction to my skills</p>
                    <p className={styles['skills-grade']}>
                        <span
                            className={classNames(
                                styles['color-block'],
                                styles['green']
                            )}
                        ></span>
                        Level 1 - description needed
                    </p>
                    <p className={styles['skills-grade']}>
                        <span
                            className={classNames(
                                styles['color-block'],
                                styles['pink']
                            )}
                        ></span>
                        Level 2 - description needed
                    </p>
                    <p className={styles['skills-grade']}>
                        <span
                            className={classNames(
                                styles['color-block'],
                                styles['yellow']
                            )}
                        ></span>
                        Level 3 - description needed
                    </p>
                    <p className={styles['skills-grade']}>
                        <span
                            className={classNames(
                                styles['color-block'],
                                styles['red']
                            )}
                        ></span>
                        Level 4 - description needed
                    </p>
                </div>
            </div>
        </section>
    );
};
