/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/blog',
    experimental: {
      appDir: true,
    },
  }

module.exports = nextConfig
