import { promises as fs } from "fs";
import path from "path";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import OnesWeBuildWith from "@/components/OnesWeBuildWith";
import WhatWeBuild from "@/components/WhatWeBuild";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import { social } from "@/config/social";

export default async function Home() {
  const letterPath = path.join(process.cwd(), "content", "open-letter.md");
  const letterContent = await fs.readFile(letterPath, "utf-8");

  const oneswebuildwithPath = path.join(process.cwd(), "content", "oneswebuildwith.json");
  const oneswebuildwithRaw = await fs.readFile(oneswebuildwithPath, "utf-8");
  const oneswebuildwith = JSON.parse(oneswebuildwithRaw).sort((a: { name: string }, b: { name: string }) =>
    a.name.localeCompare(b.name)
  );

  return (
    <main>
      <Hero />
      <SectionDivider />
      <Letter content={letterContent} />
      <SectionDivider />
      <OnesWeBuildWith members={oneswebuildwith} />
      <SectionDivider />
      <WhatWeBuild />
      <div className="flex flex-col items-center gap-6 px-6 py-6 md:py-8">
        <div className="flex w-full justify-center" aria-hidden>
          <div className="h-px w-16 bg-muted/30" />
        </div>
        <a
          href={social.email}
          className="inline-block border border-text/20 px-7 py-2.5 text-[10px] uppercase tracking-[0.3em] text-text/70 transition-all duration-500 hover:border-red hover:text-red hover:shadow-[0_0_20px_var(--color-red-glow)]"
        >
          Connect
        </a>
        <div className="flex w-full justify-center" aria-hidden>
          <div className="h-px w-16 bg-muted/30" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
