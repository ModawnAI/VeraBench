"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RankBadgeProps {
  rank: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function RankBadge({
  rank,
  size = "md",
  className,
}: RankBadgeProps) {
  const getRankStyle = (rank: number) => {
    if (rank === 1) {
      return {
        bg: "bg-[#D85A5A]",
        text: "text-white",
      };
    }
    if (rank === 2) {
      return {
        bg: "bg-[#1A1A1A]",
        text: "text-white",
      };
    }
    if (rank === 3) {
      return {
        bg: "bg-[#666]",
        text: "text-white",
      };
    }
    return {
      bg: "bg-[#F5F5F5]",
      text: "text-[#666]",
    };
  };

  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  const style = getRankStyle(rank);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={cn(
        "rounded-full flex items-center justify-center font-bold",
        sizeClasses[size],
        style.bg,
        style.text,
        className
      )}
    >
      <span>{rank}</span>
    </motion.div>
  );
}

interface RankPositionProps {
  rank: number;
  className?: string;
}

export function RankPosition({ rank, className }: RankPositionProps) {
  const getRankSuffix = (rank: number): string => {
    if (rank === 1) return "st";
    if (rank === 2) return "nd";
    if (rank === 3) return "rd";
    return "th";
  };

  const getRankColor = (rank: number): string => {
    if (rank === 1) return "text-[#D85A5A]";
    if (rank === 2) return "text-[#1A1A1A]";
    if (rank === 3) return "text-[#666]";
    return "text-[#888]";
  };

  return (
    <span className={cn("font-semibold", getRankColor(rank), className)}>
      {rank}
      <sup className="text-[0.6em]">{getRankSuffix(rank)}</sup>
    </span>
  );
}
