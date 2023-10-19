/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  env: {
    PUBLIC_URL: "https://lamobilery.github.io/emile-magique/",
  },
  assetPrefix: isProd ? "https://lamobilery.github.io/emile-magique/" : undefined,
};

module.exports = nextConfig;
