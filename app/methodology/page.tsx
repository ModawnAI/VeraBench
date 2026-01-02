"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { benchmarkCategories, subCategories, getTotalQuestionCount } from "@/data/benchmarks";
import {
  BookOpen,
  Shield,
  MessageCircle,
  ScanFace,
  CheckCircle2,
  Target,
  FileQuestion,
  BarChart3,
  Lightbulb,
  Layers,
  Users,
  Stethoscope,
  Microscope,
  FlaskConical,
  Scale,
} from "lucide-react";

const categoryIcons: Record<string, typeof BookOpen> = {
  "treatment-knowledge": BookOpen,
  "safety-contraindications": Shield,
  "consultation-quality": MessageCircle,
  "facial-analysis": ScanFace,
};

const evaluationProcess = [
  {
    step: 1,
    title: "Question Development",
    description:
      "Domain experts develop questions based on real clinical scenarios from the Vera Taxonomy, covering all treatment modalities, invasiveness levels, and patient concerns across aesthetic medicine.",
    icon: FileQuestion,
    details: [
      "Questions sourced from board-certified dermatologists and aesthetic practitioners",
      "Covers surgical, minimally invasive, and non-invasive procedures",
      "Includes real patient consultation scenarios and concerns",
    ],
  },
  {
    step: 2,
    title: "Model Evaluation",
    description:
      "Each model receives identical prompts with controlled temperature settings. Responses are collected systematically for blind evaluation.",
    icon: Target,
    details: [
      "Standardized prompt format across all models",
      "Vision models tested with clinical facial images",
      "Multiple response samples for consistency analysis",
    ],
  },
  {
    step: 3,
    title: "Expert Scoring",
    description:
      "Board-certified dermatologists and aesthetic medicine specialists review each response using standardized rubrics aligned with clinical best practices.",
    icon: Stethoscope,
    details: [
      "Blind evaluation to prevent model bias",
      "Scoring rubrics based on clinical accuracy",
      "Safety-critical responses weighted heavily",
    ],
  },
  {
    step: 4,
    title: "Weighted Aggregation",
    description:
      "Final scores are calculated using category weights that prioritize patient safety (30%), followed by treatment knowledge (25%), facial analysis (25%), and consultation quality (20%).",
    icon: BarChart3,
    details: [
      "Safety & Contraindications: 30% weight",
      "Treatment Knowledge: 25% weight",
      "Facial Analysis: 25% weight",
      "Consultation Quality: 20% weight",
    ],
  },
];

const veraTaxonomy = [
  {
    title: "Surgical Procedures",
    description: "Invasive procedures requiring incisions, stitches, or major tissue alteration",
    examples: ["Rhinoplasty", "Blepharoplasty", "Facelifts", "Liposuction"],
    icon: Layers,
  },
  {
    title: "Minimally Invasive",
    description: "Procedures involving minor punctures, injections, or small incisions",
    examples: ["Botox", "Dermal Fillers", "Thread Lifts", "PRP"],
    icon: FlaskConical,
  },
  {
    title: "Non-Invasive",
    description: "No skin penetration; uses surface-level energy or topical methods",
    examples: ["Laser Treatments", "RF Devices", "Chemical Peels", "LED Therapy"],
    icon: Microscope,
  },
];

const sampleQuestions = [
  {
    category: "Treatment Knowledge",
    question: "A 45-year-old patient presents with moderate nasolabial folds and mild volume loss in the midface. Compare the expected outcomes, duration, and risks of treating with hyaluronic acid filler versus calcium hydroxylapatite.",
    evaluation: "Tests understanding of filler rheology, facial anatomy, product selection, and outcome expectations",
  },
  {
    category: "Safety & Contraindications",
    question: "A patient taking daily aspirin for cardiovascular prevention requests dermal filler treatment for lip augmentation. What pre-procedure protocol would you recommend, and what are the key risk considerations?",
    evaluation: "Assesses knowledge of drug interactions, bleeding risks, and safety protocols",
  },
  {
    category: "Consultation Quality",
    question: "A patient shows you a photo of a celebrity and asks to look exactly like them. How would you approach this conversation while setting realistic expectations and maintaining patient satisfaction?",
    evaluation: "Tests empathy, honest communication, and ability to redirect unrealistic expectations",
  },
  {
    category: "Facial Analysis",
    question: "[Image provided] Analyze this patient's facial features, identify the primary aesthetic concerns, and recommend a treatment plan prioritized by impact and safety.",
    evaluation: "Evaluates visual analysis accuracy, concern identification, and treatment mapping",
  },
];

