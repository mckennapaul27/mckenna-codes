'use client';

import { Controller } from 'react-hook-form';
import styles from './Radio.module.scss';

export const Radio = ({
    id,
    label,
    name,
    control,
    value,
    dynamicValue,
}: {
    id: string;
    label: string;
    name: string;
    control: any;
    value: string;
    dynamicValue?: string;
}) => {
    return (
        <div className={styles['radio-wrapper']}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <>
                        <input
                            {...field}
                            id={id}
                            type="radio"
                            value={value}
                            checked={field.value === value}
                            className={styles['radio-input']}
                        />
                        <label htmlFor={id} className={styles['radio-label']}>
                            <span className={styles['checkmark']}></span>
                            {label}
                            {dynamicValue && <span>: {dynamicValue}</span>}
                        </label>
                    </>
                )}
            />
        </div>
    );
};
