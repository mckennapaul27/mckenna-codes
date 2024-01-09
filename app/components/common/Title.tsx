import { montserrat } from '@/app/utils/fonts';
import styles from './Title.module.scss';
import classNames from 'classnames';

export const Title = ({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) => {
    return (
        <h1 className={classNames(styles['title'], montserrat.className)}>
            <span className={styles['title-span']}>{title}</span>
            <span className={styles['subtitle-span']}>{subtitle}</span>
        </h1>
    );
};
