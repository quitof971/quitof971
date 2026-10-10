export const site = {
  brand: {
    name: "Cyberattract",
    legalName: "Cyberattract",
    tagline: "Marketing digital, acquisition, suivi commercial & automatisation",
  },
  contact: {
    phoneDisplay: "07 54 07 06 73",
    phoneHref: "tel:+33754070673",
    email: "contact@cyberattract.fr",
    emailHref: "mailto:contact@cyberattract.fr",
    hours: "Du lundi au vendredi, de 9 h à 20 h",
    hoursShort: "Lun–Ven · 9 h–20 h",
    area: "France entière",
  },
  seo: {
    titleDefault: "Cyberattract | Marketing digital, acquisition et automatisation",
    descriptionDefault:
      "Cyberattract met en place un système complet pour attirer des prospects, mieux les convertir et assurer leur suivi : Google Ads, landing pages, tracking, CRM, relances, référencement local et automatisation.",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://cyberattract.fr",
  },
  nav: [
    { label: "Acquisition", href: "/acquisition" },
    { label: "Offres", href: "/offres" },
    { label: "Méthode", href: "/#methode" },
    { label: "Résultats", href: "/resultats" },
    { label: "IA & automatisation", href: "/ia-automatisation" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
  footerServices: [
    { label: "Acquisition digitale", href: "/acquisition" },
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
  "TPE de services",
  "PME de services",
  "Entreprises locales",
  "Entreprises à panier moyen élevé",
  "Entreprises avec plusieurs offres",
  "Entreprises souhaitant automatiser leur suivi",
];

export const expertiseMarquee = [
  "Google Ads",
  "Landing pages",
  "Tracking",
  "CRM",
  "Relances",
  "SEO local",
  "Automatisation",
  "Agents IA",
];
