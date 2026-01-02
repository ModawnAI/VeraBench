"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Sparkles,
  Shield,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Honesty",
    description:
      "Radical transparency, delivered kindly. We believe in sharing unbiased benchmark results.",
  },
  {
    icon: Sparkles,
    title: "Beauty",
    description:
      "Look better to feel better. We support the aesthetic medicine industry's mission.",
  },
  {
    icon: Shield,
    title: "Science",
    description:
      "Evidence over hype. Our benchmarks are grounded in rigorous methodology.",
  },
  {
    icon: Users,
    title: "Empathy",
    description:
      "We build to connect, not to convince. Understanding patient needs is paramount.",
  },
];

const team = [
  {
    role: "AI Research",
    description: "Developing evaluation frameworks and benchmark methodology",
  },
  {
    role: "Clinical Advisory",
    description: "Board-certified dermatologists and aesthetic practitioners",
  },
  {
    role: "Engineering",
    description: "Building scalable systems for model evaluation",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-[#FAFAFA] border-b border-[#EEE]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="text-3xl tracking-[0.2em] font-medium text-[#1A1A1A]">
                VERA
              </span>
              <span className="text-sm tracking-[0.1em] text-[#D85A5A] font-medium uppercase">
                Bench
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4"
            >
              About VeraBench
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#666] max-w-2xl mx-auto"
            >
              The definitive benchmark for evaluating AI in aesthetic medicine,
              created by Vera Beauty Inc.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#D85A5A] tracking-[0.2em] text-xs uppercase mb-4">
                  Our Mission
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-4">
                  Raising the World's Skin Game
                </h2>
                <p className="text-[#666] mb-6">
                  As AI becomes increasingly integrated into healthcare and
                  aesthetics, it's crucial to understand how well these models
                  perform in specialized domains. VeraBench was created to
                  provide transparent, rigorous evaluation of AI capabilities
                  in aesthetic medicine.
                </p>
                <p className="text-[#666]">
                  Our goal is to help practitioners, patients, and AI
                  developers understand the strengths and limitations of
                  current models, ultimately improving the quality of AI-
                  assisted aesthetic consultations.
                </p>
              </div>
              <div className="bg-[#FAFAFA] rounded-2xl p-8 border border-[#EEE]">
                <Globe size={48} className="text-[#D85A5A] mb-4" />
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                  Global Impact
                </h3>
                <p className="text-[#666] text-sm">
                  VeraBench serves the global aesthetic medicine community,
                  providing insights that help improve AI safety and
                  effectiveness worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-8 text-center">
              Our Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center border border-[#EEE] hover:border-[#DDD] transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#D85A5A]/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon size={24} className="text-[#D85A5A]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-[#666]">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vera Beauty */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border border-[#EEE]">
              <div className="grid md:grid-cols-2">
                <div className="p-8 bg-[#D85A5A]">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Powered by Vera Beauty
                  </h3>
                  <p className="text-white/80 mb-6">
                    VeraBench is created and maintained by Vera Beauty Inc., the
                    company behind the leading aesthetic medicine research
                    platform. Our deep domain expertise informs every aspect of
                    our benchmark design.
                  </p>
                  <a
                    href="https://verabeauty.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="secondary"
                      className="bg-white text-[#D85A5A] hover:bg-white/90"
                    >
                      Visit Vera Beauty
                      <ExternalLink size={14} className="ml-2" />
                    </Button>
                  </a>
                </div>
                <CardContent className="p-8">
                  <p className="text-[#666] mb-4">
                    <strong className="text-[#1A1A1A]">Vera Beauty Inc.</strong>{" "}
                    is building the most trusted platform for aesthetic
                    treatments. Our core product helps patients research
                    treatments and providers, while our AI technology assists
                    practitioners in delivering better care.
                  </p>
                  <p className="text-sm text-[#888]">
                    Brand tagline: "Age beautifully, backed by science"
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-8 text-center">
              The Team Behind VeraBench
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full border border-[#EEE]">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-[#EEE] mx-auto mb-4" />
                      <h4 className="font-semibold text-[#1A1A1A] mb-2">
                        {member.role}
                      </h4>
                      <p className="text-sm text-[#666]">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
              Get in Touch
            </h2>
            <p className="text-[#666] mb-6">
              Interested in contributing to VeraBench or learning more about
              our methodology?
            </p>
            <Button size="lg" className="group bg-[#D85A5A] hover:bg-[#C04A4A]">
              Contact Us
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-0.5 transition-transform"
              />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
