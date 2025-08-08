const nextConfig = {
  experimental: {
    serverActions: {
      enabled: true,
    },
  },
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
    const uploadsUrl =
      process.env.NEXT_PUBLIC_UPLOADS_URL || 'http://localhost:3001/uploads';
    const apiDocker = process.env.NEXT_PUBLIC_API_URL || 'http://server:3001/api';
    const uploadsDocker = process.env.NEXT_PUBLIC_API_URL || 'http://server:3001/uploads';

    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `${uploadsUrl}/:path*`,
      },
    ];
  },
  // Удалите `devIndicators`, так как это устаревшая опция
};

module.exports = nextConfig;
