import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** 親ディレクトリの lockfile により Turbopack が誤ったルートを採るのを防ぐ（ローカルで一部ルートが 404 になる対策） */
const turbopackRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
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
