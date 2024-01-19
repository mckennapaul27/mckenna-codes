'use client';
import { useEffect, useState } from 'react';

export const useMedia = (
    queries: string[],
    values: number[],
    defaultValue: number
) => {
    const match = () =>
        values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue;
    //  const match = () => {
    //      // Check if `window` is defined
    //      if (typeof window !== 'undefined') {
    //          return (
    //              values[
    //                  queries.findIndex((q) => window.matchMedia(q).matches)
    //              ] || defaultValue
    //          );
    //      }
    //      // Return default value if `window` is not defined
    //      return defaultValue;
    //  };
    const [value, set] = useState(5);
    useEffect(() => {
        set(match);
        const handler = () => set(match);
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);
    return value;
};
