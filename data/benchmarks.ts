import type { BenchmarkCategory, SubCategory } from "@/types";

export const benchmarkCategories: BenchmarkCategory[] = [
  {
    id: "treatment-knowledge",
    name: "Treatment Knowledge",
    shortName: "Knowledge",
    description:
      "Accuracy on aesthetic treatment procedures per the Vera Taxonomy, including injectables, energy-based devices, chemical treatments, and surgical procedures. Tests understanding of treatment invasiveness levels, indications, techniques, and expected outcomes.",
    weight: 0.25,
    icon: "BookOpen",
    color: "#D85A5A",
  },
  {
    id: "safety-contraindications",
    name: "Safety & Contraindications",
    shortName: "Safety",
    description:
      "Identifying risks, medical contraindications, drug interactions, Fitzpatrick skin type considerations, and emergency protocols. Critical for patient safety in aesthetic medicine practice.",
    weight: 0.30,
    icon: "Shield",
    color: "#D85A5A",
  },
  {
    id: "consultation-quality",
    name: "Consultation Quality",
    shortName: "Consultation",
    description:
      "Patient communication aligned with Vera's brand voice: calm authority with scientific clarity and emotional intuition. Evaluates needs assessment, setting realistic expectations, treatment planning, and informed consent guidance.",
    weight: 0.20,
    icon: "MessageCircle",
    color: "#D85A5A",
  },
  {
    id: "facial-analysis",
    name: "Facial Analysis",
    shortName: "Facial AI",
    description:
      "Vision-based analysis of facial features, aging assessment, concern identification (wrinkles, hyperpigmentation, volume loss), and personalized treatment recommendations matching the Vera AIA (AI Aesthetician) capabilities.",
    weight: 0.25,
    icon: "ScanFace",
    color: "#D85A5A",
  },
];

export const subCategories: SubCategory[] = [
  // Treatment Knowledge - Per Vera Taxonomy
  {
    id: "injectables-neuromodulators",
    name: "Injectables & Neuromodulators",
    description: "Botox, Dysport, Xeomin: injection sites, dosing, muscle anatomy, timing, and longevity",
    parentCategoryId: "treatment-knowledge",
    questionCount: 55,
  },
  {
    id: "dermal-fillers-volumizers",
    name: "Dermal Fillers & Volumizers",
    description: "HA vs non-HA fillers, layering techniques, facial zones, rheology, and reversal protocols",
    parentCategoryId: "treatment-knowledge",
    questionCount: 50,
  },
  {
    id: "energy-based-devices",
    name: "Energy-Based Devices",
    description: "Lasers, IPL, RF, ultrasound, plasma: wavelengths, settings, device selection, and treatment protocols",
    parentCategoryId: "treatment-knowledge",
    questionCount: 45,
  },
  {
    id: "chemical-treatments",
    name: "Chemical Treatments",
    description: "Peels (superficial, medium, deep), microneedling, PRP, mesotherapy, and combination approaches",
    parentCategoryId: "treatment-knowledge",
    questionCount: 40,
  },
  {
    id: "surgical-procedures",
    name: "Surgical Procedures",
    description: "Blepharoplasty, rhinoplasty, facelifts, liposuction: invasiveness levels and patient selection",
    parentCategoryId: "treatment-knowledge",
    questionCount: 35,
  },
  {
    id: "concern-treatment-mapping",
    name: "Concern-Treatment Mapping",
    description: "Matching aesthetic concerns (wrinkles, laxity, pigmentation) to appropriate treatment modalities",
    parentCategoryId: "treatment-knowledge",
    questionCount: 40,
  },

  // Safety & Contraindications
  {
    id: "medical-contraindications",
    name: "Medical Contraindications",
    description: "Pregnancy, breastfeeding, autoimmune conditions, active infections, keloid history",
    parentCategoryId: "safety-contraindications",
    questionCount: 50,
  },
  {
    id: "procedure-risks-complications",
    name: "Procedure Risks & Complications",
    description: "Vascular occlusion, infection, scarring, PIH, asymmetry, and adverse reaction management",
    parentCategoryId: "safety-contraindications",
    questionCount: 45,
  },
  {
    id: "drug-interactions",
    name: "Drug Interactions",
    description: "Blood thinners, immunosuppressants, retinoids, antibiotics, and supplement interactions",
    parentCategoryId: "safety-contraindications",
    questionCount: 35,
  },
  {
    id: "fitzpatrick-skin-safety",
    name: "Fitzpatrick & Skin Type Safety",
    description: "Skin type assessment, melanin considerations, PIH risk stratification, and device parameter adjustments",
    parentCategoryId: "safety-contraindications",
    questionCount: 35,
  },
  {
    id: "emergency-protocols",
    name: "Emergency Protocols",
    description: "Anaphylaxis management, vascular occlusion reversal (hyaluronidase), adverse reaction protocols",
    parentCategoryId: "safety-contraindications",
    questionCount: 30,
  },

  // Consultation Quality - Vera Brand Voice
  {
    id: "patient-needs-assessment",
    name: "Patient Needs Assessment",
    description: "Understanding patient goals, motivations, and aesthetic concerns through empathetic inquiry",
    parentCategoryId: "consultation-quality",
    questionCount: 30,
  },
  {
    id: "realistic-expectations",
    name: "Setting Realistic Expectations",
    description: "Honest communication about outcomes, limitations, and recovery without overpromising",
    parentCategoryId: "consultation-quality",
    questionCount: 30,
  },
  {
    id: "treatment-planning",
    name: "Treatment Planning & Sequencing",
    description: "Multi-treatment approaches, timing between procedures, and long-term aesthetic planning",
    parentCategoryId: "consultation-quality",
    questionCount: 25,
  },
  {
    id: "informed-consent-education",
    name: "Informed Consent & Education",
    description: "Clear explanation of procedures, risks, alternatives, and post-care instructions",
    parentCategoryId: "consultation-quality",
    questionCount: 25,
  },

  // Facial Analysis - Vera AIA Capabilities
  {
    id: "facial-proportions-symmetry",
    name: "Facial Proportions & Symmetry",
    description: "Analysis of facial thirds, symmetry assessment, golden ratios, and structural balance",
    parentCategoryId: "facial-analysis",
    questionCount: 35,
  },
  {
    id: "aging-assessment",
    name: "Aging Assessment",
    description: "Volume loss patterns, skin laxity, dynamic vs static wrinkles, and aging stage classification",
    parentCategoryId: "facial-analysis",
    questionCount: 35,
  },
  {
    id: "concern-identification",
    name: "Concern Identification",
    description: "Detecting specific aesthetic concerns from images: hyperpigmentation, redness, texture, pores",
    parentCategoryId: "facial-analysis",
    questionCount: 30,
  },
  {
    id: "treatment-recommendation",
    name: "Treatment Recommendation",
    description: "Personalized treatment suggestions based on identified concerns and patient profile",
    parentCategoryId: "facial-analysis",
    questionCount: 30,
  },
];

export function getCategoryById(id: string): BenchmarkCategory | undefined {
  return benchmarkCategories.find((c) => c.id === id);
}

export function getSubCategoriesByCategoryId(categoryId: string): SubCategory[] {
  return subCategories.filter((sc) => sc.parentCategoryId === categoryId);
}

export function getTotalQuestionCount(): number {
  return subCategories.reduce((sum, sc) => sum + sc.questionCount, 0);
}
