import Link from 'next/link';
import styles from './Pagination.module.scss';
import classNames from 'classnames';
import { montserrat } from '@/app/utils/fonts';

export const Pagination = ({}) => {
    return (
        <div className={styles['pagination-wrapper']}>
            <div>Showing 1 to 5 of 4 results</div>
            <div className={styles['pagination-buttons']}>
                <button
                    className={classNames(
                        styles['pagination-button'],
                        montserrat.className
                    )}
                    // href="/blog"
                >
                    Previous
                </button>
                <button
                    className={classNames(
                        styles['pagination-button'],
                        montserrat.className
                    )}
                    // href="/blog"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
