/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/blocked',
        destination: '/',
        permanent: true,
      },
    ];
  },
};


module.exports = nextConfig;
