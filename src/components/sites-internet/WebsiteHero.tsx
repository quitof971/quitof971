"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { WebsiteMockupGraphic } from "./WebsiteMockupGraphic";

export function WebsiteHero({ breadcrumb }: { breadcrumb: BreadcrumbItem[] }) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_10%,rgba(10,77,245,0.18),transparent),radial-gradient(50%_45%_at_90%_20%,rgba(139,47,239,0.16),transparent)]"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 pb-20 pt-36 sm:pb-24 sm:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28 lg:pt-44">
        <div className="flex flex-col gap-7">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Breadcrumb items={breadcrumb} />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-orange-light"
          >
            Création de sites internet
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-semibold leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 1.6rem + 2.8vw, 4rem)" }}
          >
            Création de sites internet <span className="text-orange">professionnels</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Un site à votre image, conçu pour valoriser votre entreprise et transformer vos
            visiteurs en clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button
              href="/contact?offre=Site%20internet"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              Demander un devis
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-[7/6] w-full max-w-[520px]"
        >
          <WebsiteMockupGraphic />
        </motion.div>
      </Container>
    </section>
  );
}
