"use client";

import { useState } from "react";
import Image from "next/image";
import { BarChart3, Maximize2 } from "lucide-react";
import { Lightbox } from "@/components/ui/Lightbox";

export function ProofCard({
  src,
  alt,
  title,
}: {
  src: string | null;
  alt: string;
  title: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-[#F7F8FA] p-4">
        {src ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative block overflow-hidden rounded-xl border border-border bg-white"
            aria-label={`Agrandir : ${title}`}
          >
            <Image
              src={src}
              alt={alt}
              width={640}
              height={420}
              sizes="(max-width: 768px) 100vw, 400px"
              className="h-auto w-full object-cover"
            />
            <span className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        ) : (
          <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-steel/40 bg-white text-center text-steel">
            <BarChart3 className="h-8 w-8" aria-hidden="true" />
            <p className="px-6 text-xs">Capture à venir</p>
          </div>
        )}
        <p className="text-sm font-medium text-black/80">{title}</p>
      </div>

      {open && src ? (
        <Lightbox src={src} alt={alt} caption={title} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}
