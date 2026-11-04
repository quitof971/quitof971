export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="logo-c" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#0A4DF5" />
        </linearGradient>
        <linearGradient id="logo-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B2FEF" />
          <stop offset="100%" stopColor="#0B0F19" />
        </linearGradient>
      </defs>

      {/* stylized C */}
      <path
        d="M58 20C40 14 20 28 18 48C16 68 32 84 52 82C60 81 67 77 72 71"
        stroke="url(#logo-c)"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />

      {/* stylized A */}
      <path d="M46 82L70 18L94 82" stroke="url(#logo-a)" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M56 58H84" stroke="url(#logo-a)" strokeWidth="11" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  imgSrc,
  className = "",
}: {
  tone?: "dark" | "light";
  imgSrc?: string | null;
  className?: string;
}) {
  const subColor = tone === "light" ? "text-white/60" : "text-steel";
  const leadsColor = tone === "light" ? "text-white" : "text-black";

  if (imgSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imgSrc}
        alt="Cyberattract"
        width={3817}
        height={700}
        className={`h-9 w-auto object-contain sm:h-10 ${className}`}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-base font-bold tracking-tight">
          <span className={leadsColor}>Cyber</span>
          <span className="text-blue">Attract</span>
        </span>
        <span className={`text-[11px] font-medium uppercase tracking-[0.12em] ${subColor}`}>
          Marketing digital & automatisation
        </span>
      </span>
    </span>
  );
}
