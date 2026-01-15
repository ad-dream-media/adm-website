/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ad-dream-media.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
