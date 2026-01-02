import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatScore(score: number): string {
  return score.toFixed(1);
}

export function getScoreColor(score: number): string {
  if (score >= 90) return "#22C55E"; // Green - Excellent
  if (score >= 80) return "#D85A5A"; // Vera Crimson - Very Good
  if (score >= 70) return "#EAB308"; // Yellow - Good
  if (score >= 60) return "#F97316"; // Orange - Moderate
  return "#EF4444"; // Red - Needs Improvement
}

export function getRankSuffix(rank: number): string {
  if (rank === 1) return "st";
  if (rank === 2) return "nd";
  if (rank === 3) return "rd";
  return "th";
}
