"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "./MobileNav";

export function Header({
  logoOnDark,
  logoOnLight,
}: {
  logoOnDark?: string | null;
  logoOnLight?: string | null;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_0_0_rgba(102,118,138,0.2)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" aria-label="BTP Leads Pro — Accueil" className="shrink-0">
          <Logo
            tone={scrolled ? "dark" : "light"}
            imgSrc={scrolled ? logoOnLight : logoOnDark}
          />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-black/75 hover:text-black" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.contact.phoneHref}
            className={`hidden items-center gap-2 text-sm font-semibold md:flex ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4 text-orange" aria-hidden="true" />
            {site.contact.phoneDisplay}
          </a>
          <div className="hidden sm:block">
            <Button href="/contact" size="md">
              {site.headerCta}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            className={`inline-flex items-center justify-center rounded-full border p-2.5 lg:hidden ${
              scrolled ? "border-border text-black" : "border-white/30 text-white"
            }`}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen ? <MobileNav onClose={() => setMenuOpen(false)} logoSrc={logoOnDark} /> : null}
    </header>
  );
}
