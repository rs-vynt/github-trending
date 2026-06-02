import { getRun, getRepoContent } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { RepoCardClient } from "@/components/ui/RepoCardClient";

export default async function RunPage({ params }: { params: Promise<{ date_since: string }> }) {
  const p = await params;
  const [date, since] = p.date_since.split("_");
  const run = await getRun(date, since);

  if (!run) {
    notFound();
  }

  return (
    <div>
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Back to Dashboard
      </Link>

      <header className="mb-12">
        <h1 className="mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent capitalize">
          Bản tin {run.since} - {run.date}
        </h1>
        <p className="text-xl text-zinc-400">
          Tìm thấy {run.total_fetched} repositories nổi bật.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {await Promise.all(
          run.repos.map(async (repo, index) => {
            const content = await getRepoContent(date, since, repo.folder);
            const summary = content ? content.summary : "Chưa có bản tóm tắt AI.";
            return (
              <RepoCardClient
                key={repo.folder}
                repo={repo}
                index={index}
                dateSince={p.date_since}
                summary={summary}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
