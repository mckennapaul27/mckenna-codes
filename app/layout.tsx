import { Work_Sans } from 'next/font/google';
import './globals.scss';
import { Layout } from '@/app/components/layout/Layout';

import { Suspense } from 'react';
import Analytics from './google/Analytics';

const workSans = Work_Sans({
    weight: ['300', '400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={workSans.className}>
                <Suspense>
                    <Analytics />
                </Suspense>

                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
