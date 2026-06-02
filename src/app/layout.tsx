import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub Trending Dashboard",
  description: "Bản tin cập nhật GitHub Trending hàng ngày bằng AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#09090b]/80 px-12 py-6 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold hover:text-purple-400 transition-colors">
            🚀 Trending Intelligence
          </Link>
        </nav>
        <main className="mx-auto max-w-5xl px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
