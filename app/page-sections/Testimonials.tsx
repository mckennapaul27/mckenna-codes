import classNames from 'classnames';
import styles from './Testimonials.module.scss';
import Image from 'next/image';
import { montserrat } from '../utils/fonts';

const testimonials = [
    {
        name: 'S. Orme',
        company: 'Greenscapes',
        headline: '"Trusted for years"',
        description:
            "I have trusted Paul at BunkerDigital to manage all my digital presence for years now. He's helped me grow my business by developing our websites and managing our Google Ads campaigns. I would highly recommend him to anyone looking for a digital partner.",
    },
    {
        name: 'P. Walker',
        company: 'DogWorks',
        headline: '"Highly recommended"',
        description:
            'Paul was very professional and helpful. He was able to create a website that was exactly what I wanted and I am very happy with the result. He also developed a digital version of the compliance form I use for my business which has made my life a lot easier. I would highly recommend him to anyone looking for a web developer.',
    },
    {
        name: 'K. Hilder',
        company: 'Feldenkrais IE',
        headline: '"A pleasure to work with"',
        description:
            'It was a pleasure working with Paul on our website. He completed the work quickly and efficiently and his communication was excellent. He was very generous with his time and led a clear and well organised Zoom tutorial to guide us around our new site. I would definitely work with him again.',
    },
];

export const Testimonials = () => {
    return (
        <section className={styles['main']}>
            <div className="container">
                <div className={styles['sections']}>
                    <div className={styles['testimonials']}>
                        {testimonials.map((testimonial, i) => (
                            <div
                                className={styles['testimonial-wrapper']}
                                key={`testimonial-${i}`}
                            >
                                <div className={styles['testimonial']}>
                                    <div className={styles['testimonial-info']}>
                                        <div
                                            className={classNames(
                                                styles['testimonial-name'],
                                                montserrat.className
                                            )}
                                        >
                                            {testimonial.name}
                                        </div>

                                        <div
                                            className={
                                                styles['testimonial-company']
                                            }
                                        >
                                            {testimonial.company}
                                        </div>
                                    </div>
                                    <Image
                                        src={'/speech-mark-right-bg.svg'}
                                        alt={''}
                                        width={42}
                                        height={34}
                                        className={
                                            styles['speech-mark-right-bg']
                                        }
                                    />
                                    <div
                                        className={
                                            styles['testimonial-description']
                                        }
                                    >
                                        <p>{testimonial.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
