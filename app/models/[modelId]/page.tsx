"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { RankBadge } from "@/components/ui/rank-badge";
import { AnimatedCounter, AnimatedProgress, ScoreBadge } from "@/components/ui/animated-counter";
import { SimpleRadarChart } from "@/components/charts/radar-chart";
import { ProviderLogo } from "@/components/icons/provider-logos";
import { getModelById } from "@/data/models";
import { getResultByModelId } from "@/data/scores";
import { benchmarkCategories, getSubCategoriesByCategoryId } from "@/data/benchmarks";
import {
  ArrowLeft,
  Calendar,
  Layers,
  BookOpen,
  Shield,
  MessageCircle,
  ScanFace,
} from "lucide-react";

const categoryIcons = {
  "treatment-knowledge": BookOpen,
  "safety-contraindications": Shield,
  "consultation-quality": MessageCircle,
  "facial-analysis": ScanFace,
};

export default function ModelDetailPage({
  params,
}: {
  params: Promise<{ modelId: string }>;
}) {
  const { modelId } = use(params);
  const model = getModelById(modelId);
  const result = getResultByModelId(modelId);

  if (!model || !result) {
    notFound();
  }

  const radarLabels = benchmarkCategories.map((c) => c.shortName);
  const radarScores = benchmarkCategories.map(
    (c) => result.categoryScores.find((cs) => cs.categoryId === c.id)?.score || 0
  );

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 bg-[#FAFAFA] border-b border-[#EEE]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#666] hover:text-[#D85A5A] text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Leaderboard
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Model Info */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white border border-[#EEE] flex items-center justify-center">
                    <ProviderLogo providerId={model.provider.id} size={32} />
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold text-[#1A1A1A]">
                      {model.name}
                    </h1>
                    <p className="text-[#666]">{model.provider.name}</p>
                  </div>
                </div>

                <p className="text-[#666] mb-4 max-w-xl">{model.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-[#888]">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Released {model.releaseDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Layers size={14} />
                    <span>{(model.contextWindow / 1000).toFixed(0)}K context</span>
                  </div>
                </div>
              </div>

              {/* Overall Score */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl border border-[#EEE] p-6 text-center min-w-[200px]"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <RankBadge rank={result.overallRank} size="md" />
                  <span className="text-sm text-[#888]">Overall Rank</span>
                </div>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <AnimatedCounter
                    value={result.overallScore}
                    decimals={1}
                    className="text-5xl font-bold text-[#D85A5A]"
                  />
                  <span className="text-xl text-[#888] mb-2">/100</span>
                </div>
                <AnimatedProgress
                  value={result.overallScore}
                  max={100}
                  size="md"
                  showLabel={false}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Scores */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-8">
              Category Performance
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Radar Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-4">
                  Performance Overview
                </h3>
                <div className="aspect-square max-w-sm mx-auto">
                  <SimpleRadarChart
                    labels={radarLabels}
                    scores={radarScores}
                    color="#D85A5A"
                  />
                </div>
              </Card>

              {/* Category Breakdown */}
              <div className="space-y-4">
                {benchmarkCategories.map((category, index) => {
                  const categoryScore = result.categoryScores.find(
                    (c) => c.categoryId === category.id
                  );
                  const Icon = categoryIcons[category.id] || BookOpen;

                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D85A5A]/10">
                            <Icon size={24} className="text-[#D85A5A]" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium text-[#1A1A1A]">
                                {category.name}
                              </h4>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary">
                                  Rank #{categoryScore?.rank}
                                </Badge>
                                <span className="text-lg font-bold text-[#D85A5A]">
                                  {categoryScore?.score.toFixed(1)}
                                </span>
                              </div>
                            </div>
                            <AnimatedProgress
                              value={categoryScore?.score || 0}
                              max={100}
                              size="sm"
                              showLabel={false}
                              gradient={false}
                              delay={index * 0.1}
                            />
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-category Breakdown */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-8">
              Detailed Breakdown
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {benchmarkCategories.map((category) => {
                const subCategories = getSubCategoriesByCategoryId(category.id);
                const Icon = categoryIcons[category.id] || BookOpen;

                return (
                  <Card key={category.id} className="overflow-hidden">
                    <div className="p-4 flex items-center gap-3 bg-[#D85A5A]/5 border-b border-[#D85A5A]/10">
                      <Icon size={20} className="text-[#D85A5A]" />
                      <h3 className="font-medium text-[#1A1A1A]">
                        {category.name}
                      </h3>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {subCategories.map((subCat) => {
                          const score = result.subCategoryScores.find(
                            (s) => s.subCategoryId === subCat.id
                          );
                          return (
                            <div
                              key={subCat.id}
                              className="flex items-center justify-between"
                            >
                              <span className="text-sm text-[#666]">
                                {subCat.name}
                              </span>
                              <ScoreBadge
                                score={score?.score || 0}
                                size="sm"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Compare CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
              Compare with Other Models
            </h2>
            <p className="text-[#666] mb-6">
              See how {model.name} stacks up against other frontier LLMs in the
              aesthetic medicine domain.
            </p>
            <Link href="/compare">
              <Button size="lg" className="bg-[#D85A5A] hover:bg-[#C04A4A]">
                Compare Models
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
