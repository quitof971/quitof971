export const site = {
  brand: {
    name: "BTP Leads Pro",
    legalName: "BTPleadsPro",
    tagline: "Leads qualifiés pour toiture & façade",
  },
  contact: {
    phoneDisplay: "07 54 07 06 73",
    phoneHref: "tel:+33754070673",
    email: "btpleadspro@gmail.com",
    emailHref: "mailto:btpleadspro@gmail.com",
    hours: "Du lundi au vendredi, de 9 h à 20 h",
    hoursShort: "Lun–Ven · 9 h–20 h",
    area: "France entière",
  },
  seo: {
    titleDefault: "BTP Leads Pro | Google Ads et acquisition digitale pour le BTP",
    descriptionDefault:
      "BTP Leads Pro accompagne les entreprises du bâtiment avec Google Ads, des landing pages, le suivi des prospects, les relances et l'automatisation.",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://btpleadspro.fr",
  },
  nav: [
    { label: "Services", href: "/acquisition-btp" },
    { label: "Offres", href: "/offres" },
    { label: "Méthode", href: "/#methode" },
    { label: "Résultats", href: "/resultats" },
    { label: "IA & automatisation", href: "/ia-automatisation" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
  footerServices: [
    { label: "Acquisition BTP", href: "/acquisition-btp" },
    { label: "Suivi & conversion", href: "/suivi-conversion" },
    { label: "IA & automatisation", href: "/ia-automatisation" },
    { label: "Offres & tarifs", href: "/offres" },
    { label: "Résultats", href: "/resultats" },
  ],
  footerLegal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    { label: "Politique de cookies", href: "/politique-cookies" },
  ],
  headerCta: "Demander un diagnostic",
  showPublicPrices: true,
} as const;

export const targets = [
  "Couvreurs",
  "Entreprises de toiture",
  "Façadiers",
  "Entreprises de ravalement",
  "Entreprises de rénovation",
  "Maçons",
  "Entreprises du patrimoine",
  "PME du bâtiment",
];

export const expertiseMarquee = [
  "Google Ads Search",
  "Landing pages",
  "Tracking",
  "CRM",
  "Relances",
  "SEO local",
  "Automatisation",
  "Agents IA",
];
