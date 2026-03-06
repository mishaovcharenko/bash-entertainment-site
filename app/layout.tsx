import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const siteUrl = "https://bash-entertainment.netlify.app";
const description =
  "BASH — a fully integrated creative ecosystem across film, music, digital, brand strategy, ventures, and culture.";

export const metadata: Metadata = {
  title: "BASH",
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "BASH",
    description,
    url: siteUrl,
    siteName: "BASH",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BASH",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BASH",
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <div className="flagpole" aria-hidden="true" />
        <Nav />
        {children}
        <div className="grain-overlay" aria-hidden="true" />
        <div className="vignette-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
