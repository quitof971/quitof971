import { ReactNode } from "react";

export function Badge({
  children,
  tone = "orange",
  className = "",
}: {
  children: ReactNode;
  tone?: "orange" | "blue" | "steel" | "white";
  className?: string;
}) {
  const tones: Record<string, string> = {
    orange: "bg-orange/10 text-orange border-orange/30",
    blue: "bg-blue/10 text-blue-dark border-blue/30",
    steel: "bg-steel/10 text-steel border-steel/30",
    white: "bg-white/10 text-white border-white/25",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
