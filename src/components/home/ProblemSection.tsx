import { AlertTriangle, Gauge, UserX } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { problems } from "@/content/services";

const icons = [AlertTriangle, Gauge, UserX];

export function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Le problème"
          title="Être visible ne suffit pas. Encore faut-il transformer cette visibilité en demandes suivies."
          className="max-w-3xl"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={problem.title} delay={index * 0.1}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border p-6 sm:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange/10">
                    <Icon className="h-5 w-5 text-orange" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">{problem.title}</h3>
                  <p className="text-sm leading-relaxed text-steel">{problem.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 max-w-2xl text-lg font-medium text-black/85">
            BTP Leads Pro relie acquisition, mesure et suivi commercial dans un système cohérent.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
