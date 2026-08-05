"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HOVER_SELECTOR = "a, button, [role='button'], summary, [data-cursor-hover]";
const FIELD_SELECTOR = "input, textarea, select, [contenteditable='true']";

function subscribeCursorCapability(callback: () => void) {
  const fine = window.matchMedia("(pointer: fine)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  fine.addEventListener("change", callback);
  reduced.addEventListener("change", callback);
  return () => {
    fine.removeEventListener("change", callback);
    reduced.removeEventListener("change", callback);
  };
}

function getCursorCapability() {
  const fine = window.matchMedia("(pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return fine && !reduced;
}

function getServerCursorCapability() {
  return false;
}

export function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribeCursorCapability,
    getCursorCapability,
    getServerCursorCapability
  );
  const [hovering, setHovering] = useState(false);
  const [inField, setInField] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ringX = useSpring(x, { stiffness: 320, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-active");

    let frame = 0;
    let pendingX = x.get();
    let pendingY = y.get();

    const applyPosition = () => {
      x.set(pendingX);
      y.set(pendingY);
      frame = 0;
    };

    const onMove = (event: PointerEvent) => {
      pendingX = event.clientX;
      pendingY = event.clientY;
      setVisible(true);
      if (!frame) frame = requestAnimationFrame(applyPosition);

      const target = event.target as Element | null;
      setInField(Boolean(target?.closest(FIELD_SELECTOR)));
      setHovering(Boolean(target?.closest(HOVER_SELECTOR)));
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeaveWindow = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeaveWindow);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ringSize = inField ? 22 : hovering ? 52 : 32;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[200]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s ease" }}
    >
      <motion.div
        className="absolute rounded-full bg-orange"
        animate={{ scale: clicking ? 0.6 : 1 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{ x, y, width: 8, height: 8, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="absolute rounded-full border"
        animate={{
          width: ringSize,
          height: ringSize,
          scale: clicking ? 0.85 : 1,
          borderColor: hovering ? "rgba(4,165,239,0.7)" : "rgba(252,76,1,0.55)",
          backgroundColor: hovering ? "rgba(252,76,1,0.08)" : "rgba(252,76,1,0)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
}
