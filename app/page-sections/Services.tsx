import styles from './Services.module.scss';
// import { Container } from '../containers/Container';
// import { IntroWrapper } from '../common/IntroWrapper';
import { ServiceTrail } from './ServiceTrailWithoutRS';

export const Services = () => {
    return (
        <section className={styles['main']} id="services">
            {/* <Container>
                <div className={styles['sections']}>
                    <IntroWrapper
                        overline_text={'Our Services'}
                        overline_icon_code={'puzzle-piece'}
                        overline_width="32px"
                        overline_height="32px"
                        overline_display="block"
                        overline_color="#ffffff"
                        title_text={`A full suite of digital services.`}
                        intro_text="We provide a range of digital services to help your business grow including web design, software development, and digital marketing. We work with you to create a custom solution that fits your business needs."
                    />
                    <ServiceTrail />
                </div>
            </Container> */}
        </section>
    );
};
