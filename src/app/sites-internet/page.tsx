import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import {
  Check,
  Palette,
  MonitorSmartphone,
  Gauge,
  Search,
  MousePointerClick,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { TiltCard } from "@/components/ui/TiltCard";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { WebsiteHero } from "@/components/sites-internet/WebsiteHero";
import { websiteSolutions, websiteStrengths, websiteProcess, websiteFaqItems } from "@/content/websites";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/jsonld";

const title = "Création de sites internet professionnels";
const description =
  "Cyberattract conçoit des sites vitrines, multipages et e-commerce sur mesure, pensés pour valoriser votre entreprise et transformer vos visiteurs en clients.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sites-internet" },
  openGraph: { title, description, url: "/sites-internet" },
};

const strengthIcons = [Palette, MonitorSmartphone, Gauge, Search, MousePointerClick, UserCheck];

export default function SitesInternetPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Création de sites internet" },
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
              name: "Création de sites internet",
              description,
              url: "/sites-internet",
            }),
            faqJsonLd(websiteFaqItems),
          ]),
        }}
      />

      <WebsiteHero breadcrumb={breadcrumb} />

      {/* Nos solutions */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Nos solutions"
            title="Un format de site adapté à votre activité."
            text="Chaque projet est différent : voici les grandes familles de sites que nous construisons."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {websiteSolutions.map((solution, index) => (
              <Reveal key={solution.id} delay={index * 0.08}>
                <TiltCard className="rounded-2xl border border-border bg-white">
                  <div className="flex h-full flex-col gap-4 p-6 sm:p-7">
                    <h3 className="font-heading text-lg font-semibold">{solution.name}</h3>
                    <p className="text-sm leading-relaxed text-steel">{solution.description}</p>
                    <ul className="flex flex-1 flex-col gap-2.5 border-t border-border pt-4">
                      {solution.advantages.map((advantage) => (
                        <li key={advantage} className="flex items-start gap-2 text-sm text-black/75">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pourquoi choisir Cyber Attract */}
      <section className="bg-[#F0F2F5] py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Pourquoi nous choisir" title="Pourquoi choisir Cyberattract ?" />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {websiteStrengths.map((strength, index) => {
              const Icon = strengthIcons[index];
              return (
                <Reveal key={strength.title} delay={index * 0.05}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange/10">
                      <Icon className="h-5 w-5 text-orange" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold">{strength.title}</h3>
                    <p className="text-sm leading-relaxed text-steel">{strength.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Notre processus de création */}
      <section className="bg-dark py-20 text-white sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Notre processus"
            title="Notre processus de création, étape par étape."
            tone="light"
          />

          <ProcessSteps steps={websiteProcess} />
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Questions fréquentes" title="Ce que l'on nous demande le plus souvent." />
          <div className="mt-10 max-w-3xl">
            <Accordion items={websiteFaqItems} />
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="relative overflow-hidden bg-dark py-20 text-white sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(10,77,245,0.18),transparent)]"
        />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <h2
            className="max-w-2xl font-heading font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 1.5rem + 2.4vw, 3.6rem)" }}
          >
            Donnons vie à votre projet digital.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Décrivez votre projet et recevez un devis adapté à vos besoins, sans engagement.
          </p>

          <div className="mt-2">
            <Button href="/contact?offre=Site%20internet" size="lg">
              Demander mon devis
            </Button>
          </div>

          <p className="text-sm text-white/50">
            Besoin aussi de générer des demandes avec de la publicité ?{" "}
            <Link href="/offres" className="font-medium text-white underline underline-offset-2 hover:text-white/80">
              Découvrez nos offres marketing
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
