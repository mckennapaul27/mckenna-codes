'use client';

import { renderErrorMessage } from '@/app/utils/form-helpers';
import { Controller, type FieldErrors } from 'react-hook-form';
import styles from './TextArea.module.scss';
import classNames from 'classnames';

export const TextArea = ({
    id,
    label,
    name,
    intro,
    control,
    errors,
    rules,
    defaultValue,
    is_dark,
    placeholder,
}: {
    id: string;
    label: string;
    name: string;
    intro: string;
    control: any;
    errors: FieldErrors;
    rules: any;
    defaultValue: string;
    is_dark?: boolean;
    placeholder?: string;
}) => {
    return (
        <div>
            <label className={styles['label']}>{label}</label>
            <div>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}
                    rules={rules}
                    render={({ field }) => (
                        <textarea
                            {...field}
                            id={id}
                            name={name}
                            rows={5}
                            className={classNames(
                                styles['textarea'],
                                is_dark ? styles['dark'] : ''
                            )}
                            placeholder={placeholder}
                        />
                    )}
                />
            </div>
            {errors[name] && (
                <span className={styles['error-wrapper']}>
                    <span className={styles['error-msg']}>
                        {renderErrorMessage(errors[name])}
                    </span>
                </span>
            )}
        </div>
    );
};
