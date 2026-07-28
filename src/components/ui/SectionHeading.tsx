"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

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
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className={`text-sm font-semibold uppercase tracking-[0.14em] ${eyebrowColor}`}
        >
          {eyebrow}
        </motion.span>
      ) : null}
      <h2
        className="font-heading font-semibold leading-[1.05] tracking-tight"
        style={{ fontSize: "clamp(1.9rem, 1.4rem + 2.2vw, 3.4rem)" }}
      >
        {typeof title === "string" ? <AnimatedWords text={title} /> : title}
      </h2>
      {text ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`max-w-2xl text-base sm:text-lg leading-relaxed ${textColor}`}
        >
          {text}
        </motion.p>
      ) : null}
    </div>
  );
}

export function AnimatedWords({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <span className="inline">
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.045, ease: "easeOut" }}
            className="inline-block"
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
