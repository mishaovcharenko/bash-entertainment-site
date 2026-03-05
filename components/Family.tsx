import Reveal from "./Reveal";

interface Artist {
  name: string;
  spotify: string;
}

interface FamilyProps {
  artists: Artist[];
}

export default function Family({ artists }: FamilyProps) {
  return (
    <section className="mx-auto max-w-[640px] px-6 py-16 md:py-20">
      <Reveal>
        <h2 className="mb-10 text-center text-[clamp(12px,1.4vw,15px)] uppercase tracking-[0.35em] text-muted">
          Family
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {artists.map((artist, i) => {
          const isLast = i === artists.length - 1;
          const isOddOut = isLast && artists.length % 2 !== 0;

          return (
            <div
              key={artist.name}
              className={isOddOut ? "md:col-span-2" : ""}
            >
              <Reveal delay={i * 0.08}>
                <a
                  href={artist.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block text-center"
                >
                  <span className="inline-block text-[clamp(11px,1.1vw,14px)] uppercase tracking-[0.22em] text-text/70 transition-all duration-500 group-hover:text-red group-hover:[text-shadow:0_0_20px_var(--color-red-glow)]">
                    <span className="relative">
                      {artist.name}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-red transition-all duration-500 group-hover:w-full" />
                    </span>
                  </span>
                </a>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
