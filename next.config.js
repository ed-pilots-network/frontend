const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['edpn.com'],
  },
  eslint: { dirs: ['.'] },
};

module.exports = withBundleAnalyzer(nextConfig);
