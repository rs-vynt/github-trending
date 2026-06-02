"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { Search, Hash, ChevronDown, ChevronUp } from "lucide-react";
import { RepoCardClient } from "./RepoCardClient";
import { motion, AnimatePresence } from "framer-motion";

interface SearchRepo {
  id: string;
  name: string;
  description: string;
  tags?: string[];
  stars?: number;
  folder?: string;
  summary?: string;
}

interface GlobalSearchClientProps {
  repos: SearchRepo[];
}

export function GlobalSearchClient({ repos }: GlobalSearchClientProps) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isTagsExpanded, setIsTagsExpanded] = useState(false);

  // Extract all unique tags and count their frequency
  const { allTags, topTags, remainingTags } = useMemo(() => {
    const tagCounts = new Map<string, number>();
    repos.forEach(r => {
      if (r.tags) {
        r.tags.forEach(t => {
          tagCounts.set(t, (tagCounts.get(t) || 0) + 1);
        });
      }
    });

    // Sort by frequency descending, then alphabetically
    const sortedTags = Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(entry => entry[0]);

    return {
      allTags: sortedTags,
      topTags: sortedTags.slice(0, 8),
      remainingTags: sortedTags.slice(8)
    };
  }, [repos]);

  // Setup Fuse
  const fuse = useMemo(() => {
    return new Fuse(repos, {
      keys: ["name", "description", "tags"],
      threshold: 0.3,
    });
  }, [repos]);

  // Filter repos
  const filteredRepos = useMemo(() => {
    let result = repos;

    if (query.trim() !== "") {
      result = fuse.search(query).map(res => res.item);
    }

    if (selectedTag) {
      result = result.filter(r => r.tags && r.tags.includes(selectedTag));
    }

    // Sort by stars descending
    result = [...result].sort((a, b) => (b.stars || 0) - (a.stars || 0));

    return result;
  }, [query, selectedTag, repos, fuse]);

  // Helper to render tag buttons
  const renderTagButton = (tag: string) => {
    const isSelected = selectedTag === tag;
    return (
      <button
        key={tag}
        onClick={() => setSelectedTag(isSelected ? null : tag)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all border flex items-center gap-1.5 ${
          isSelected
            ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-lg shadow-emerald-500/10"
            : "bg-white/5 border-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200"
        }`}
      >
        <Hash size={14} className={isSelected ? "text-emerald-400" : "text-zinc-500"} /> {tag}
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Search Bar */}
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-500">
          <Search size={20} />
        </div>
        <input
          type="text"
          className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all text-lg backdrop-blur-md shadow-2xl"
          placeholder="Tìm kiếm repository, mô tả hoặc tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Tags Filter (Progressive Disclosure) */}
      {allTags.length > 0 && (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-3">
          {/* Top Row */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedTag === null
                  ? "bg-zinc-100 text-zinc-900 shadow-lg"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200"
              }`}
            >
              Tất cả
            </button>
            
            {/* Top 8 Tags */}
            {topTags.map(renderTagButton)}

            {/* Expand Toggle */}
            {remainingTags.length > 0 && (
              <button
                onClick={() => setIsTagsExpanded(!isTagsExpanded)}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-all bg-white/5 border border-white/5 text-emerald-400 hover:bg-white/10 hover:text-emerald-300 flex items-center gap-1.5"
              >
                {isTagsExpanded ? (
                  <><ChevronUp size={16} /> Thu gọn</>
                ) : (
                  <><ChevronDown size={16} /> +{remainingTags.length} Tags</>
                )}
              </button>
            )}
          </div>

          {/* Expanded Tags */}
          <AnimatePresence>
            {isTagsExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden w-full"
              >
                <div className="flex flex-wrap justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                  {remainingTags.map(renderTagButton)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Results */}
      <div className="mt-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Kết quả khám phá</h2>
          <span className="text-zinc-500 font-medium">{filteredRepos.length} repositories</span>
        </div>
        
        {filteredRepos.length === 0 ? (
          <div className="text-center py-24 border border-white/5 bg-white/5 rounded-2xl backdrop-blur-sm">
            <Search className="mx-auto mb-4 text-zinc-600" size={48} />
            <p className="text-xl text-zinc-400">Không tìm thấy repository nào phù hợp.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <AnimatePresence>
              {filteredRepos.map((repo) => (
                <motion.div
                  key={repo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <RepoCardClient 
                    repo={{
                      name: repo.name,
                      description: repo.description,
                      tags: repo.tags,
                      stars: (repo as any).stars || "N/A",
                      folder: (repo as any).folder || repo.id
                    }}
                    summary={(repo as any).summary || ""}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
