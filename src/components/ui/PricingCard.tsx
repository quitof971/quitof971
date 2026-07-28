import { Check } from "lucide-react";
import { Offer } from "@/content/offers";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { TiltCard } from "./TiltCard";

export function PricingCard({ offer, featured = false }: { offer: Offer; featured?: boolean }) {
  return (
    <TiltCard
      className={`relative flex flex-col gap-6 rounded-2xl border p-6 sm:p-8 ${
        featured
          ? "border-orange bg-dark text-white shadow-[0_24px_60px_-24px_rgba(252,76,1,0.45)]"
          : "border-border bg-white text-black"
      }`}
    >
      {offer.badge ? (
        <Badge tone={featured ? "orange" : "orange"} className="absolute -top-3 left-6">
          {offer.badge}
        </Badge>
      ) : null}

      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-2xl font-semibold">{offer.name}</h3>
        <p className={featured ? "text-white/70" : "text-steel"}>{offer.tagline}</p>
      </div>

      <div className={`flex flex-col gap-1 border-t pt-6 ${featured ? "border-white/10" : "border-border"}`}>
        <div className="flex items-baseline justify-between gap-4">
          <span className={`text-sm ${featured ? "text-white/60" : "text-steel"}`}>Mise en place</span>
          <span className="font-heading text-xl font-semibold">{offer.setup}</span>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <span className={`text-sm ${featured ? "text-white/60" : "text-steel"}`}>Gestion mensuelle</span>
          <span className="font-heading text-xl font-semibold">{offer.fee}</span>
        </div>
        {offer.budget ? (
          <div className="flex items-baseline justify-between gap-4">
            <span className={`text-sm ${featured ? "text-white/60" : "text-steel"}`}>Budget Ads conseillé</span>
            <span className="text-sm font-medium">{offer.budget}</span>
          </div>
        ) : null}
      </div>

      <ul className="flex flex-1 flex-col gap-3">
        {offer.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-orange-light" : "text-orange"}`}
              aria-hidden="true"
            />
            <span className={featured ? "text-white/85" : "text-black/80"}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button href={offer.href} variant="primary" className="w-full">
        {offer.cta}
      </Button>
    </TiltCard>
  );
}
