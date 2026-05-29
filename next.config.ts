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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.utaraska.co.jp',
      },
    ],
    unoptimized: false,
    /** 同一パスで画像を差し替えたとき、最適化キャッシュが古いままになるのを短く抑える */
    minimumCacheTTL: 0,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://www.utaraska.co.jp' : '',
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/designshelf/jp',
        destination: '/odd',
        permanent: true,
      },
      {
        source: '/designshelf/jp/:path*',
        destination: '/odd/:path*',
        permanent: true,
      },
      {
        source: '/designshelf',
        destination: '/odd/en',
        permanent: true,
      },
      {
        source: '/designshelf/:path*',
        destination: '/odd/en/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
