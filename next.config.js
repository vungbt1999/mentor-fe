/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);

const nextConfig = {
  experimental: {
    appDir: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['cloudflare-ipfs.com'],
  },
}

module.exports = withNextIntl({...nextConfig})

