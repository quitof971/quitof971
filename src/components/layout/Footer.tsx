import Link from "next/link";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

export function Footer({ logoOnDark }: { logoOnDark?: string | null }) {
  const year = new Date().getFullYear();
  const footerNavLinks = site.nav.flatMap((item) => ("links" in item ? item.links : [item]));

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Logo tone="light" imgSrc={logoOnDark} />
          <p className="text-sm leading-relaxed text-white/60">
            Marketing digital, acquisition, suivi commercial et automatisation pour les TPE et
            PME. {site.contact.area}.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
            Navigation
          </h2>
          <ul className="flex flex-col gap-2.5">
            {footerNavLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/75 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
            Services
          </h2>
          <ul className="flex flex-col gap-2.5">
            {site.footerServices.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/75 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
            Contact
          </h2>
          <ul className="flex flex-col gap-3 text-sm text-white/75">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              <a href={site.contact.phoneHref} className="hover:text-white">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              <a href={site.contact.emailHref} className="hover:text-white break-all">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              <span>{site.contact.hours}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              <span>{site.contact.area}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.brand.legalName}. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {site.footerLegal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
