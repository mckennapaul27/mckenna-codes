'use client';

import { CheckCircleIcon } from '@heroicons/react/20/solid';
import toast from 'react-hot-toast';
import styles from './Alert.module.scss';
import { Button } from '../elements/Button';

export const AlertSuccess = ({
    title,
    description,
    id,
}: {
    title: string;
    description: string;
    id: string;
}) => {
    return (
        <div className={styles['wrapper']}>
            <div>
                <CheckCircleIcon
                    className={styles['icon']}
                    aria-hidden="true"
                />
            </div>
            <div>
                <h3 className={styles.title}>{title || 'Success'}</h3>
                <div>
                    <p className={styles.description}>
                        {description ||
                            'Your changes have been saved successfully.'}
                    </p>
                </div>
                <div>
                    <div>
                        <Button
                            text="Dismiss"
                            size="small"
                            has_click_event={true}
                            click_event={() => toast.dismiss(id)}
                            // outlined={true}
                            // inverted={true}
                            plain={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
