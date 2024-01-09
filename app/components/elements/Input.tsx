'use client';

import { renderErrorMessage } from '@/app/utils/form-helpers';
import { Controller, FieldErrors } from 'react-hook-form';
import styles from './Input.module.scss';
import classNames from 'classnames';

export const Input = ({
    id,
    label,
    name,
    type,
    control,
    errors,
    rules,
    defaultValue,
    is_dark,
    placeholder,
    show_label = true,
    size,
}: {
    id: string;
    label: string;
    name: string;
    type: string;
    control: any;
    errors: FieldErrors;
    rules: any;
    defaultValue: string;
    is_dark?: boolean;
    placeholder?: string;
    show_label?: boolean;
    size?: string;
}) => {
    return (
        <div>
            {show_label && <label className={styles['label']}>{label}</label>}
            <div className={``}>
                <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    defaultValue={defaultValue}
                    render={({ field }) => (
                        <input
                            {...field}
                            type={type}
                            id={id}
                            className={classNames(
                                styles['input'],
                                size ? styles[size] : '',
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
