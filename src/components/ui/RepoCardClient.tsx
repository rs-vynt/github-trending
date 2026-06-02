"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { X, ExternalLink } from "lucide-react";

interface Repo {
  name: string;
  description: string;
  stars: string;
  folder: string;
  tags?: string[];
}

interface RepoCardClientProps {
  repo: Repo;
  index: number;
  dateSince: string;
  summary: string;
}

export function RepoCardClient({ repo, index, dateSince, summary }: RepoCardClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="flex flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <Link href={`/run/${dateSince}/${repo.folder}`} className="hover:text-purple-400 transition-colors">
            <h2 className="text-2xl font-bold text-white">
              {index + 1}. {repo.name}
            </h2>
          </Link>
          <div className="flex items-center gap-3">
            {repo.tags && repo.tags.length > 0 && (
              <div className="flex gap-2 mr-2">
                {repo.tags.map(tag => (
                  <Badge key={tag} className="bg-zinc-800 text-zinc-300 border-zinc-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            <Badge>⭐ {repo.stars}</Badge>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors border border-purple-500/30"
            >
              Xem nhanh Tóm tắt
            </button>
          </div>
        </div>
        <p className="text-zinc-400 leading-relaxed">
          {repo.description}
        </p>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#09090b] p-6 sm:p-10 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-white/10 pb-6">
              <h2 className="text-3xl font-bold text-white">{repo.name}</h2>
              <Badge>⭐ {repo.stars}</Badge>
              <Link
                href={`/run/${dateSince}/${repo.folder}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Xem chi tiết 3 Tabs <ExternalLink size={14} />
              </Link>
            </div>
            <div className="prose prose-invert prose-purple max-w-none prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {summary}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
