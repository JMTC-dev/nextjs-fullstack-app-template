/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'placekitten.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc'
      }
    ]
  }
};

module.exports = nextConfig;
