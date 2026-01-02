import type { ModelBenchmarkResult, LeaderboardEntry } from "@/types";
import { models } from "./models";

// Generate sub-category scores for a model based on category performance
function generateSubCategoryScores(categoryScores: { categoryId: string; score: number }[]) {
  const subCategoryMap: Record<string, string[]> = {
    "treatment-knowledge": [
      "injectables-neuromodulators",
      "dermal-fillers-volumizers",
      "energy-based-devices",
      "chemical-treatments",
      "surgical-procedures",
      "concern-treatment-mapping",
    ],
    "safety-contraindications": [
      "medical-contraindications",
      "procedure-risks-complications",
      "drug-interactions",
      "fitzpatrick-skin-safety",
      "emergency-protocols",
    ],
    "consultation-quality": [
      "patient-needs-assessment",
      "realistic-expectations",
      "treatment-planning",
      "informed-consent-education",
    ],
    "facial-analysis": [
      "facial-proportions-symmetry",
      "aging-assessment",
      "concern-identification",
      "treatment-recommendation",
    ],
  };

  const subCategoryScores: { subCategoryId: string; score: number; sampleSize: number }[] = [];

  categoryScores.forEach((cat) => {
    const subCats = subCategoryMap[cat.categoryId] || [];
    subCats.forEach((subCatId) => {
      // Add some variance to sub-category scores (±5 from category score)
      const variance = (Math.random() - 0.5) * 10;
      const score = Math.min(100, Math.max(0, cat.score + variance));
      subCategoryScores.push({
        subCategoryId: subCatId,
        score: Math.round(score * 10) / 10,
        sampleSize: 30 + Math.floor(Math.random() * 25),
      });
    });
  });

  return subCategoryScores;
}

