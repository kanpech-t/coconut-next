import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Add a rule to handle SVG files as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
