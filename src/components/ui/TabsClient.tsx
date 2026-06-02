"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { motion, AnimatePresence } from "framer-motion";

interface TabsProps {
  summary: string;
  readmeTranslated: string;
  readmeOriginal: string;
}

export function TabsClient({ summary, readmeTranslated, readmeOriginal }: TabsProps) {
  const [activeTab, setActiveTab] = useState<"summary" | "translated" | "original">("summary");

  const tabs = {
    summary: { label: "✨ Tóm Tắt AI", content: summary },
    translated: { label: "🇻🇳 README Dịch", content: readmeTranslated },
    original: { label: "🌐 README Gốc", content: readmeOriginal },
  } as const;

  return (
    <div className="flex flex-col gap-8">
      {/* Animated Segmented Control */}
      <div className="relative flex w-fit rounded-full bg-white/5 p-1 backdrop-blur-md border border-white/10">
        {(Object.entries(tabs) as [keyof typeof tabs, { label: string }][]).map(([id, tab]) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={cn(
                "relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors z-10",
                isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
              )}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 -z-10 rounded-full bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)] border border-purple-500/30"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="prose prose-invert prose-purple max-w-none prose-h1:text-3xl prose-h2:text-2xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2 prose-pre:bg-[#09090b] prose-pre:border prose-pre:border-white/10 prose-img:rounded-2xl"
          >
            <div className="break-words">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {tabs[activeTab].content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
