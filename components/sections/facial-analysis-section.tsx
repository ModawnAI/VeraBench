"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedProgress } from "@/components/ui/animated-counter";
import { RankBadge } from "@/components/ui/rank-badge";
import { ProviderLogo } from "@/components/icons/provider-logos";
import { getLeaderboardEntries } from "@/data/scores";
import {
  ScanFace,
  Eye,
  Ruler,
  Sparkles,
  Target,
} from "lucide-react";

// Facial analysis sub-categories
const facialSubCategories = [
  {
    id: "facial-proportions",
    name: "Facial Proportions",
    description: "Analysis of facial symmetry and golden ratios",
    icon: Ruler,
  },
  {
    id: "aging-assessment",
    name: "Aging Assessment",
    description: "Volume loss, skin laxity, wrinkle analysis",
    icon: Eye,
  },
  {
    id: "concern-identification",
    name: "Concern Identification",
    description: "Identifying specific aesthetic concerns from images",
    icon: Target,
  },
  {
    id: "treatment-matching",
    name: "Treatment Matching",
    description: "Matching concerns to appropriate treatments",
    icon: Sparkles,
  },
];

export function FacialAnalysisBenchmark() {
  const entries = getLeaderboardEntries();

  // Get facial analysis scores and sort by score
  const facialAnalysisRankings = entries
    .map((entry) => {
      const facialScore = entry.result.categoryScores.find(
        (c) => c.categoryId === "facial-analysis"
      );
      return {
        modelId: entry.model.id,
        modelName: entry.model.name,
        providerId: entry.model.provider.id,
        provider: entry.model.provider.name,
        score: facialScore?.score || 0,
        rank: facialScore?.rank || 0,
      };
    })
    .sort((a, b) => b.score - a.score);

  // Get sub-category scores for the top model
  const topModel = entries.find(
    (e) => e.model.id === facialAnalysisRankings[0]?.modelId
  );
  const subCategoryScores = topModel?.result.subCategoryScores.filter((sc) =>
    facialSubCategories.some((fc) => fc.id === sc.subCategoryId)
  );

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D85A5A]/10 border border-[#D85A5A]/20 mb-6"
            >
              <ScanFace size={16} className="text-[#D85A5A]" />
              <span className="text-[#D85A5A] text-sm font-medium">
                Facial Analysis Benchmark
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4"
            >
              AI Vision Performance
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-[#666] max-w-2xl mx-auto"
            >
              Evaluating how well LLMs with vision capabilities can analyze facial features,
              identify aesthetic concerns, and recommend appropriate treatments.
            </motion.p>
          </div>

          {/* Rankings Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left: Leaderboard */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border border-[#EEE]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                    <ScanFace size={18} className="text-[#D85A5A]" />
                    Facial Analysis Rankings
                  </h3>

                  <div className="space-y-4">
                    {facialAnalysisRankings.map((model, index) => (
                      <motion.div
                        key={model.modelId}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-[#FAFAFA] hover:bg-[#F5F5F5] transition-colors"
                      >
                        <RankBadge rank={index + 1} size="md" />

                        <div className="w-8 h-8 rounded flex items-center justify-center bg-white border border-[#EEE]">
                          <ProviderLogo providerId={model.providerId} size={20} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-[#1A1A1A] font-medium truncate">
                            {model.modelName}
                          </p>
                          <p className="text-[#888] text-xs">{model.provider}</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <AnimatedProgress
                            value={model.score}
                            max={100}
                            size="sm"
                            showLabel={false}
                            gradient={false}
                            delay={0.5 + index * 0.1}
                            className="w-20"
                          />
                          <span className="text-lg font-bold text-[#D85A5A] w-12 text-right">
                            {model.score.toFixed(1)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: Sub-categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border border-[#EEE]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                    <Target size={18} className="text-[#D85A5A]" />
                    Evaluation Categories
                  </h3>

                  <div className="space-y-4">
                    {facialSubCategories.map((category, index) => {
                      const score = subCategoryScores?.find(
                        (sc) => sc.subCategoryId === category.id
                      );
                      const Icon = category.icon;

                      return (
                        <motion.div
                          key={category.id}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="p-4 rounded-xl bg-[#FAFAFA]"
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-[#D85A5A]/10 flex items-center justify-center flex-shrink-0">
                              <Icon size={18} className="text-[#D85A5A]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[#1A1A1A] font-medium">
                                {category.name}
                              </p>
                              <p className="text-[#888] text-xs">
                                {category.description}
                              </p>
                            </div>
                            {score && (
                              <Badge className="flex-shrink-0 bg-[#D85A5A]/10 text-[#D85A5A] border-0">
                                {score.score.toFixed(1)}
                              </Badge>
                            )}
                          </div>

                          {score && (
                            <AnimatedProgress
                              value={score.score}
                              max={100}
                              size="sm"
                              showLabel={false}
                              delay={0.6 + index * 0.1}
                            />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Card className="bg-[#FAFAFA] border-[#EEE] inline-block">
              <CardContent className="p-6">
                <p className="text-[#666] text-sm max-w-2xl">
                  <span className="text-[#D85A5A] font-semibold">
                    {facialAnalysisRankings[0]?.modelName}
                  </span>{" "}
                  leads in facial analysis with a score of{" "}
                  <span className="text-[#D85A5A] font-semibold">
                    {facialAnalysisRankings[0]?.score.toFixed(1)}
                  </span>
                  , excelling at identifying facial proportions and matching
                  concerns to treatments.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
