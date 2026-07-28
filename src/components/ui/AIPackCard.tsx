import { Sparkles } from "lucide-react";
import { AIPack } from "@/content/offers";
import { Button } from "./Button";
import { TiltCard } from "./TiltCard";

export function AIPackCard({ pack }: { pack: AIPack }) {
  return (
    <TiltCard className="flex flex-col gap-6 rounded-2xl border border-blue/20 bg-white/[0.03] p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-heading text-xl font-semibold text-white">{pack.name}</h3>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue/15">
          <Sparkles className="h-4 w-4 text-blue" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-col gap-1 border-t border-white/10 pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm text-white/50">Mise en place</span>
          <span className="font-heading text-lg font-semibold text-white">{pack.setup}</span>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm text-white/50">Suivi mensuel</span>
          <span className="font-heading text-lg font-semibold text-white">{pack.fee}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {pack.agents.map((agent) => (
          <span
            key={agent}
            className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/70"
          >
            {agent}
          </span>
        ))}
      </div>

      <p className="flex-1 text-sm leading-relaxed text-white/70">{pack.promise}</p>

      <Button href={`/contact?offre=${encodeURIComponent(pack.name)}`} className="w-full">
        Demander un diagnostic IA
      </Button>
    </TiltCard>
  );
}
