import classNames from 'classnames';
import styles from './Skills.module.scss';

const items = [
    {
        name: 'Nextjs',
        level: 4,
    },
    {
        name: 'Reactjs',
        level: 4,
    },
    {
        name: 'Javascript',
        level: 4,
    },
    {
        name: 'Typescript',
        level: 2,
    },
    {
        name: 'Nodejs',
        level: 3,
    },
    {
        name: 'Expressjs',
        level: 3,
    },
    { name: 'MongoDB', level: 4 },
    {
        name: 'PostgreSQL',
        level: 1,
    },
    {
        name: 'Nextjs',
        level: 4,
    },
    {
        name: 'Reactjs',
        level: 4,
    },
    {
        name: 'Javascript',
        level: 4,
    },
    {
        name: 'Typescript',
        level: 2,
    },
    {
        name: 'Nodejs',
        level: 3,
    },
    {
        name: 'Expressjs',
        level: 3,
    },
    { name: 'MongoDB', level: 4 },
    {
        name: 'PostgreSQL',
        level: 1,
    },
    {
        name: 'Google Ads',
        level: 4,
    },
    {
        name: 'Google Analytics',
        level: 4,
    },
    {
        name: 'Google Tag Manager',
        level: 4,
    },
    {
        name: 'Google Search Console',
        level: 4,
    },
    {
        name: 'GA4',
        level: 1,
    },
    {
        name: 'Google Cloud Platform',
        level: 4,
    },
];

const colorLookup: { [key: string]: string } = {
    1: styles['red'],
    2: styles['yellow'],
    3: styles['pink'],
    4: styles['green'],
};

export const SkillsBlock = ({}) => {
    return (
        <div className={styles['banner-wrapper']}>
            <div className="container">
                <div className={styles['banner']}>
                    <div className={styles['inside-block']}>
                        <div className={styles['banner-items']}>
                            {items.map((item, i) => (
                                <div
                                    className={styles['skill-item-wrapper']}
                                    key={`skill-item-${i}`}
                                >
                                    <div className={styles['skill-item']}>
                                        <p className={styles['skills-grade']}>
                                            <span
                                                className={classNames(
                                                    styles['color-block'],
                                                    colorLookup[
                                                        String(item.level)
                                                    ]
                                                )}
                                            ></span>
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['absolute-bg']}></div>
        </div>
    );
};
