import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/home/Hero";
import { ExpertiseMarquee } from "@/components/home/ExpertiseMarquee";
import { ProblemSection } from "@/components/home/ProblemSection";
import { AcquisitionSection } from "@/components/home/AcquisitionSection";
import { MethodSection } from "@/components/home/MethodSection";
import { PricingSection } from "@/components/home/PricingSection";
import { LocalGrowthSection } from "@/components/home/LocalGrowthSection";
import { ResultsSection } from "@/components/home/ResultsSection";
import { ConversionSection } from "@/components/home/ConversionSection";
import { AISection } from "@/components/home/AISection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { faqItems } from "@/content/faq";
import { site } from "@/content/site";
import { faqJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: site.seo.titleDefault,
  description: site.seo.descriptionDefault,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }}
      />
      <Hero />
      <ExpertiseMarquee />
      <ProblemSection />
      <AcquisitionSection />
      <MethodSection />
      <PricingSection />
      <LocalGrowthSection />
      <ResultsSection />
      <ConversionSection />
      <AISection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
