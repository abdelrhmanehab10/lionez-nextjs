<<<<<<< HEAD
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
=======
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
>>>>>>> 972e812142e5f7700d01d29e5c323c377436fcb7
