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
  },
  // Added to ignore typescript errors - should eventually be removed
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
