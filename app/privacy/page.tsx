import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — BASH",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-[640px] px-6 py-24 md:py-32">
      <Link
        href="/"
        className="mb-16 inline-block text-[10px] uppercase tracking-[0.3em] text-muted transition-colors duration-300 hover:text-text"
      >
        &larr; Back
      </Link>

      <h1 className="mb-12 text-[clamp(12px,1.4vw,15px)] uppercase tracking-[0.35em] text-muted">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-[clamp(11px,1.1vw,13px)] uppercase leading-[2] tracking-[0.16em] text-text/50">
        <section>
          <h2 className="mb-4 text-text/70">Effective Date</h2>
          <p>March 2026</p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Overview</h2>
          <p>
            BASH Entertainment (&quot;BASH,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) respects your privacy. This
            Privacy Policy explains how we collect, use, and protect information
            when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Information We Collect</h2>
          <p>
            We do not collect personal information unless you voluntarily
            provide it — for example, by contacting us via email. When you visit
            our site, we may automatically collect non-identifying information
            such as browser type, device type, and pages visited through
            standard analytics tools.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">How We Use Information</h2>
          <p>
            Any information you provide is used solely to respond to your
            inquiry or to improve the experience of our website. We do not sell,
            rent, or share your personal information with third parties for
            marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Cookies</h2>
          <p>
            Our website may use cookies or similar technologies to enhance your
            browsing experience. You can disable cookies through your browser
            settings at any time.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Third-Party Links</h2>
          <p>
            Our site may contain links to third-party websites such as Spotify
            and Instagram. We are not responsible for the privacy practices or
            content of those sites.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Security</h2>
          <p>
            We take reasonable measures to protect any information collected
            through our website, but no method of transmission over the internet
            is completely secure.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Contact</h2>
          <p>
            If you have questions about this policy, contact us at{" "}
            <a
              href="mailto:alberto@bashentertainment.co"
              className="text-text/70 transition-colors duration-300 hover:text-red"
            >
              alberto@bashentertainment.co
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
