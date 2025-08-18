import type { Metadata } from "next";
import { Geist, Geist_Mono, RocknRoll_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rocknRollOne = RocknRoll_One({
  variable: "--font-rocknroll",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ウタラスカ合同会社 - あそびゴコロ至上主義",
  description: "クリエイティブから最先端テクノロジーまで、幅広い領域でビジョンを実現",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rocknRollOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
