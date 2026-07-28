import { ReactNode } from "react";
import { Container } from "./Container";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

export function PageHero({
  eyebrow,
  title,
  text,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: ReactNode;
  breadcrumb: BreadcrumbItem[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_85%_0%,rgba(4,165,239,0.16),transparent),radial-gradient(45%_35%_at_10%_100%,rgba(252,76,1,0.14),transparent)]"
      />
      <Container className="relative flex flex-col gap-6">
        <Breadcrumb items={breadcrumb} />
        <div className="flex flex-col gap-5">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-light">
            {eyebrow}
          </span>
          <h1
            className="max-w-3xl font-heading font-semibold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.1rem, 1.6rem + 2.4vw, 3.6rem)" }}
          >
            {title}
          </h1>
          {text ? <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{text}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
