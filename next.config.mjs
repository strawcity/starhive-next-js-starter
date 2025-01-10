/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // TODO: !!
        remotePatterns: [{
            protocol: 'https',
            hostname: 'media.starhive.com',
            port: '',
            pathname: '/**'
        }, {
            protocol: 'https',
            hostname: 'api.dev.starhive.io',
            port: '',
            pathname: '/**'
        }]
    },
};

export default nextConfig;
