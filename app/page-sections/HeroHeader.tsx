import styles from './HeroHeader.module.scss';
import { Container } from '@/app/components/containers/Container';
import {
    EnvelopeOpenIcon,
    PhoneArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { ContactDeets } from '../common/ContactDeets';

export const HeroHeader = ({
    title,
    showContactDeets,
}: {
    title?: string;
    showContactDeets?: boolean;
}) => {
    return (
        <main className={styles.main}>
            <Container>
                <div className={styles['section']}>
                    <h1>{title}</h1>
                    {showContactDeets && <ContactDeets inLineFlex={true} />}
                </div>
            </Container>
        </main>
    );
};
