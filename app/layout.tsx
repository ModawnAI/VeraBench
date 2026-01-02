import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "VeraBench - LLM Benchmark for Aesthetic Medicine",
  description:
    "The definitive benchmark for evaluating Large Language Models in the aesthetic medicine and skincare domain. Compare frontier AI models on treatment knowledge, safety, consultation quality, and facial analysis.",
  keywords: [
    "LLM benchmark",
    "AI evaluation",
    "aesthetic medicine",
    "medspa AI",
    "skincare AI",
    "GPT-4",
    "Claude",
    "Gemini",
    "facial analysis AI",
  ],
  authors: [{ name: "Vera Beauty Inc." }],
  openGraph: {
    title: "VeraBench - LLM Benchmark for Aesthetic Medicine",
    description:
      "Compare frontier AI models on treatment knowledge, safety, and consultation quality for aesthetic medicine.",
    type: "website",
    locale: "en_US",
    siteName: "VeraBench",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeraBench - LLM Benchmark for Aesthetic Medicine",
    description:
      "Compare frontier AI models on treatment knowledge, safety, and consultation quality for aesthetic medicine.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistMono.variable} ${notoSansKr.variable} font-mono antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