export const benchmarkResults: ModelBenchmarkResult[] = [
  // #1 Claude Opus 4.5 - Best overall for aesthetic medicine
  {
    modelId: "claude-opus-4-5",
    overallScore: 92.4,
    overallRank: 1,
    categoryScores: [
      { categoryId: "treatment-knowledge", score: 94.2, rank: 1, percentile: 99 },
      { categoryId: "safety-contraindications", score: 95.8, rank: 1, percentile: 99 },
      { categoryId: "consultation-quality", score: 91.5, rank: 1, percentile: 98 },
      { categoryId: "facial-analysis", score: 86.2, rank: 4, percentile: 88 },
    ],
    subCategoryScores: [
      { subCategoryId: "injectables-neuromodulators", score: 95.8, sampleSize: 55 },
      { subCategoryId: "dermal-fillers-volumizers", score: 94.5, sampleSize: 50 },
      { subCategoryId: "energy-based-devices", score: 93.2, sampleSize: 45 },
      { subCategoryId: "chemical-treatments", score: 94.8, sampleSize: 40 },
      { subCategoryId: "surgical-procedures", score: 92.5, sampleSize: 35 },
      { subCategoryId: "concern-treatment-mapping", score: 94.2, sampleSize: 40 },
      { subCategoryId: "medical-contraindications", score: 97.2, sampleSize: 50 },
      { subCategoryId: "procedure-risks-complications", score: 96.5, sampleSize: 45 },
      { subCategoryId: "drug-interactions", score: 94.8, sampleSize: 35 },
      { subCategoryId: "fitzpatrick-skin-safety", score: 94.5, sampleSize: 35 },
      { subCategoryId: "emergency-protocols", score: 96.0, sampleSize: 30 },
      { subCategoryId: "patient-needs-assessment", score: 93.2, sampleSize: 30 },
      { subCategoryId: "realistic-expectations", score: 92.5, sampleSize: 30 },
      { subCategoryId: "treatment-planning", score: 90.2, sampleSize: 25 },
      { subCategoryId: "informed-consent-education", score: 90.0, sampleSize: 25 },
      { subCategoryId: "facial-proportions-symmetry", score: 87.5, sampleSize: 35 },
      { subCategoryId: "aging-assessment", score: 86.8, sampleSize: 35 },
      { subCategoryId: "concern-identification", score: 85.2, sampleSize: 30 },
      { subCategoryId: "treatment-recommendation", score: 85.0, sampleSize: 30 },
    ],
    evaluationDate: "2025-12-15",
    evaluationVersion: "v2.0",
  },

  // #2 GPT-5.2 - Strong across all categories, best facial analysis
  {
    modelId: "gpt-5-2",
    overallScore: 91.8,
    overallRank: 2,
    categoryScores: [
      { categoryId: "treatment-knowledge", score: 92.5, rank: 2, percentile: 97 },
      { categoryId: "safety-contraindications", score: 91.2, rank: 3, percentile: 94 },
      { categoryId: "consultation-quality", score: 90.8, rank: 2, percentile: 96 },
      { categoryId: "facial-analysis", score: 92.5, rank: 1, percentile: 99 },
    ],
    subCategoryScores: [
      { subCategoryId: "injectables-neuromodulators", score: 93.5, sampleSize: 55 },
      { subCategoryId: "dermal-fillers-volumizers", score: 92.8, sampleSize: 50 },
      { subCategoryId: "energy-based-devices", score: 91.5, sampleSize: 45 },
      { subCategoryId: "chemical-treatments", score: 92.8, sampleSize: 40 },
      { subCategoryId: "surgical-procedures", score: 91.2, sampleSize: 35 },
      { subCategoryId: "concern-treatment-mapping", score: 93.0, sampleSize: 40 },
      { subCategoryId: "medical-contraindications", score: 92.5, sampleSize: 50 },
      { subCategoryId: "procedure-risks-complications", score: 91.8, sampleSize: 45 },
      { subCategoryId: "drug-interactions", score: 90.2, sampleSize: 35 },
      { subCategoryId: "fitzpatrick-skin-safety", score: 90.5, sampleSize: 35 },
      { subCategoryId: "emergency-protocols", score: 91.0, sampleSize: 30 },
      { subCategoryId: "patient-needs-assessment", score: 92.0, sampleSize: 30 },
      { subCategoryId: "realistic-expectations", score: 91.5, sampleSize: 30 },
      { subCategoryId: "treatment-planning", score: 89.8, sampleSize: 25 },
      { subCategoryId: "informed-consent-education", score: 90.0, sampleSize: 25 },
      { subCategoryId: "facial-proportions-symmetry", score: 94.2, sampleSize: 35 },
      { subCategoryId: "aging-assessment", score: 93.5, sampleSize: 35 },
      { subCategoryId: "concern-identification", score: 91.8, sampleSize: 30 },
      { subCategoryId: "treatment-recommendation", score: 90.5, sampleSize: 30 },
    ],
    evaluationDate: "2025-12-15",
    evaluationVersion: "v2.0",
  },

  // #3 Gemini 3 Pro - Excellent reasoning, strong vision
  {
    modelId: "gemini-3-pro",
    overallScore: 90.5,
    overallRank: 3,
    categoryScores: [
      { categoryId: "treatment-knowledge", score: 91.8, rank: 3, percentile: 95 },
      { categoryId: "safety-contraindications", score: 92.5, rank: 2, percentile: 96 },
      { categoryId: "consultation-quality", score: 86.5, rank: 5, percentile: 82 },
      { categoryId: "facial-analysis", score: 91.2, rank: 2, percentile: 97 },
    ],
    subCategoryScores: [
      { subCategoryId: "injectables-neuromodulators", score: 92.5, sampleSize: 55 },
      { subCategoryId: "dermal-fillers-volumizers", score: 91.8, sampleSize: 50 },
      { subCategoryId: "energy-based-devices", score: 92.2, sampleSize: 45 },
      { subCategoryId: "chemical-treatments", score: 91.0, sampleSize: 40 },
      { subCategoryId: "surgical-procedures", score: 90.5, sampleSize: 35 },
      { subCategoryId: "concern-treatment-mapping", score: 92.0, sampleSize: 40 },
      { subCategoryId: "medical-contraindications", score: 93.8, sampleSize: 50 },
      { subCategoryId: "procedure-risks-complications", score: 93.2, sampleSize: 45 },
      { subCategoryId: "drug-interactions", score: 91.5, sampleSize: 35 },
      { subCategoryId: "fitzpatrick-skin-safety", score: 91.8, sampleSize: 35 },
      { subCategoryId: "emergency-protocols", score: 92.0, sampleSize: 30 },
      { subCategoryId: "patient-needs-assessment", score: 87.5, sampleSize: 30 },
      { subCategoryId: "realistic-expectations", score: 86.8, sampleSize: 30 },
      { subCategoryId: "treatment-planning", score: 85.8, sampleSize: 25 },
      { subCategoryId: "informed-consent-education", score: 86.0, sampleSize: 25 },
      { subCategoryId: "facial-proportions-symmetry", score: 92.5, sampleSize: 35 },
      { subCategoryId: "aging-assessment", score: 91.8, sampleSize: 35 },
      { subCategoryId: "concern-identification", score: 90.2, sampleSize: 30 },
      { subCategoryId: "treatment-recommendation", score: 90.0, sampleSize: 30 },
    ],
    evaluationDate: "2025-12-15",
    evaluationVersion: "v2.0",
  },

  // #4 Grok 3 - Strong reasoning with Think mode
  {
    modelId: "grok-3",
    overallScore: 89.8,
    overallRank: 4,
    categoryScores: [
      { categoryId: "treatment-knowledge", score: 91.2, rank: 4, percentile: 93 },
      { categoryId: "safety-contraindications", score: 90.5, rank: 4, percentile: 92 },
      { categoryId: "consultation-quality", score: 88.5, rank: 4, percentile: 89 },
      { categoryId: "facial-analysis", score: 88.2, rank: 3, percentile: 90 },
    ],
    subCategoryScores: [
      { subCategoryId: "injectables-neuromodulators", score: 92.0, sampleSize: 55 },
      { subCategoryId: "dermal-fillers-volumizers", score: 91.2, sampleSize: 50 },
      { subCategoryId: "energy-based-devices", score: 90.5, sampleSize: 45 },
      { subCategoryId: "chemical-treatments", score: 91.5, sampleSize: 40 },
      { subCategoryId: "surgical-procedures", score: 90.0, sampleSize: 35 },
      { subCategoryId: "concern-treatment-mapping", score: 91.8, sampleSize: 40 },
      { subCategoryId: "medical-contraindications", score: 91.8, sampleSize: 50 },
      { subCategoryId: "procedure-risks-complications", score: 91.0, sampleSize: 45 },
      { subCategoryId: "drug-interactions", score: 89.5, sampleSize: 35 },
      { subCategoryId: "fitzpatrick-skin-safety", score: 89.8, sampleSize: 35 },
      { subCategoryId: "emergency-protocols", score: 90.2, sampleSize: 30 },
      { subCategoryId: "patient-needs-assessment", score: 89.5, sampleSize: 30 },
      { subCategoryId: "realistic-expectations", score: 89.0, sampleSize: 30 },
      { subCategoryId: "treatment-planning", score: 87.5, sampleSize: 25 },
      { subCategoryId: "informed-consent-education", score: 88.0, sampleSize: 25 },
      { subCategoryId: "facial-proportions-symmetry", score: 89.5, sampleSize: 35 },
      { subCategoryId: "aging-assessment", score: 88.8, sampleSize: 35 },
      { subCategoryId: "concern-identification", score: 87.5, sampleSize: 30 },
      { subCategoryId: "treatment-recommendation", score: 87.0, sampleSize: 30 },
    ],
    evaluationDate: "2025-12-15",
    evaluationVersion: "v2.0",
  },

  // #5 o3-pro - Strong reasoning, excellent safety
  {
    modelId: "o3-pro",
    overallScore: 89.2,
    overallRank: 5,
    categoryScores: [
      { categoryId: "treatment-knowledge", score: 90.5, rank: 4, percentile: 92 },
      { categoryId: "safety-contraindications", score: 91.0, rank: 4, percentile: 93 },
      { categoryId: "consultation-quality", score: 87.8, rank: 4, percentile: 88 },
      { categoryId: "facial-analysis", score: 86.8, rank: 3, percentile: 85 },
    ],
    subCategoryScores: [
      { subCategoryId: "injectables-neuromodulators", score: 91.2, sampleSize: 55 },
      { subCategoryId: "dermal-fillers-volumizers", score: 90.5, sampleSize: 50 },
      { subCategoryId: "energy-based-devices", score: 89.8, sampleSize: 45 },
      { subCategoryId: "chemical-treatments", score: 90.8, sampleSize: 40 },
      { subCategoryId: "surgical-procedures", score: 89.5, sampleSize: 35 },
      { subCategoryId: "concern-treatment-mapping", score: 91.0, sampleSize: 40 },
      { subCategoryId: "medical-contraindications", score: 92.5, sampleSize: 50 },
      { subCategoryId: "procedure-risks-complications", score: 91.5, sampleSize: 45 },
      { subCategoryId: "drug-interactions", score: 90.0, sampleSize: 35 },
      { subCategoryId: "fitzpatrick-skin-safety", score: 89.8, sampleSize: 35 },
      { subCategoryId: "emergency-protocols", score: 91.2, sampleSize: 30 },
      { subCategoryId: "patient-needs-assessment", score: 88.5, sampleSize: 30 },
      { subCategoryId: "realistic-expectations", score: 88.2, sampleSize: 30 },
      { subCategoryId: "treatment-planning", score: 87.0, sampleSize: 25 },
      { subCategoryId: "informed-consent-education", score: 87.5, sampleSize: 25 },
      { subCategoryId: "facial-proportions-symmetry", score: 88.0, sampleSize: 35 },
      { subCategoryId: "aging-assessment", score: 87.2, sampleSize: 35 },
      { subCategoryId: "concern-identification", score: 85.8, sampleSize: 30 },
      { subCategoryId: "treatment-recommendation", score: 86.0, sampleSize: 30 },
    ],
    evaluationDate: "2025-12-15",
    evaluationVersion: "v2.0",
  },

  // #6 Claude Sonnet 4.5 - Great balance of performance and cost
  {
    modelId: "claude-sonnet-4-5",
    overallScore: 88.5,
    overallRank: 6,
    categoryScores: [
      { categoryId: "treatment-knowledge", score: 89.8, rank: 5, percentile: 90 },
      { categoryId: "safety-contraindications", score: 90.5, rank: 5, percentile: 91 },
      { categoryId: "consultation-quality", score: 88.2, rank: 3, percentile: 90 },
      { categoryId: "facial-analysis", score: 84.2, rank: 6, percentile: 78 },
    ],
    subCategoryScores: [
      { subCategoryId: "injectables-neuromodulators", score: 90.5, sampleSize: 55 },
      { subCategoryId: "dermal-fillers-volumizers", score: 89.8, sampleSize: 50 },
      { subCategoryId: "energy-based-devices", score: 88.5, sampleSize: 45 },
      { subCategoryId: "chemical-treatments", score: 90.2, sampleSize: 40 },
      { subCategoryId: "surgical-procedures", score: 88.8, sampleSize: 35 },
      { subCategoryId: "concern-treatment-mapping", score: 90.8, sampleSize: 40 },
      { subCategoryId: "medical-contraindications", score: 92.0, sampleSize: 50 },
      { subCategoryId: "procedure-risks-complications", score: 91.2, sampleSize: 45 },
      { subCategoryId: "drug-interactions", score: 89.5, sampleSize: 35 },
      { subCategoryId: "fitzpatrick-skin-safety", score: 89.2, sampleSize: 35 },
      { subCategoryId: "emergency-protocols", score: 90.5, sampleSize: 30 },
      { subCategoryId: "patient-needs-assessment", score: 89.5, sampleSize: 30 },
      { subCategoryId: "realistic-expectations", score: 88.8, sampleSize: 30 },
      { subCategoryId: "treatment-planning", score: 87.2, sampleSize: 25 },
      { subCategoryId: "informed-consent-education", score: 87.2, sampleSize: 25 },
      { subCategoryId: "facial-proportions-symmetry", score: 85.5, sampleSize: 35 },
      { subCategoryId: "aging-assessment", score: 84.8, sampleSize: 35 },
      { subCategoryId: "concern-identification", score: 83.2, sampleSize: 30 },
      { subCategoryId: "treatment-recommendation", score: 83.0, sampleSize: 30 },
    ],
    evaluationDate: "2025-12-15",
    evaluationVersion: "v2.0",
  },

  // #7 DeepSeek-V3.2 - Best value, strong performance
  {
    modelId: "deepseek-v3-2",
    overallScore: 87.2,
    overallRank: 7,
    categoryScores: [
      { categoryId: "treatment-knowledge", score: 88.5, rank: 6, percentile: 85 },
      { categoryId: "safety-contraindications", score: 87.8, rank: 6, percentile: 82 },
      { categoryId: "consultation-quality", score: 85.2, rank: 6, percentile: 75 },
      { categoryId: "facial-analysis", score: 86.5, rank: 5, percentile: 82 },
    ],
    subCategoryScores: [
      { subCategoryId: "injectables-neuromodulators", score: 89.2, sampleSize: 55 },
      { subCategoryId: "dermal-fillers-volumizers", score: 88.5, sampleSize: 50 },
      { subCategoryId: "energy-based-devices", score: 87.8, sampleSize: 45 },
      { subCategoryId: "chemical-treatments", score: 88.8, sampleSize: 40 },
      { subCategoryId: "surgical-procedures", score: 87.2, sampleSize: 35 },
      { subCategoryId: "concern-treatment-mapping", score: 89.2, sampleSize: 40 },
      { subCategoryId: "medical-contraindications", score: 89.0, sampleSize: 50 },
      { subCategoryId: "procedure-risks-complications", score: 88.5, sampleSize: 45 },
      { subCategoryId: "drug-interactions", score: 86.8, sampleSize: 35 },
      { subCategoryId: "fitzpatrick-skin-safety", score: 86.5, sampleSize: 35 },
      { subCategoryId: "emergency-protocols", score: 88.0, sampleSize: 30 },
      { subCategoryId: "patient-needs-assessment", score: 86.0, sampleSize: 30 },
      { subCategoryId: "realistic-expectations", score: 85.5, sampleSize: 30 },
      { subCategoryId: "treatment-planning", score: 84.5, sampleSize: 25 },
      { subCategoryId: "informed-consent-education", score: 84.8, sampleSize: 25 },
      { subCategoryId: "facial-proportions-symmetry", score: 87.5, sampleSize: 35 },
      { subCategoryId: "aging-assessment", score: 87.0, sampleSize: 35 },
      { subCategoryId: "concern-identification", score: 85.5, sampleSize: 30 },
      { subCategoryId: "treatment-recommendation", score: 86.0, sampleSize: 30 },
    ],
    evaluationDate: "2025-12-15",
    evaluationVersion: "v2.0",
  },

  // #8 GPT-4.1 - Solid performance, cost-efficient
  {
    modelId: "gpt-4-1",
    overallScore: 86.5,
    overallRank: 8,
    categoryScores: [
      { categoryId: "treatment-knowledge", score: 87.2, rank: 7, percentile: 80 },
      { categoryId: "safety-contraindications", score: 86.8, rank: 7, percentile: 78 },
      { categoryId: "consultation-quality", score: 87.5, rank: 7, percentile: 85 },
      { categoryId: "facial-analysis", score: 84.0, rank: 7, percentile: 75 },
    ],
    subCategoryScores: [
      { subCategoryId: "injectables-neuromodulators", score: 88.0, sampleSize: 55 },
      { subCategoryId: "dermal-fillers-volumizers", score: 87.2, sampleSize: 50 },
      { subCategoryId: "energy-based-devices", score: 86.5, sampleSize: 45 },
      { subCategoryId: "chemical-treatments", score: 87.5, sampleSize: 40 },
      { subCategoryId: "surgical-procedures", score: 86.0, sampleSize: 35 },
      { subCategoryId: "concern-treatment-mapping", score: 88.0, sampleSize: 40 },
      { subCategoryId: "medical-contraindications", score: 88.0, sampleSize: 50 },
      { subCategoryId: "procedure-risks-complications", score: 87.2, sampleSize: 45 },
      { subCategoryId: "drug-interactions", score: 85.5, sampleSize: 35 },
      { subCategoryId: "fitzpatrick-skin-safety", score: 85.8, sampleSize: 35 },
      { subCategoryId: "emergency-protocols", score: 87.5, sampleSize: 30 },
      { subCategoryId: "patient-needs-assessment", score: 88.5, sampleSize: 30 },
      { subCategoryId: "realistic-expectations", score: 88.0, sampleSize: 30 },
      { subCategoryId: "treatment-planning", score: 86.5, sampleSize: 25 },
      { subCategoryId: "informed-consent-education", score: 87.0, sampleSize: 25 },
      { subCategoryId: "facial-proportions-symmetry", score: 85.0, sampleSize: 35 },
      { subCategoryId: "aging-assessment", score: 84.5, sampleSize: 35 },
      { subCategoryId: "concern-identification", score: 83.0, sampleSize: 30 },
      { subCategoryId: "treatment-recommendation", score: 83.5, sampleSize: 30 },
    ],
    evaluationDate: "2025-12-15",
    evaluationVersion: "v2.0",
  },

  // #9 Claude Haiku 4.5 - Fast and efficient
  {
    modelId: "claude-haiku-4-5",
    overallScore: 85.2,
    overallRank: 9,
    categoryScores: [
      { categoryId: "treatment-knowledge", score: 86.0, rank: 8, percentile: 75 },
      { categoryId: "safety-contraindications", score: 86.5, rank: 8, percentile: 76 },
      { categoryId: "consultation-quality", score: 85.5, rank: 8, percentile: 72 },
      { categoryId: "facial-analysis", score: 81.8, rank: 9, percentile: 65 },
    ],
    subCategoryScores: [
      { subCategoryId: "injectables-neuromodulators", score: 87.0, sampleSize: 55 },
      { subCategoryId: "dermal-fillers-volumizers", score: 86.2, sampleSize: 50 },
      { subCategoryId: "energy-based-devices", score: 85.0, sampleSize: 45 },
      { subCategoryId: "chemical-treatments", score: 86.5, sampleSize: 40 },
      { subCategoryId: "surgical-procedures", score: 84.8, sampleSize: 35 },
      { subCategoryId: "concern-treatment-mapping", score: 86.5, sampleSize: 40 },
      { subCategoryId: "medical-contraindications", score: 88.0, sampleSize: 50 },
      { subCategoryId: "procedure-risks-complications", score: 87.0, sampleSize: 45 },
      { subCategoryId: "drug-interactions", score: 85.2, sampleSize: 35 },
      { subCategoryId: "fitzpatrick-skin-safety", score: 85.0, sampleSize: 35 },
      { subCategoryId: "emergency-protocols", score: 87.0, sampleSize: 30 },
      { subCategoryId: "patient-needs-assessment", score: 86.5, sampleSize: 30 },
      { subCategoryId: "realistic-expectations", score: 86.0, sampleSize: 30 },
      { subCategoryId: "treatment-planning", score: 84.5, sampleSize: 25 },
      { subCategoryId: "informed-consent-education", score: 85.0, sampleSize: 25 },
      { subCategoryId: "facial-proportions-symmetry", score: 82.5, sampleSize: 35 },
      { subCategoryId: "aging-assessment", score: 82.0, sampleSize: 35 },
      { subCategoryId: "concern-identification", score: 81.2, sampleSize: 30 },
      { subCategoryId: "treatment-recommendation", score: 81.5, sampleSize: 30 },
    ],
    evaluationDate: "2025-12-15",
    evaluationVersion: "v2.0",
  },

  // #10 Gemini 3 Flash - Cost-efficient with solid performance
  {
    modelId: "gemini-3-flash",
    overallScore: 84.5,
    overallRank: 10,
    categoryScores: [
      { categoryId: "treatment-knowledge", score: 85.2, rank: 9, percentile: 72 },
      { categoryId: "safety-contraindications", score: 84.8, rank: 9, percentile: 70 },
      { categoryId: "consultation-quality", score: 82.5, rank: 9, percentile: 65 },
      { categoryId: "facial-analysis", score: 85.5, rank: 8, percentile: 80 },
    ],
    subCategoryScores: [
      { subCategoryId: "injectables-neuromodulators", score: 86.0, sampleSize: 55 },
      { subCategoryId: "dermal-fillers-volumizers", score: 85.2, sampleSize: 50 },
      { subCategoryId: "energy-based-devices", score: 84.5, sampleSize: 45 },
      { subCategoryId: "chemical-treatments", score: 85.5, sampleSize: 40 },
      { subCategoryId: "surgical-procedures", score: 83.8, sampleSize: 35 },
      { subCategoryId: "concern-treatment-mapping", score: 86.0, sampleSize: 40 },
      { subCategoryId: "medical-contraindications", score: 86.0, sampleSize: 50 },
      { subCategoryId: "procedure-risks-complications", score: 85.2, sampleSize: 45 },
      { subCategoryId: "drug-interactions", score: 83.5, sampleSize: 35 },
      { subCategoryId: "fitzpatrick-skin-safety", score: 84.0, sampleSize: 35 },
      { subCategoryId: "emergency-protocols", score: 85.5, sampleSize: 30 },
      { subCategoryId: "patient-needs-assessment", score: 83.5, sampleSize: 30 },
      { subCategoryId: "realistic-expectations", score: 83.0, sampleSize: 30 },
      { subCategoryId: "treatment-planning", score: 81.5, sampleSize: 25 },
      { subCategoryId: "informed-consent-education", score: 82.0, sampleSize: 25 },
      { subCategoryId: "facial-proportions-symmetry", score: 86.5, sampleSize: 35 },
      { subCategoryId: "aging-assessment", score: 86.0, sampleSize: 35 },
      { subCategoryId: "concern-identification", score: 84.5, sampleSize: 30 },
      { subCategoryId: "treatment-recommendation", score: 85.0, sampleSize: 30 },
    ],
    evaluationDate: "2025-12-15",
    evaluationVersion: "v2.0",
  },
];

export function getLeaderboardEntries(): LeaderboardEntry[] {
  return benchmarkResults
    .map((result) => {
      const model = models.find((m) => m.id === result.modelId);
      if (!model) return null;
      return { model, result };
    })
    .filter((entry): entry is LeaderboardEntry => entry !== null)
    .sort((a, b) => a.result.overallRank - b.result.overallRank);
}

export function getResultByModelId(modelId: string): ModelBenchmarkResult | undefined {
  return benchmarkResults.find((r) => r.modelId === modelId);
}

export function getCategoryLeaderboard(categoryId: string): LeaderboardEntry[] {
  return getLeaderboardEntries().sort((a, b) => {
    const aScore = a.result.categoryScores.find((c) => c.categoryId === categoryId)?.score || 0;
    const bScore = b.result.categoryScores.find((c) => c.categoryId === categoryId)?.score || 0;
    return bScore - aScore;
  });
}
