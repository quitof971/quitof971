export const problems = [
  {
    title: "Pas assez de demandes",
    text: "Votre entreprise dépend encore trop du bouche-à-oreille ou de périodes irrégulières.",
  },
  {
    title: "Un budget difficile à mesurer",
    text: "Les appels, formulaires et résultats ne sont pas toujours correctement suivis.",
  },
  {
    title: "Des prospects oubliés",
    text: "Une demande non rappelée ou un devis non relancé peut rapidement être perdu.",
  },
];

export const acquisitionFeatures = [
  "Google Ads Search",
  "Pages de destination",
  "Mots-clés et annonces",
  "Ciblage géographique",
  "Appels et formulaires",
  "Tracking",
  "CRM simple",
  "Reporting",
  "Optimisation",
  "Visibilité locale",
];

export type AcquisitionFeatureDetail = {
  title: string;
  text: string;
};

export const acquisitionFeatureDetails: AcquisitionFeatureDetail[] = [
  {
    title: "Google Ads Search",
    text: "Des campagnes construites sur les recherches réelles de vos futurs clients, service par service.",
  },
  {
    title: "Pages de destination",
    text: "Une page dédiée par service, pensée pour donner envie de demander un devis.",
  },
  {
    title: "Mots-clés et annonces",
    text: "Une sélection de mots-clés pertinents et des annonces qui correspondent à vos services.",
  },
  {
    title: "Ciblage géographique",
    text: "Une diffusion limitée à votre zone d'intervention réelle, pour éviter le budget perdu.",
  },
  {
    title: "Appels et formulaires",
    text: "Un bouton d'appel et un formulaire visibles, adaptés au mobile comme au bureau.",
  },
  {
    title: "Tracking",
    text: "Un suivi des appels et des formulaires pour savoir d'où viennent réellement les demandes.",
  },
  {
    title: "CRM simple",
    text: "Un espace pour centraliser les prospects, sans usine à gaz à apprendre.",
  },
  {
    title: "Reporting",
    text: "Un point régulier sur les résultats : coûts, volumes, qualité des demandes.",
  },
  {
    title: "Optimisation",
    text: "Des ajustements continus sur les mots-clés, les annonces et les pages.",
  },
  {
    title: "Visibilité locale",
    text: "Une présence renforcée sur les recherches et fiches locales de votre zone.",
  },
];

export const methodSteps = [
  {
    number: "01",
    title: "Diagnostic",
    text: "Comprendre vos services rentables, votre zone, votre capacité de traitement et vos objectifs.",
  },
  {
    number: "02",
    title: "Acquisition",
    text: "Créer les campagnes, les annonces et les pages adaptées aux recherches de vos prospects.",
  },
  {
    number: "03",
    title: "Mesure",
    text: "Suivre les appels, formulaires et sources des demandes.",
  },
  {
    number: "04",
    title: "Suivi",
    text: "Organiser les prospects, les rappels et les relances.",
  },
  {
    number: "05",
    title: "Optimisation",
    text: "Analyser les données et améliorer progressivement les campagnes et la conversion.",
  },
];

export type AIAgent = {
  id: string;
  name: string;
  problem: string;
};

export const aiAgents: AIAgent[] = [
  {
    id: "telephonique",
    name: "Agent Téléphonique",
    problem: "Récupérer les informations essentielles lorsqu'un prospect appelle.",
  },
  {
    id: "commercial",
    name: "Agent Commercial",
    problem: "Qualifier les demandes, préparer les relances et suivre les devis.",
  },
  {
    id: "general",
    name: "Agent Général",
    problem: "Centraliser les demandes et préparer les tâches à traiter.",
  },
  {
    id: "marketing",
    name: "Agent Marketing",
    problem: "Transformer les photos de chantiers en publications et contenus.",
  },
  {
    id: "seo",
    name: "Agent SEO",
    problem: "Suivre la visibilité locale et proposer des améliorations de contenu.",
  },
  {
    id: "comptable",
    name: "Agent Comptable",
    problem: "Organiser et préparer les informations administratives courantes.",
  },
  {
    id: "juridique",
    name: "Agent Juridique",
    problem: "Aider à la rédaction, à la synthèse et au classement des documents.",
  },
  {
    id: "recrutement",
    name: "Agent Recrutement",
    problem: "Centraliser les candidatures et préparer les premiers échanges.",
  },
];

export const resultsProofs = [
  {
    id: "performance",
    title: "Performance globale des campagnes",
    file: "proof-performance-campaigns",
    alt: "Aperçu d'un reporting Google Ads montrant la performance globale des campagnes",
  },
  {
    id: "impressions",
    title: "Répartition des impressions",
    file: "proof-impressions-distribution",
    alt: "Aperçu d'un reporting Google Ads montrant la répartition des impressions",
  },
  {
    id: "frequency",
    title: "Fréquence moyenne d'impression",
    file: "proof-frequency",
    alt: "Aperçu d'un reporting Google Ads montrant la fréquence moyenne d'impression",
  },
];

export const resultsCaption =
  "Aperçu d'un reporting Google Ads. Les résultats dépendent notamment de la zone, du marché, du budget, de l'offre et de la réactivité commerciale.";
