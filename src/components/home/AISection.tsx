import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { aiAgents } from "@/content/services";

export function AISection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_85%_15%,rgba(4,165,239,0.22),transparent)]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Pôle 03 — IA & automatisation"
          title="Automatiser les tâches répétitives sans compliquer votre entreprise."
          text="Les agents IA complètent le marketing et le suivi commercial. Ils ne remplacent ni vos équipes ni les professionnels réglementés."
          tone="light"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiAgents.map((agent, index) => (
            <Reveal key={agent.id} delay={index * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-blue/20 bg-white/[0.03] p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue/15">
                  <Sparkles className="h-4 w-4 text-blue" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-base font-semibold">{agent.name}</h3>
                <p className="text-sm leading-relaxed text-white/65">{agent.problem}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Button
          href="/ia-automatisation"
          className="mt-10"
          icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
        >
          Découvrir les solutions IA
        </Button>
      </Container>
    </section>
  );
}
