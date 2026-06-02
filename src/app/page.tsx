import { getRuns } from "@/lib/data";
import { HomeGridClient } from "@/components/ui/HomeGridClient";

export default async function Home() {
  const runs = await getRuns();

  return (
    <div className="flex flex-col gap-12">
      <header className="relative flex flex-col items-center text-center">
        <div className="absolute -top-24 left-1/4 -z-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute -top-24 right-1/4 -z-10 h-64 w-64 rounded-full bg-zinc-500/10 blur-[120px]" />
        
        <div className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300 backdrop-blur-md">
          ✨ Tự động tổng hợp bằng AI
        </div>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Dashboard <br className="hidden sm:block" />
          <span className="text-emerald-400">
            Lịch Sử Trending
          </span>
        </h1>
        <p className="max-w-2xl text-lg text-zinc-400 sm:text-xl">
          Theo dõi các dự án mã nguồn mở nổi bật nhất trên GitHub, được phân tích và tóm tắt tự động bởi AI.
        </p>
      </header>

      <section className="w-full">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Các bản tin gần đây</h2>
          <div className="text-sm font-medium text-zinc-500">{runs.length} bản ghi</div>
        </div>
        
        <HomeGridClient runs={runs} />
      </section>
    </div>
  );
}
