<p align="center">
  <img src="public/vector-logo.svg" alt="Vector logo" width="96" height="96" />
</p>

<h1 align="center">Vector — Landing Site</h1>

<p align="center">
  The marketing site for <strong>Vector</strong> (<code>vector-migrate</code>) — an interactive, zero-token CLI that migrates Git repositories from Azure DevOps to GitHub with full commit history, and restores the author's contribution graph.
</p>

<p align="center"><em>Move your repos from Azure DevOps to GitHub — without losing your green squares.</em></p>

<p align="center">
  <a href="https://vector-site-beryl.vercel.app"><img alt="Live site" src="https://img.shields.io/badge/Live-vector--site--beryl.vercel.app-39d353?style=flat-square&logo=vercel&logoColor=white"></a>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white">
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue?style=flat-square"></a>
</p>

<p align="center">
  <a href="https://vector-site-beryl.vercel.app"><strong>View the live site →</strong></a>
</p>

---

> **This repository contains the website only.** The Vector CLI lives at **[github.com/YRACHEK101/Vector](https://github.com/YRACHEK101/Vector)**.

## Overview

Vector's landing site is a fully static, single-page Next.js app. It explains what Vector does, the three problems it solves, and how its migration pipeline works — in a developer-first dark aesthetic with a GitHub-contribution-green accent.

There is no backend, no database, and no required environment variables.

## Screenshots

<p align="center">
  <img src="docs/screenshot.png" alt="Vector landing site — hero section" width="820" />
</p>

> Add your screenshot at `docs/screenshot.png`, or remove this section.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion — subtle, `prefers-reduced-motion`–aware |
| Icons | lucide-react |
| Fonts | Geist Sans / Geist Mono, self-hosted via `next/font` (no render-blocking Google Fonts request) |
| Hosting | Vercel |

## Getting started

Requires **Node.js 18+** (Node 20+ recommended).

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and build the optimized production bundle |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

The build passes with zero TypeScript / ESLint errors.

## Deployment

A standard Next.js App Router project — **zero config** on Vercel.

**Dashboard**

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo → **Deploy**. The framework preset and defaults are correct.

**CLI**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### Optional — canonical URL

Set `NEXT_PUBLIC_SITE_URL` to your production URL so Open Graph images and links resolve absolutely:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Without it the site still works and falls back to a sensible default.

## Project structure

```text
public/
  vector-logo.svg          # canonical brand logo (nav, hero, footer)
src/
  app/
    layout.tsx             # fonts + metadata (Open Graph, Twitter, icons)
    page.tsx               # single page — composes all sections
    globals.css            # Tailwind v4 + design tokens (dark + GitHub-green)
    icon.svg               # favicon
    opengraph-image.tsx    # generated 1200×630 OG image
  components/
    Nav.tsx                Hero.tsx          Problems.tsx
    HowItWorks.tsx         QuickStart.tsx    Safety.tsx
    CTA.tsx                Footer.tsx        ContributionGrid.tsx
    CopyButton.tsx         GitHubButton.tsx  GitHubIcon.tsx
    Logo.tsx               Reveal.tsx        Code.tsx
  lib/
    site.ts                # repo URL, install command, copy constants
```

## Accessibility & performance

- Semantic landmarks (`header` / `main` / `footer` / `nav`) and a skip-to-content link.
- Keyboard-navigable, with visible `:focus-visible` styles and `aria-label`s on icon controls.
- Respects `prefers-reduced-motion`.
- Self-hosted fonts and no layout-shifting images.

## License

Released under the [MIT License](LICENSE).
