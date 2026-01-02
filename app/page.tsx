"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table";
import { ModelCardsGrid } from "@/components/leaderboard/model-card";
import { FacialAnalysisBenchmark } from "@/components/sections/facial-analysis-section";
import { getLeaderboardEntries } from "@/data/scores";

export default function Home() {
  const entries = getLeaderboardEntries();

  return (
    <>
      {/* Hero Section with Aurora Background */}
      <HeroSection />

      {/* Leaderboard Table */}
      <LeaderboardTable />

      {/* Model Cards Grid */}
      <ModelCardsGrid entries={entries} />

      {/* Facial Analysis Benchmark */}
      <FacialAnalysisBenchmark />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-4">
              Methodology
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
              How We Evaluate
            </h2>
            <p className="text-base text-[#666] max-w-2xl mx-auto mb-8">
              VeraBench uses a comprehensive evaluation framework with over 500
              test cases across treatment knowledge, safety protocols,
              consultation quality, and facial analysis. Each model is tested on
              real-world aesthetic medicine scenarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/methodology"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#D85A5A] text-white font-medium hover:bg-[#C04A4A] transition-colors"
              >
                View Methodology
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-[#DDD] text-[#666] font-medium hover:bg-[#F5F5F5] transition-colors"
              >
                About VeraBench
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
