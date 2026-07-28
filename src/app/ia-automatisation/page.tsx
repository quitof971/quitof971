import type { Metadata } from "next";
import Script from "next/script";
import { Info, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AIPackCard } from "@/components/ui/AIPackCard";
import { FinalCTA } from "@/components/home/FinalCTA";
import { aiAgents } from "@/content/services";
import { aiPacks, aiDisclaimers } from "@/content/offers";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";

const title = "IA & automatisation | Agents IA pour le bâtiment";
const description =
  "Agents IA téléphonique, commercial, marketing, SEO, comptable, juridique et recrutement pour automatiser les tâches répétitives du bâtiment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ia-automatisation" },
  openGraph: { title, description, url: "/ia-automatisation" },
};

export default function IAAutomatisationPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "IA & automatisation" },
  ];

  return (
    <>
      <Script
        id="ia-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd(breadcrumb),
            serviceJsonLd({
              name: "Agents IA et automatisation pour le BTP",
              description,
              url: "/ia-automatisation",
            }),
          ]),
        }}
      />

      <PageHero
        eyebrow="Pôle 03 — IA & automatisation"
        title="Automatiser les tâches répétitives sans compliquer votre entreprise."
        text="Les agents IA complètent le marketing et le suivi commercial. Ils ne remplacent ni vos équipes ni les professionnels réglementés."
        breadcrumb={breadcrumb}
      />

      <section className="relative overflow-hidden bg-black py-20 text-white sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_15%_10%,rgba(4,165,239,0.18),transparent)]"
        />
        <Container className="relative">
          <SectionHeading eyebrow="Les familles d'agents" title="Huit agents, huit problèmes résolus." tone="light" />

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiAgents.map((agent, index) => (
              <Reveal key={agent.id} delay={index * 0.05}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-blue/20 bg-white/[0.03] p-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue/15">
                    <Sparkles className="h-4 w-4 text-blue" aria-hidden="true" />
                  </span>
                  <h2 className="font-heading text-base font-semibold">{agent.name}</h2>
                  <p className="text-sm leading-relaxed text-white/65">{agent.problem}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-dark py-20 text-white sm:py-28">
        <Container>
          <SectionHeading eyebrow="Packs IA" title="Quatre façons d'installer les agents IA." tone="light" />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiPacks.map((pack, index) => (
              <Reveal key={pack.id} delay={index * 0.08}>
                <AIPackCard pack={pack} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            {aiDisclaimers.map((disclaimer) => (
              <p key={disclaimer} className="flex items-start gap-2.5 text-sm text-white/70">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
                {disclaimer}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
