/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel.saleor.cloud'
      },
      {
        protocol: 'https',
        hostname: 'demo.saleor.io'
      },
      {
        protocol: 'https',
        hostname: 'prod.demo.saleor.cloud'
      },
      {
        protocol: 'https',
        hostname: process.env.SALEOR_INSTANCE_URL
      }
    ]
  }
};
