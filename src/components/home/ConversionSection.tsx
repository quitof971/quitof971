import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { conversionOptions } from "@/content/offers";

export function ConversionSection() {
  return (
    <section className="bg-[#F0F2F5] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pôle 02 — Suivi & conversion"
          title="Un prospect généré ne doit pas être oublié."
          text="Une campagne peut produire des contacts. Sans organisation, rappel et relance, une partie du budget peut être perdue."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {conversionOptions.map((option, index) => (
            <Reveal key={option.id} delay={index * 0.1}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-white p-6 sm:p-7">
                <h3 className="font-heading text-lg font-semibold">{option.name}</h3>
                <div className="flex flex-col gap-0.5">
                  {option.setup ? (
                    <p className="text-xs text-steel">Setup : {option.setup}</p>
                  ) : null}
                  <p className="font-heading text-xl font-semibold text-orange">{option.price}</p>
                </div>
                <ul className="flex flex-1 flex-col gap-2.5">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-black/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-dark" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Button href="/suivi-conversion" variant="secondary" className="mt-10">
          Voir le détail du suivi & conversion
        </Button>
      </Container>
    </section>
  );
}
