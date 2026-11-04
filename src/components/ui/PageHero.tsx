"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";
import { AnimatedWords } from "./SectionHeading";

export function PageHero({
  eyebrow,
  title,
  text,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: ReactNode;
  breadcrumb: BreadcrumbItem[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-black pb-16 pt-36 text-white sm:pb-20 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_85%_0%,rgba(139,47,239,0.16),transparent),radial-gradient(45%_35%_at_10%_100%,rgba(10,77,245,0.14),transparent)]"
      />
      <Container className="relative flex flex-col gap-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <Breadcrumb items={breadcrumb} />
        </motion.div>
        <div className="flex flex-col gap-5">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light"
          >
            {eyebrow}
          </motion.span>
          <h1
            className="max-w-3xl font-heading font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.1rem, 1.6rem + 2.4vw, 3.6rem)" }}
          >
            <AnimatedWords text={title} />
          </h1>
          {text ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              {text}
            </motion.p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
