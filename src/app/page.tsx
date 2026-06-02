import { getRuns, getSearchIndex } from "@/lib/data";
import { HomeTabsClient } from "@/components/ui/HomeTabsClient";

export default async function Home() {
  const runs = await getRuns();
  const searchIndex = await getSearchIndex();

  return (
    <div className="flex flex-col gap-12">
      <header className="relative flex flex-col items-center text-center">
        <div className="absolute -top-24 left-1/4 -z-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute -top-24 right-1/4 -z-10 h-64 w-64 rounded-full bg-zinc-500/10 blur-[120px]" />
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          GitHub Trending <br className="hidden sm:block" />
          <span className="text-emerald-400">
            Explorer
          </span>
        </h1>
        <p className="max-w-2xl text-lg text-zinc-400 sm:text-xl">
          Khám phá hệ sinh thái mã nguồn mở dễ dàng hơn bao giờ hết nhờ bộ máy tìm kiếm cục bộ và AI phân loại thông minh.
        </p>
      </header>

      {/* Tabs Section */}
      <section className="w-full relative z-10">
        <HomeTabsClient runs={runs} searchIndex={searchIndex} />
      </section>
    </div>
  );
}
