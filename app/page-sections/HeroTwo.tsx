import Image from 'next/image';
// import { Title } from '../common/Title';
// import { Container } from '../containers/Container';
// import { Button } from '../elements/Button';
import styles from './HeroTwo.module.scss';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export const HeroTwo = ({
    data,
}: {
    data: {
        title: string;
        subtitle: string;
        cta: string;
        overline_text: string;
        overline_icon_code: string;
        intro: string;
        services: string[];
        img: {
            src: string;
            width: number;
            height: number;
            alt: string;
        };
    };
}) => {
    const {
        title,
        subtitle,
        cta,
        overline_text,
        overline_icon_code,
        intro,
        img,
        services,
    } = data;

    return (
        <main className={styles.main}>
            {/* <Container>
                <div className={styles['sections']}>
                    <div className={styles['text-section']}>
                        <h1 className={styles['text-section-title']}>
                            {subtitle}
                        </h1>
                        <p className={styles['text-section-subtitle']}>
                            {intro}
                        </p>
                        <div
                            className={styles['touch-img']}
                            style={{
                                backgroundImage: `url("/mockups/${img.src}")`,
                                position: 'relative',
                                display: 'inline-block',
                                zIndex: 5,
                            }}
                        ></div>

                        <ul className={styles['hero-list']}>
                            {services.map((point, i) => (
                                <li key={`point-${i}`}>
                                    <CheckCircleIcon
                                        className={styles['check-icon']}
                                    />
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <div className={styles['btn-wrapper']}>
                            <Button
                                text={'Discuss your project'}
                                href="/discuss-project"
                                display="block"
                            />
                        </div>
                    </div>
                    <div className={styles['img-section']}>
                        <div
                            className={styles['img-section-wrapper']}
                            style={{
                                position: 'relative',
                                width: `auto`,
                                height: `${img.height}px`,
                            }}
                        >
                            <div
                                className={styles['img-container']}
                                style={{
                                    //background: `url("/mockups/${img.src}"), rgba(255, 94, 40, 0.17)`,
                                    // background: 'rgba(255, 94, 40, 0.17)',
                                    backgroundImage: `url("/mockups/${img.src}")`,
                                    position: 'relative',
                                    width: `auto`,
                                    height: `${img.height}px`,
                                    zIndex: 5,
                                    borderRadius: '4px',
                                }}
                            ></div>
                            <div className={styles['absolute-box-blend']}></div>
                        </div>
                    </div>
                </div>
            </Container> */}
        </main>
    );
};
