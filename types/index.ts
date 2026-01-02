// ========== PROVIDERS ==========

export interface LLMProvider {
  id: string;
  name: string;
  logo: string;
  website: string;
}

// ========== MODELS ==========

export interface LLMModel {
  id: string;
  name: string;
  provider: LLMProvider;
  version: string;
  releaseDate: string;
  contextWindow: number;
  description: string;
  isActive: boolean;
}

// ========== BENCHMARK CATEGORIES ==========

export type BenchmarkCategoryId =
  | "treatment-knowledge"
  | "safety-contraindications"
  | "consultation-quality"
  | "facial-analysis";

export interface BenchmarkCategory {
  id: BenchmarkCategoryId;
  name: string;
  shortName: string;
  description: string;
  weight: number;
  icon: string;
  color: string;
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  parentCategoryId: BenchmarkCategoryId;
  questionCount: number;
}

// ========== SCORES ==========

export interface CategoryScore {
  categoryId: BenchmarkCategoryId;
  score: number;
  rank: number;
  percentile: number;
}

export interface SubCategoryScore {
  subCategoryId: string;
  score: number;
  sampleSize: number;
}

export interface ModelBenchmarkResult {
  modelId: string;
  overallScore: number;
  overallRank: number;
  categoryScores: CategoryScore[];
  subCategoryScores: SubCategoryScore[];
  evaluationDate: string;
  evaluationVersion: string;
}

// ========== FACIAL ANALYSIS ==========

export interface FacialAnalysisResult {
  modelId: string;
  concerns: FacialConcern[];
  recommendations: TreatmentRecommendation[];
  overallAssessment: string;
  confidenceScore: number;
}

export interface FacialConcern {
  id: string;
  name: string;
  area: string;
  severity: "mild" | "moderate" | "significant";
  description: string;
}

export interface TreatmentRecommendation {
  id: string;
  treatment: string;
  targetArea: string;
  priority: "high" | "medium" | "low";
  description: string;
  estimatedSessions?: number;
}

// ========== EXAMPLES ==========

export interface ExampleQuestion {
  id: string;
  categoryId: BenchmarkCategoryId;
  question: string;
  questionType: "multiple-choice" | "open-ended" | "scenario" | "image-analysis";
  difficulty: "easy" | "medium" | "hard";
  context?: string;
  imageUrl?: string;
}

export interface ExampleResponse {
  questionId: string;
  modelId: string;
  response: string;
  score: number;
  feedback?: string;
  isHighlighted: boolean;
}

// ========== LEADERBOARD ==========

export interface LeaderboardEntry {
  model: LLMModel;
  result: ModelBenchmarkResult;
}

export interface LeaderboardFilters {
  category: BenchmarkCategoryId | "overall";
  provider: string | "all";
  sortBy: "score" | "name" | "date";
  sortOrder: "asc" | "desc";
}

// ========== COMPARISON ==========

export interface ComparisonState {
  selectedModelIds: string[];
  maxModels: number;
}
