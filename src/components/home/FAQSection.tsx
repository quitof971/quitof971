import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/content/faq";

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Questions fréquentes" title="Ce que l'on nous demande le plus souvent." />
        <div className="mt-10 max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
