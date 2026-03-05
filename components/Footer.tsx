import Link from "next/link";

const externalLinks = [
  {
    label: "How We Made Our First Independent Feature",
    href: "https://youtu.be/1yiXv2DHn88?si=d16Pn_lcZVrxlJm7",
  },
  {
    label: "Stream the Hierarchy Album",
    href: "https://open.spotify.com/album/5cqr7ng4AM4Pw8AcNdKVd9?si=awEUZVCoT",
  },
  {
    label: "Hierarchy Streaming #1 on Starz",
    href: "https://www.starz.com/us/en/movies/hierarchy-73351",
  },
  {
    label: "BASH TikTok",
    href: "https://www.tiktok.com/@presentedbybash?_t=ZT-8zZQQ9nEetS&_r=1",
  },
  {
    label: "BASH YouTube",
    href: "https://youtube.com/@presentedbybash?si=mM6Yg2eE3HpZ6dHi",
  },
];

export default function Footer() {
  return (
    <footer className="px-6 py-10 text-center">
      <div className="mx-auto mb-8 flex max-w-[480px] flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {externalLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] uppercase tracking-[0.25em] text-muted/50 transition-colors duration-300 hover:text-red"
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="text-[10px] uppercase tracking-[0.35em] text-muted/60">
        &copy; {new Date().getFullYear()} BASH. All rights reserved.
      </p>
      <div className="mt-3 flex items-center justify-center gap-4 text-[9px] uppercase tracking-[0.3em] text-muted/40">
        <Link
          href="/privacy"
          className="transition-colors duration-300 hover:text-muted"
        >
          Privacy Policy
        </Link>
        <span>|</span>
        <Link
          href="/terms"
          className="transition-colors duration-300 hover:text-muted"
        >
          Terms of Use
        </Link>
        <span>|</span>
        <Link
          href="/privacy#do-not-sell"
          className="transition-colors duration-300 hover:text-muted"
        >
          Do Not Sell My Personal Information
        </Link>
      </div>
    </footer>
  );
}
