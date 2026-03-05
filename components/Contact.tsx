import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="mx-auto max-w-[640px] px-6 py-24 md:py-32 text-center">
      <Reveal>
        <h2 className="mb-8 text-[clamp(12px,1.4vw,15px)] uppercase tracking-[0.35em] text-muted">
          Work With Us
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="letter-text mb-12 text-text/50">
          We&apos;re selective about who we work with — but we&apos;re always
          listening. If you&apos;re building something real, reach out.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:hello@bashcollective.com"
            className="inline-block border border-text/20 px-8 py-3 text-[11px] uppercase tracking-[0.3em] text-text/70 transition-all duration-500 hover:border-red hover:text-red hover:shadow-[0_0_20px_var(--color-red-glow)]"
          >
            Email
          </a>
          <a
            href="https://instagram.com/bashcollective"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-text/20 px-8 py-3 text-[11px] uppercase tracking-[0.3em] text-text/70 transition-all duration-500 hover:border-red hover:text-red hover:shadow-[0_0_20px_var(--color-red-glow)]"
          >
            Instagram
          </a>
        </div>
      </Reveal>
    </section>
  );
}
