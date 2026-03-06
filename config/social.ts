/**
 * Social links and contact email.
 * Update these when the client provides final URLs.
 */
export const social = {
  instagram: "https://www.instagram.com/presentedbybash/",
  tiktok: "https://www.tiktok.com/@presentedbybash",
  youtube: "https://youtube.com/@presentedbybash",
  email: "mailto:info@bash.com",
} as const;

export type SocialKey = keyof typeof social;
