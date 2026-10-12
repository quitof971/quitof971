import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { PricingSection } from "@/components/home/PricingSection";
import { LocalGrowthSection } from "@/components/home/LocalGrowthSection";
import { ConversionSection } from "@/components/home/ConversionSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import {
  aiPacks,
  comparisonRows,
  offerGuides,
  offersFaqItems,
  pricingBudgetNotice,
  pricingFeesNotice,
} from "@/content/offers";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";

const title = "Offres marketing digital et acquisition";
const description =
  "Tarifs des offres Pilote, Standard et Pack RDV Premium, des options de suivi & conversion et des packs IA pour les TPE et PME.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/offres" },
  openGraph: { title, description, url: "/offres" },
};

export default function OffresPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Offres" },
  ];

  return (
    <>
      <Script
        id="offres-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd(breadcrumb), faqJsonLd(offersFaqItems)]),
        }}
      />

      <PageHero
        eyebrow="Offres"
        title="Des offres claires, adaptées à votre activité."
        text="Acquisition de prospects, suivi commercial et automatisation : chaque offre précise son contenu et son tarif."
        breadcrumb={breadcrumb}
      />

      <PricingSection />

      <section className="bg-[#F0F2F5] py-16 sm:py-20">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-orange/25 bg-white p-6 sm:p-8">
            <p className="flex items-start gap-2.5 text-sm font-medium text-black sm:text-base">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
              {pricingBudgetNotice}
            </p>
            <p className="pl-[30px] text-sm text-steel">{pricingFeesNotice}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Comparatif" title="Comparez les offres." />
          <p className="mt-2 text-xs text-steel sm:hidden">Faites glisser le tableau vers la droite pour tout voir →</p>
          <div className="mt-8">
            <ComparisonTable rows={comparisonRows} />
          </div>
        </Container>
      </section>

      <section className="bg-[#F0F2F5] py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Aide au choix" title="Quelle offre correspond à votre entreprise ?" align="center" className="mx-auto text-center" />

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
            {offerGuides.map((guide, index) => (
              <Reveal key={guide.question} delay={index * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-6 text-center">
                  <p className="font-heading text-base font-semibold">{guide.question}</p>
                  <p className="mt-auto text-sm font-medium text-orange">{guide.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/contact" size="lg">
              Demander un diagnostic
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Questions fréquentes" title="Les offres, en détail." />
          <div className="mt-10">
            <Accordion items={offersFaqItems} />
          </div>
        </Container>
      </section>

      <LocalGrowthSection />
      <ConversionSection />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Pôle 03" title="Packs IA & automatisation" text="Un aperçu des quatre packs. Le détail complet, avec les agents et les avertissements, est présenté sur la page dédiée." />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiPacks.map((pack, index) => (
              <Reveal key={pack.id} delay={index * 0.06}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border p-6">
                  <h3 className="font-heading text-lg font-semibold">{pack.name}</h3>
                  <div className="flex flex-col gap-0.5 text-sm">
                    <p className="text-steel">Setup : {pack.setup}</p>
                    <p className="text-steel">Suivi : {pack.fee}</p>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-steel">{pack.promise}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Link
            href="/ia-automatisation"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:text-orange"
          >
            Voir le détail des packs IA
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
