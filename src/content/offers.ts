export type Offer = {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  summary: string;
  supportLevel: string;
  setup: string;
  fee: string;
  budget?: string;
  features: string[];
  whatsNew?: string[];
  idealIf: string[];
  limits?: string[];
  cta: string;
  href: string;
};

export const acquisitionOffers: Offer[] = [
  {
    id: "pilote",
    name: "Offre Pilote",
    badge: "Pour démarrer",
    tagline: "Pour tester un premier service avec une structure simple et professionnelle.",
    summary: "Une campagne, une page dédiée et les outils essentiels pour mesurer les premières demandes.",
    supportLevel: "Suivi mensuel",
    setup: "790 € HT",
    fee: "590 € HT / mois",
    budget: "800 € à 1 500 € / mois",
    features: [
      "1 campagne Google Ads Search",
      "1 service principal mis en avant",
      "1 page de destination dédiée",
      "Recherche de mots-clés",
      "Rédaction des annonces",
      "Ciblage géographique",
      "Formulaire de contact",
      "Bouton téléphone",
      "Suivi des appels et formulaires",
      "CRM simple ou tableau de suivi",
      "Relances de base",
      "Reporting mensuel",
    ],
    idealIf: [
      "Vous souhaitez tester Google Ads",
      "Vous démarrez sur un seul service",
      "Vous avez un budget limité",
      "Vous n'avez jamais lancé de campagne structurée",
    ],
    limits: [
      "Un seul service principal",
      "Une seule page de destination",
      "Structure publicitaire plus simple",
      "Optimisation et suivi moins avancés que dans l'Offre Standard",
    ],
    cta: "Choisir l'Offre Pilote",
    href: "/contact?offre=Offre%20Pilote",
  },
  {
    id: "standard",
    name: "Offre Standard",
    badge: "Recommandée",
    tagline: "Pour structurer sérieusement l'acquisition sur plusieurs services.",
    summary: "Une structure plus complète, davantage de pages, un suivi hebdomadaire et une analyse plus poussée des prospects.",
    supportLevel: "Suivi hebdomadaire",
    setup: "1 490 € HT",
    fee: "990 € HT / mois",
    budget: "1 500 € à 3 000 € / mois",
    features: [
      "Campagnes Google Ads Search structurées",
      "Plusieurs services travaillés",
      "Plusieurs groupes d'annonces",
      "Jusqu'à 2 pages de destination",
      "Structure par service",
      "Mots-clés ciblés",
      "Mots-clés négatifs",
      "Annonces adaptées aux intentions de recherche",
      "Suivi des appels et des formulaires",
      "Tracking complet",
      "Pipeline CRM",
      "Relances",
      "Reporting",
      "Optimisation hebdomadaire",
      "Analyse de la qualité des prospects",
      "Recommandations commerciales",
    ],
    whatsNew: [
      "Jusqu'à 2 pages au lieu d'une seule",
      "Plusieurs services ou groupes d'annonces",
      "Structure Google Ads plus avancée",
      "Mots-clés négatifs et intentions de recherche mieux travaillés",
      "Optimisation chaque semaine",
      "CRM plus structuré",
      "Analyse de la qualité des prospects",
      "Recommandations pour améliorer la transformation commerciale",
    ],
    idealIf: [
      "Votre entreprise possède plusieurs services rentables",
      "Vous pouvez traiter plusieurs demandes",
      "Vous souhaitez investir sérieusement",
      "Vous voulez optimiser les campagnes chaque semaine",
      "Vous avez besoin d'un vrai suivi des prospects",
    ],
    cta: "Découvrir l'Offre Standard",
    href: "/contact?offre=Offre%20Standard",
  },
  {
    id: "premium",
    name: "Pack RDV Premium",
    badge: "Accompagnement complet",
    tagline: "Pour réunir acquisition, conversion, suivi commercial et visibilité locale.",
    summary: "Le système le plus complet pour générer, suivre et mieux transformer les demandes de devis.",
    supportLevel: "Accompagnement complet",
    setup: "1 990 € HT",
    fee: "1 390 € HT / mois",
    budget: "à partir de 2 000 € / mois",
    features: [
      "Structure Google Ads avancée",
      "Campagnes Google Ads Search",
      "Pages de destination",
      "Tracking complet",
      "CRM et pipeline commercial",
      "Relances",
      "Reporting",
      "Optimisation",
      "Analyse des prospects",
      "Suivi des rendez-vous",
      "Suivi des devis",
      "Google Business Profile",
      "Ajout et optimisation des services",
      "Demandes d'avis clients",
      "Gestion des avis",
      "SEO local progressif",
      "Meta retargeting si pertinent",
      "Recommandations commerciales",
    ],
    whatsNew: [
      "Ajout de la visibilité locale",
      "Optimisation de Google Business Profile",
      "Accompagnement sur les avis clients",
      "SEO local progressif",
      "Retargeting Meta lorsque pertinent",
      "Suivi des rendez-vous et des devis",
      "Pilotage plus complet du parcours commercial",
      "Acquisition jusqu'au suivi du devis",
    ],
    idealIf: [
      "Vous êtes une PME du bâtiment structurée",
      "Votre panier moyen est élevé",
      "Vous pouvez traiter plusieurs rendez-vous",
      "Vous souhaitez un accompagnement complet",
      "Vous voulez travailler l'acquisition et la visibilité locale",
      "Vous voulez suivre les prospects jusqu'au devis",
    ],
    cta: "Découvrir le Pack Premium",
    href: "/contact?offre=Pack%20RDV%20Premium",
  },
];

