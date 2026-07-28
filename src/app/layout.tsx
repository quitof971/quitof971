import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import Script from "next/script";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { site } from "@/content/site";
import { SkipLink } from "@/components/layout/SkipLink";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallButton } from "@/components/layout/MobileCallButton";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { resolvePublicAsset } from "@/lib/assets";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: {
    default: site.seo.titleDefault,
    template: `%s | ${site.brand.name}`,
  },
  description: site.seo.descriptionDefault,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.brand.name,
    title: site.seo.titleDefault,
    description: site.seo.descriptionDefault,
    url: site.seo.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.titleDefault,
    description: site.seo.descriptionDefault,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand.name,
  legalName: site.brand.legalName,
  description: site.seo.descriptionDefault,
  url: site.seo.siteUrl,
  telephone: "+33754070673",
  email: site.contact.email,
  areaServed: "France",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 rue du Four",
    postalCode: "30250",
    addressLocality: "Aujargues",
    addressCountry: "FR",
  },
  openingHours: "Mo-Fr 09:00-20:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoOnDark = resolvePublicAsset("btp-leads-pro-logo-transparent");
  const logoOnLight = resolvePublicAsset("btp-leads-pro-logo-dark");

  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-black">
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MotionConfig reducedMotion="user">
          <SkipLink />
          <TopBar />
          <Header logoOnDark={logoOnDark} logoOnLight={logoOnLight} />
          <main id="main-content" className="-mt-20 flex-1">
            {children}
          </main>
          <Footer logoOnDark={logoOnDark} />
          <MobileCallButton />
          <CookieConsent />
          <CustomCursor />
        </MotionConfig>
      </body>
    </html>
  );
}
