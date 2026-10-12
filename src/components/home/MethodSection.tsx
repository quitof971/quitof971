"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { methodSteps } from "@/content/services";

export function MethodSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="methode" className="bg-dark py-20 text-white sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Méthode"
          title="Une méthode claire, quel que soit votre projet."
          tone="light"
        />

        {/* Desktop: tabs */}
        <div className="mt-14 hidden gap-10 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-1">
            {methodSteps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActive(index)}
                className={`flex items-center gap-5 rounded-xl border px-5 py-4 text-left transition-colors ${
                  active === index
                    ? "border-orange/50 bg-white/5"
                    : "border-transparent hover:border-white/10"
                }`}
              >
                <span
                  className={`font-heading text-2xl font-semibold ${
                    active === index ? "text-orange" : "text-white/30"
                  }`}
                >
                  {step.number}
                </span>
                <span
                  className={`font-heading text-lg font-semibold ${
                    active === index ? "text-white" : "text-white/50"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                <span className="font-heading text-5xl font-bold text-orange">
                  {methodSteps[active].number}
                </span>
                <h3 className="font-heading text-2xl font-semibold">
                  {methodSteps[active].title}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-white/70">
                  {methodSteps[active].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-10 flex flex-col gap-4 lg:hidden">
          {methodSteps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="font-heading text-3xl font-bold text-orange">{step.number}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:justify-start">
          <Button
            href="/offres"
            variant="ghost"
            size="md"
            className="text-white/80 hover:text-white"
            icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          >
            Découvrir nos offres
          </Button>
        </div>
      </Container>
    </section>
  );
}
