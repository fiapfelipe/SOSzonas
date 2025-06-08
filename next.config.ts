/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/abrigos',
        destination: 'https://api-java-gs-production.up.railway.app/abrigos',
      },
      {
        source: '/api/comidas',
        destination: 'https://api-java-gs-production.up.railway.app/comidas',
      },
      {
        source: '/api/aguas',
        destination: 'https://api-java-gs-production.up.railway.app/aguas',
      },
            {
        source: '/api/mensagens',
        destination: 'https://api-java-gs-production.up.railway.app/mensagens',
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
