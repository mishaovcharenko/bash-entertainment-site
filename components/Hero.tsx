"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const dur = prefersReducedMotion ? 0 : 0.9;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-6 sm:pt-8 md:pb-20">
      <div className="flex flex-1 flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, ease: EASE }}
          className="relative"
        >
          <div className="logo-glow absolute inset-0 scale-110 rounded-full bg-red/[0.08] blur-3xl" />
          <Image
            src="/bash-logo.png"
            alt="BASH"
            width={480}
            height={160}
            priority
            className="relative w-[280px] md:w-[420px] lg:w-[480px] h-auto mix-blend-lighten"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, ease: EASE, delay: 0.2 }}
          className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(12px,1.6vw,16px)] uppercase tracking-[0.3em] text-text/80 md:mt-8"
        >
          A letter from the story so far.
        </motion.p>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: dur, delay: 0.6 }}
          className="mt-10 text-[10px] uppercase tracking-[0.4em] text-muted scroll-pulse md:mt-12"
        >
          Scroll
        </motion.span>
      </div>
    </section>
  );
}
