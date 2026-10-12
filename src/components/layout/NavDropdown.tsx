"use client";

import { useRef, useState } from "react";
import type { FocusEvent } from "react";
import Link from "next/link";
import { ChevronDown, Globe, LayoutGrid, type LucideIcon } from "lucide-react";
import type { NavLink } from "@/content/site";

const itemMeta: Record<string, { icon: LucideIcon; description: string }> = {
  "/sites-internet": {
    icon: Globe,
    description: "Landing pages, sites vitrines et refontes",
  },
  "/offres": {
    icon: LayoutGrid,
    description: "Nos formules marketing et leurs tarifs",
  },
};

export function NavDropdown({ label, links }: { label: string; links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!wrapperRef.current?.contains(event.relatedTarget as Node | null)) {
      setOpen(false);
    }
  }

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={handleBlur}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
        className="flex items-center gap-1.5 whitespace-nowrap text-base font-medium text-white/85 transition-colors hover:text-white"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-200 ease-out ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-[rgba(60,110,255,0.35)] bg-[rgba(9,7,6,0.94)] shadow-[0_24px_60px_-20px_rgba(10,77,245,0.5)] backdrop-blur-xl">
          <ul className="flex flex-col gap-1 p-2">
            {links.map((link) => {
              const meta = itemMeta[link.href];
              const Icon = meta?.icon;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3 rounded-xl border border-transparent px-3 py-3 transition-colors hover:border-white/10 hover:bg-white/[0.06]"
                  >
                    {Icon ? (
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange-light transition-colors group-hover:bg-orange group-hover:text-white">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    ) : null}
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-white">{link.label}</span>
                      {meta ? <span className="text-xs leading-relaxed text-white/55">{meta.description}</span> : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
