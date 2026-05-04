import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.gamedistribution.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
