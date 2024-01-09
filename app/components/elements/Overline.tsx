import { iconLookUp } from '@/app/utils/icon-lookup';
import styles from './Overline.module.scss';
import classNames from 'classnames';

export const Overline = ({
    text,
    icon_code,
    width,
    height,
    display,
    color,
    wrapper_color,
}: {
    text: string;
    icon_code: string;
    width: string;
    height: string;
    display?: string;
    color?: string;
    wrapper_color?: string;
}) => {
    const className = classNames(
        styles['overline'],
        display ? styles[display] : ''
    );
    return (
        <p className={className}>
            {/* <span
                className={classNames(
                    styles['icon-wrapper'],
                    wrapper_color ? styles[wrapper_color] : ''
                )}
            >
                {iconLookUp(icon_code, width, height, display, color)}
            </span> */}
            <span className={styles['text']}>{text}</span>
        </p>
    );
};
