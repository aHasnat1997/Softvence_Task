import type { NextConfig } from "next";

// Define the Next.js configuration object
const nextConfig: NextConfig = {
  // Customize the Webpack configuration
  webpack(config) {
    // Add a rule to handle SVG files using @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // Configure image handling for remote patterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  }
};

export default nextConfig;
