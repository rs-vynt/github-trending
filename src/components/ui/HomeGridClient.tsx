"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { motion, Variants } from "framer-motion";
import { Calendar, Layers } from "lucide-react";

interface Run {
  date: string;
  since: string;
  total_fetched: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function HomeGridClient({ runs }: { runs: Run[] }) {
  if (runs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-12 text-center backdrop-blur-sm">
        <Layers className="mb-4 text-zinc-500" size={48} />
        <p className="text-xl text-zinc-400">Chưa có dữ liệu nào. Hãy chạy scraper!</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {runs.map((run) => (
        <motion.div key={`${run.date}_${run.since}`} variants={itemVariants}>
          <Link href={`/run/${run.date}_${run.since}`} target="_blank">
            <Card className="group relative flex h-full flex-col justify-between overflow-hidden border-white/5 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-emerald-400">
                  <Calendar size={14} />
                  {run.date}
                </div>
                <h2 className="mb-2 text-2xl font-bold capitalize text-white group-hover:text-emerald-300 transition-colors">
                  Bản tin {run.since}
                </h2>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <p className="text-sm text-zinc-300">
                  <span className="font-bold text-zinc-100">{run.total_fetched}</span> Repositories
                </p>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-300 transition-colors group-hover:bg-emerald-500/20 group-hover:text-emerald-300">
                  →
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