export const pricingDisclaimer =
  "Les budgets publicitaires sont réglés directement à la plateforme publicitaire et ne sont pas inclus dans les honoraires de BTP Leads Pro.";

export const pricingBudgetNotice =
  "Le budget publicitaire Google Ads n'est pas inclus dans les honoraires de BTP Leads Pro. Il est payé directement à Google par le client.";

export const pricingFeesNotice =
  "Les frais de setup correspondent à la création et à la configuration initiale. La gestion mensuelle correspond au suivi, au reporting et à l'optimisation des campagnes.";

export type ComparisonRow = {
  feature: string;
  pilote: string;
  standard: string;
  premium: string;
};

export const comparisonRows: ComparisonRow[] = [
  { feature: "Nombre de services travaillés", pilote: "1 service", standard: "Plusieurs services", premium: "Plusieurs services" },
  { feature: "Campagne Google Ads Search", pilote: "Inclus", standard: "Inclus", premium: "Inclus, structure avancée" },
  { feature: "Pages de destination", pilote: "1 page", standard: "Jusqu'à 2 pages", premium: "Selon les besoins" },
  { feature: "Recherche de mots-clés", pilote: "Inclus", standard: "Inclus", premium: "Inclus" },
  { feature: "Mots-clés négatifs", pilote: "Non inclus", standard: "Inclus", premium: "Inclus" },
  { feature: "Groupes d'annonces par service", pilote: "Essentiel", standard: "Plusieurs par service", premium: "Plusieurs par service" },
  { feature: "Suivi des appels", pilote: "Inclus", standard: "Inclus", premium: "Inclus" },
  { feature: "Suivi des formulaires", pilote: "Inclus", standard: "Inclus", premium: "Inclus" },
  { feature: "Tracking complet", pilote: "Essentiel", standard: "Avancé", premium: "Avancé" },
  { feature: "CRM ou pipeline", pilote: "CRM simple", standard: "Pipeline structuré", premium: "Pipeline + suivi RDV et devis" },
  { feature: "Relances", pilote: "De base", standard: "Inclus", premium: "Inclus" },
  { feature: "Reporting", pilote: "Mensuel", standard: "Mensuel", premium: "Mensuel" },
  { feature: "Fréquence d'optimisation", pilote: "De base", standard: "Hebdomadaire", premium: "Hebdomadaire" },
  { feature: "Analyse de la qualité des prospects", pilote: "Non inclus", standard: "Inclus", premium: "Inclus" },
  { feature: "Recommandations commerciales", pilote: "Non inclus", standard: "Inclus", premium: "Inclus" },
  { feature: "Google Business Profile", pilote: "Non inclus", standard: "Non inclus", premium: "Inclus" },
  { feature: "Gestion des avis", pilote: "Non inclus", standard: "Non inclus", premium: "Inclus" },
  { feature: "SEO local", pilote: "Non inclus", standard: "Non inclus", premium: "Progressif" },
  { feature: "Meta retargeting", pilote: "Non inclus", standard: "Non inclus", premium: "Selon les besoins" },
  { feature: "Suivi des rendez-vous", pilote: "Non inclus", standard: "Non inclus", premium: "Suivi complet" },
  { feature: "Suivi des devis", pilote: "Non inclus", standard: "Non inclus", premium: "Suivi complet" },
];

