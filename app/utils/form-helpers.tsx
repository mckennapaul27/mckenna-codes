import { type ReactNode } from 'react';
import {
    type FieldError,
    FieldErrors,
    FieldErrorsImpl,
    Merge,
} from 'react-hook-form';
import isEmpty from 'lodash.isempty';
import { FormValues } from '@/types';

export const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
};

export const isDisabled = ({
    fields,
    errors,
}: {
    fields: FormValues;
    errors: FieldErrors;
}) => {
    const disabled =
        Object.keys(fields)
            .filter((a) => a !== 'phone')
            .some((k) => fields[k] === '') ||
        !isEmpty(errors) ||
        isEmpty(fields);

    return disabled;
};

export const renderErrorMessage = (
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
): ReactNode => {
    if (error && error.message) {
        return error.message as ReactNode;
    }
    return null;
};

export const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
};
