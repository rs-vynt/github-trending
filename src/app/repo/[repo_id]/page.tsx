import { getRepoById, getRepoContent } from "@/lib/data";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { TabsClient } from "@/components/ui/TabsClient";

export default async function GlobalRepoPage({ params }: { params: Promise<{ repo_id: string }> }) {
  const p = await params;
  
  const repo = await getRepoById(p.repo_id);
  if (!repo) notFound();

  const content = await getRepoContent(p.repo_id);
  if (!content) notFound();

  return (
    <div>
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
        <ArrowLeft size={16} /> Quay lại Tìm kiếm
      </Link>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
        <header className="mb-8 border-b border-white/10 pb-8">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {repo.name}
          </h1>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <Badge className="text-sm px-3 py-1">⭐ {repo.stars?.toLocaleString()}</Badge>
            <a
              href={`https://github.com/${repo.fullName}`}
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
          repoFullName={repo.fullName}
          branch={repo.default_branch || "main"}
        />
      </div>
    </div>
  );
}
