import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { websiteSolutions } from "@/content/websites";

export function WebsiteShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_85%_10%,rgba(139,47,239,0.2),transparent),radial-gradient(45%_40%_at_10%_90%,rgba(10,77,245,0.16),transparent)]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Notre service phare"
          title="La création de sites internet, notre spécialité."
          text="Un site à votre image, conçu pour valoriser votre entreprise et transformer vos visiteurs en clients."
          tone="light"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {websiteSolutions.map((solution, index) => (
            <Reveal key={solution.id} delay={index * 0.08}>
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-heading text-base font-semibold">{solution.name}</h3>
                <p className="text-sm leading-relaxed text-white/65">{solution.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Button
          href="/sites-internet"
          className="mt-10"
          icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
        >
          Découvrir nos créations de sites internet
        </Button>
      </Container>
    </section>
  );
}
