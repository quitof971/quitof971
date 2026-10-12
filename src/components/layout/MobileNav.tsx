"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Phone, X } from "lucide-react";
import { site, type NavLink } from "@/content/site";
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
      className="fixed inset-0 z-[110] flex flex-col bg-black text-white xl:hidden"
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
        {site.nav.map((item) =>
          "links" in item ? (
            <MobileNavAccordion key={item.label} label={item.label} links={item.links} onNavigate={onClose} />
          ) : (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="border-b border-white/10 py-4 font-heading text-2xl font-semibold"
            >
              {item.label}
            </Link>
          )
        )}
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

function MobileNavAccordion({
  label,
  links,
  onNavigate,
}: {
  label: string;
  links: NavLink[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 font-heading text-2xl font-semibold"
      >
        {label}
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-4 pl-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onNavigate}
                  className="rounded-lg py-2.5 text-lg font-medium text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
