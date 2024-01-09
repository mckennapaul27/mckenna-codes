import classNames from 'classnames';
import styles from './Hero.module.scss';
import { montserrat } from '../utils/fonts';

const bannerItems = [
    { title: '5+', description: 'Personal Projects' },
    { title: '10+', description: 'Client Projects' },
    { title: '7+', description: 'Years Experience' },
    { title: '957', description: 'Github Contributions Last Year' },
];

export const CounterBlock = ({}) => {
    return (
        <div className={styles['banner-wrapper']}>
            <div className="container">
                <div className={styles['banner']}>
                    <div className={styles['inside-block']}>
                        <div className={styles['banner-items']}>
                            {bannerItems.map((item, i) => (
                                <div
                                    className={styles['banner-item']}
                                    key={`banner-item-${i}`}
                                >
                                    <div
                                        className={classNames(
                                            styles['banner-item-title'],
                                            montserrat.className
                                        )}
                                    >
                                        {item.title}
                                    </div>
                                    <div
                                        className={
                                            styles['banner-item-description']
                                        }
                                    >
                                        {item.description}
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
