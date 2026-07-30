import type { Metadata } from "next";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProofCard } from "@/components/home/ProofCard";
import { FinalCTA } from "@/components/home/FinalCTA";
import { resultsProofs, resultsCaption } from "@/content/services";
import { resolvePublicAsset } from "@/lib/assets";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const title = "Résultats | Méthode de mesure des campagnes Google Ads";
const description =
  "Comment BTP Leads Pro mesure les campagnes Google Ads : conversions, coûts, fréquence d'exposition, appels et formulaires.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/resultats" },
  openGraph: { title, description, url: "/resultats" },
};

const measurementPoints = [
  {
    title: "Conversions enregistrées",
    text: "Chaque appel suivi et chaque formulaire envoyé est enregistré comme une conversion, avec sa source.",
  },
  {
    title: "Coûts par action",
    text: "Le coût par appel et par formulaire est suivi pour ajuster les campagnes en continu.",
  },
  {
    title: "Fréquence d'exposition",
    text: "La fréquence moyenne d'impression est surveillée pour éviter la lassitude ou le budget mal réparti.",
  },
  {
    title: "Qualité des demandes",
    text: "Les appels et formulaires sont analysés pour distinguer les demandes exploitables du reste.",
  },
];

export default function ResultatsPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Résultats" },
  ];

  return (
    <>
      <Script
        id="resultats-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumb)) }}
      />

      <PageHero
        eyebrow="Résultats"
        title="Mesurer avant de promettre."
        text="Les campagnes sont suivies à partir de données concrètes : conversions enregistrées, coûts, fréquence d'exposition, appels et formulaires."
        breadcrumb={breadcrumb}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Aperçu de reporting" title="Des captures issues du compte Google Ads d'un de nos clients." />

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {resultsProofs.map((proof, index) => (
              <Reveal key={proof.id} delay={index * 0.08}>
                <ProofCard src={resolvePublicAsset(proof.file)} alt={proof.alt} title={proof.title} />
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm text-steel">{resultsCaption}</p>
        </Container>
      </section>

      <section className="bg-[#F0F2F5] py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Méthode" title="Ce que nous mesurons, et comment." />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {measurementPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.06}>
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-white p-6">
                  <h2 className="font-heading text-lg font-semibold">{point.title}</h2>
                  <p className="text-sm leading-relaxed text-steel">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 text-sm text-steel">
            <p>
              Les résultats dépendent notamment de la zone, du marché, du budget, de l&apos;offre
              et de la réactivité commerciale. Aucune quantité de prospects n&apos;est garantie.
            </p>
            <p>
              Une conversion enregistrée ne correspond pas nécessairement à un contrat signé : elle
              indique un appel ou un formulaire suivi, dont la transformation dépend du traitement
              commercial.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
