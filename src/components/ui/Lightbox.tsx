"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Image from "next/image";

export function Lightbox({
  src,
  alt,
  caption,
  onClose,
}: {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
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
      aria-label={alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Fermer l'aperçu"
        className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-8 sm:top-8"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <div
        className="flex max-h-full max-w-4xl flex-col gap-3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative max-h-[75vh] w-full overflow-hidden rounded-2xl bg-white">
          <Image
            src={src}
            alt={alt}
            width={1400}
            height={900}
            sizes="(max-width: 768px) 100vw, 900px"
            className="h-auto w-full object-contain"
          />
        </div>
        {caption ? <p className="text-sm text-white/70">{caption}</p> : null}
      </div>
    </div>,
    document.body
  );
}
