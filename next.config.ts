import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains"
          }
        ]
      }
    ];
  },
  images: {
    domains: ['www.utaraska.co.jp'],
    unoptimized: false
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://www.utaraska.co.jp' : '',
  trailingSlash: false
};

export default nextConfig;
