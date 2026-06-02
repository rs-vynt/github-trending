import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Sparkles } from "lucide-react";

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
      <body className={`${inter.className} antialiased selection:bg-emerald-500/30 selection:text-emerald-200`}>
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/5 bg-[#09090b]/60 px-6 py-4 backdrop-blur-xl md:px-12">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white hover:text-emerald-400 transition-colors">
            <span className="font-extrabold text-2xl tracking-tight text-white">
              GitHub<span className="text-emerald-400">Trending</span>
            </span>
          </Link>
        </nav>
        <main className="mx-auto max-w-6xl px-6 py-12 md:px-12">
          {children}
        </main>
      </body>
    </html>
  );
}
