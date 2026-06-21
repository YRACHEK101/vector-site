# Vector — landing site

Marketing landing site for **Vector** (`vector-migrate`), an interactive, zero-token CLI that
migrates Git repositories from **Azure DevOps** to **GitHub** with full commit history — and
restores the author's contribution graph.

> Move your repos from Azure DevOps to GitHub — without losing your green squares.

![Vector landing site — hero section](Screenshot%202026-06-21%20at%2004.06.09.png)

This is the website only. The CLI itself lives at
[github.com/YRACHEK101/Vector](https://github.com/YRACHEK101/Vector).

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — subtle, reduced-motion-aware animations
- [lucide-react](https://lucide.dev) — icons
- [`geist`](https://vercel.com/font) — self-hosted Geist Sans / Geist Mono via `next/font` (no
  render-blocking Google Fonts request)

Fully static: no backend, no database, no environment variables required.

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Production build

```bash
npm run build   # type-checks and builds an optimized production bundle
npm start       # serve the production build locally
npm run lint    # ESLint
```

The build passes with zero TypeScript / ESLint errors.

## Deploying to Vercel

This is a standard Next.js App Router project — **zero config** required.

**Option A — Dashboard**

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo → **Deploy**
   (the framework preset and defaults are correct).

**Option B — CLI**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### Optional: canonical URL for absolute Open Graph links

Set `NEXT_PUBLIC_SITE_URL` to your production URL so social-share image/links resolve absolutely:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Without it the site still works; it falls back to a sensible default.

## Project structure

```
public/
  vector-logo.svg          # canonical brand logo (used in nav, hero, footer)
src/
  app/
    layout.tsx             # fonts + metadata (Open Graph, Twitter, icons)
    page.tsx               # single page — composes all sections
    globals.css            # Tailwind v4 + design tokens (dark + GitHub-green)
    icon.svg               # favicon (the Vector logo)
    opengraph-image.tsx    # generated 1200x630 OG image
  components/
    Nav.tsx                # sticky nav + mobile menu
    Hero.tsx               # headline, pills, CTAs, contribution-grid motif
    Problems.tsx           # the three problems Vector solves
    HowItWorks.tsx         # 3-stage pipeline diagram
    QuickStart.tsx         # terminal block + copy button + requirements
    Safety.tsx             # zero-token / non-destructive / deterministic / incremental
    CTA.tsx                # final call-to-action band
    Footer.tsx
    ContributionGrid.tsx   # animated GitHub-style green squares
    CopyButton.tsx         # clipboard with "Copied!" feedback
    GitHubButton.tsx       # reusable repo link button
    GitHubIcon.tsx         # GitHub mark (lucide v1 dropped brand glyphs)
    Logo.tsx               # renders public/vector-logo.svg
    Reveal.tsx             # scroll-reveal wrapper (honors prefers-reduced-motion)
    Code.tsx               # inline monospace token
  lib/
    site.ts                # repo URL, install command, copy constants
```

## Accessibility & performance

- Semantic landmarks (`header` / `main` / `footer` / `nav`) and a skip-to-content link
- Keyboard-navigable with visible `:focus-visible` styles and `aria-label`s on icon controls
- Respects `prefers-reduced-motion`
- Self-hosted fonts and no layout-shifting images

## License

MIT.
