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

  async rewrites() {
    return [
      // /designshelf は URL を変えずに さくら(サブドメイン) へプロキシ
      {
        source: "/designshelf/:path*",
        destination: "https://designshelf.utaraska.co.jp/:path*"
      }
    ];
  }
};

export default nextConfig;
