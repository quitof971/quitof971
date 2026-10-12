import { ReactNode } from "react";

export function Card({
  children,
  className = "",
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "dark";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-dark border-white/10 text-white"
      : "bg-white border-border text-black";

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 ${toneClass} ${className}`}
    >
      {children}
    </div>
  );
}
