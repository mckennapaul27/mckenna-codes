'use client';

import { TypeAnimation } from 'react-type-animation';
import { montserrat } from '@/app/utils/fonts';
import styles from './Title.module.scss';
import classNames from 'classnames';

const Typewriter = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Web Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'UX/UI Designer',
                1000,
                'Web Designer',
                1000,
                'Solopreneur',
                1000,
                'Software Engineer',
                1000,
                'Online Marketer',
                1000,
                'Hypnotist?',
                1000,
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};

export const TitleTypist = ({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) => {
    return (
        <h1 className={classNames(styles['title'], montserrat.className)}>
            <span className={styles['title-span']}>{title}</span>
            <span className={styles['subtitle-span']}>
                <Typewriter />
            </span>
        </h1>
    );
};
