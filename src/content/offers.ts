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
  cta: string;
  href: string;
};

export const acquisitionOffers: Offer[] = [
  {
    id: "pilote",
    name: "Offre Pilote",
    badge: "Pour démarrer",
    tagline: "Pour tester un premier service",
    summary: "Une solution simple pour lancer une première campagne et mesurer concrètement les résultats.",
    supportLevel: "Suivi mensuel",
    setup: "790 € HT",
    fee: "590 € HT / mois",
    budget: "800 € à 1 500 € / mois",
    features: [
      "1 campagne Google Ads Search",
      "1 service ou offre principale",
      "1 landing page",
      "Recherche de mots-clés",
      "Rédaction des annonces",
      "Ciblage géographique",
      "Suivi des appels",
      "Suivi des formulaires",
      "Tracking essentiel",
      "CRM simple",
      "Relances de base des prospects",
      "Reporting mensuel",
      "Optimisation de base",
    ],
    cta: "Choisir l'Offre Pilote",
    href: "/contact?offre=Offre%20Pilote",
  },
  {
    id: "standard",
    name: "Offre Standard",
    badge: "Recommandée",
    tagline: "Pour structurer sérieusement votre acquisition",
    summary: "Une stratégie plus complète pour les entreprises qui souhaitent développer plusieurs services, offres ou marchés.",
    supportLevel: "Suivi hebdomadaire",
    setup: "1 490 € HT",
    fee: "990 € HT / mois",
    budget: "1 500 € à 3 000 € / mois",
    features: [
      "Campagnes Google Ads structurées",
      "Plusieurs groupes d'annonces",
      "Jusqu'à 2 landing pages",
      "Recherche de mots-clés",
      "Mots-clés négatifs",
      "Rédaction des annonces",
      "Ciblage géographique",
      "Suivi des appels",
      "Suivi des formulaires",
      "Tracking avancé",
      "Pipeline commercial structuré",
      "Relances des prospects",
      "Reporting mensuel",
      "Optimisation hebdomadaire",
      "Analyse de la qualité des prospects",
      "Recommandations commerciales",
    ],
    cta: "Découvrir l'Offre Standard",
    href: "/contact?offre=Offre%20Standard",
  },
  {
    id: "premium",
    name: "Pack RDV Premium",
    badge: "Accompagnement complet",
    tagline: "Acquisition + conversion + suivi commercial",
    summary: "Notre accompagnement le plus complet : attirer, suivre et mieux transformer vos prospects en clients.",
    supportLevel: "Accompagnement complet",
    setup: "1 990 € HT",
    fee: "1 390 € HT / mois",
    budget: "à partir de 2 000 € / mois",
    features: [
      "Structure Google Ads avancée",
      "Plusieurs services ou offres",
      "Landing pages selon les besoins",
      "Recherche de mots-clés",
      "Mots-clés négatifs",
      "Rédaction des annonces",
      "Ciblage géographique",
      "Suivi des appels",
      "Suivi des formulaires",
      "Tracking avancé",
      "Pipeline commercial",
      "Gestion des rendez-vous",
      "Suivi des propositions et devis",
      "Relances des prospects",
      "Reporting",
      "Optimisation hebdomadaire",
      "Analyse de la qualité des prospects",
      "Recommandations commerciales",
      "Google Business Profile",
      "Gestion des avis clients",
      "SEO local progressif",
      "Meta retargeting lorsque pertinent",
      "Suivi des rendez-vous",
      "Suivi des devis et propositions commerciales",
    ],
    cta: "Découvrir le Pack Premium",
    href: "/contact?offre=Pack%20RDV%20Premium",
  },
];

export type ChecklistLevel = {
  included: boolean;
  detail?: string;
};

export type OfferChecklistRow = {
  feature: string;
  pilote: ChecklistLevel;
  standard: ChecklistLevel;
  premium: ChecklistLevel;
};

