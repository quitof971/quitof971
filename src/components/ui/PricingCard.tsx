import { Check, X } from "lucide-react";
import { Offer, offerChecklist } from "@/content/offers";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { TiltCard } from "./TiltCard";

type OfferId = "pilote" | "standard" | "premium";

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
        <Badge
          tone="orange"
          className="min-w-0 max-w-full self-start whitespace-normal text-center sm:absolute sm:-top-3 sm:left-6 sm:max-w-[calc(100%-3rem)] sm:whitespace-nowrap"
        >
          {offer.badge}
        </Badge>
      ) : null}

      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-2xl font-semibold">{offer.name}</h3>
        <p className={`text-sm font-medium ${featured ? "text-orange-light" : "text-orange"}`}>{offer.tagline}</p>
        <p className={featured ? "text-white/70" : "text-steel"}>{offer.summary}</p>
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
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <span className={`text-sm ${featured ? "text-white/60" : "text-steel"}`}>Budget Ads conseillé</span>
            <span className="text-sm font-medium">{offer.budget}</span>
          </div>
        ) : null}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <span className={`text-sm ${featured ? "text-white/60" : "text-steel"}`}>Accompagnement</span>
          <Badge tone={featured ? "white" : "steel"} className="self-start sm:self-auto">
            {offer.supportLevel}
          </Badge>
        </div>
      </div>

      <ul className={`flex flex-col gap-2.5 border-t pt-6 ${featured ? "border-white/10" : "border-border"}`}>
        {offerChecklist.map((row) => {
          const level = row[offer.id as OfferId];
          return (
            <li key={row.feature} className="flex min-h-[20px] items-start gap-2.5 text-sm">
              {level.included ? (
                <Check
                  className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-orange-light" : "text-orange"}`}
                  aria-hidden="true"
                />
              ) : (
                <X
                  className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-white/30" : "text-steel/50"}`}
                  aria-hidden="true"
                />
              )}
              <span
                className={
                  level.included
                    ? featured
                      ? "text-white/85"
                      : "text-black/80"
                    : featured
                      ? "text-white/35"
                      : "text-steel/60"
                }
              >
                <span className="sr-only">{level.included ? "Inclus : " : "Non inclus : "}</span>
                {row.feature}
                {level.included && level.detail ? (
                  <span className={featured ? "text-white/55" : "text-steel"}> — {level.detail}</span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ul>

      <Button href={offer.href} variant="primary" className="mt-auto w-full">
        {offer.cta}
      </Button>
    </TiltCard>
  );
}