export default function MethodologyPage() {
  const totalQuestions = getTotalQuestionCount();

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-[#FAFAFA] border-b border-[#EEE]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-4"
            >
              Evidence Over Hype
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4"
            >
              Benchmark Methodology
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#666] max-w-2xl mx-auto"
            >
              VeraBench evaluates LLMs using a comprehensive framework built on the
              Vera Taxonomy - our globally unifying system for aesthetic treatments
              developed with board-certified practitioners.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-[#EEE]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-[#D85A5A] mb-2">
                  {totalQuestions}+
                </p>
                <p className="text-[#666] text-sm">Test Cases</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#D85A5A] mb-2">4</p>
                <p className="text-[#666] text-sm">Core Categories</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#D85A5A] mb-2">19</p>
                <p className="text-[#666] text-sm">Sub-categories</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#D85A5A] mb-2">9</p>
                <p className="text-[#666] text-sm">Models Tested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vera Taxonomy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-4">
                Foundation
              </p>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
                The Vera Taxonomy
              </h2>
              <p className="text-[#666] max-w-2xl mx-auto">
                Our benchmark is built on the Vera Taxonomy - a comprehensive, flexible,
                and future-proof classification system for aesthetic treatments that
                establishes a solid foundation for the industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {veraTaxonomy.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border border-[#EEE] hover:border-[#DDD] transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#D85A5A]/10 flex items-center justify-center mb-4">
                        <item.icon size={24} className="text-[#D85A5A]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#666] mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.examples.map((ex) => (
                          <Badge key={ex} variant="outline" className="text-xs">
                            {ex}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-4">
                Evaluation Framework
              </p>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
                Benchmark Categories
              </h2>
              <p className="text-[#666] max-w-2xl mx-auto">
                Each model is evaluated across four core categories, with safety
                receiving the highest weight to ensure patient protection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benchmarkCategories.map((category, index) => {
                const Icon = categoryIcons[category.id] || BookOpen;
                const catSubCategories = subCategories.filter(
                  (sc) => sc.parentCategoryId === category.id
                );
                const questionCount = catSubCategories.reduce(
                  (sum, sc) => sum + sc.questionCount,
                  0
                );

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#D85A5A]/10">
                            <Icon size={24} className="text-[#D85A5A]" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <h3 className="text-lg font-semibold text-[#1A1A1A]">
                                {category.name}
                              </h3>
                              <Badge className="bg-[#D85A5A]/10 text-[#D85A5A] border-0">
                                {(category.weight * 100).toFixed(0)}% weight
                              </Badge>
                              <Badge variant="outline">
                                {questionCount} questions
                              </Badge>
                            </div>
                            <p className="text-sm text-[#666]">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-[#EEE] pt-4">
                          <p className="text-xs text-[#888] uppercase tracking-wider mb-3">
                            Sub-categories
                          </p>
                          <div className="space-y-2">
                            {catSubCategories.map((sc) => (
                              <div
                                key={sc.id}
                                className="flex items-center justify-between text-sm"
                              >
                                <span className="text-[#666]">{sc.name}</span>
                                <span className="text-[#888]">
                                  {sc.questionCount} tests
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-4">
                Process
              </p>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
                How We Evaluate
              </h2>
              <p className="text-[#666] max-w-2xl mx-auto">
                Our four-step evaluation process ensures rigorous, unbiased assessment
                of each model's capabilities in aesthetic medicine.
              </p>
            </div>

            <div className="space-y-6">
              {evaluationProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#D85A5A] text-white flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    {index < evaluationProcess.length - 1 && (
                      <div className="w-px h-full bg-[#EEE] mx-auto mt-2 min-h-[60px]" />
                    )}
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon size={20} className="text-[#D85A5A]" />
                        <h3 className="text-lg font-semibold text-[#1A1A1A]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[#666] mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-[#888]"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-[#D85A5A] mt-0.5 flex-shrink-0"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Questions */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-4">
                Examples
              </p>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
                Sample Test Cases
              </h2>
              <p className="text-[#666] max-w-2xl mx-auto">
                Here are examples of the types of questions used in our benchmark,
                designed to test real-world clinical competency.
              </p>
            </div>

            <div className="space-y-6">
              {sampleQuestions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <Badge className="bg-[#D85A5A]/10 text-[#D85A5A] border-0 mb-3">
                        {item.category}
                      </Badge>
                      <p className="text-[#1A1A1A] mb-4 font-medium">
                        "{item.question}"
                      </p>
                      <div className="flex items-start gap-2 text-sm text-[#888] bg-[#FAFAFA] p-3 rounded-lg">
                        <Scale size={14} className="mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Evaluation criteria:</strong> {item.evaluation}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-4">
                Expert Review
              </p>
              <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
                Clinical Advisory Board
              </h2>
              <p className="text-[#666] max-w-2xl mx-auto">
                Our benchmark is developed and validated by a diverse panel of
                aesthetic medicine experts ensuring clinical accuracy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Dermatologists",
                  description: "Board-certified specialists in skin conditions and aesthetic dermatology",
                  icon: Users,
                },
                {
                  title: "Plastic Surgeons",
                  description: "Experts in surgical and minimally invasive facial rejuvenation",
                  icon: Stethoscope,
                },
                {
                  title: "Aesthetic Nurses",
                  description: "Experienced practitioners in injectable treatments and patient care",
                  icon: Shield,
                },
              ].map((member, index) => (
                <motion.div
                  key={member.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#D85A5A]/10 flex items-center justify-center mx-auto mb-4">
                        <member.icon size={24} className="text-[#D85A5A]" />
                      </div>
                      <h3 className="font-semibold text-[#1A1A1A] mb-2">
                        {member.title}
                      </h3>
                      <p className="text-sm text-[#666]">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-amber-50 border border-amber-200">
              <Lightbulb size={24} className="text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">
                  Transparency & Limitations
                </h3>
                <p className="text-amber-800 text-sm mb-4">
                  VeraBench is designed to provide directional guidance on model
                  performance in aesthetic medicine. We believe in radical transparency:
                </p>
                <ul className="text-amber-800 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    Benchmarks reflect a snapshot in time (v2.0, December 2025) and may not capture the latest model updates.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    Scores are based on our specific question set derived from the Vera Taxonomy and may not generalize to all clinical scenarios.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    AI should never replace professional medical advice - always consult qualified practitioners for treatment decisions.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    We continuously update our benchmark to improve coverage, accuracy, and reflect evolving best practices.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    Facial analysis scores are based on controlled test images and may vary with image quality in real-world use.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
