import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "こだわりのゆるさ アパレルブランド | utaraska odd",
  description: "妥協しないこだわりの\"ゆるさ\"には自信があります。Tシャツ、パーカー、トレーナーなど豊富なラインナップ。日々のコーデにちょっとしたあそびゴコロを添えます。",
  icons: {
    icon: "/designshelf/images/favicon.ico",
  },
};

export default function DesignShelfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

