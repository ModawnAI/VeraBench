"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { RankBadge } from "@/components/ui/rank-badge";
import { AnimatedProgress, ScoreBadge } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { ProviderLogo } from "@/components/icons/provider-logos";
import { getLeaderboardEntries } from "@/data/scores";
import { benchmarkCategories } from "@/data/benchmarks";
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronRight,
} from "lucide-react";
import type { LeaderboardEntry, BenchmarkCategoryId } from "@/types";

type SortField = "overall" | BenchmarkCategoryId;
type SortOrder = "asc" | "desc";

export function LeaderboardTable() {
  const [sortField, setSortField] = useState<SortField>("overall");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | BenchmarkCategoryId
  >("all");

  const entries = getLeaderboardEntries();

  const sortedEntries = useMemo(() => {
    return [...entries].sort((a, b) => {
      let aValue: number;
      let bValue: number;

      if (sortField === "overall") {
        aValue = a.result.overallScore;
        bValue = b.result.overallScore;
      } else {
        aValue =
          a.result.categoryScores.find((c) => c.categoryId === sortField)
            ?.score || 0;
        bValue =
          b.result.categoryScores.find((c) => c.categoryId === sortField)
            ?.score || 0;
      }

      return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
    });
  }, [entries, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    } else {
      setSortField(field);
      setSortOrder("desc");
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown size={14} className="text-[#888]" />;
    return sortOrder === "desc" ? (
      <ArrowDown size={14} className="text-[#D85A5A]" />
    ) : (
      <ArrowUp size={14} className="text-[#D85A5A]" />
    );
  };

  return (
    <section id="leaderboard" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-4">
              Rankings
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
              LLM Leaderboard
            </h2>
            <p className="text-base text-[#666] max-w-2xl mx-auto">
              Comprehensive benchmark results for frontier models in aesthetic
              medicine
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                selectedCategory === "all"
                  ? "bg-[#D85A5A] text-white"
                  : "border border-[#DDD] text-[#666] hover:border-[#CCC]"
              )}
            >
              All Categories
            </button>
            {benchmarkCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  selectedCategory === category.id
                    ? "bg-[#D85A5A] text-white"
                    : "border border-[#DDD] text-[#666] hover:border-[#CCC]"
                )}
              >
                {category.shortName}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-xl border border-[#EEE] overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#FAFAFA]">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#666] uppercase tracking-wider w-16">
                      Rank
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#666] uppercase tracking-wider">
                      Model
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#666] uppercase tracking-wider">
                      <button
                        onClick={() => handleSort("overall")}
                        className="flex items-center gap-1 hover:text-[#D85A5A] transition-colors"
                      >
                        Overall Score
                        <SortIcon field="overall" />
                      </button>
                    </th>
                    {benchmarkCategories.map((category) => (
                      <th
                        key={category.id}
                        className="px-4 py-4 text-left text-xs font-medium text-[#666] uppercase tracking-wider hidden lg:table-cell"
                      >
                        <button
                          onClick={() => handleSort(category.id)}
                          className="flex items-center gap-1 hover:text-[#D85A5A] transition-colors"
                        >
                          {category.shortName}
                          <SortIcon field={category.id} />
                        </button>
                      </th>
                    ))}
                    <th className="px-4 py-4 text-right text-xs font-medium text-[#666] uppercase tracking-wider w-20">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence mode="popLayout">
                    {sortedEntries.map((entry, index) => (
                      <LeaderboardRow
                        key={entry.model.id}
                        entry={entry}
                        rank={index + 1}
                        index={index}
                      />
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface LeaderboardRowProps {
  entry: LeaderboardEntry;
  rank: number;
  index: number;
}

function LeaderboardRow({ entry, rank, index }: LeaderboardRowProps) {
  const { model, result } = entry;

  return (
    <motion.tr
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-[#EEE] hover:bg-[#FAFAFA] transition-colors"
    >
      {/* Rank */}
      <td className="px-6 py-5">
        <RankBadge rank={rank} size="md" />
      </td>

      {/* Model Info */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#F5F5F5] flex items-center justify-center flex-shrink-0 border border-[#EEE]">
            <ProviderLogo providerId={model.provider.id} size={24} />
          </div>
          <div>
            <p className="font-medium text-[#1A1A1A]">{model.name}</p>
            <p className="text-xs text-[#888]">{model.provider.name}</p>
          </div>
        </div>
      </td>

      {/* Overall Score */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold text-[#1A1A1A] w-12">
            {result.overallScore.toFixed(1)}
          </span>
          <AnimatedProgress
            value={result.overallScore}
            max={100}
            size="sm"
            showLabel={false}
            delay={index * 0.1}
            className="w-24"
          />
        </div>
      </td>

      {/* Category Scores */}
      {benchmarkCategories.map((category) => {
        const categoryScore = result.categoryScores.find(
          (c) => c.categoryId === category.id
        );
        return (
          <td
            key={category.id}
            className="px-4 py-5 hidden lg:table-cell"
          >
            <ScoreBadge score={categoryScore?.score || 0} size="sm" />
          </td>
        );
      })}

      {/* Details Link */}
      <td className="px-4 py-5 text-right">
        <Link href={`/models/${model.id}`}>
          <Button variant="ghost" size="sm" className="group">
            <ChevronRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Button>
        </Link>
      </td>
    </motion.tr>
  );
}
