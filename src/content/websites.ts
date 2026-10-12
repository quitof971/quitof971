export type WebsiteOffer = {
  id: string;
  name: string;
  price: string;
  description?: string;
  features?: string[];
};

export const websiteOffers: WebsiteOffer[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    price: "À partir de 490 € HT",
    features: [
      "1 page",
      "Design professionnel",
      "Formulaire de contact",
      "Responsive",
      "Tracking",
      "Optimisation conversion",
    ],
  },
  {
    id: "one-page",
    name: "Site One Page",
    price: "À partir de 790 € HT",
    features: [
      "Présentation de l'entreprise",
      "Services",
      "Réalisations",
      "Avis clients",
      "Contact",
      "Responsive",
      "SEO de base",
    ],
  },
  {
    id: "vitrine-essentiel",
    name: "Site Vitrine Essentiel",
    price: "À partir de 1 190 € HT",
    features: [
      "Jusqu'à 5 pages",
      "Design professionnel",
      "Formulaires",
      "Responsive",
      "SEO de base",
      "Optimisation conversion",
    ],
  },
  {
    id: "vitrine-pro",
    name: "Site Vitrine Pro",
    price: "À partir de 1 690 € HT",
    features: [
      "8 à 10 pages",
      "Plusieurs pages services",
      "Réalisations et études de cas",
      "Témoignages",
      "Tracking",
      "SEO technique de base",
      "Optimisation conversion",
    ],
  },
  {
    id: "refonte",
    name: "Refonte de site",
    price: "À partir de 990 € HT",
    description: "Modernisation du design, de la structure et du parcours utilisateur.",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    price: "Sur devis",
    description: "Boutique en ligne adaptée à votre catalogue, vos produits et votre activité.",
  },
];

export const websiteBenefits = [
  "Améliorer l'image de l'entreprise",
  "Gagner en crédibilité",
  "Être mieux visible sur Google",
  "Générer davantage de demandes",
  "Améliorer la conversion",
  "Proposer une meilleure expérience mobile",
];

export const websiteIntegrations = ["Google Ads", "SEO", "CRM", "Automatisations", "IA téléphonique", "Relances commerciales"];

export const websiteIntegrationText =
  "Nous ne créons pas seulement un site. Nous pouvons construire tout le système permettant d'attirer, convertir et suivre vos futurs clients.";
