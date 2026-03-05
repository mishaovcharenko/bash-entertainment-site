import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — BASH",
};

export default function TermsOfUse() {
  return (
    <main className="mx-auto max-w-[640px] px-6 py-24 md:py-32">
      <Link
        href="/"
        className="mb-16 inline-block text-[10px] uppercase tracking-[0.3em] text-muted transition-colors duration-300 hover:text-text"
      >
        &larr; Back
      </Link>

      <h1 className="mb-12 text-[clamp(12px,1.4vw,15px)] uppercase tracking-[0.35em] text-muted">
        Terms of Use
      </h1>

      <div className="space-y-8 text-[clamp(11px,1.1vw,13px)] uppercase leading-[2] tracking-[0.16em] text-text/50">
        <section>
          <h2 className="mb-4 text-text/70">Effective Date</h2>
          <p>March 2026</p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Acceptance of Terms</h2>
          <p>
            By accessing or using the BASH Entertainment website, you agree to
            be bound by these Terms of Use. If you do not agree with any part of
            these terms, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Use of Content</h2>
          <p>
            All content on this website — including text, graphics, logos,
            images, and other materials — is the property of BASH Entertainment
            or its licensors and is protected by applicable intellectual
            property laws. You may not reproduce, distribute, modify, or create
            derivative works from any content without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Permitted Use</h2>
          <p>
            You may access and use this website for personal, non-commercial
            purposes only. You agree not to use the site in any way that could
            damage, disable, or impair our servers or interfere with any other
            party&apos;s use of the website.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Third-Party Links</h2>
          <p>
            Our website may contain links to external websites operated by
            third parties. We have no control over and assume no responsibility
            for the content, privacy policies, or practices of any third-party
            sites.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Disclaimers</h2>
          <p>
            This website is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis. BASH Entertainment makes no warranties,
            expressed or implied, regarding the operation of the website or the
            accuracy of its content.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, BASH Entertainment shall not
            be liable for any damages arising from your use of or inability to
            use this website.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time.
            Changes will be effective immediately upon posting to this page.
            Your continued use of the website constitutes acceptance of the
            revised terms.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of the State of California, without regard to its conflict
            of law provisions.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-text/70">Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
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
