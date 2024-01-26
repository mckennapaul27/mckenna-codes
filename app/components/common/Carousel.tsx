'use client';

import { ReactNode, useEffect, useState } from 'react';
import styles from './Carousel.module.scss';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { montserrat } from '@/app/utils/fonts';

const Carousel = ({
    show,
    infiniteLoop,
    children,
}: {
    children: ReactNode[];
    show: number;
    infiniteLoop: boolean;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);
    const [touchPosition, setTouchPosition] = useState<number | null>(null);

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
    }, [children]);
    const next = () => {
        if (currentIndex < length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            next();
        }

        if (diff < -5) {
            prev();
        }

        setTouchPosition(null);
    };

    return (
        <div className={styles['carousel-container']}>
            <div className={styles['carousel-wrapper']}>
                <div
                    className={styles['carousel-content-wrapper']}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={styles['carousel-content']}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
            <div className={styles['controls']}>
                <div className={styles['page_number']}>
                    <span className={montserrat.className}>
                        {currentIndex + 1 < 10 ? '0' : ''}
                        {currentIndex + 1}
                    </span>
                    <span className={styles['length']}>/{children.length}</span>
                </div>
                <div className={styles['control_btns']}>
                    {currentIndex > 0 ? (
                        <button className={styles['prev_btn']} onClick={prev}>
                            <FaAngleLeft />
                        </button>
                    ) : (
                        <button className={styles['prev_btn']} disabled>
                            <FaAngleLeft />
                        </button>
                    )}
                    {currentIndex < length - 1 ? (
                        <button className={styles['next_btn']} onClick={next}>
                            <FaAngleRight />
                        </button>
                    ) : (
                        <button className={styles['next_btn']} disabled>
                            <FaAngleRight />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
