"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedCounter, AnimatedProgress } from "@/components/ui/animated-counter";
import { RankBadge } from "@/components/ui/rank-badge";
import { Button } from "@/components/ui/button";
import { ProviderLogo } from "@/components/icons/provider-logos";
import { ArrowRight, BookOpen, Shield, MessageCircle, ScanFace } from "lucide-react";
import type { LeaderboardEntry } from "@/types";

const categoryIcons = {
  "treatment-knowledge": BookOpen,
  "safety-contraindications": Shield,
  "consultation-quality": MessageCircle,
  "facial-analysis": ScanFace,
};

interface ModelCardProps {
  entry: LeaderboardEntry;
  index: number;
}

export function ModelCard({ entry, index }: ModelCardProps) {
  const { model, result } = entry;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="bg-white relative border border-[#EEE] hover:border-[#DDD] w-full h-auto rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
        {/* Rank Badge */}
        <div className="absolute -top-3 -right-3">
          <RankBadge rank={result.overallRank} size="lg" />
        </div>

        {/* Model Logo */}
        <div className="w-16 h-16 rounded-xl bg-[#FAFAFA] flex items-center justify-center mb-4 border border-[#EEE]">
          <ProviderLogo providerId={model.provider.id} size={32} />
        </div>

        {/* Model Name & Provider */}
        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">
          {model.name}
        </h3>
        <p className="text-sm text-[#888]">{model.provider.name}</p>

        {/* Overall Score */}
        <div className="mt-6">
          <div className="flex items-end gap-2">
            <AnimatedCounter
              value={result.overallScore}
              decimals={1}
              className="text-4xl font-bold text-[#D85A5A]"
            />
            <span className="text-lg text-[#888] mb-1">/100</span>
          </div>
          <AnimatedProgress
            value={result.overallScore}
            max={100}
            size="md"
            showLabel={false}
            delay={index * 0.1 + 0.3}
            className="mt-3"
          />
        </div>

        {/* Category Quick Stats */}
        <div className="mt-6 grid grid-cols-2 gap-2">
          {result.categoryScores.slice(0, 4).map((categoryScore) => {
            const Icon =
              categoryIcons[categoryScore.categoryId] || BookOpen;
            const shortNames: Record<string, string> = {
              "treatment-knowledge": "Knowledge",
              "safety-contraindications": "Safety",
              "consultation-quality": "Consult",
              "facial-analysis": "Facial AI",
            };
            return (
              <div
                key={categoryScore.categoryId}
                className="text-center p-2 rounded-lg bg-[#FAFAFA]"
              >
                <div className="flex items-center justify-center gap-1 text-[#888] mb-1">
                  <Icon size={12} />
                  <span className="text-[10px] uppercase tracking-wider">
                    {shortNames[categoryScore.categoryId]}
                  </span>
                </div>
                <span className="text-sm font-semibold text-[#1A1A1A]">
                  {categoryScore.score.toFixed(1)}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <Link href={`/models/${model.id}`} className="w-full block">
            <Button
              variant="outline"
              className="w-full group border-[#DDD] text-[#666] hover:border-[#D85A5A] hover:text-[#D85A5A]"
            >
              View Details
              <ArrowRight
                size={14}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

interface ModelCardsGridProps {
  entries: LeaderboardEntry[];
}

export function ModelCardsGrid({ entries }: ModelCardsGridProps) {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-4">
              Models
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
              Frontier LLM Performance
            </h2>
            <p className="text-base text-[#666] max-w-2xl mx-auto">
              Compare the top AI models for aesthetic medicine
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entries.map((entry, index) => (
              <ModelCard key={entry.model.id} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
