# BASH

A cinematic, minimal single-page website for BASH — a music management collective.

Built with Next.js (App Router), TypeScript, TailwindCSS, and Framer Motion.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

### Open Letter

Edit `content/open-letter.md`. Each paragraph separated by a blank line becomes a separate scroll-reveal block on the site.

### Artists

Edit `content/artists.json`. Each entry has a `name` and `spotify` URL:

```json
[
  {
    "name": "Artist Name",
    "spotify": "https://open.spotify.com/artist/..."
  }
]
```

### Logo

Replace `public/bash-logo.png` with your own logo file (keep the same filename).

## Deploy on Netlify

1. Push this repo to GitHub.
2. Connect the repo in [Netlify](https://app.netlify.com).
3. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
4. Install the `@netlify/plugin-nextjs` plugin (Netlify usually auto-detects Next.js and adds this).
5. Deploy.

## Tech Stack

- **Next.js 16** — App Router, server components
- **TypeScript**
- **TailwindCSS v4**
- **Framer Motion** — scroll-reveal animations
- **Inter + Cormorant Garamond** — via next/font/google
