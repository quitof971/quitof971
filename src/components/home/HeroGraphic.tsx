"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function HeroGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 16 });
  const sy = useSpring(py, { stiffness: 60, damping: 16 });

  const farX = useTransform(sx, (v) => v * 8);
  const farY = useTransform(sy, (v) => v * 8);
  const nearX = useTransform(sx, (v) => v * 18);
  const nearY = useTransform(sy, (v) => v * 18);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full w-full"
    >
      <svg viewBox="0 0 560 520" className="h-full w-full overflow-visible" aria-hidden="true" fill="none">
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

        <motion.g style={{ x: farX, y: farY }} opacity="0.14" stroke="#66768A" strokeWidth="1">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 70} y1="0" x2={i * 70} y2="520" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 70} x2="560" y2={i * 70} />
          ))}
        </motion.g>

        <motion.path
          d="M40 260 L180 130 L260 210 L340 90 L520 260"
          stroke="url(#roofline)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ x: farX, y: farY }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        />

        <motion.path
          d="M100 420 L220 340 L300 380 L460 220"
          stroke="#FC8E01"
          strokeWidth="3"
          strokeDasharray="2 10"
          strokeLinecap="round"
          style={{ x: nearX, y: nearY }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        />
        <motion.path
          d="M460 220 L460 250 M460 220 L432 226"
          stroke="#FC8E01"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ x: nearX, y: nearY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.6 }}
        />

        <motion.g style={{ x: nearX, y: nearY }}>
          <motion.g
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: [16, 0, -6, 0] }}
            transition={{ opacity: { duration: 0.6, delay: 0.9 }, y: { duration: 5, delay: 0.9, repeat: Infinity, ease: "easeInOut" } }}
          >
            <rect x="60" y="330" width="140" height="86" rx="14" fill="url(#cardFade)" stroke="#66768A" strokeOpacity="0.35" />
            <rect x="78" y="350" width="60" height="6" rx="3" fill="#A7B0BC" />
            <rect x="78" y="366" width="90" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.85" />
            <rect x="78" y="388" width="40" height="18" rx="4" fill="#04A5EF" fillOpacity="0.35" />
            <rect x="126" y="378" width="40" height="28" rx="4" fill="#FC4C01" fillOpacity="0.55" />
          </motion.g>
        </motion.g>

        <motion.g style={{ x: farX, y: farY }}>
          <motion.g
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: [-16, 0, 8, 0] }}
            transition={{ opacity: { duration: 0.6, delay: 1.1 }, y: { duration: 6, delay: 1.1, repeat: Infinity, ease: "easeInOut" } }}
          >
            <rect x="350" y="300" width="150" height="96" rx="14" fill="url(#cardFade)" stroke="#66768A" strokeOpacity="0.35" />
            <rect x="368" y="320" width="70" height="6" rx="3" fill="#A7B0BC" />
            <rect x="368" y="336" width="100" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.85" />
            <rect x="368" y="360" width="112" height="10" rx="5" fill="#11161D" />
            <rect x="368" y="360" width="70" height="10" rx="5" fill="#04A5EF" />
          </motion.g>
        </motion.g>

        <motion.circle
          cx="180"
          cy="130"
          r="5"
          fill="#FC4C01"
          style={{ x: nearX, y: nearY }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="340"
          cy="90"
          r="5"
          fill="#04A5EF"
          style={{ x: farX, y: farY }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.circle
          cx="520"
          cy="260"
          r="4"
          fill="#FC8E01"
          style={{ x: nearX, y: nearY }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
        />
      </svg>
    </div>
  );
}
