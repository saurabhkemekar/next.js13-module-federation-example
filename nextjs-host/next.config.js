/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const ModuleFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          remote:
            "nextjs-remote@http://localhost:3001/_next/static/chunks/remoteEntry.js",
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
