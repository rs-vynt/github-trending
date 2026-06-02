"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { X, ExternalLink, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Repo {
  name: string;
  description: string;
  folder: string;
  stars: string | number;
  tags?: string[];
}

interface RepoCardClientProps {
  repo: Repo;
  index?: number;
  dateSince?: string;
  summary: string;
}


export function RepoCardClient({ repo, index, dateSince, summary }: RepoCardClientProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Prevent background scrolling when sheet is open
  useEffect(() => {
    if (isSheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSheetOpen]);

  return (
    <>
      <Card className="group relative flex flex-col gap-4 overflow-hidden border-white/5 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-500/10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="flex flex-wrap items-start justify-between gap-4">
          <Link href={dateSince ? `/run/${dateSince}/${repo.folder}` : `/repo/${repo.folder}`} target="_blank" className="group/link transition-colors flex-1 min-w-[200px]">
            <h2 className="text-2xl font-bold text-white group-hover/link:text-emerald-400">
              {index !== undefined && <span className="text-zinc-500 font-mono text-xl mr-2">{String(index + 1).padStart(2, '0')}.</span>}
              {repo.name}
            </h2>
          </Link>
          <div className="flex items-center gap-3 shrink-0">

            <Badge className="bg-white/10 text-zinc-200 border-white/10 flex items-center gap-1">
              <Star size={14} className="text-amber-400" /> {repo.stars}
            </Badge>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsSheetOpen(true);
              }}
              className="whitespace-nowrap text-xs font-semibold px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 transition-all border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
            >
              Xem nhanh Tóm tắt
            </button>
          </div>
        </div>
        <p className="text-zinc-400 leading-relaxed max-w-4xl flex-1">
          {repo.description}
        </p>
        
        {repo.tags && repo.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 pt-4 border-t border-white/5">
            {repo.tags.map(tag => (
              <Badge key={tag} className="px-2.5 py-0.5 border bg-zinc-800/50 border-white/10 text-zinc-300 text-xs font-medium">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </Card>

      {/* Side Sheet Slide-over */}
      <AnimatePresence>
        {isSheetOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsSheetOpen(false)}
            />
            
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="pointer-events-auto w-screen max-w-2xl"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-[#09090b] shadow-2xl border-l border-white/10">
                  <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#09090b]/80 px-6 py-4 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <h2 className="text-2xl font-bold text-white">{repo.name}</h2>
                      <Link
                        href={dateSince ? `/run/${dateSince}/${repo.folder}` : `/repo/${repo.folder}`}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 px-3 py-1 rounded-full"
                      >
                        Mở chi tiết <ExternalLink size={14} />
                      </Link>
                    </div>
                    <button
                      onClick={() => setIsSheetOpen(false)}
                      className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <div className="relative flex-1 px-6 py-8">
                    <div className="prose prose-invert max-w-none prose-h1:text-2xl prose-h2:text-xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2 prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-img:rounded-xl">
                      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {summary}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
