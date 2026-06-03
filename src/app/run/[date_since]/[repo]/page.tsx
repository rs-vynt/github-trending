import { getRun, getRepoContent } from "@/lib/data";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { TabsClient } from "@/components/ui/TabsClient";

export default async function RepoPage({ params }: { params: Promise<{ date_since: string, repo: string }> }) {
  const p = await params;
  const [date, since] = p.date_since.split("_");
  
  const run = await getRun(date, since);
  if (!run) notFound();

  const repo = run.repos.find((r) => r.folder === p.repo);
  if (!repo) notFound();

  const content = await getRepoContent(p.repo);
  if (!content) notFound();

  return (
    <div>
      <Link href={`/run/${p.date_since}`} className="mb-8 inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Back to {date}
      </Link>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
        <header className="mb-8 border-b border-white/10 pb-8">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {repo.name}
          </h1>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <Badge className="text-sm px-3 py-1">⭐ {repo.stars}</Badge>
            <a
              href={`https://github.com/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
            >
              View on GitHub <ExternalLink size={14} />
            </a>
          </div>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            {repo.descriptionVi || repo.description}
          </p>
        </header>

        <TabsClient
          summary={content.summary}
          readmeTranslated={content.readmeTranslated}
          readmeOriginal={content.readmeOriginal}
          repoFullName={repo.name}
          branch={repo.default_branch || "main"}
        />
      </div>
    </div>
  );
}
