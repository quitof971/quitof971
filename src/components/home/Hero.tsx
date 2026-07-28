"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroGraphic } from "./HeroGraphic";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_10%,rgba(252,76,1,0.16),transparent),radial-gradient(50%_45%_at_90%_20%,rgba(4,165,239,0.14),transparent)]"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-32">
        <div className="flex flex-col gap-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-orange-light"
          >
            Acquisition digitale spécialisée BTP
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-semibold leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 1.7rem + 3.2vw, 4.6rem)" }}
          >
            Transformez les recherches Google en{" "}
            <span className="text-orange">demandes de devis.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            BTP Leads Pro conçoit et pilote des systèmes d&apos;acquisition pour les entreprises
            du bâtiment : campagnes Google Ads, pages de destination, suivi des appels, CRM,
            relances et optimisation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-wrap gap-4">
              <Button href="/offres" size="lg" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
                Découvrir les offres
              </Button>
              <Button href={site.contact.phoneHref} variant="ghost" size="lg" className="text-white">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Appeler le {site.contact.phoneDisplay}
              </Button>
            </div>
            <p className="text-sm text-white/50">
              {site.contact.area} · {site.contact.hours}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-[480px]"
        >
          <HeroGraphic />
        </motion.div>
      </Container>
    </section>
  );
}
