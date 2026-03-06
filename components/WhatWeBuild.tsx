import Reveal from "./Reveal";
import SectionDivider from "./SectionDivider";

const intro =
  "What began as talent management has evolved into a platform for building talent, brands, stories, and culture.";

const sections = [
  {
    title: "TALENT",
    body: "We discover, develop, and represent creators across film, music, digital media, and culture.",
  },
  {
    title: "FILM",
    body: "We produce independent films, develop original IP, and collaborate with studios, platforms, and creative partners.",
  },
  {
    title: "MUSIC",
    body: "From artist development to soundtracks and cultural releases, we build music that connects story and audience.",
  },
  {
    title: "DIGITAL",
    body: "We help creators scale their presence through content strategy, platform growth, and cultural storytelling.",
  },
  {
    title: "BRAND STRATEGY & PARTNERSHIPS",
    body: "We collaborate with brands to create culturally impactful campaigns, talent partnerships, and build brand narratives that extend across film, digital media, and live experiences. Brand collaborations include Cash App, Mountain Dew, Warner Brothers, Netflix, and others.",
  },
  {
    title: "EVENTS",
    body: "We create live experiences that bring creators, audiences, and culture into the same room — from premieres and performances to community-driven events.",
  },
  {
    title: "VENTURES",
    body: "We build and invest in new ideas across media, culture, and emerging platforms.",
  },
];

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="mx-auto max-w-[640px] px-6 pt-10 pb-16 md:pt-12 md:pb-20">
      <Reveal>
        <h2 className="mb-10 text-center text-[clamp(12px,1.4vw,15px)] uppercase tracking-[0.35em] text-muted">
          What We Build
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mb-14 md:mb-16 text-center text-[clamp(11px,1.1vw,14px)] leading-relaxed tracking-[0.02em] text-text/80">
          {intro}
        </p>
      </Reveal>

      <SectionDivider />

      {sections.map(({ title, body }, i) => (
        <Reveal key={title} delay={i * 0.06}>
          <div className="pt-10 pb-10 md:pt-12 md:pb-12">
            <h3 className="text-center text-[clamp(12px,1.4vw,15px)] font-medium uppercase tracking-[0.35em] text-muted">
              {title}
            </h3>
            <p className="mt-4 text-center text-[clamp(11px,1.1vw,14px)] leading-relaxed tracking-[0.02em] text-text/70 md:mt-5">
              {body}
            </p>
          </div>
          {i < sections.length - 1 && <SectionDivider />}
        </Reveal>
      ))}
    </section>
  );
}
