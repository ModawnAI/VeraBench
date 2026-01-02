"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: 10, label: "Models Tested", suffix: "" },
  { value: 500, label: "Test Cases", suffix: "+" },
  { value: 4, label: "Categories", suffix: "" },
];

export function HeroSection() {
  const scrollToLeaderboard = () => {
    document.getElementById("leaderboard")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(216,90,90,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 text-center px-6 py-32">
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#D85A5A] tracking-[0.3em] text-xs md:text-sm uppercase mb-6"
        >
          LLM Benchmark for Aesthetic Medicine
        </motion.p>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Image
            src="/vera.svg"
            alt="Vera"
            width={200}
            height={65}
            className="h-12 md:h-16 w-auto"
          />
          <span className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#D85A5A]">
            Bench
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-[#666] max-w-2xl mx-auto mb-10"
        >
          The definitive benchmark for evaluating Large Language Models in the
          aesthetic medicine and skincare domain. Compare frontier AI models on
          treatment knowledge, safety, consultation quality, and facial
          analysis.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            size="lg"
            onClick={scrollToLeaderboard}
            className="group bg-[#D85A5A] hover:bg-[#C04A4A]"
          >
            View Leaderboard
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Button>
          <Link href="/methodology">
            <Button size="lg" variant="outline" className="border-[#DDD] text-[#666] hover:bg-[#F0F0F0]">
              Explore Methodology
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex items-baseline justify-center gap-1">
                <AnimatedCounter
                  value={stat.value}
                  className="text-4xl md:text-5xl font-semibold text-[#D85A5A]"
                />
                {stat.suffix && (
                  <span className="text-4xl md:text-5xl font-semibold text-[#D85A5A]">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-sm text-[#888] mt-2 tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToLeaderboard}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#CCC] hover:text-[#D85A5A] transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
