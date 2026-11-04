import type { Metadata } from "next";
import Script from "next/script";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MethodSection } from "@/components/home/MethodSection";
import { PricingSection } from "@/components/home/PricingSection";
import { LocalGrowthSection } from "@/components/home/LocalGrowthSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { acquisitionFeatureDetails } from "@/content/services";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";

const title = "Acquisition digitale et Google Ads";
const description =
  "Campagnes Google Ads Search, landing pages, tracking et CRM pour générer des prospects qualifiés et attirer de nouveaux clients.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/acquisition" },
  openGraph: { title, description, url: "/acquisition" },
};

export default function AcquisitionPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Acquisition" },
  ];

  return (
    <>
      <Script
        id="acquisition-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd(breadcrumb),
            serviceJsonLd({
              name: "Acquisition digitale",
              description,
              url: "/acquisition",
            }),
          ]),
        }}
      />

      <PageHero
        eyebrow="Pôle 01 — Acquisition digitale"
        title="Générer des prospects avec une stratégie adaptée à votre activité."
        text="Campagnes Google Ads, landing pages, tracking et CRM : un système construit autour de vos services les plus rentables, de votre marché et de votre zone commerciale."
        breadcrumb={breadcrumb}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {acquisitionFeatureDetails.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.05}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border p-6">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange/10">
                    <Check className="h-4 w-4 text-orange" aria-hidden="true" />
                  </span>
                  <h2 className="font-heading text-base font-semibold">{feature.title}</h2>
                  <p className="text-sm leading-relaxed text-steel">{feature.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <MethodSection />
      <PricingSection />
      <LocalGrowthSection />
      <FinalCTA />
    </>
  );
}
