import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { localGrowth } from "@/content/offers";

export function LocalGrowthSection() {
  return (
    <section className="bg-[#F0F2F5] py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 rounded-2xl border border-border bg-white p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="flex max-w-xl flex-col gap-4">
              <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
                {localGrowth.title}
              </h2>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {localGrowth.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-black/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-dark" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
              <div className="text-left lg:text-right">
                <p className="text-sm text-steel">À partir de</p>
                <p className="font-heading text-3xl font-semibold">{localGrowth.fee}</p>
                <p className="text-xs text-steel">Setup technique possible : {localGrowth.setup}</p>
              </div>
              <Button href="/contact?offre=Croissance%20locale" variant="secondary">
                En savoir plus
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
