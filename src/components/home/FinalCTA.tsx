import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(10,77,245,0.18),transparent)]"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2
          className="max-w-3xl font-heading font-semibold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2rem, 1.5rem + 2.4vw, 3.6rem)" }}
        >
          Vos futurs clients cherchent déjà vos services.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Mettons en place un système pour qu&apos;ils vous trouvent, vous contactent et soient
          correctement suivis.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Demander un diagnostic
          </Button>
          <Button href={site.contact.phoneHref} variant="ghost" size="lg" className="text-white">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.contact.phoneDisplay}
          </Button>
        </div>

        <p className="text-sm text-white/50">
          {site.contact.hours} · {site.contact.area}
        </p>
      </Container>
    </section>
  );
}
