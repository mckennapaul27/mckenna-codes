'use client';

import classNames from 'classnames';
import styles from './Button.module.scss';
import { iconLookUp } from '@/app/utils/icon-lookup';
import Link from 'next/link';
import { WindowWithDataLayer } from '@/types';

declare const window: WindowWithDataLayer;

export const Button = ({
    text,
    href,
    id,
    outlined = false,
    anchor = false,
    plain = false,
    display,
    size,
    hasIcon = false,
    icon_code,
    is_submit = false,
    disabled = false,
    inverted = false,
    is_loading = false,
    has_click_event = false,
    click_event,
}: {
    text: string;
    href?: string;
    id?: string;
    outlined?: boolean;
    anchor?: boolean;
    plain?: boolean;
    display?: string;
    size?: string;
    hasIcon?: boolean;
    icon_code?: string;
    is_submit?: boolean;
    disabled?: boolean;
    inverted?: boolean;
    is_loading?: boolean;
    has_click_event?: boolean;
    click_event?: any;
}) => {
    const className = classNames(
        styles.button,
        outlined ? styles['outlined'] : '',
        plain ? styles['plain'] : '',
        size ? styles[size] : '',
        display ? styles[display] : '',
        hasIcon ? styles['has-icon'] : '',
        disabled ? styles['disabled'] : '',
        inverted ? styles['inverted'] : '',
        is_loading ? styles['is-loading'] : ''
    );
    const clickEvent = has_click_event ? click_event : null;
    // if (has_click_event) {
    //     return (
    //         <button className={className} onClick={() => clickEvent()}>
    //             {text}
    //         </button>
    //     );
    // }
    if (href) {
        const target = href.startsWith('http') ? '_blank' : '_self';
        if (hasIcon && icon_code) {
            return (
                <a
                    href={href}
                    id={id}
                    className={className}
                    target={target}
                    onClick={() => clickEvent()}
                >
                    {text}
                    <span className={styles['icon-wrapper']}>
                        {iconLookUp(icon_code, '14px', '14px')}
                    </span>
                </a>
            );
        }
        if (plain) {
            return (
                <Link
                    href={href}
                    id={id}
                    className={className}
                    onClick={() => clickEvent()}
                >
                    {text}
                </Link>
            );
        }
        return (
            <a
                href={href}
                id={id}
                className={className}
                onClick={() => clickEvent()}
            >
                {text}
            </a>
        );
    }
    if (anchor) {
        return (
            <a id={id} className={className} onClick={() => clickEvent()}>
                {text}
            </a>
        );
    }
    if (is_submit) {
        if (is_loading) {
            return (
                <button id={id} className={className} type="submit">
                    <svg
                        className={styles['spinner-svg']}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className={styles['spinner-circle']}
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className={styles['spinner-path']}
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    {text}
                </button>
            );
        }
        return (
            <button
                id={id}
                className={className}
                type="submit"
                onClick={() => clickEvent()}
            >
                {text}
            </button>
        );
    }

    return (
        <button id={id} className={className} onClick={() => clickEvent()}>
            {text}
        </button>
    );
};
