/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['unpkg.com'],
  },
  webpack: (config, { isServer }) => {
    // Handle Three.js and globe.gl for client-side only
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      }
    }
    
    // Ensure Three.js and globe.gl are external for server-side rendering
    if (isServer) {
      config.externals = [...config.externals, 'three', 'globe.gl']
    }
    
    // Configure path aliases for webpack (matching jsconfig.json)
    const path = require('path')
    config.resolve.alias = {
      ...config.resolve.alias,
      '@web-assets': path.resolve(__dirname, 'web-assets'),
    }
    
    // Ensure proper module resolution for @web-assets
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, 'web-assets'),
    ]
    
    return config
  }
}

module.exports = nextConfig
