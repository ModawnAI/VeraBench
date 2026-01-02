"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartData {
  label: string;
  value: number;
}

interface HorizontalBarChartProps {
  data: BarChartData[];
  title?: string;
  className?: string;
}

export function HorizontalBarChart({
  data,
  title,
  className,
}: HorizontalBarChartProps) {
  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        data: data.map((d) => d.value),
        backgroundColor: data.map((_, i) =>
          i === 0 ? "#D85A5A" : i === 1 ? "#D4AF37" : "#888"
        ),
        borderRadius: 6,
        barThickness: 28,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0F172A",
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (context: { raw: unknown }) => `Score: ${context.raw}/100`,
        },
      },
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        grid: { color: "#EEE" },
        ticks: {
          font: { size: 11 },
          color: "#888",
        },
      },
      y: {
        grid: { display: false },
        ticks: {
          font: { size: 13 },
          color: "#1A1A1A",
        },
      },
    },
    animation: {
      duration: 800,
      easing: "easeOutQuart" as const,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("bg-white rounded-xl border border-[#EEE] p-6", className)}
    >
      {title && (
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-6">{title}</h3>
      )}
      <div className="h-64">
        <Bar data={chartData} options={options} />
      </div>
    </motion.div>
  );
}

interface ComparisonBarProps {
  metric: string;
  leftValue: number;
  rightValue: number;
  leftLabel: string;
  rightLabel: string;
  leftColor?: string;
  rightColor?: string;
  className?: string;
}

export function ComparisonBar({
  metric,
  leftValue,
  rightValue,
  leftLabel,
  rightLabel,
  leftColor = "#D85A5A",
  rightColor = "#D4AF37",
  className,
}: ComparisonBarProps) {
  const maxValue = Math.max(leftValue, rightValue);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("bg-white/5 rounded-xl p-4", className)}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-white/60">{metric}</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Left Bar */}
        <div className="flex-1 flex items-center gap-3">
          <span className="text-lg font-semibold text-white w-12 text-right">
            {leftValue}
          </span>
          <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(leftValue / 100) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full rounded-full"
              style={{
                backgroundColor: leftColor,
                opacity: leftValue === maxValue ? 1 : 0.5,
              }}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-white/20" />

        {/* Right Bar */}
        <div className="flex-1 flex items-center gap-3">
          <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden flex justify-end">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(rightValue / 100) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full rounded-full"
              style={{
                backgroundColor: rightColor,
                opacity: rightValue === maxValue ? 1 : 0.5,
              }}
            />
          </div>
          <span className="text-lg font-semibold text-white w-12">
            {rightValue}
          </span>
        </div>
      </div>

      {/* Winner Indicator */}
      {leftValue !== rightValue && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            "mt-2 text-xs font-medium",
            leftValue > rightValue ? "text-left" : "text-right"
          )}
          style={{ color: leftValue > rightValue ? leftColor : rightColor }}
        >
          +{Math.abs(leftValue - rightValue).toFixed(1)} points
        </motion.div>
      )}
    </motion.div>
  );
}
