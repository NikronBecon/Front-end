/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['imgs.xkcd.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgs.xkcd.com',
                port: '',
                pathname: '/comics/**',
            },
        ],
    },
};

export default nextConfig;
