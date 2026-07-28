"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Phone, X } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function MobileNav({
  onClose,
  logoSrc,
}: {
  onClose: () => void;
  logoSrc?: string | null;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
      className="fixed inset-0 z-[110] flex flex-col bg-black text-white sm:hidden"
    >
      <div className="flex items-center justify-between px-5 py-4">
        <Logo tone="light" imgSrc={logoSrc} />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fermer le menu"
          className="rounded-full border border-white/20 p-2.5"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Navigation principale" className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6">
        {site.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-white/10 py-4 font-heading text-2xl font-semibold"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-6">
        <a
          href={site.contact.phoneHref}
          onClick={onClose}
          className="flex items-center justify-center gap-2 text-lg font-semibold text-orange-light"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          {site.contact.phoneDisplay}
        </a>
        <Button href="/contact" onClick={onClose} className="w-full">
          {site.headerCta}
        </Button>
        <p className="text-center text-xs text-white/50">{site.contact.hours}</p>
      </div>
    </div>,
    document.body
  );
}
