import type { Metadata } from "next";
import Script from "next/script";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { websiteOffers, websiteBenefits, websiteIntegrations, websiteIntegrationText } from "@/content/websites";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";

const title = "Création et refonte de sites internet";
const description =
  "Landing pages, sites vitrines, refontes et sites e-commerce conçus pour transformer vos visiteurs en demandes de contact, pour tous les secteurs d'activité.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sites-internet" },
  openGraph: { title, description, url: "/sites-internet" },
};

export default function SitesInternetPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Sites Internet" },
  ];

  return (
    <>
      <Script
        id="sites-internet-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd(breadcrumb),
            serviceJsonLd({
              name: "Création et refonte de sites internet",
              description,
              url: "/sites-internet",
            }),
          ]),
        }}
      />

      <PageHero
        eyebrow="Sites Internet"
        title="Un site internet pensé pour générer des clients."
        text="Nous créons des sites professionnels, rapides et conçus pour transformer les visiteurs en demandes de contact."
        breadcrumb={breadcrumb}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Nos offres" title="Un format adapté à chaque projet." />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {websiteOffers.map((offer, index) => (
              <Reveal key={offer.id} delay={index * 0.06}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border p-6 sm:p-7">
                  <h3 className="font-heading text-lg font-semibold">{offer.name}</h3>
                  <p className="font-heading text-xl font-semibold text-orange">{offer.price}</p>
                  {offer.features ? (
                    <ul className="flex flex-1 flex-col gap-2.5">
                      {offer.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-black/75">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="flex-1 text-sm leading-relaxed text-steel">{offer.description}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#F0F2F5] py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Pourquoi" title="Pourquoi refaire ou créer votre site ?" />

          <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {websiteBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-sm text-black/75">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-dark py-20 text-white sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(10,77,245,0.18),transparent)]"
        />
        <Container className="relative flex flex-col items-center gap-8 text-center">
          <SectionHeading
            eyebrow="Un système complet"
            title="Le site s'intègre à vos autres leviers d'acquisition."
            text={websiteIntegrationText}
            tone="light"
            align="center"
            className="mx-auto"
          />

          <ul className="flex flex-wrap items-center justify-center gap-3">
            {websiteIntegrations.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact?offre=Site%20internet" size="lg">
              Demander un devis
            </Button>
            <Button href="/contact?offre=Site%20internet" variant="ghost" size="lg" className="text-white">
              Faire analyser mon site
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
