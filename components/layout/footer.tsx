"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  product: [
    { href: "/", label: "Leaderboard" },
    { href: "/compare", label: "Compare Models" },
    { href: "/methodology", label: "Methodology" },
  ],
  resources: [
    { href: "/about", label: "About" },
    { href: "#", label: "Research Paper" },
  ],
  company: [
    { href: "https://verabeauty.app", label: "Vera Beauty", external: true },
    { href: "#", label: "Contact" },
  ],
};

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-[#EEE] py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-1.5 mb-4">
                <Image
                  src="/vera.svg"
                  alt="Vera"
                  width={80}
                  height={26}
                  className="h-6 w-auto"
                />
                <span className="text-lg font-medium text-[#D85A5A]">
                  Bench
                </span>
              </div>
              <p className="text-[#888] text-sm mb-6">
                The definitive benchmark for evaluating LLMs in the aesthetic
                medicine domain.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white border border-[#EEE] flex items-center justify-center text-[#666] hover:text-[#D85A5A] hover:border-[#D85A5A] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-[#1A1A1A] mb-4 uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#666] hover:text-[#D85A5A] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#1A1A1A] mb-4 uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#666] hover:text-[#D85A5A] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#1A1A1A] mb-4 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-[#666] hover:text-[#D85A5A] text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-[#EEE] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#888] text-sm">
              {new Date().getFullYear()} Vera Beauty Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-[#888] hover:text-[#D85A5A] text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[#888] hover:text-[#D85A5A] text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
