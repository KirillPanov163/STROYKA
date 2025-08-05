/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      enabled: true,
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://server:3001/api/:path*',
      },
      {
        source: '/uploads/:path*',
        destination: 'http://server:3001/uploads/:path*',
      },
    ];
  },
  devIndicators: {
    buildActivity: true,
  },
};

module.exports = nextConfig;
