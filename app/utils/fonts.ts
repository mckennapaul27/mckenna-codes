// import {
//     Open_Sans,
//     Poppins,
//     Schoolbell,
//     Nanum_Pen_Script,
//     Karla,
//     Rubik,
//     Inter,
//     Montserrat,
//     Fredoka,
//     Vollkorn,
// } from 'next/font/google';

import { Montserrat } from 'next/font/google';

// export const poppins = Poppins({
//     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//     style: ['normal', 'italic'],
//     subsets: ['latin'],
//     display: 'swap',
// });

export const montserrat = Montserrat({
    weight: ['300', '400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

// export const openSans = Open_Sans({
//     weight: ['600'],
//     style: ['normal', 'italic'],
//     subsets: ['latin'],
//     display: 'swap',
// });

// export const schoolbell = Schoolbell({
//     weight: ['400'],
//     style: ['normal'],
//     subsets: ['latin'],
//     display: 'swap',
// });
// export const nanumPenScript = Nanum_Pen_Script({
//     weight: ['400'],
//     style: ['normal'],
//     subsets: ['latin'],
//     display: 'swap',
// });
// export const karla = Karla({
//     weight: ['600'],
//     style: ['normal', 'italic'],
//     subsets: ['latin'],
//     display: 'swap',
// });
// export const rubik = Rubik({
//     weight: ['600'],
//     style: ['normal', 'italic'],
//     subsets: ['latin'],
//     display: 'swap',
// });
// export const inter = Inter({
//     weight: ['600'],
//     style: ['normal'],
//     subsets: ['latin'],
//     display: 'swap',
// });
// export const montserrat = Montserrat({
//     weight: ['600'],
//     style: ['normal', 'italic'],
//     subsets: ['latin'],
//     display: 'swap',
// });
// export const fredoka = Fredoka({
//     weight: ['600'],
//     style: ['normal'],
//     subsets: ['latin'],
//     display: 'swap',
// });
// export const vollkorn = Vollkorn({
//     weight: ['600'],
//     style: ['normal', 'italic'],
//     subsets: ['latin'],
//     display: 'swap',
// });

// export const fontLookup = {
//     Poppins: poppins,
//     'Open Sans': openSans,
//     Schoolbell: schoolbell,
//     'Nanum Pen Script': nanumPenScript,
//     Karla: karla,
//     Rubik: rubik,
//     Inter: inter,
//     Montserrat: montserrat,
//     'Fredoka One': fredoka,
//     Vollkorn: vollkorn,
// };

export const fontImgLookup = {
    Poppins: { url: '/font-images/Poppins.svg', width: 62, height: 16 },
    'Open Sans': { url: '/font-images/Open Sans.svg', width: 72, height: 16 },
    Schoolbell: { url: '/font-images/Schoolbell.svg', width: 63, height: 16 },
    'Nanum Pen Script': {
        url: '/font-images/Nanum Pen Script.svg',
        width: 112,
        height: 18,
    },
    Karla: { url: '/font-images/Karla.svg', width: 42, height: 16 },
    Rubik: { url: '/font-images/Rubik.svg', width: 45, height: 16 },
    Inter: { url: '/font-images/Inter.svg', width: 36, height: 16 },
    Montserrat: { url: '/font-images/Montserrat.svg', width: 86, height: 16 },
    'Fredoka One': {
        url: '/font-images/Fredoka One.svg',
        width: 92,
        height: 16,
    },
    Vollkorn: { url: '/font-images/Vollkorn.svg', width: 65, height: 16 },
};
