/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@react-email/render"],
  },


  remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
      },
    ],
};

module.exports = nextConfig;
