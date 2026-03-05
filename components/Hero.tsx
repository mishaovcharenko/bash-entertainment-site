"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const dur = prefersReducedMotion ? 0 : 0.9;

  return (
    <section className="relative flex h-screen flex-col items-center justify-center px-4">
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
        className="mt-8 font-[family-name:var(--font-cormorant)] text-[clamp(12px,1.6vw,16px)] uppercase tracking-[0.3em] text-text/80"
      >
        An open letter.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: dur, ease: EASE, delay: 0.4 }}
        className="mt-10 flex items-center gap-5"
      >
        <a
          href="mailto:alberto@bashentertainment.co"
          className="inline-block border border-text/20 px-7 py-2.5 text-[10px] uppercase tracking-[0.3em] text-text/70 transition-all duration-500 hover:border-red hover:text-red hover:shadow-[0_0_20px_var(--color-red-glow)]"
        >
          Email
        </a>
        <a
          href="https://www.instagram.com/presentedbybash/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-text/20 px-7 py-2.5 text-[10px] uppercase tracking-[0.3em] text-text/70 transition-all duration-500 hover:border-red hover:text-red hover:shadow-[0_0_20px_var(--color-red-glow)]"
        >
          Instagram
        </a>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: dur, delay: 0.6 }}
        className="scroll-pulse absolute bottom-12 text-[10px] uppercase tracking-[0.4em] text-muted"
      >
        Scroll
      </motion.span>
    </section>
  );
}
