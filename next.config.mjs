/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shikimori.one',
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
            },
            {
                protocol: 'https',
                hostname: 'static.wikia.nocookie.net',
            },
            {
                protocol: 'https',
                hostname: 'flxt.tmsimg.com',
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
            },
        ],
    },
};

export default nextConfig;
