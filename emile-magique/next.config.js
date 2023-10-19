/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/",
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