export const offerChecklist: OfferChecklistRow[] = [
  {
    feature: "Google Ads Search",
    pilote: { included: true, detail: "1 campagne" },
    standard: { included: true, detail: "Campagnes structurées" },
    premium: { included: true, detail: "Structure avancée" },
  },
  {
    feature: "Services ou offres travaillées",
    pilote: { included: true, detail: "1 service principal" },
    standard: { included: true, detail: "Plusieurs groupes d'annonces" },
    premium: { included: true, detail: "Plusieurs services" },
  },
  {
    feature: "Landing pages",
    pilote: { included: true, detail: "1 landing page" },
    standard: { included: true, detail: "Jusqu'à 2 landing pages" },
    premium: { included: true, detail: "Selon les besoins" },
  },
  {
    feature: "Recherche de mots-clés",
    pilote: { included: true },
    standard: { included: true },
    premium: { included: true },
  },
  {
    feature: "Mots-clés négatifs",
    pilote: { included: false },
    standard: { included: true },
    premium: { included: true },
  },
  {
    feature: "Rédaction des annonces",
    pilote: { included: true },
    standard: { included: true },
    premium: { included: true },
  },
  {
    feature: "Ciblage géographique",
    pilote: { included: true },
    standard: { included: true },
    premium: { included: true },
  },
  {
    feature: "Suivi des appels",
    pilote: { included: true },
    standard: { included: true },
    premium: { included: true },
  },
  {
    feature: "Suivi des formulaires",
    pilote: { included: true },
    standard: { included: true },
    premium: { included: true },
  },
  {
    feature: "Tracking des conversions",
    pilote: { included: true, detail: "Essentiel" },
    standard: { included: true, detail: "Avancé" },
    premium: { included: true, detail: "Avancé" },
  },
  {
    feature: "CRM / pipeline commercial",
    pilote: { included: true, detail: "CRM simple" },
    standard: { included: true, detail: "Pipeline structuré" },
    premium: { included: true, detail: "Pipeline commercial" },
  },
  {
    feature: "Relances des prospects",
    pilote: { included: true, detail: "De base" },
    standard: { included: true },
    premium: { included: true },
  },
  {
    feature: "Reporting",
    pilote: { included: true, detail: "Mensuel" },
    standard: { included: true, detail: "Mensuel" },
    premium: { included: true },
  },
  {
    feature: "Optimisation des campagnes",
    pilote: { included: true, detail: "De base" },
    standard: { included: true, detail: "Hebdomadaire" },
    premium: { included: true, detail: "Hebdomadaire" },
  },
  {
    feature: "Analyse de la qualité des prospects",
    pilote: { included: false },
    standard: { included: true },
    premium: { included: true },
  },
  {
    feature: "Recommandations commerciales",
    pilote: { included: false },
    standard: { included: true },
    premium: { included: true },
  },
  {
    feature: "Google Business Profile",
    pilote: { included: false },
    standard: { included: false },
    premium: { included: true },
  },
  {
    feature: "Gestion des avis clients",
    pilote: { included: false },
    standard: { included: false },
    premium: { included: true },
  },
  {
    feature: "SEO local progressif",
    pilote: { included: false },
    standard: { included: false },
    premium: { included: true },
  },
  {
    feature: "Meta retargeting",
    pilote: { included: false },
    standard: { included: false },
    premium: { included: true, detail: "Selon pertinence" },
  },
  {
    feature: "Suivi des rendez-vous",
    pilote: { included: false },
    standard: { included: false },
    premium: { included: true },
  },
  {
    feature: "Suivi des devis / propositions commerciales",
    pilote: { included: false },
    standard: { included: false },
    premium: { included: true },
  },
];

export const pricingDisclaimer =
  "Les budgets publicitaires sont réglés directement à la plateforme publicitaire et ne sont pas inclus dans les honoraires de Cyberattract.";

