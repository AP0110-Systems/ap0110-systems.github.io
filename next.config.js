/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
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
    
    return config
  }
}

module.exports = nextConfig
