import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PricingSection } from "@/components/home/PricingSection";
import { LocalGrowthSection } from "@/components/home/LocalGrowthSection";
import { ConversionSection } from "@/components/home/ConversionSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { aiPacks } from "@/content/offers";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const title = "Offres et tarifs | Acquisition, suivi et IA pour le BTP";
const description =
  "Tarifs des offres Pilote, Standard et Pack RDV Premium, des options de suivi & conversion et des packs IA pour les entreprises du bâtiment.";

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumb)) }}
      />

      <PageHero
        eyebrow="Offres"
        title="Des offres claires, pensées pour le bâtiment."
        text="Acquisition de demandes de devis, suivi commercial et automatisation : chaque offre précise son contenu et son tarif."
        breadcrumb={breadcrumb}
      />

      <PricingSection />
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
