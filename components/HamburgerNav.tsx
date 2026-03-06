"use client";

import { useState, useCallback } from "react";

const sectionLinks = [
  { id: "hero", label: "Home" },
  { id: "letter", label: "Letter" },
  { id: "ones-we-build-with", label: "The Ones We Build With" },
  { id: "what-we-build", label: "What We Build" },
  { id: "connect", label: "Connect" },
] as const;

export default function HamburgerNav() {
  const [open, setOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] flex flex-col px-6 py-5 md:px-8 md:py-6">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex flex-col gap-1.5 text-muted/70 transition-colors duration-300 hover:text-red focus:outline-none focus-visible:text-red"
        aria-expanded={open}
        aria-controls="hamburger-menu"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span
          className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      <div
        id="hamburger-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="flex flex-col gap-1 pt-6"
          aria-label="Page sections"
        >
          {sectionLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className="font-[family-name:var(--font-cormorant)] text-[13px] uppercase tracking-[0.2em] text-text/70 transition-colors duration-300 hover:text-red focus:outline-none focus-visible:text-red"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
