"use client";

import { useState } from "react";
import { RepoCardClient } from "./RepoCardClient";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RepoWithSummary {
  name: string;
  description: string;
  folder: string;
  stars: string | number;
  tags?: string[];
  summary: string;
}

interface RepoListClientProps {
  repos: RepoWithSummary[];
  dateSince: string;
}

export function RepoListClient({ repos, dateSince }: RepoListClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRepos = repos.filter(repo => {
    const term = searchTerm.toLowerCase();
    return (
      repo.name.toLowerCase().includes(term) ||
      repo.description.toLowerCase().includes(term) ||
      (repo.tags && repo.tags.some(tag => tag.toLowerCase().includes(term)))
    );
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Search Bar */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm repository, mô tả hoặc tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder-zinc-500 backdrop-blur-md transition-all focus:border-purple-500/50 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-purple-500/10"
        />
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo, index) => (
              <motion.div
                key={repo.folder}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <RepoCardClient
                  repo={repo}
                  index={index}
                  dateSince={dateSince}
                  summary={repo.summary}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center text-zinc-500"
            >
              Không tìm thấy repository nào phù hợp.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
