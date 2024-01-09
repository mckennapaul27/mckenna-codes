'use client';

import { renderErrorMessage } from '@/app/utils/form-helpers';
import { Controller, FieldErrors } from 'react-hook-form';
import styles from './Select.module.scss';

export const Select = ({
    id,
    label,
    name,
    control,
    errors,
    rules,
    defaultValue,
    is_dark,
    placeholder,
    show_label = true,
    size,
    options,
}: {
    id: string;
    label: string;
    name: string;
    control: any;
    errors: FieldErrors;
    rules: any;
    defaultValue: string;
    is_dark?: boolean;
    placeholder?: string;
    show_label?: boolean;
    size?: string;
    options: {
        value: string;
        label: string;
    }[];
}) => {
    return (
        <div>
            {show_label && <label className={styles['label']}>{label}</label>}
            <div className={styles[`select`]}>
                <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    defaultValue={defaultValue}
                    render={({ field }) => (
                        <select {...field} id={id}>
                            <option value="not-specified">Select</option>
                            {options.map((option, i) => (
                                <option
                                    value={option.value}
                                    key={`budget-select-${i}`}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
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
