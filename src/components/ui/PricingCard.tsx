import { Check, ThumbsUp, TrendingUp, TriangleAlert } from "lucide-react";
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

      <ul className="flex flex-col gap-3">
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

      <div className="flex flex-col gap-3">
        {offer.whatsNew ? (
          <div
            className={`rounded-xl border-l-4 p-4 text-sm ${
              featured ? "border-blue bg-blue/10" : "border-blue bg-blue/5"
            }`}
          >
            <p className={`mb-2 flex items-center gap-1.5 font-heading text-sm font-semibold ${featured ? "text-white" : "text-blue-dark"}`}>
              <TrendingUp className="h-4 w-4 shrink-0" aria-hidden="true" />
              Ce qui change par rapport à {offer.id === "premium" ? "l'Offre Standard" : "l'Offre Pilote"}
            </p>
            <ul className="flex flex-col gap-1.5">
              {offer.whatsNew.map((item) => (
                <li key={item} className={featured ? "text-white/80" : "text-black/75"}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div
          className={`rounded-xl border-l-4 p-4 text-sm ${
            featured ? "border-orange bg-orange/10" : "border-orange bg-orange/5"
          }`}
        >
          <p className={`mb-2 flex items-center gap-1.5 font-heading text-sm font-semibold ${featured ? "text-white" : "text-orange"}`}>
            <ThumbsUp className="h-4 w-4 shrink-0" aria-hidden="true" />
            Idéal si
          </p>
          <ul className="flex flex-col gap-1.5">
            {offer.idealIf.map((item) => (
              <li key={item} className={featured ? "text-white/80" : "text-black/75"}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {offer.limits ? (
          <div
            className={`rounded-xl border-l-4 p-4 text-sm ${
              featured ? "border-white/30 bg-white/5" : "border-steel/40 bg-steel/5"
            }`}
          >
            <p className={`mb-2 flex items-center gap-1.5 font-heading text-sm font-semibold ${featured ? "text-white" : "text-steel"}`}>
              <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
              Limites de l&apos;offre
            </p>
            <ul className="flex flex-col gap-1.5">
              {offer.limits.map((item) => (
                <li key={item} className={featured ? "text-white/70" : "text-steel"}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <Button href={offer.href} variant="primary" className="w-full">
        {offer.cta}
      </Button>
    </TiltCard>
  );
}
