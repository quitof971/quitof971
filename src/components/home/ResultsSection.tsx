import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProofCard } from "./ProofCard";
import { resultsProofs, resultsCaption } from "@/content/services";
import { resolvePublicAsset } from "@/lib/assets";

export function ResultsSection() {
  return (
    <section id="resultats" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Résultats"
          title="Mesurer avant de promettre."
          text="Les campagnes sont suivies à partir de données concrètes : conversions enregistrées, coûts, fréquence d'exposition, appels et formulaires."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {resultsProofs.map((proof, index) => (
            <Reveal key={proof.id} delay={index * 0.08}>
              <ProofCard src={resolvePublicAsset(proof.file)} alt={proof.alt} title={proof.title} />
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-sm text-steel">{resultsCaption}</p>

        <Button
          href="/resultats"
          variant="secondary"
          className="mt-8"
          icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
        >
          Voir notre approche de la mesure
        </Button>
      </Container>
    </section>
  );
}
