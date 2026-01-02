"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Vera Crimson-based color palette (no blue or gold)
const MODEL_COLORS = [
  { border: "#D85A5A", bg: "rgba(216, 90, 90, 0.2)" },      // Vera Crimson
  { border: "#1A1A1A", bg: "rgba(26, 26, 26, 0.15)" },      // Dark
  { border: "#888888", bg: "rgba(136, 136, 136, 0.2)" },    // Gray
  { border: "#C04A4A", bg: "rgba(192, 74, 74, 0.2)" },      // Crimson darker
  { border: "#666666", bg: "rgba(102, 102, 102, 0.2)" },    // Medium gray
];

interface ModelScore {
  modelId: string;
  modelName: string;
  scores: number[];
}

interface RadarChartProps {
  labels: string[];
  models: ModelScore[];
  className?: string;
}

export function RadarChart({ labels, models, className }: RadarChartProps) {
  const data = {
    labels,
    datasets: models.map((model, index) => ({
      label: model.modelName,
      data: model.scores,
      borderColor: MODEL_COLORS[index % MODEL_COLORS.length].border,
      backgroundColor: MODEL_COLORS[index % MODEL_COLORS.length].bg,
      borderWidth: 2,
      pointBackgroundColor: MODEL_COLORS[index % MODEL_COLORS.length].border,
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 12 },
          color: "#1A1A1A",
        },
      },
      tooltip: {
        backgroundColor: "#1A1A1A",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          backdropColor: "transparent",
          color: "#888",
          font: { size: 10 },
        },
        grid: {
          color: "#EEE",
          circular: true,
        },
        angleLines: {
          color: "#EEE",
        },
        pointLabels: {
          font: { size: 12 },
          color: "#1A1A1A",
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart" as const,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={cn("bg-white rounded-xl border border-[#EEE] p-6", className)}
    >
      <Radar data={data} options={options} />
    </motion.div>
  );
}

interface SimpleRadarChartProps {
  labels: string[];
  scores: number[];
  color?: string;
  className?: string;
}

export function SimpleRadarChart({
  labels,
  scores,
  color = "#D85A5A",
  className,
}: SimpleRadarChartProps) {
  const data = {
    labels,
    datasets: [
      {
        data: scores,
        borderColor: color,
        backgroundColor: `${color}20`,
        borderWidth: 2,
        pointBackgroundColor: color,
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1A1A1A",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          backdropColor: "transparent",
          color: "#888",
          font: { size: 10 },
        },
        grid: {
          color: "#EEE",
          circular: true,
        },
        angleLines: {
          color: "#EEE",
        },
        pointLabels: {
          font: { size: 11 },
          color: "#1A1A1A",
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart" as const,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(className)}
    >
      <Radar data={data} options={options} />
    </motion.div>
  );
}
