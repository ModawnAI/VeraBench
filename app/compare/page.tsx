"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RankBadge } from "@/components/ui/rank-badge";
import { AnimatedProgress, ScoreBadge } from "@/components/ui/animated-counter";
import { RadarChart } from "@/components/charts/radar-chart";
import { ProviderLogo } from "@/components/icons/provider-logos";
import { getLeaderboardEntries } from "@/data/scores";
import { benchmarkCategories } from "@/data/benchmarks";
import { ChevronDown, X, Plus } from "lucide-react";
import type { LeaderboardEntry } from "@/types";

// Vera Crimson-based colors only
const MODEL_COLORS = ["#D85A5A", "#1A1A1A", "#888888", "#C04A4A"];

export default function ComparePage() {
  const entries = getLeaderboardEntries();
  const [selectedModels, setSelectedModels] = useState<LeaderboardEntry[]>([
    entries[0],
    entries[1],
  ]);
  const [showSelector, setShowSelector] = useState<number | null>(null);

  const addModel = (entry: LeaderboardEntry, slot: number) => {
    const newSelected = [...selectedModels];
    newSelected[slot] = entry;
    setSelectedModels(newSelected);
    setShowSelector(null);
  };

  const removeModel = (index: number) => {
    if (selectedModels.length > 2) {
      setSelectedModels(selectedModels.filter((_, i) => i !== index));
    }
  };

  const addSlot = () => {
    if (selectedModels.length < 4) {
      const unusedModel = entries.find(
        (e) => !selectedModels.some((s) => s.model.id === e.model.id)
      );
      if (unusedModel) {
        setSelectedModels([...selectedModels, unusedModel]);
      }
    }
  };

  const radarData = selectedModels.map((entry) => ({
    modelId: entry.model.id,
    modelName: entry.model.name,
    scores: benchmarkCategories.map(
      (c) =>
        entry.result.categoryScores.find((cs) => cs.categoryId === c.id)
          ?.score || 0
    ),
  }));

  return (
    <div className="pt-20 min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <section className="py-12 bg-white border-b border-[#EEE]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-4">
              Head-to-Head
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
              Model Comparison
            </h1>
            <p className="text-[#666] max-w-xl mx-auto">
              Compare up to 4 models side-by-side to see how they perform across
              different benchmark categories.
            </p>
          </div>
        </div>
      </section>

      {/* Model Selector */}
      <section className="py-8 bg-white border-b border-[#EEE]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {selectedModels.map((entry, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() =>
                      setShowSelector(showSelector === index ? null : index)
                    }
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all",
                      "hover:border-[#D85A5A]/50 bg-white"
                    )}
                    style={{
                      borderColor: MODEL_COLORS[index],
                    }}
                  >
                    <div className="w-6 h-6 rounded flex items-center justify-center bg-[#F5F5F5]">
                      <ProviderLogo providerId={entry.model.provider.id} size={16} />
                    </div>
                    <span className="font-medium text-[#1A1A1A]">
                      {entry.model.name}
                    </span>
                    <ChevronDown size={16} className="text-[#888]" />
                    {selectedModels.length > 2 && (
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation();
                          removeModel(index);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.stopPropagation();
                            removeModel(index);
                          }
                        }}
                        className="ml-2 p-1 hover:bg-[#F5F5F5] rounded cursor-pointer"
                      >
                        <X size={14} className="text-[#888]" />
                      </span>
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {showSelector === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-[#EEE] shadow-lg z-10 overflow-hidden"
                      >
                        {entries.map((e) => (
                          <button
                            key={e.model.id}
                            onClick={() => addModel(e, index)}
                            className={cn(
                              "w-full px-4 py-3 text-left hover:bg-[#FAFAFA] transition-colors flex items-center justify-between",
                              selectedModels.some(
                                (s) => s.model.id === e.model.id
                              ) && "opacity-50"
                            )}
                            disabled={selectedModels.some(
                              (s) =>
                                s.model.id === e.model.id &&
                                s.model.id !== entry.model.id
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <ProviderLogo providerId={e.model.provider.id} size={20} />
                              <div>
                                <p className="font-medium text-[#1A1A1A]">
                                  {e.model.name}
                                </p>
                                <p className="text-xs text-[#888]">
                                  {e.model.provider.name}
                                </p>
                              </div>
                            </div>
                            <ScoreBadge score={e.result.overallScore} size="sm" />
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {selectedModels.length < 4 && (
                <Button
                  variant="outline"
                  onClick={addSlot}
                  className="gap-2 border-[#DDD] text-[#666] hover:border-[#D85A5A] hover:text-[#D85A5A]"
                >
                  <Plus size={16} />
                  Add Model
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Radar Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">
                  Performance Comparison
                </h3>
                <RadarChart
                  labels={benchmarkCategories.map((c) => c.shortName)}
                  models={radarData}
                  className="border-0 p-0"
                />
              </Card>

              {/* Overall Scores */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">
                  Overall Scores
                </h3>
                <div className="space-y-4">
                  {selectedModels
                    .sort((a, b) => b.result.overallScore - a.result.overallScore)
                    .map((entry, index) => (
                      <motion.div
                        key={entry.model.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-[#FAFAFA]"
                      >
                        <RankBadge rank={index + 1} size="md" />
                        <div className="w-8 h-8 rounded flex items-center justify-center bg-white border border-[#EEE]">
                          <ProviderLogo providerId={entry.model.provider.id} size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-[#1A1A1A]">
                            {entry.model.name}
                          </p>
                          <p className="text-xs text-[#888]">
                            {entry.model.provider.name}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <AnimatedProgress
                            value={entry.result.overallScore}
                            max={100}
                            size="sm"
                            showLabel={false}
                            delay={index * 0.1}
                            className="w-24"
                          />
                          <span className="text-lg font-bold text-[#D85A5A] w-12 text-right">
                            {entry.result.overallScore.toFixed(1)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </Card>
            </div>

            {/* Category Comparison */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">
                Category Breakdown
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {benchmarkCategories.map((category) => (
                  <Card key={category.id} className="p-6">
                    <h4 className="font-medium text-[#1A1A1A] mb-4">
                      {category.name}
                    </h4>
                    <div className="space-y-3">
                      {selectedModels
                        .map((entry) => {
                          const score = entry.result.categoryScores.find(
                            (c) => c.categoryId === category.id
                          );
                          return { entry, score: score?.score || 0 };
                        })
                        .sort((a, b) => b.score - a.score)
                        .map(({ entry, score }, index) => (
                          <div
                            key={entry.model.id}
                            className="flex items-center gap-3"
                          >
                            <span className="text-sm text-[#888] w-4">
                              {index + 1}.
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-[#1A1A1A]">
                                  {entry.model.name}
                                </span>
                                <span className="text-sm font-bold text-[#1A1A1A]">
                                  {score.toFixed(1)}
                                </span>
                              </div>
                              <AnimatedProgress
                                value={score}
                                max={100}
                                size="sm"
                                showLabel={false}
                                gradient={index === 0}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
