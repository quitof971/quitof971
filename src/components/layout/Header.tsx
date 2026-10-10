"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "./MobileNav";

export function Header({ logoSrc }: { logoSrc?: string | null }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex h-24 w-full items-center">
      <div
        className={`mx-auto flex w-[94%] max-w-[1240px] items-center justify-between gap-4 rounded-[28px] border px-5 transition-all duration-300 sm:px-7 ${
          scrolled
            ? "border-[rgba(60,110,255,0.5)] bg-[rgba(9,7,6,0.86)] py-3 shadow-[0_10px_36px_-12px_rgba(10,77,245,0.5)] backdrop-blur-xl"
            : "border-[rgba(60,110,255,0.35)] bg-[rgba(9,7,6,0.7)] py-4 shadow-[0_8px_28px_-14px_rgba(10,77,245,0.4)] backdrop-blur-lg"
        }`}
      >
        <Link href="/" aria-label="Cyberattract — Accueil" className="shrink-0">
          <Logo tone="light" imgSrc={logoSrc} />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-5 xl:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-base font-medium text-white/85 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={site.contact.phoneHref}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-white 2xl:flex"
          >
            <Phone className="h-4 w-4 text-orange-light" aria-hidden="true" />
            {site.contact.phoneDisplay}
          </a>
          <div className="hidden sm:block">
            <Button href="/contact" size="md" className="whitespace-nowrap px-6 py-3">
              {site.headerCta}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            className="inline-flex items-center justify-center rounded-full border border-white/30 p-2.5 text-white xl:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen ? <MobileNav onClose={() => setMenuOpen(false)} logoSrc={logoSrc} /> : null}
    </header>
  );
}
