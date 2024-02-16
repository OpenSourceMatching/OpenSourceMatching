/** @type {import('next').NextConfig} */

const nextConfig = {
  // Allow google images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: ''
      }
    ]
  },
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
