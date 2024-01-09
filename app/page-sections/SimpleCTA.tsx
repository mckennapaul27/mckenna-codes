import classNames from 'classnames';
import styles from './SimpleCTA.module.scss';
import { montserrat } from '../utils/fonts';
import Link from 'next/link';

export const SimpleCTA = () => {
    return (
        <section className={styles['main']}>
            <div className="container">
                <div className={styles['sections']}>
                    <div className={styles['content-section']}>
                        <h2 className={classNames(montserrat.className)}>
                            Have a project or idea? Get in touch.
                        </h2>
                        <p>
                            I am currently available for freelance and
                            consulting work. If you have a project that you want
                            to get started, think you need my help with
                            something or just fancy connecting, then please get
                            in touch.
                        </p>
                        <Link
                            className={classNames(
                                'button primary',
                                montserrat.className
                            )}
                            href={`/contact`}
                        >
                            contact me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
