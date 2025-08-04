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
    ];
  },
  devIndicators: {
    buildActivity: true,
  },
};

module.exports = nextConfig;
