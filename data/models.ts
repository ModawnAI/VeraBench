import type { LLMProvider, LLMModel } from "@/types";

export const providers: LLMProvider[] = [
  {
    id: "openai",
    name: "OpenAI",
    logo: "/logos/openai.svg",
    website: "https://openai.com",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    logo: "/logos/anthropic.svg",
    website: "https://anthropic.com",
  },
  {
    id: "google",
    name: "Google DeepMind",
    logo: "/logos/google.svg",
    website: "https://deepmind.google",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    logo: "/logos/deepseek.svg",
    website: "https://deepseek.com",
  },
  {
    id: "xai",
    name: "xAI",
    logo: "/logos/xai.svg",
    website: "https://x.ai",
  },
];

export const models: LLMModel[] = [
  // OpenAI Models
  {
    id: "gpt-5-2",
    name: "GPT-5.2",
    provider: providers[0],
    version: "5.2",
    releaseDate: "November 2025",
    contextWindow: 400000,
    inputCostPer1M: 1.75,
    outputCostPer1M: 14.00,
    description:
      "OpenAI's most advanced model with perfect AIME mathematical reasoning scores and dominant abstract reasoning on ARC-AGI-2 (52.9%). Features adaptive reasoning that dynamically adjusts thinking time based on task complexity.",
    isActive: true,
  },
  {
    id: "o3-pro",
    name: "o3-pro",
    provider: providers[0],
    version: "o3",
    releaseDate: "June 2025",
    contextWindow: 200000,
    inputCostPer1M: 20.00,
    outputCostPer1M: 80.00,
    description:
      "OpenAI's premium reasoning model designed to think longer and provide the most reliable responses. Excels at complex queries requiring multi-faceted analysis with 20% fewer major errors than o1.",
    isActive: true,
  },
  {
    id: "gpt-4-1",
    name: "GPT-4.1",
    provider: providers[0],
    version: "4.1",
    releaseDate: "July 2025",
    contextWindow: 128000,
    inputCostPer1M: 2.00,
    outputCostPer1M: 8.00,
    description:
      "OpenAI's smartest non-reasoning model, optimized for speed and cost-efficiency while maintaining high performance across general tasks.",
    isActive: true,
  },

  // Anthropic Models
  {
    id: "claude-opus-4-5",
    name: "Claude Opus 4.5",
    provider: providers[1],
    version: "4.5",
    releaseDate: "November 2025",
    contextWindow: 200000,
    inputCostPer1M: 5.00,
    outputCostPer1M: 25.00,
    description:
      "Anthropic's most capable model, leading SWE-bench Verified at 80.9%. Excels at long-horizon, autonomous tasks requiring sustained reasoning and multi-step execution with up to 65% fewer tokens.",
    isActive: true,
  },
  {
    id: "claude-sonnet-4-5",
    name: "Claude Sonnet 4.5",
    provider: providers[1],
    version: "4.5",
    releaseDate: "September 2025",
    contextWindow: 200000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 15.00,
    description:
      "Anthropic's balanced model achieving 77.2% on SWE-bench Verified. Optimal for coding, agents, and computer use tasks at a lower cost than Opus.",
    isActive: true,
  },
  {
    id: "claude-haiku-4-5",
    name: "Claude Haiku 4.5",
    provider: providers[1],
    version: "4.5",
    releaseDate: "October 2025",
    contextWindow: 200000,
    inputCostPer1M: 0.80,
    outputCostPer1M: 4.00,
    description:
      "Anthropic's fast and efficient model delivering near-frontier coding quality at 73.3% on SWE-bench. Matches Sonnet 4 on coding and surpasses it on some tasks.",
    isActive: true,
  },

  // Google Models
  {
    id: "gemini-3-pro",
    name: "Gemini 3 Pro",
    provider: providers[2],
    version: "3.0",
    releaseDate: "December 2025",
    contextWindow: 1000000,
    inputCostPer1M: 2.00,
    outputCostPer1M: 12.00,
    description:
      "Google's flagship model breaking the 1500 LMArena Elo barrier with unprecedented 91.9% on GPQA Diamond, surpassing human expert performance (~89.8%). Features Deep Think capabilities.",
    isActive: true,
  },
  {
    id: "gemini-3-flash",
    name: "Gemini 3 Flash",
    provider: providers[2],
    version: "3.0",
    releaseDate: "December 2025",
    contextWindow: 1000000,
    inputCostPer1M: 0.50,
    outputCostPer1M: 3.00,
    description:
      "Google's cost-efficient model offering excellent value at $0.50 per million input tokens while maintaining strong performance across reasoning and multimodal tasks.",
    isActive: true,
  },

  // DeepSeek Models
  {
    id: "deepseek-v3-2",
    name: "DeepSeek-V3.2",
    provider: providers[3],
    version: "3.2",
    releaseDate: "November 2025",
    contextWindow: 131000,
    inputCostPer1M: 0.28,
    outputCostPer1M: 0.42,
    description:
      "DeepSeek's revolutionary model with exceptional value: $0.28/$0.42 per million tokens. Achieved IMO 2025 Gold Medal, IOI 2025 Gold Medal, and ICPC World Finals 2nd place.",
    isActive: true,
  },

  // xAI Models
  {
    id: "grok-3",
    name: "Grok 3",
    provider: providers[4],
    version: "3.0",
    releaseDate: "February 2025",
    contextWindow: 1000000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 15.00,
    description:
      "xAI's flagship reasoning model trained with 10x more compute on 200,000 GPUs. Features Think mode, Big Brain reasoning, and DeepSearch. Achieved 93.3% on AIME 2025 and 1402 Elo on Chatbot Arena.",
    isActive: true,
  },
];

export function getModelById(id: string): LLMModel | undefined {
  return models.find((m) => m.id === id);
}

export function getProviderById(id: string): LLMProvider | undefined {
  return providers.find((p) => p.id === id);
}

export function getModelsByProvider(providerId: string): LLMModel[] {
  return models.filter((m) => m.provider.id === providerId);
}
