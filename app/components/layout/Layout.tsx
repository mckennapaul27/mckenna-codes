import React from 'react';
import { NavbarDesktop } from './NavbarDesktop';
import { Footer } from './Footer';
import styles from './Layout.module.scss';
// import { NavbarTouch } from './NavbarTouch';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className={styles['navbar-desktop-wrapper']}>
                <NavbarDesktop />
            </div>
            <div className={styles['navbar-touch-wrapper']}>
                {/* <NavbarTouch /> */}
            </div>

            {children}
            <Footer />
        </>
    );
};
