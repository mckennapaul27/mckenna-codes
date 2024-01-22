'use client';

import Link from 'next/link';
import styles from './TOC.module.scss';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { montserrat } from '@/app/utils/fonts';

type TOC = {
    id: string;
    level: number;
    title: string;
    children?: {
        id: string;
        level: number;
        title: string;
    }[];
};
export const TOC = ({ toc, position }: { toc: TOC[]; position?: string }) => {
    const [currentId, setCurrentId] = useState('');

    useEffect(() => {
        const h2Elements = [...document.querySelectorAll('h2')];
        const h3Elements = [...document.querySelectorAll('h3')];
        const headingElements = [...h2Elements, ...h3Elements].sort(
            (a, b) => a.offsetTop - b.offsetTop
        );

        const h2h3Map = new Map();
        h2Elements.forEach((h2) => {
            const h2Id = h2.id;
            const h3Ids = h3Elements
                .filter(
                    (h3) =>
                        h3.offsetTop > h2.offsetTop &&
                        (!h2Elements[h2Elements.indexOf(h2) + 1] ||
                            h3.offsetTop <
                                h2Elements[h2Elements.indexOf(h2) + 1]
                                    .offsetTop)
                )
                .map((h3) => h3.id);
            h2h3Map.set(h2Id, h3Ids);
        });

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight * 0.1;
            const currentSectionId =
                headingElements
                    .filter((heading) => heading.offsetTop < scrollPosition)
                    .map((heading) => heading.id)
                    .reverse()
                    .find(
                        (id) =>
                            h2h3Map.has(id) ||
                            [...h2h3Map.values()].some((h3Ids) =>
                                h3Ids.includes(id)
                            )
                    ) || headingElements[0].id;

            setCurrentId(currentSectionId);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    const renderTOC = (toc: TOC[], level = 2) => {
        return (
            <ul className={styles['list-items']}>
                {toc.map((item) => {
                    return (
                        <li key={item.id} className={styles['list-item']}>
                            <Link
                                href={`#${item.id}`}
                                className={
                                    currentId === item.id ||
                                    (item.children &&
                                        item.children.some(
                                            (child) => child.id === currentId
                                        ))
                                        ? classNames(
                                              styles['list-link'],
                                              styles['highlight']
                                          )
                                        : styles['list-link']
                                }
                            >
                                {item.title}
                            </Link>
                            {item.children &&
                                item.children.length > 0 &&
                                renderTOC(item.children, level + 1)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div>
            <p
                className={classNames(
                    styles['right-column-title'],
                    montserrat.className,
                    position ? styles[position] : ''
                )}
            >
                Table of Contents
            </p>
            <nav
                className={classNames(
                    styles['table-of-contents'],
                    position ? styles[position] : ''
                )}
            >
                {renderTOC(toc)}
            </nav>
        </div>
    );
};
