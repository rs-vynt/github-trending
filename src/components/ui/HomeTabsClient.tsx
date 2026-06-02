"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock } from "lucide-react";
import { GlobalSearchClient } from "./GlobalSearchClient";
import { HomeGridClient } from "./HomeGridClient";

interface HomeTabsClientProps {
  runs: any[];
  searchIndex: any[];
}

export function HomeTabsClient({ runs, searchIndex }: HomeTabsClientProps) {
  const [activeTab, setActiveTab] = useState<"explore" | "history">("history");

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
          <button
            onClick={() => setActiveTab("explore")}
            className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors z-10 ${
              activeTab === "explore" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {activeTab === "explore" && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/30 rounded-full -z-10 shadow-lg shadow-emerald-500/10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Search size={16} className={activeTab === "explore" ? "text-emerald-400" : ""} />
            Khám phá
          </button>
          
          <button
            onClick={() => setActiveTab("history")}
            className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors z-10 ${
              activeTab === "history" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {activeTab === "history" && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/30 rounded-full -z-10 shadow-lg shadow-emerald-500/10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Clock size={16} className={activeTab === "history" ? "text-emerald-400" : ""} />
            Lịch sử cào
          </button>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          {activeTab === "explore" && (
            <motion.div
              key="explore"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <GlobalSearchClient repos={searchIndex} />
            </motion.div>
          )}
          
          {activeTab === "history" && (
            <motion.div
              key="history"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">Các đợt Scraping</h2>
                <div className="text-sm font-medium text-zinc-500">{runs.length} bản ghi</div>
              </div>
              <HomeGridClient runs={runs} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
