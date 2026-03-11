# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal website for Kush Datta — personal trainer and fitness coach. Single-page React site with anchor-scroll navigation.

## Commands

- `npm run dev` — Start dev server (Vite, http://localhost:5173)
- `npm run build` — Typecheck + production build to `dist/`
- `npm run typecheck` — TypeScript type checking only
- `npm run lint` — ESLint (TypeScript + React rules)
- `npm run preview` — Preview production build locally

## Tech Stack

- **React 19 + Vite 6 + TypeScript** — No routing, single-page app
- **Plain CSS** with custom properties (no Tailwind, no CSS-in-JS)
- **react-icons** — Tree-shakeable icons for social links and services
- **ESLint** with `typescript-eslint`, `react-hooks`, `react-refresh` plugins
- **Google Fonts** — Inter (body) + Playfair Display (headings) via `<link>` in index.html
- **Formspree** — Contact form submission (replace `YOUR_FORMSPREE_ID` in `src/data/content.ts`)

## Architecture

```
src/
  main.tsx              # Entry point
  App.tsx               # Composes Navbar + all sections
  App.css               # Global styles, CSS vars, resets, reveal animations
  hooks/
    useScrollReveal.ts  # IntersectionObserver hook for fade-in on scroll
  data/
    content.ts          # All placeholder text/data (single source of truth)
  components/
    Navbar.tsx + .css   # Fixed nav, smooth scroll links, mobile hamburger
    Hero.tsx + .css     # Full viewport hero, black bg
    About.tsx + .css    # Two-column bio + credentials
    Achievements.tsx + .css  # Results stat cards
    Gallery.tsx + .css  # Placeholder image grid
    Programs.tsx + .css # Service cards with react-icons
    Pricing.tsx + .css  # 3-tier pricing cards
    Testimonials.tsx + .css  # Client review cards
    Contact.tsx + .css  # Form (Formspree) + social links
    Footer.tsx + .css   # Nav links, social icons, copyright
```

## Conventions

- All text/data lives in `src/data/content.ts` — edit there to swap placeholders for real content
- Placeholder images use CSS `<div>` blocks with `placeholder-img` class — swap for `<img>` tags when real photos are available
- CSS custom properties defined in `App.css :root` for consistent theming
- Responsive breakpoints: 768px (mobile), 1024px (tablet)
- Each component has a co-located `.css` file
- TypeScript strict mode enabled (`tsconfig.json`)
