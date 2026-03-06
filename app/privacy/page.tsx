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
          <h2 className="mb-4 text-text/70">
            Your California Privacy Rights (CCPA / CPRA)
          </h2>
          <p>
            If you are a California resident, you have specific rights under the
            California Consumer Privacy Act (CCPA) and the California Privacy
            Rights Act (CPRA), including:
          </p>
          <ul className="mt-4 list-none space-y-3">
            <li>
              The right to know what personal information we collect, use, and
              disclose about you.
            </li>
            <li>
              The right to request deletion of your personal information.
            </li>
            <li>
              The right to opt out of the sale or sharing of your personal
              information. BASH Entertainment does not sell your personal
              information. If this practice ever changes, we will provide a
              clear opt-out mechanism on our website.
            </li>
            <li>
              The right to non-discrimination for exercising any of your privacy
              rights.
            </li>
            <li>
              The right to correct inaccurate personal information we hold about
              you.
            </li>
            <li>
              The right to limit the use and disclosure of sensitive personal
              information.
            </li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:Admin@bashentertainment.co"
              className="text-text/70 transition-colors duration-300 hover:text-red"
            >
              Admin@bashentertainment.co
            </a>
            {" "}with the subject line &quot;California Privacy Request.&quot;
            We will respond to verified requests within 45 days as required by
            law.
          </p>
        </section>

        <section id="do-not-sell">
          <h2 className="mb-4 text-text/70">
            Do Not Sell or Share My Personal Information
          </h2>
          <p>
            BASH Entertainment does not sell or share your personal information
            as defined under the CCPA/CPRA. If you would still like to submit a
            formal request, please email{" "}
            <a
              href="mailto:Admin@bashentertainment.co?subject=Do%20Not%20Sell%20My%20Personal%20Information"
              className="text-text/70 transition-colors duration-300 hover:text-red"
            >
              Admin@bashentertainment.co
            </a>
            {" "}with the subject line &quot;Do Not Sell My Personal
            Information.&quot;
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
              href="mailto:Admin@bashentertainment.co"
              className="text-text/70 transition-colors duration-300 hover:text-red"
            >
              Admin@bashentertainment.co
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
