import { promises as fs } from "fs";
import path from "path";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Family from "@/components/Family";
import Footer from "@/components/Footer";

export default async function Home() {
  const letterPath = path.join(process.cwd(), "content", "open-letter.md");
  const letterContent = await fs.readFile(letterPath, "utf-8");

  const artistsPath = path.join(process.cwd(), "content", "artists.json");
  const artistsRaw = await fs.readFile(artistsPath, "utf-8");
  const artists = JSON.parse(artistsRaw);

  return (
    <main>
      <Hero />
      <Letter content={letterContent} />
      <Family artists={artists} />
      <Footer />
    </main>
  );
}
