"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { useRevealGlobalFailsafe } from "./RevealGlobalProvider";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/** Viewport root is expanded so elements are more likely to intersect on strict / buggy observers. */
const IN_VIEW_OPTIONS = {
  once: true,
  margin: "0px 0px 25% 0px",
  amount: 0.05,
} as const;

/**
 * Scroll polish only: copy stays fully opaque. If in-view never fires, the global 1s failsafe
 * still settles motion so nothing stays “stuck” off-axis forever.
 */
export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(ref, IN_VIEW_OPTIONS);
  const globalFailSafe = useRevealGlobalFailsafe();
  const [localFailSafe, setLocalFailSafe] = useState(false);

  /** If `Reveal` ever mounts without `RevealGlobalProvider`, still unlock after 1s. */
  useEffect(() => {
    if (globalFailSafe !== undefined) return;
    const id = window.setTimeout(() => setLocalFailSafe(true), 1000);
    return () => window.clearTimeout(id);
  }, [globalFailSafe]);

  const revealed =
    prefersReducedMotion ||
    inView ||
    globalFailSafe === true ||
    localFailSafe;

  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      data-reveal-animate
      initial={{ opacity: 1, y: 14 }}
      animate={{ opacity: 1, y: revealed ? 0 : 14 }}
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