export type OfferGuide = {
  question: string;
  answer: string;
  offerName: string;
};

export const offerGuides: OfferGuide[] = [
  {
    question: "Je veux tester Google Ads sur un service",
    answer: "Choisissez l'Offre Pilote.",
    offerName: "Offre Pilote",
  },
  {
    question: "Je veux développer plusieurs services et optimiser chaque semaine",
    answer: "Choisissez l'Offre Standard.",
    offerName: "Offre Standard",
  },
  {
    question: "Je veux un système complet avec acquisition, visibilité locale et suivi des devis",
    answer: "Choisissez le Pack RDV Premium.",
    offerName: "Pack RDV Premium",
  },
];

export type OfferFaqItem = {
  question: string;
  answer: string;
};

export const offersFaqItems: OfferFaqItem[] = [
  {
    question: "Quelle est la différence entre l'Offre Pilote et l'Offre Standard ?",
    answer:
      "L'Offre Pilote permet de tester un service avec une campagne et une page dédiées. L'Offre Standard permet de travailler une structure plus avancée, plusieurs services ou groupes d'annonces, jusqu'à deux pages, un suivi hebdomadaire et une analyse plus poussée des prospects.",
  },
  {
    question: "L'Offre Standard contient-elle les éléments de l'Offre Pilote ?",
    answer:
      "Les deux offres reposent sur les mêmes fondamentaux : Google Ads, page de destination, suivi des appels et formulaires, CRM, reporting et relances. L'Offre Standard approfondit ces éléments avec une structure plus complète et un suivi plus régulier.",
  },
  {
    question: "Que contient le Pack RDV Premium en plus ?",
    answer:
      "Il ajoute notamment la visibilité locale, Google Business Profile, les avis clients, le SEO local progressif, le retargeting lorsque pertinent et un suivi plus complet des rendez-vous et devis.",
  },
  {
    question: "Le budget Google Ads est-il inclus ?",
    answer: "Non. Le budget publicitaire est payé directement à Google et reste séparé des honoraires de BTP Leads Pro.",
  },
  {
    question: "Puis-je commencer avec l'Offre Pilote puis passer à l'Offre Standard ?",
    answer: "Oui. L'Offre Pilote peut servir de première étape avant de développer une structure plus complète.",
  },
  {
    question: "Quelle offre choisir si je propose plusieurs services ?",
    answer: "L'Offre Standard est généralement plus adaptée lorsque plusieurs services rentables doivent être travaillés.",
  },
  {
    question: "Quelle offre choisir pour travailler également ma visibilité locale ?",
    answer:
      "Le Pack RDV Premium est le plus adapté, car il intègre l'acquisition, Google Business Profile, les avis et le SEO local progressif.",
  },
];

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
