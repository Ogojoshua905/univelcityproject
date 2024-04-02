/** @type {import('next').NextConfig} */
const nextConfig = {};


module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.pexels.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }
  
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }
