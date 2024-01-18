// import { ProjectBlocks } from '../animations/ProjectBlocks';
// import { IntroWrapper } from '../common/IntroWrapper';
// import { Container } from '../containers/Container';
import styles from './ProjectFlow.module.scss';

export const ProjectFlow = ({
    data,
}: {
    data: {
        title: string;
        overline_text: string;
        overline_icon_code: string;
        intro: string;
        steps: string[];
    };
}) => {
    const { title, overline_text, overline_icon_code, intro, steps } = data;
    return (
        <section className={styles['main']} id="process">
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
                </div>
                <ProjectBlocks steps={steps} />
            </Container> */}
        </section>
    );
};
