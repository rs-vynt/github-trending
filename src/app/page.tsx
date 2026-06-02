import { getRuns } from "@/lib/data";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default async function Home() {
  const runs = await getRuns();

  return (
    <div>
      <header className="mb-12 text-center">
        <h1 className="mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent">
          Dashboard Lịch Sử
        </h1>
        <p className="text-xl text-zinc-400">
          Danh sách các lần cào dữ liệu GitHub Trending
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {runs.map((run) => (
          <Link
            key={`${run.date}_${run.since}`}
            href={`/run/${run.date}_${run.since}`}
          >
            <Card className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-2 text-sm text-zinc-400">{run.date}</div>
                <h2 className="mb-2 text-2xl font-bold capitalize">
                  Bản tin {run.since}
                </h2>
              </div>
              <p className="mt-4 text-zinc-400">
                {run.total_fetched} Repositories
              </p>
            </Card>
          </Link>
        ))}
        {runs.length === 0 && (
          <p className="col-span-full text-center text-zinc-500">
            Chưa có dữ liệu nào. Hãy chạy scraper!
          </p>
        )}
      </div>
    </div>
  );
}
