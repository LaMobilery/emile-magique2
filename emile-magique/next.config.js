/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "https://lamobilery.github.io/emile-magique/" : undefined,
  images: {
    path: "/emile-magique/",
  },
};

module.exports = nextConfig;
