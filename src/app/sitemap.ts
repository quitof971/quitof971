import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/acquisition",
  "/sites-internet",
  "/suivi-conversion",
  "/ia-automatisation",
  "/offres",
  "/resultats",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
  "/politique-cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.seo.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
