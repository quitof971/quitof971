export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect width="40" height="40" rx="10" fill="#11161D" />
      <path d="M8 24L20 12L32 24" stroke="#FC4C01" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 29L20 23L26 29" stroke="#04A5EF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const textColor = tone === "light" ? "text-white" : "text-black";
  const subColor = tone === "light" ? "text-white/60" : "text-steel";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-base font-bold tracking-tight ${textColor}`}>
          BTP Leads Pro
        </span>
        <span className={`text-[11px] font-medium uppercase tracking-[0.12em] ${subColor}`}>
          Acquisition BTP
        </span>
      </span>
    </span>
  );
}
