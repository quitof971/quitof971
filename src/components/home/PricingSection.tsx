import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PricingCard } from "@/components/ui/PricingCard";
import { acquisitionOffers, pricingDisclaimer } from "@/content/offers";

export function PricingSection() {
  return (
    <section id="offres-acquisition" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Tarifs"
          title="Trois façons de structurer votre acquisition."
          align="center"
          className="mx-auto text-center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {acquisitionOffers.map((offer, index) => (
            <Reveal key={offer.id} delay={index * 0.1}>
              <PricingCard offer={offer} featured={offer.badge === "Recommandée"} />
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-steel">
          {pricingDisclaimer}
        </p>
      </Container>
    </section>
  );
}
