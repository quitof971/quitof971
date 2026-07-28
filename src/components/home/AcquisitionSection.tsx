import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { acquisitionFeatures } from "@/content/services";
import { acquisitionOffers } from "@/content/offers";

export function AcquisitionSection() {
  return (
    <section id="acquisition" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Pôle 01 — Acquisition BTP"
              title="Générer des demandes de devis avec une structure conçue pour le bâtiment."
            />

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {acquisitionFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-black/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button href="/acquisition-btp" variant="secondary" className="w-fit" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
              Voir le détail du pôle Acquisition
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            {acquisitionOffers.map((offer, index) => (
              <Reveal key={offer.id} delay={index * 0.08}>
                <div className="flex flex-col gap-3 rounded-2xl border border-border p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-heading text-lg font-semibold">{offer.name}</h3>
                    {offer.badge ? (
                      <span className="rounded-full bg-orange/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange">
                        {offer.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm leading-relaxed text-steel">{offer.tagline}</p>
                  <Link
                    href="/offres"
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-black hover:text-orange"
                  >
                    Voir le détail
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
