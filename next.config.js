/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products/voltic',
        destination: '/products/volticlens',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
