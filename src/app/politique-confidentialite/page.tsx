import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { legal } from "@/content/legal";
import { site } from "@/content/site";

const title = "Politique de confidentialité";
const description = "Comment Cyberattract collecte, utilise et protège les données transmises via le formulaire de contact.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Politique de confidentialité" },
  ];

  return (
    <>
      <PageHero eyebrow="Vie privée" title="Politique de confidentialité" breadcrumb={breadcrumb} />

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Section title="Responsable du traitement">
            <p>
              Le responsable du traitement des données est {legal.entrepreneur}, exerçant sous le
              nom commercial {legal.commercialName}, {legal.address.line1},{" "}
              {legal.address.postalCode} {legal.address.city}.
            </p>
          </Section>

          <Section title="Données collectées">
            <p>Le formulaire de contact du site collecte les données suivantes :</p>
            <ul className="list-inside list-disc">
              <li>Nom et prénom</li>
              <li>Nom de l&apos;entreprise et métier</li>
              <li>Téléphone et e-mail</li>
              <li>Zone d&apos;intervention</li>
              <li>Service recherché et budget publicitaire mensuel indicatif</li>
              <li>Objectif principal et message libre</li>
            </ul>
          </Section>

          <Section title="Finalité du traitement">
            <p>
              Ces données sont utilisées uniquement pour répondre à votre demande de diagnostic et
              vous recontacter, par téléphone ou par e-mail.
            </p>
          </Section>

          <Section title="Durée de conservation">
            <p>
              Durée de conservation à valider. À défaut de précision contractuelle, les données sont
              conservées le temps nécessaire au traitement de la demande et à la relation
              commerciale qui pourrait en découler.
            </p>
          </Section>

          <Section title="Destinataires">
            <p>
              Les données sont adressées à {site.brand.legalName} et, le cas échéant, au prestataire
              technique utilisé pour l&apos;envoi des e-mails (Resend). Elles ne sont ni vendues ni
              transmises à des fins commerciales tierces.
            </p>
          </Section>

          <Section title="Vos droits">
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et
              de suppression de vos données. Pour exercer ces droits, contactez-nous à l&apos;adresse{" "}
              <a href={site.contact.emailHref} className="font-medium text-black underline">
                {site.contact.email}
              </a>
              .
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              Le site n&apos;active aucun cookie de mesure d&apos;audience ou marketing sans votre
              consentement. Voir notre{" "}
              <a href="/politique-cookies" className="font-medium text-black underline">
                politique de cookies
              </a>
              .
            </p>
          </Section>
        </Container>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="mb-3 font-heading text-xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-2 text-sm leading-relaxed text-steel">{children}</div>
    </div>
  );
}
