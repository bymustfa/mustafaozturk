/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@react-email/render", "rss-parser"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/history", destination: "/about", permanent: true },
      { source: "/more", destination: "/writing", permanent: true },
    ];
  },
};

module.exports = nextConfig;
