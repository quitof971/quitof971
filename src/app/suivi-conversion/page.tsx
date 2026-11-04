import type { Metadata } from "next";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ConversionSection } from "@/components/home/ConversionSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";

const title = "Suivi des leads et conversion";
const description =
  "Suivi des leads, scripts de relance et optimisation de la conversion pour ne plus perdre de prospects générés par vos campagnes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/suivi-conversion" },
  openGraph: { title, description, url: "/suivi-conversion" },
};

const steps = [
  {
    title: "Centraliser",
    text: "Chaque appel et chaque formulaire est enregistré dans un espace unique, avec son statut.",
  },
  {
    title: "Rappeler",
    text: "Des rappels sont programmés pour qu'aucune demande ne reste sans réponse.",
  },
  {
    title: "Relancer",
    text: "Des messages et scripts adaptés à chaque étape : devis envoyé, rendez-vous passé, appel manqué.",
  },
];

export default function SuiviConversionPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Suivi & conversion" },
  ];

  return (
    <>
      <Script
        id="suivi-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd(breadcrumb),
            serviceJsonLd({
              name: "Suivi et conversion des prospects",
              description,
              url: "/suivi-conversion",
            }),
          ]),
        }}
      />

      <PageHero
        eyebrow="Pôle 02 — Suivi & conversion"
        title="Un prospect généré ne doit pas être oublié."
        text="Une campagne peut produire des contacts. Sans organisation, rappel et relance, une partie du budget peut être perdue."
        breadcrumb={breadcrumb}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Notre approche" title="Trois étapes pour ne plus perdre une demande." />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border p-6">
                  <span className="font-heading text-3xl font-bold text-blue-dark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-lg font-semibold">{step.title}</h2>
                  <p className="text-sm leading-relaxed text-steel">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ConversionSection />
      <FinalCTA />
    </>
  );
}
