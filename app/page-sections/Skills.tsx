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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <p className={styles['skills-grade']}>
                        <span
                            className={classNames(
                                styles['color-block'],
                                styles['green']
                            )}
                        ></span>
                        Highly Proficient and use most days
                    </p>
                    <p className={styles['skills-grade']}>
                        <span
                            className={classNames(
                                styles['color-block'],
                                styles['pink']
                            )}
                        ></span>
                        Mainly dogshit and use AI to cheat
                    </p>
                    <p className={styles['skills-grade']}>
                        <span
                            className={classNames(
                                styles['color-block'],
                                styles['yellow']
                            )}
                        ></span>
                        Mainly dogshit and use AI to cheat
                    </p>
                    <p className={styles['skills-grade']}>
                        <span
                            className={classNames(
                                styles['color-block'],
                                styles['red']
                            )}
                        ></span>
                        Mainly dogshit and use AI to cheat
                    </p>
                </div>
            </div>
        </section>
    );
};
