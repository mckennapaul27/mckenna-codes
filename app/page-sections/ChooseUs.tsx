import styles from './ChooseUs.module.scss';
// import { Container } from '../containers/Container';
// import { IntroWrapper } from '../common/IntroWrapper';

export const ChooseUs = ({
    data,
}: {
    data: {
        title: string;
        overline_text: string;
        overline_icon_code: string;
        intro: string;
        bullets: {
            title: string;
            description: string;
        }[];
    };
}) => {
    const { title, overline_text, overline_icon_code, intro, bullets } = data;
    return (
        <section className={styles['main']}>
            {/* <Container>
                <div className={styles['sections']}>
                    <IntroWrapper
                        overline_text={overline_text}
                        overline_icon_code={overline_icon_code}
                        overline_width="32px"
                        overline_height="32px"
                        overline_display="block"
                        overline_color="#ffffff"
                        title_text={title}
                        intro_text={intro}
                    />
                    <div className={styles['bullets']}>
                        {bullets.map((bullet, i) => (
                            <div
                                className={styles['bullet-wrapper']}
                                key={`bullet-${i}`}
                            >
                                <div className={styles['bullet']}>
                                    <h3 className={styles['bullet-title']}>
                                        {bullet.title}
                                    </h3>
                                    <p className={styles['bullet-description']}>
                                        {bullet.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container> */}
        </section>
    );
};
