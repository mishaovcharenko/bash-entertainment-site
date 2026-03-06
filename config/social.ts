/**
 * Social links and contact email.
 * Update these when the client provides final URLs.
 */
export const social = {
  instagram: "https://www.instagram.com/presentedbybash/",
  facebook: "https://www.facebook.com/profile.php?id=61557068081468",
  tiktok: "https://www.tiktok.com/@presentedbybash",
  youtube: "https://youtube.com/@presentedbybash",
  email: "mailto:Admin@bashentertainment.co",
} as const;

export type SocialKey = keyof typeof social;
