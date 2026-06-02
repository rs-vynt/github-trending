"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

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
    <div>
      <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
        {(Object.entries(tabs) as [keyof typeof tabs, { label: string }][]).map(([id, tab]) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={cn(
              "px-5 py-2.5 rounded-lg font-medium transition-all duration-200",
              activeTab === id
                ? "bg-white/10 text-white shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="prose prose-invert prose-purple max-w-none prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10">
        <div className="break-words">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {tabs[activeTab].content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
