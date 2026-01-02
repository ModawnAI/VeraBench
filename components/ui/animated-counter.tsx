"use client";

import { useEffect, useRef } from "react";
import { useSpring, useTransform, motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function AnimatedCounter({
  value,
  duration = 2,
  className = "",
  suffix = "",
  prefix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
  });

  const display = useTransform(spring, (current) =>
    `${prefix}${current.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <motion.span ref={ref} className={cn(className)}>
      {display}
    </motion.span>
  );
}

interface AnimatedProgressProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  gradient?: boolean;
  delay?: number;
  className?: string;
}

export function AnimatedProgress({
  value,
  max = 100,
  showLabel = false,
  size = "md",
  gradient = true,
  delay = 0,
  className,
}: AnimatedProgressProps) {
  const percentage = (value / max) * 100;

  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "w-full bg-[#EEE] rounded-full overflow-hidden",
          sizeClasses[size]
        )}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn(
            "h-full rounded-full",
            gradient
              ? "bg-gradient-to-r from-[#D85A5A] to-[#D4AF37]"
              : "bg-[#D85A5A]"
          )}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between mt-1">
          <span className="text-xs text-[#888]">0</span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.5 }}
            className="text-xs font-medium text-[#1A1A1A]"
          >
            {value}/{max}
          </motion.span>
        </div>
      )}
    </div>
  );
}

interface ScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ScoreBadge({ score, size = "md", className }: ScoreBadgeProps) {
  const getColor = (score: number) => {
    if (score >= 90)
      return {
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        border: "border-emerald-200",
      };
    if (score >= 80)
      return {
        bg: "bg-[#D85A5A]/10",
        text: "text-[#D85A5A]",
        border: "border-[#D85A5A]/20",
      };
    if (score >= 70)
      return {
        bg: "bg-amber-100",
        text: "text-amber-700",
        border: "border-amber-200",
      };
    return {
      bg: "bg-gray-100",
      text: "text-gray-600",
      border: "border-gray-200",
    };
  };

  const colors = getColor(score);

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={cn(
        "inline-flex items-center rounded-full font-medium border",
        colors.bg,
        colors.text,
        colors.border,
        sizeClasses[size],
        className
      )}
    >
      {score.toFixed(1)}
    </motion.span>
  );
}
