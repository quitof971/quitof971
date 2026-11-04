import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { methodSteps } from "@/content/services";

export function MethodSection() {
  return (
    <section id="methode" className="bg-dark py-20 text-white sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Méthode"
          title="Une méthode claire, quel que soit votre projet."
          tone="light"
        />

        <ProcessSteps steps={methodSteps} />

        <div className="mt-10 flex justify-center lg:justify-start">
          <Button
            href="/offres"
            variant="ghost"
            size="md"
            className="text-white/80 hover:text-white"
            icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          >
            Découvrir nos services
          </Button>
        </div>
      </Container>
    </section>
  );
}
