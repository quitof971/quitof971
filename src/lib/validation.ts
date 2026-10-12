import { z } from "zod";

export const serviceOptions = [
  "Offre Pilote",
  "Offre Standard",
  "Pack RDV Premium",
  "Croissance locale",
  "Site internet",
  "Suivi des leads",
  "Optimisation conversion",
  "IA et automatisation",
  "Autre demande",
] as const;

export const budgetOptions = [
  "Moins de 800 €",
  "800 € à 1 500 €",
  "1 500 € à 3 000 €",
  "Plus de 3 000 €",
  "Budget à définir",
] as const;

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "Le prénom est obligatoire.").max(80),
  lastName: z.string().trim().min(1, "Le nom est obligatoire.").max(80),
  company: z.string().trim().min(1, "Le nom de l'entreprise est obligatoire.").max(120),
  phone: z
    .string()
    .trim()
    .min(6, "Le téléphone est obligatoire.")
    .max(20)
    .regex(/^[0-9+().\s-]+$/, "Le numéro de téléphone contient des caractères invalides."),
  email: z.string().trim().min(1, "L'e-mail est obligatoire.").email("L'adresse e-mail est invalide."),
  trade: z.string().trim().min(1, "Le métier est obligatoire.").max(80),
  area: z.string().trim().min(1, "La zone d'intervention est obligatoire.").max(120),
  service: z.enum(serviceOptions, { message: "Merci de sélectionner un service." }),
  budget: z.enum(budgetOptions, { message: "Merci de sélectionner un budget." }),
  goal: z.string().trim().min(1, "L'objectif principal est obligatoire.").max(160),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  consent: z.literal(true, {
    message: "Merci d'accepter la politique de confidentialité pour continuer.",
  }),
  company_website: z.string().max(0, "Champ invalide.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
