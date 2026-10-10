import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { legal } from "@/content/legal";

const title = "Mentions légales";
const description = "Mentions légales de Cyberattract, éditeur du site Cyberattract.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Mentions légales" },
  ];

  return (
    <>
      <PageHero eyebrow="Informations légales" title="Mentions légales" breadcrumb={breadcrumb} />

      <section className="bg-white py-16 sm:py-20">
        <Container className="prose-legal max-w-3xl">
          <LegalSection title="Éditeur du site">
            <p>Nom commercial : {legal.commercialName}</p>
            <p>Entrepreneur individuel : {legal.entrepreneur}</p>
            <p>SIREN : {legal.siren}</p>
            <p>SIRET : {legal.siret}</p>
            <p>Code APE : {legal.ape}</p>
            <p>
              Adresse : {legal.address.line1}, {legal.address.postalCode} {legal.address.city},{" "}
              {legal.address.country}
            </p>
            <p>Téléphone : {legal.phone}</p>
            <p>E-mail : {legal.email}</p>
            <p>Numéro de TVA intracommunautaire : {legal.toComplete.tva}</p>
          </LegalSection>

          <LegalSection title="Directeur de la publication">
            <p>{legal.toComplete.directeurPublication}</p>
          </LegalSection>

          <LegalSection title="Hébergeur">
            <p>{legal.toComplete.hebergeur}</p>
          </LegalSection>

          <LegalSection title="Nom de domaine">
            <p>{legal.toComplete.nomDomaine}</p>
          </LegalSection>

          <LegalSection title="Médiateur de la consommation">
            <p>{legal.toComplete.mediateur}</p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, visuels, logo) est la
              propriété de {legal.commercialName}, sauf mention contraire. Toute reproduction sans
              autorisation est interdite.
            </p>
          </LegalSection>

          <LegalSection title="Hébergement des données">
            <p>
              Les informations transmises via le formulaire de contact sont traitées conformément à
              notre{" "}
              <a href="/politique-confidentialite" className="font-medium text-black underline">
                politique de confidentialité
              </a>
              .
            </p>
          </LegalSection>
        </Container>
      </section>
    </>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="mb-3 font-heading text-xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-1.5 text-sm leading-relaxed text-steel">{children}</div>
    </div>
  );
}
