import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/content/site";

const title = "Politique de cookies";
const description = "Les cookies utilisés par BTP Leads Pro et la gestion de votre consentement.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/politique-cookies/" },
  robots: { index: true, follow: true },
};

export default function PolitiqueCookiesPage() {
  const breadcrumb = [
    { label: "Accueil", href: "/" },
    { label: "Politique de cookies" },
  ];

  return (
    <>
      <PageHero eyebrow="Cookies" title="Politique de cookies" breadcrumb={breadcrumb} />

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Section title="Cookies essentiels">
            <p>
              Ces cookies sont nécessaires au fonctionnement du site (navigation, sécurité). Ils ne
              nécessitent pas de consentement et ne peuvent pas être désactivés.
            </p>
          </Section>

          <Section title="Cookies de mesure d'audience et marketing">
            <p>
              Google Analytics 4, Google Tag Manager et les pixels de suivi (téléphone, e-mail,
              formulaire) ne sont chargés qu&apos;après votre consentement, donné via le bandeau
              affiché sur le site. Aucun identifiant de suivi n&apos;est chargé par défaut.
            </p>
          </Section>

          <Section title="Gérer votre consentement">
            <p>
              Vous pouvez modifier votre choix à tout moment en effaçant les cookies de votre
              navigateur pour ce site, ce qui réaffichera le bandeau de consentement.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Pour toute question relative aux cookies, contactez-nous à{" "}
              <a href={site.contact.emailHref} className="font-medium text-black underline">
                {site.contact.email}
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
