"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/** `undefined` = no provider (e.g. isolated tests); `boolean` = site-wide 1s unlock */
const RevealGlobalFailsafeContext = createContext<boolean | undefined>(undefined);

export function RevealGlobalProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setUnlocked(true), 1000);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <RevealGlobalFailsafeContext.Provider value={unlocked}>
      {children}
    </RevealGlobalFailsafeContext.Provider>
  );
}

export function useRevealGlobalFailsafe(): boolean | undefined {
  return useContext(RevealGlobalFailsafeContext);
}
