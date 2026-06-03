"use client";

import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { motion, AnimatePresence } from "framer-motion";

interface TabsProps {
  summary: string;
  readmeTranslated: string;
  readmeOriginal: string;
  repoFullName: string;
  branch?: string;
}

export function TabsClient({ summary, readmeTranslated, readmeOriginal, repoFullName, branch }: TabsProps) {
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
              <ReactMarkdown 
                urlTransform={(url) => url}
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[
                  rehypeRaw, 
                  [rehypeSanitize, {
                    ...defaultSchema,
                    protocols: {
                      ...defaultSchema.protocols,
                      src: ['http', 'https', 'data']
                    }
                  }]
                ]}
                components={{
                  img({ node, src, ...props }: ImgHTMLAttributes<HTMLImageElement> & { node?: unknown }) {
                    void node;
                    let finalSrc = typeof src === "string" ? src : "";
                    if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
                      if (finalSrc.startsWith("//")) {
                        finalSrc = "https:" + finalSrc;
                      } else {
                        // 1. Decode URI component to handle %5C (encoded backslashes) from ReactMarkdown
                        let decodedSrc = finalSrc;
                        try {
                          decodedSrc = decodeURIComponent(finalSrc);
                        } catch (e) {
                          decodedSrc = finalSrc.replace(/%5C/gi, '\\');
                        }
                        const posixPath = decodedSrc.replace(/\\/g, '/');
                        
                        // 2. Resolve the path against a dummy base root to natively normalize traversals
                        try {
                          const dummyBase = 'http://dummy.local/';
                          const normalizedUrl = new URL(posixPath, dummyBase);
                          
                          // 3. Extract the resulting normalized pathname without the leading slash
                          const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;

                          const branchName = branch || "main";
                          const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`;
                          finalSrc = `${baseUrl}${cleanPath}`;
                        } catch (err) {
                          // Fallback on Invalid URL DoS vector
                          finalSrc = "";
                        }
                      }
                    }
                    return <img {...props} src={finalSrc || (typeof src === "string" ? src : undefined)} />;
                  }
                }}
              >
                {tabs[activeTab].content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
