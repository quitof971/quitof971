import type { Metadata } from "next";
import Script from "next/script";
import { Compass, Crosshair, Gauge, ListChecks, RefreshCw, Timer } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const title = "À propos";
const description =
  "Cyberattract est une structure spécialisée dans l'acquisition digitale, le suivi commercial et l'automatisation pour les TPE et PME.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/a-propos" },
  openGraph: { title, description, url: "/a-propos" },
};

const values = [
  { icon: Crosshair, title: "Clarté", text: "Des offres et des tarifs présentés sans jargon, pour être compris rapidement." },
  { icon: Compass, title: "Stratégie sur-mesure", text: "Une approche adaptée au secteur, au marché, au panier moyen et à la zone commerciale de chaque entreprise." },
  { icon: Gauge, title: "Mesure", text: "Des campagnes suivies à partir de données concrètes, pas de promesses en l'air." },
  { icon: ListChecks, title: "Suivi", text: "Des prospects organisés pour éviter les demandes oubliées." },
  { icon: Timer, title: "Réactivité", text: "Des ajustements réguliers plutôt qu'un pilotage automatique figé." },
  { icon: RefreshCw, title: "Amélioration continue", text: "Des campagnes et des pages retravaillées à mesure que les données arrivent." },
];

export default function AProposPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "À propos" },
  ];

  return (
    <>
      <Script
        id="apropos-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumb)) }}
      />

      <PageHero
        eyebrow="À propos"
        title="Une structure spécialisée dans l'acquisition digitale, la conversion et l'automatisation."
        breadcrumb={breadcrumb}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="max-w-3xl text-lg leading-relaxed text-black/85 sm:text-xl">
              Cyberattract est une structure spécialisée dans l&apos;acquisition digitale, le
              suivi commercial et l&apos;automatisation pour les TPE, PME et entreprises de
              services. Son objectif est de rendre les campagnes plus lisibles, les demandes plus
              faciles à suivre et les actions commerciales plus structurées.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#F0F2F5] py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Nos valeurs" title="Ce qui guide notre travail au quotidien." />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 0.05}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange/10">
                      <Icon className="h-5 w-5 text-orange" aria-hidden="true" />
                    </span>
                    <h2 className="font-heading text-lg font-semibold">{value.title}</h2>
                    <p className="text-sm leading-relaxed text-steel">{value.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
