import Reveal from "./Reveal";

interface LetterProps {
  content: string;
}

export default function Letter({ content }: LetterProps) {
  const paragraphs = content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="relative mx-auto max-w-[640px] px-6 py-16 md:py-20">
      {paragraphs.map((text, i) => (
        <Reveal key={i}>
          <p className="letter-text mb-[28px] md:mb-[40px] whitespace-pre-line">
            {text}
          </p>
        </Reveal>
      ))}
    </section>
  );
}