export const pricingBudgetNotice =
  "Le budget publicitaire Google Ads n'est pas inclus dans les honoraires de Cyberattract. Il est payé directement à Google par le client.";

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
  { feature: "Google Ads Search", pilote: "Inclus", standard: "Inclus", premium: "Inclus, structure avancée" },
  { feature: "Landing pages", pilote: "1 page", standard: "Jusqu'à 2 pages", premium: "Selon les besoins" },
  { feature: "Recherche de mots-clés", pilote: "Inclus", standard: "Inclus", premium: "Inclus" },
  { feature: "Mots-clés négatifs", pilote: "Non inclus", standard: "Inclus", premium: "Inclus" },
  { feature: "Groupes d'annonces par service", pilote: "Essentiel", standard: "Plusieurs par service", premium: "Plusieurs par service" },
  { feature: "Suivi des appels", pilote: "Inclus", standard: "Inclus", premium: "Inclus" },
  { feature: "Suivi des formulaires", pilote: "Inclus", standard: "Inclus", premium: "Inclus" },
  { feature: "Tracking des conversions", pilote: "Essentiel", standard: "Avancé", premium: "Avancé" },
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
    question: "Je veux un système complet avec acquisition, suivi commercial et visibilité locale",
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
      "L'Offre Pilote permet de tester un service avec une campagne et une landing page dédiées. L'Offre Standard permet de travailler une structure plus avancée, plusieurs services ou groupes d'annonces, jusqu'à deux landing pages, un suivi hebdomadaire et une analyse plus poussée des prospects.",
  },
  {
    question: "L'Offre Standard contient-elle les éléments de l'Offre Pilote ?",
    answer:
      "Les deux offres reposent sur les mêmes fondamentaux : Google Ads, landing page, suivi des appels et formulaires, CRM, reporting et relances. L'Offre Standard approfondit ces éléments avec une structure plus complète et un suivi plus régulier.",
  },
  {
    question: "Que contient le Pack RDV Premium en plus ?",
    answer:
      "Il ajoute notamment la gestion des rendez-vous et des devis, la visibilité locale, Google Business Profile, les avis clients, le SEO local progressif et le retargeting lorsque pertinent.",
  },
  {
    question: "Le budget Google Ads est-il inclus ?",
    answer: "Non. Le budget publicitaire est payé directement à Google et reste séparé des honoraires de Cyberattract.",
  },
  {
    question: "Puis-je commencer avec l'Offre Pilote puis passer à l'Offre Standard ?",
    answer: "Oui. L'Offre Pilote peut servir de première étape avant de développer une structure plus complète.",
  },
  {
    question: "Quelle offre choisir si je propose plusieurs services ?",
    answer: "L'Offre Standard est généralement plus adaptée lorsque plusieurs services ou offres rentables doivent être travaillés.",
  },
  {
    question: "Quelle offre choisir pour travailler également ma visibilité locale ?",
    answer:
      "Le Pack RDV Premium est le plus adapté, car il intègre l'acquisition, le suivi des rendez-vous et des devis, Google Business Profile, les avis et le SEO local progressif.",
  },
];

export const localGrowth = {
  title: "Renforcez votre présence dans votre zone de chalandise.",
  fee: "390 € HT / mois",
  setup: "250 € à 400 € HT",
  features: [
    "Optimisation Google Business Profile",
    "Optimisation des services",
    "Optimisation et ajout des photos",
    "Demandes d'avis clients",
    "Réponses aux avis",
    "Publications Google",
    "SEO local",
    "Pages services",
    "Pages géographiques",
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
      "Statuts des prospects",
      "Centralisation des appels",
      "Centralisation des formulaires",
      "Rappels",
      "Relances",
      "Analyse des prospects joignables",
      "Identification des prospects à traiter",
    ],
  },
  {
    id: "scripts-relances",
    name: "Option Scripts & relances",
    setup: "250 € à 500 € HT",
    price: "150 € à 300 € HT / mois",
    features: [
      "Scripts d'appel commercial",
      "Messages WhatsApp",
      "E-mails",
      "SMS",
      "Appel manqué",
      "Après rendez-vous",
      "Après proposition ou devis",
      "Relances sans réponse",
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
      "Qualité des prospects",
      "Amélioration des landing pages",
      "Éléments de réassurance",
      "Témoignages et preuves",
      "Photos et réalisations",
      "Taux de rendez-vous",
      "Taux de propositions",
      "Taux de transformation lorsque les données sont disponibles",
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
    promise: "Transformer l'activité quotidienne de l'entreprise en contenus utiles.",
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
