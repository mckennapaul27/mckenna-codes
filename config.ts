export const url =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : process.env.NEXT_PUBLIC_URL;
