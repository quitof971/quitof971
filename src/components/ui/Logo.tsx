export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="logo-bars" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FC4C01" />
          <stop offset="100%" stopColor="#FC8E01" />
        </linearGradient>
        <linearGradient id="logo-swoosh" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A86D5" />
          <stop offset="100%" stopColor="#04A5EF" />
        </linearGradient>
      </defs>

      {/* roof + house outline */}
      <path
        d="M8 46L50 14L92 46"
        stroke="#66768A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M66 22V33" stroke="#66768A" strokeWidth="6" strokeLinecap="round" />
      <path d="M18 46V74" stroke="#66768A" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
      <path d="M82 46V74" stroke="#66768A" strokeWidth="6" strokeLinecap="round" opacity="0.55" />

      {/* ascending bar chart */}
      <rect x="30" y="52" width="11" height="26" rx="3" fill="url(#logo-bars)" />
      <rect x="45" y="38" width="11" height="40" rx="3" fill="url(#logo-bars)" />
      <rect x="60" y="48" width="11" height="30" rx="3" fill="url(#logo-bars)" />

      {/* growth swoosh */}
      <path
        d="M14 62C30 78 66 78 82 50"
        stroke="url(#logo-swoosh)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M70 46L84 48L80 62"
        stroke="url(#logo-swoosh)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
        alt="BTP Leads Pro"
        width={1262}
        height={345}
        className={`h-9 w-auto object-contain sm:h-10 ${className}`}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-base font-bold tracking-tight">
          <span className="text-orange">BTP</span>
          <span className={leadsColor}>leads</span>
          <span className="text-blue">Pro</span>
        </span>
        <span className={`text-[11px] font-medium uppercase tracking-[0.12em] ${subColor}`}>
          Acquisition BTP
        </span>
      </span>
    </span>
  );
}
