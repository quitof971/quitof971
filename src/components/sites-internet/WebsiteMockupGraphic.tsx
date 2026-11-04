"use client";

import { motion } from "framer-motion";

export function WebsiteMockupGraphic() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 560 480" className="h-full w-full overflow-visible" aria-hidden="true" fill="none">
        <defs>
          <linearGradient id="browser-bar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0A4DF5" />
            <stop offset="100%" stopColor="#8B2FEF" />
          </linearGradient>
          <linearGradient id="hero-block" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0A4DF5" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B2FEF" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="phone-block" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0A4DF5" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Browser window */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <rect x="20" y="30" width="420" height="300" rx="16" fill="#11161D" stroke="#66768A" strokeOpacity="0.3" />
          <rect x="20" y="30" width="420" height="40" rx="16" fill="#0B0F14" />
          <rect x="20" y="54" width="420" height="16" fill="#0B0F14" />
          <circle cx="44" cy="50" r="5" fill="#8B2FEF" fillOpacity="0.6" />
          <circle cx="62" cy="50" r="5" fill="#22D3EE" fillOpacity="0.6" />
          <circle cx="80" cy="50" r="5" fill="#0A4DF5" fillOpacity="0.6" />
          <rect x="110" y="44" width="220" height="12" rx="6" fill="#ffffff" fillOpacity="0.08" />

          {/* hero block */}
          <rect x="44" y="92" width="372" height="100" rx="12" fill="url(#hero-block)" />
          <rect x="64" y="114" width="150" height="10" rx="5" fill="#ffffff" fillOpacity="0.9" />
          <rect x="64" y="134" width="210" height="8" rx="4" fill="#ffffff" fillOpacity="0.55" />
          <rect x="64" y="158" width="90" height="22" rx="11" fill="#ffffff" fillOpacity="0.85" />

          {/* three feature blocks */}
          {[44, 180, 316].map((x, index) => (
            <motion.g
              key={x}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <rect x={x} y="212" width="100" height="92" rx="10" fill="#ffffff" fillOpacity="0.04" stroke="#66768A" strokeOpacity="0.25" />
              <rect x={x + 16} y="230" width="24" height="24" rx="6" fill="url(#browser-bar)" fillOpacity="0.7" />
              <rect x={x + 16} y="264" width="68" height="8" rx="4" fill="#ffffff" fillOpacity="0.75" />
              <rect x={x + 16} y="280" width="48" height="6" rx="3" fill="#A7B0BC" />
            </motion.g>
          ))}
        </motion.g>

        {/* Phone mockup, floating in front */}
        <motion.g
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: [24, 0, -6, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.5 },
            y: { duration: 6, delay: 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <rect x="360" y="190" width="150" height="260" rx="24" fill="#0B0F14" stroke="#66768A" strokeOpacity="0.35" strokeWidth="2" />
          <rect x="372" y="214" width="126" height="190" rx="10" fill="url(#phone-block)" />
          <rect x="384" y="230" width="70" height="8" rx="4" fill="#ffffff" fillOpacity="0.9" />
          <rect x="384" y="248" width="100" height="6" rx="3" fill="#ffffff" fillOpacity="0.5" />
          <rect x="384" y="268" width="100" height="40" rx="8" fill="#ffffff" fillOpacity="0.12" />
          <rect x="384" y="320" width="100" height="18" rx="9" fill="#ffffff" fillOpacity="0.85" />
          <rect x="420" y="420" width="40" height="6" rx="3" fill="#66768A" fillOpacity="0.6" />
        </motion.g>

        <motion.circle
          cx="36"
          cy="20"
          r="5"
          fill="#22D3EE"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="520"
          cy="170"
          r="5"
          fill="#8B2FEF"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </svg>
    </div>
  );
}
