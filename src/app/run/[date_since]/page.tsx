import { getRun, getRepoContent } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { RepoListClient } from "@/components/ui/RepoListClient";

export default async function RunPage({ params }: { params: Promise<{ date_since: string }> }) {
  const p = await params;
  const [date, since] = p.date_since.split("_");
  const run = await getRun(date, since);

  if (!run) {
    notFound();
  }

  const reposWithSummary = await Promise.all(
    run.repos.map(async (repo) => {
      const content = await getRepoContent(date, since, repo.folder);
      return {
        ...repo,
        summary: content ? content.summary : "Chưa có bản tóm tắt AI."
      };
    })
  );

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
          <ArrowLeft size={16} /> Quay lại Dashboard
        </Link>
        <header className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm">
          <h1 className="mb-3 text-emerald-400 text-4xl font-extrabold capitalize">
            Bản tin {run.since}
          </h1>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="block h-2 w-2 rounded-full bg-emerald-500"></span>
              {run.date}
            </span>
            <span className="text-zinc-600">|</span>
            <span>
              <strong className="text-white">{run.total_fetched}</strong> repositories
            </span>
          </div>
        </header>
      </div>

      <RepoListClient repos={reposWithSummary} dateSince={p.date_since} />
    </div>
  );
}
