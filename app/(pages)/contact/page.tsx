import { ContactPage } from '@/app/page-sections/ContactPage';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Contact Me - Freelance Web Developer & Designer',
        description:
            'Ready for your next project? Get in touch with me for reliable and efficient web development and design services.',
    };
}

export default function Page() {
    return <ContactPage />;
}
