/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@react-email/render"],
  },

  images: {
    domains: ["cdn-images-1.medium.com"],
  },
};

module.exports = nextConfig;
