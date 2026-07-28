export type Offer = {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  setup: string;
  fee: string;
  budget?: string;
  features: string[];
  cta: string;
  href: string;
};

export const acquisitionOffers: Offer[] = [
  {
    id: "pilote",
    name: "Offre Pilote",
    tagline: "Pour tester un premier service avec une campagne et une page dédiées.",
    setup: "790 € HT",
    fee: "590 € HT / mois",
    budget: "800 € à 1 500 € / mois",
    features: [
      "1 campagne Google Ads Search",
      "1 page de destination",
      "Recherche de mots-clés",
      "Rédaction des annonces",
      "Ciblage géographique",
      "Formulaire et bouton téléphone",
      "Tracking appels et formulaires",
      "CRM simple",
      "Relances de base",
      "Reporting mensuel",
    ],
    cta: "Choisir l'Offre Pilote",
    href: "/contact?offre=Offre%20Pilote",
  },
  {
    id: "standard",
    name: "Offre Standard",
    badge: "Recommandée",
    tagline: "Pour structurer plusieurs services et améliorer les résultats chaque semaine.",
    setup: "1 490 € HT",
    fee: "990 € HT / mois",
    budget: "1 500 € à 3 000 € / mois",
    features: [
      "Jusqu'à 2 pages de destination",
      "Campagnes structurées par service",
      "Plusieurs groupes d'annonces",
      "Mots-clés négatifs",
      "Tracking complet",
      "Pipeline CRM",
      "Relances",
      "Optimisation hebdomadaire",
      "Analyse de la qualité des leads",
      "Recommandations commerciales",
    ],
    cta: "Découvrir l'Offre Standard",
    href: "/contact?offre=Offre%20Standard",
  },
  {
    id: "premium",
    name: "Pack RDV Premium",
    tagline: "Pour réunir acquisition, conversion, suivi et visibilité locale.",
    setup: "1 990 € HT",
    fee: "1 390 € HT / mois",
    budget: "à partir de 2 000 € / mois",
    features: [
      "Campagne Google Ads avancée",
      "Landing pages",
      "Tracking complet",
      "CRM et relances",
      "Optimisation",
      "Google Business Profile",
      "Gestion des avis",
      "SEO local progressif",
      "Meta retargeting si pertinent",
      "Analyse des prospects",
      "Suivi des rendez-vous et devis",
    ],
    cta: "Découvrir le Pack Premium",
    href: "/contact?offre=Pack%20RDV%20Premium",
  },
];

export const pricingDisclaimer =
  "Les budgets publicitaires sont réglés directement à la plateforme publicitaire et ne sont pas inclus dans les honoraires de BTP Leads Pro.";

export const localGrowth = {
  title: "Renforcez également votre présence locale.",
  fee: "390 € HT / mois",
  setup: "250 € à 400 € HT",
  features: [
    "Optimisation Google Business Profile",
    "Services et photos",
    "Demandes et réponses aux avis",
    "Publications",
    "SEO local",
    "Pages service et ville",
    "Meta retargeting",
    "Recommandations de contenu",
  ],
};

export type ConversionOption = {
  id: string;
  name: string;
  price: string;
  setup?: string;
  features: string[];
};

export const conversionOptions: ConversionOption[] = [
  {
    id: "suivi-leads",
    name: "Option Suivi des leads",
    price: "190 € à 390 € HT / mois",
    features: [
      "Tableau de suivi",
      "Statut des prospects",
      "Appels et formulaires",
      "Rappels",
      "Relances",
      "Analyse des prospects joignables",
      "Prospects à traiter",
    ],
  },
  {
    id: "scripts-relances",
    name: "Option Scripts & relances",
    setup: "250 € à 500 € HT",
    price: "150 € à 300 € HT / mois",
    features: [
      "Scripts d'appel",
      "Messages WhatsApp",
      "E-mails",
      "SMS",
      "Appel manqué",
      "Après rendez-vous",
      "Après devis",
      "Modèles de réponses",
    ],
  },
  {
    id: "optimisation-conversion",
    name: "Option Optimisation conversion",
    price: "300 € à 600 € HT / mois",
    features: [
      "Analyse des appels",
      "Analyse des formulaires",
      "Qualité des demandes",
      "Amélioration des landing pages",
      "Preuves et photos",
      "Taux de devis",
      "Taux de signature lorsque les données sont disponibles",
    ],
  },
];

export type AIPack = {
  id: string;
  name: string;
  setup: string;
  fee: string;
  agents: string[];
  promise: string;
};

export const aiPacks: AIPack[] = [
  {
    id: "ia-leads",
    name: "Pack IA Leads",
    setup: "1 500 € à 2 500 € HT",
    fee: "500 € à 800 € HT / mois",
    agents: ["Agent Téléphonique", "Agent Commercial", "Agent Général"],
    promise: "Des prospects mieux qualifiés, mieux organisés et moins facilement oubliés.",
  },
  {
    id: "ia-visibilite",
    name: "Pack IA Visibilité",
    setup: "700 € à 1 500 € HT",
    fee: "400 € à 700 € HT / mois",
    agents: ["Agent Marketing", "Agent SEO", "Agent Général"],
    promise: "Transformer les chantiers et l'expertise de l'entreprise en contenus utiles.",
  },
  {
    id: "ia-gestion",
    name: "Pack IA Gestion",
    setup: "1 000 € à 2 000 € HT",
    fee: "400 € à 800 € HT / mois",
    agents: ["Agent Général", "Agent Comptable", "Agent Juridique", "Agent Recrutement"],
    promise: "Gagner du temps sur l'organisation, l'administratif et le recrutement.",
  },
  {
    id: "ia-premium",
    name: "Pack IA Premium",
    setup: "3 000 € à 5 000 € HT",
    fee: "900 € à 1 500 € HT / mois",
    agents: [
      "Agent Téléphonique",
      "Agent Commercial",
      "Agent Général",
      "Agent Marketing",
      "Agent SEO",
      "Agent Comptable",
      "Agent Juridique",
      "Agent Recrutement",
    ],
    promise: "Installer plusieurs assistants spécialisés dans un système adapté à l'entreprise.",
  },
];

export const aiDisclaimers = [
  "L'agent comptable assiste à l'organisation et à la préparation des informations. Il ne remplace pas un expert-comptable.",
  "L'agent juridique fournit une aide à la rédaction, à la synthèse et à l'organisation. Il ne remplace pas un avocat ou un juriste qualifié.",
];
