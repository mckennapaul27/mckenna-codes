/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'localhost', port: '', protocol: 'http' },
            {
                hostname: 'res.cloudinary.com',
                port: '',
                protocol: 'https',
            },
        ],
    },
};

module.exports = nextConfig;
