export const problems = [
  {
    title: "Pas assez de demandes",
    text: "Votre entreprise dépend encore trop du bouche-à-oreille, des recommandations ou de périodes d'activité irrégulières.",
  },
  {
    title: "Un budget marketing difficile à mesurer",
    text: "Vous investissez dans votre communication ou votre publicité sans toujours savoir précisément combien de prospects et de clients sont réellement générés.",
  },
  {
    title: "Des prospects oubliés",
    text: "Un appel non traité, une demande non rappelée, un rendez-vous non confirmé ou un devis non relancé peut rapidement devenir une vente perdue.",
  },
  {
    title: "Trop de tâches manuelles",
    text: "Vos équipes consacrent du temps à répondre, qualifier, organiser, relancer ou saisir des informations qui pourraient être automatisées.",
  },
];

export const acquisitionFeatures = [
  "Google Ads Search",
  "Landing pages",
  "Mots-clés et annonces",
  "Ciblage géographique",
  "Appels et formulaires",
  "Tracking des conversions",
  "CRM / pipeline commercial",
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
    title: "Landing pages",
    text: "Une page dédiée par service ou par offre, pensée pour donner envie de passer à l'action.",
  },
  {
    title: "Mots-clés et annonces",
    text: "Une sélection de mots-clés pertinents, des mots-clés négatifs et des annonces qui correspondent à vos offres.",
  },
  {
    title: "Ciblage géographique",
    text: "Une diffusion limitée à votre zone commerciale réelle, pour éviter le budget perdu.",
  },
  {
    title: "Appels et formulaires",
    text: "Un bouton d'appel et un formulaire visibles, adaptés au mobile comme au bureau.",
  },
  {
    title: "Tracking des conversions",
    text: "Un suivi des appels et des formulaires pour savoir d'où viennent réellement les demandes.",
  },
  {
    title: "CRM / pipeline commercial",
    text: "Un espace pour centraliser les prospects et suivre leur statut, sans usine à gaz à apprendre.",
  },
  {
    title: "Reporting",
    text: "Un point régulier sur les résultats : coûts, volumes, qualité des demandes.",
  },
  {
    title: "Optimisation",
    text: "Des ajustements continus sur les mots-clés, les annonces et les landing pages.",
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
    text: "Comprendre vos offres les plus rentables, vos clients, votre marché, votre concurrence, votre capacité de traitement et vos objectifs commerciaux.",
  },
  {
    number: "02",
    title: "Acquisition",
    text: "Créer les campagnes, les annonces et les landing pages adaptées aux recherches de vos prospects.",
  },
  {
    number: "03",
    title: "Mesure",
    text: "Suivre les appels, les formulaires, les conversions et les sources des demandes.",
  },
  {
    number: "04",
    title: "Suivi",
    text: "Organiser les prospects, les rappels, les rendez-vous, les propositions et les relances.",
  },
  {
    number: "05",
    title: "Optimisation",
    text: "Analyser les résultats et améliorer progressivement les campagnes, le coût d'acquisition, les landing pages, la qualité des prospects et la conversion commerciale.",
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
    problem: "Appels manqués, temps passé au téléphone et demandes insuffisamment qualifiées.",
  },
  {
    id: "commercial",
    name: "Agent Commercial",
    problem: "Prospects oubliés, devis non relancés et suivi commercial irrégulier.",
  },
  {
    id: "general",
    name: "Agent Général",
    problem: "Informations dispersées, tâches répétitives et perte de temps organisationnelle.",
  },
  {
    id: "marketing",
    name: "Agent Marketing",
    problem: "L'entreprise a beaucoup à montrer mais manque de temps pour communiquer régulièrement.",
  },
  {
    id: "seo",
    name: "Agent SEO",
    problem: "Référencement peu suivi et manque de régularité dans l'amélioration des contenus.",
  },
  {
    id: "comptable",
    name: "Agent Comptable / Administratif",
    problem: "Temps administratif important et informations dispersées.",
  },
  {
    id: "juridique",
    name: "Agent Juridique",
    problem: "Temps consacré à la rédaction, à la synthèse et à l'organisation documentaire.",
  },
  {
    id: "recrutement",
    name: "Agent Recrutement",
    problem: "Candidatures dispersées et temps perdu sur les premières étapes du recrutement.",
  },
];

export const resultsProofs = [
  {
    id: "overview",
    title: "Vue d'ensemble sur 30 jours",
    file: "performances-google-ads-vue-ensemble",
    alt: "Tableau de bord Google Ads montrant impressions, interactions, taux d'interaction et coût publicitaire sur 30 jours",
  },
  {
    id: "devices",
    title: "Interactions par appareil",
    file: "performances-google-ads-interactions-par-appareil",
    alt: "Tableau de bord Google Ads montrant la répartition des interactions entre mobile, ordinateur et tablette",
  },
  {
    id: "conversions",
    title: "Conversions et diffusion",
    file: "performances-google-ads-conversions-diffusion",
    alt: "Tableau de bord Google Ads montrant les conversions enregistrées et la répartition des impressions",
  },
];

export const resultsCaption =
  "Données issues d'un compte Google Ads d'un de nos clients. Les résultats dépendent notamment de la zone, du marché, du budget, de l'offre et de la réactivité commerciale.";
