export type WebsiteSolution = {
  id: string;
  name: string;
  description: string;
  advantages: string[];
};

export const websiteSolutions: WebsiteSolution[] = [
  {
    id: "vitrine",
    name: "Site vitrine",
    description:
      "Une présentation claire de votre entreprise, de vos services et de vos coordonnées, pensée pour inspirer confiance dès la première visite.",
    advantages: [
      "Mise en avant de votre activité et de votre savoir-faire",
      "Formulaire et coordonnées facilement accessibles",
      "Design adapté à votre image de marque",
      "Mise en ligne rapide",
    ],
  },
  {
    id: "multipage",
    name: "Site professionnel multipage",
    description:
      "Une structure plus complète avec plusieurs pages dédiées à vos services, vos réalisations et votre entreprise, pour approfondir votre présentation.",
    advantages: [
      "Une page dédiée par service ou activité",
      "Espace pour présenter vos réalisations",
      "Meilleure structuration pour le référencement",
      "Plus d'espace pour convaincre vos visiteurs",
    ],
  },
  {
    id: "ecommerce",
    name: "Site e-commerce",
    description:
      "Une boutique en ligne pour présenter et vendre vos produits, avec un parcours d'achat clair et sécurisé.",
    advantages: [
      "Catalogue produits organisé",
      "Parcours d'achat simplifié",
      "Gestion adaptée à votre catalogue",
      "Base technique évolutive",
    ],
  },
];

export type WebsiteStrength = {
  title: string;
  text: string;
};

export const websiteStrengths: WebsiteStrength[] = [
  {
    title: "Design personnalisé",
    text: "Une identité visuelle propre à votre entreprise, pas un modèle générique.",
  },
  {
    title: "Multi-support",
    text: "Un affichage adapté aux ordinateurs, tablettes et mobiles.",
  },
  {
    title: "Performance",
    text: "Des pages pensées pour se charger rapidement.",
  },
  {
    title: "Bonnes pratiques SEO",
    text: "Une structure construite selon les bonnes pratiques du référencement naturel.",
  },
  {
    title: "Expérience utilisateur",
    text: "Une navigation claire, pensée pour guider le visiteur vers l'action.",
  },
  {
    title: "Accompagnement personnalisé",
    text: "Un suivi tout au long du projet, de l'analyse à la mise en ligne.",
  },
];

export type WebsiteProcessStep = {
  number: string;
  title: string;
  text: string;
};

export const websiteProcess: WebsiteProcessStep[] = [
  {
    number: "01",
    title: "Analyse des besoins",
    text: "Comprendre votre activité, vos objectifs et les attentes de vos visiteurs.",
  },
  {
    number: "02",
    title: "Conception et design",
    text: "Construire une maquette fidèle à votre image et à vos objectifs commerciaux.",
  },
  {
    number: "03",
    title: "Développement et optimisation",
    text: "Développer le site et l'optimiser pour la performance et le référencement.",
  },
  {
    number: "04",
    title: "Mise en ligne et accompagnement",
    text: "Mettre le site en ligne et vous accompagner dans son évolution.",
  },
];

export type WebsiteFaqItem = {
  question: string;
  answer: string;
};

export const websiteFaqItems: WebsiteFaqItem[] = [
  {
    question: "Combien de temps faut-il pour créer un site internet ?",
    answer:
      "Le délai dépend de la taille du projet, des fonctionnalités souhaitées et de la disponibilité des contenus. Un calendrier précis est communiqué après l'analyse de vos besoins.",
  },
  {
    question: "Quel est le tarif d'un site internet ?",
    answer:
      "Chaque projet est différent selon le nombre de pages, les fonctionnalités et le niveau de personnalisation souhaités. Nos tarifs sont donc établis sur devis, après un échange sur vos besoins.",
  },
  {
    question: "Puis-je faire modifier mon site après sa mise en ligne ?",
    answer:
      "Oui. Selon vos besoins, nous pouvons vous former à la mise à jour de certains contenus ou prendre en charge les modifications pour vous.",
  },
  {
    question: "Qui s'occupe de l'hébergement et de la maintenance de mon site ?",
    answer:
      "L'hébergement et la maintenance peuvent être pris en charge par nos soins ou laissés à votre convenance, selon ce qui est défini ensemble au moment du projet.",
  },
];
