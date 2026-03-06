"use client";

import { social } from "@/config/social";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  SubstackIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/icons";

const iconSize = 20;

const navItems = [
  { key: "instagram" as const, href: social.instagram, Icon: InstagramIcon },
  { key: "facebook" as const, href: social.facebook, Icon: FacebookIcon },
  { key: "tiktok" as const, href: social.tiktok, Icon: TikTokIcon },
  { key: "youtube" as const, href: social.youtube, Icon: YouTubeIcon },
  { key: "substack" as const, href: social.substack, Icon: SubstackIcon },
  { key: "email" as const, href: social.email, Icon: EmailIcon },
] as const;

export default function Nav() {
  return (
    <nav
      className="fixed top-0 right-0 z-[60] flex items-center gap-4 px-6 py-5 md:px-8 md:py-6"
      aria-label="Social and contact links"
    >
      {navItems.map(({ key, href, Icon }) => {
        const isEmail = key === "email";
        return (
          <a
            key={key}
            href={href}
            {...(isEmail
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
            className="text-muted/70 transition-colors duration-300 hover:text-red focus:outline-none focus-visible:text-red"
            aria-label={
              key === "email"
                ? "Email"
                : key === "facebook"
                  ? "Facebook"
                  : key === "substack"
                    ? "Newsletter"
                    : key
            }
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </nav>
  );
}
