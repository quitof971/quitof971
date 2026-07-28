export function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 560 520"
      className="h-full w-full"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="roofline" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FC4C01" />
          <stop offset="100%" stopColor="#04A5EF" />
        </linearGradient>
        <linearGradient id="cardFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* blueprint grid */}
      <g opacity="0.14" stroke="#66768A" strokeWidth="1">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 70} y1="0" x2={i * 70} y2="520" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 70} x2="560" y2={i * 70} />
        ))}
      </g>

      {/* roofline */}
      <path
        d="M40 260 L180 130 L260 210 L340 90 L520 260"
        stroke="url(#roofline)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 260 L180 130 L260 210 L340 90 L520 260"
        stroke="#070A0E"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0"
      />

      {/* ascending arrow */}
      <path
        d="M100 420 L220 340 L300 380 L460 220"
        stroke="#FC8E01"
        strokeWidth="3"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
      <path d="M460 220 L460 250 M460 220 L432 226" stroke="#FC8E01" strokeWidth="3" strokeLinecap="round" />

      {/* data cards */}
      <g>
        <rect x="60" y="330" width="140" height="86" rx="14" fill="url(#cardFade)" stroke="#66768A" strokeOpacity="0.35" />
        <rect x="78" y="350" width="60" height="6" rx="3" fill="#A7B0BC" />
        <rect x="78" y="366" width="90" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.85" />
        <rect x="78" y="388" width="40" height="18" rx="4" fill="#04A5EF" fillOpacity="0.35" />
        <rect x="126" y="378" width="40" height="28" rx="4" fill="#FC4C01" fillOpacity="0.55" />
      </g>

      <g>
        <rect x="350" y="300" width="150" height="96" rx="14" fill="url(#cardFade)" stroke="#66768A" strokeOpacity="0.35" />
        <rect x="368" y="320" width="70" height="6" rx="3" fill="#A7B0BC" />
        <rect x="368" y="336" width="100" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.85" />
        <rect x="368" y="360" width="112" height="10" rx="5" fill="#11161D" />
        <rect x="368" y="360" width="70" height="10" rx="5" fill="#04A5EF" />
      </g>

      {/* orbiting dots */}
      <circle cx="180" cy="130" r="5" fill="#FC4C01" />
      <circle cx="340" cy="90" r="5" fill="#04A5EF" />
      <circle cx="520" cy="260" r="4" fill="#FC8E01" />
    </svg>
  );
}
