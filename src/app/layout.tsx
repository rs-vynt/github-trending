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
        <main className="mx-auto max-w-6xl px-6 py-12 md:px-12 min-h-screen">
          {children}
        </main>
        <footer className="py-8 text-center mt-12 border-t border-white/5 space-y-4">
          <p className="text-zinc-500 text-xs max-w-2xl mx-auto leading-relaxed px-6">
            <span className="font-semibold">Disclaimer:</span> This project is for educational and reference purposes only, and is not officially affiliated with GitHub. The trending data is collected automatically and may be delayed or contain inaccuracies.
          </p>
        </footer>

        <div className="fixed bottom-6 right-6 z-50">
          <div className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-lg shadow-lg transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-950/40 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:-translate-y-1">
            <Sparkles className="w-4 h-4 text-emerald-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-emerald-400" />
            <span className="text-xs font-mono text-zinc-400">
              crafted by <a href="https://github.com/vynt" target="_blank" className="font-bold text-zinc-200 hover:text-emerald-400 transition-colors">vynt</a>
            </span>
          </div>
        </div>
      </body>
    </html>
  );
}
