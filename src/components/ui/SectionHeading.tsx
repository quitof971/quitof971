import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const eyebrowColor = tone === "light" ? "text-orange-light" : "text-orange";
  const textColor = tone === "light" ? "text-white/70" : "text-steel";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow ? (
        <span className={`text-sm font-semibold uppercase tracking-[0.14em] ${eyebrowColor}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className="font-heading font-semibold leading-[1.05] tracking-tight"
        style={{ fontSize: "clamp(1.9rem, 1.4rem + 2.2vw, 3.4rem)" }}
      >
        {title}
      </h2>
      {text ? (
        <p className={`max-w-2xl text-base sm:text-lg leading-relaxed ${textColor}`}>{text}</p>
      ) : null}
    </div>
  );
}
