import classNames from 'classnames';
import styles from './Skills.module.scss';

const items = [
    {
        type: 'languages',
        skills: [
            {
                name: 'Javascript',
                level: 4,
            },
            {
                name: 'Typescript',
                level: 2,
            },
        ],
    },

    {
        type: 'front end frameworks',
        skills: [
            {
                name: 'Nextjs',
                level: 4,
            },
            {
                name: 'Reactjs',
                level: 4,
            },
        ],
    },
    {
        type: 'back end frameworks',
        skills: [
            {
                name: 'Expressjs',
                level: 3,
            },
            {
                name: 'Nodejs',
                level: 3,
            },
        ],
    },
    {
        type: 'databases',
        skills: [
            { name: 'MongoDB', level: 4 },
            { name: 'Mongoose', level: 4 },
            { name: 'GraphQL', level: 2 },
            {
                name: 'PostgreSQL',
                level: 1,
            },
        ],
    },

    {
        type: 'cloud platforms',
        skills: [
            {
                name: 'GCP',
                level: 2,
            },
            {
                name: 'AWS',
                level: 1,
            },
        ],
    },
    {
        type: 'styling',
        skills: [
            {
                name: 'CSS',
                level: 3,
            },
            {
                name: 'SASS',
                level: 3,
            },
            {
                name: 'SCSS modules',
                level: 3,
            },
            {
                name: 'Bulma',
                level: 3,
            },
            {
                name: 'Tailwind',
                level: 2,
            },
        ],
    },

    {
        type: 'design',
        skills: [
            {
                name: 'Figma',
                level: 3,
            },
            {
                name: 'UX/UI',
                level: 3,
            },
        ],
    },
    {
        type: 'marketing',
        skills: [
            {
                name: 'Google Ads',
                level: 4,
            },
            {
                name: 'SEO',
                level: 4,
            },
            {
                name: 'Core Web Vitals',
                level: 4,
            },
            {
                name: 'GA Universal',
                level: 3,
            },
            {
                name: 'GTM',
                level: 3,
            },
            {
                name: 'GSC',
                level: 3,
            },
            {
                name: 'GA4',
                level: 1,
            },
        ],
    },
];

const colorLookup: { [key: string]: string } = {
    1: styles['green'],
    2: styles['pink'],
    3: styles['yellow'],
    4: styles['red'],
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
                                        <p className={styles['skill-title']}>
                                            {item.type}
                                        </p>
                                        <ul className={styles['skill-list']}>
                                            {item.skills.map((skill, i) => (
                                                <li
                                                    key={`skill-${i}`}
                                                    className={
                                                        styles['skills-grade']
                                                    }
                                                >
                                                    <span
                                                        className={classNames(
                                                            styles[
                                                                'color-block'
                                                            ],
                                                            colorLookup[
                                                                String(
                                                                    skill.level
                                                                )
                                                            ]
                                                        )}
                                                    ></span>
                                                    {skill.name}
                                                </li>
                                            ))}
                                        </ul>
                                        {/* <p className={styles['skills-grade']}>
                                          
                                        </p> */}
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
