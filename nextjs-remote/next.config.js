/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "nextjs-remote",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./ButtonApp": "./components/Button",
        },
        shared: {
          react: {
            eager: true,
          },
          "react-dom": {
            eager: true,
          },
        },
      })
    );
    return config;
  },
};
module.exports = nextConfig;
