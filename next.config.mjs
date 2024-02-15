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
};

export default nextConfig;
