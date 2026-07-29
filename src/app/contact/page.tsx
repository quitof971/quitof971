import type { Metadata } from "next";
import Script from "next/script";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const title = "Contact | Demander un diagnostic";
const description =
  "Contactez BTP Leads Pro pour un diagnostic de votre acquisition digitale : téléphone, e-mail ou formulaire détaillé.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
};

export default function ContactPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Contact" },
  ];

  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumb)) }}
      />

      <PageHero
        eyebrow="Contact"
        title="Demandez un diagnostic de votre acquisition."
        text="Décrivez votre activité et votre objectif : nous revenons vers vous pour évaluer ce qui est réaliste et adapté."
        breadcrumb={breadcrumb}
      />

      <section className="bg-white py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-border p-6">
              <h2 className="font-heading text-lg font-semibold">Coordonnées directes</h2>
              <a href={site.contact.phoneHref} className="flex items-center gap-2.5 text-sm font-medium hover:text-orange">
                <Phone className="h-4 w-4 text-orange" aria-hidden="true" />
                {site.contact.phoneDisplay}
              </a>
              <a href={site.contact.emailHref} className="flex items-center gap-2.5 text-sm font-medium hover:text-orange">
                <Mail className="h-4 w-4 text-orange" aria-hidden="true" />
                {site.contact.email}
              </a>
              <p className="flex items-start gap-2.5 text-sm text-steel">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                {site.contact.hours}
              </p>
              <p className="flex items-start gap-2.5 text-sm text-steel">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                {site.contact.area}
              </p>
            </div>

            <p className="text-sm text-steel">
              Aucune quantité de prospects n&apos;est garantie. Les réponses au diagnostic servent à
              évaluer si votre situation est adaptée à nos offres.
            </p>
          </div>

          <div className="rounded-2xl border border-border p-6 sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
