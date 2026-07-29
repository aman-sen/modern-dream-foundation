# Modern Dream Foundation — Website

A premium, animated NGO website built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons**.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000. This build was verified end-to-end with `npm run build` (production build passes cleanly).

## What's Included

- **Pages**: Home, Vision & Mission, Gallery, Volunteer, Donate, Contact, Privacy Policy, Terms, Refund Policy, Shipping Policy, custom 404
- **Home sections**: rotating-image hero with animated counters, About, Our Work (6 animated cards), Impact stats (animated "growth ring" counters), Why Choose Us, Testimonials slider, Newsletter
- **Interactive**: Gallery with category filters + lightbox, Volunteer form with success animation, Donate form with suggested/custom amounts + live progress bar, Contact form + embedded map
- **UX chrome**: sticky navbar (transparent → solid on scroll), floating WhatsApp + Donate buttons, back-to-top, scroll progress bar, loading screen
- **SEO**: metadata, Open Graph/Twitter cards, `sitemap.xml`, `robots.txt`, Schema.org NGO markup
- **Accessibility**: visible keyboard focus states, alt text on all images, `prefers-reduced-motion` respected

## Design System

- **Colors**: exactly the brief's palette (emerald `#16A34A`, sky `#0284C7`, orange `#F97316`) as Tailwind tokens in `tailwind.config.ts`
- **Type**: Sora (display) + Inter (body) + Newsreader italic (used sparingly for quotes/testimonials, a warm human touch)
- **Signature element**: an animated circular "growth ring" counter used across the Impact section — a small nod to growth/sustainability that's more distinctive than a plain number

## Not Included (by scope — flagged rather than half-built)

These were in the original brief but were left out to keep what's delivered fully working rather than stubbed:
- Dark mode toggle
- Blog/news section, event calendar, on-site search, cookie consent banner
- Real payment gateway integration (the Donate form is UI-only; wire it to Razorpay/Stripe before going live)
- Form backends (Volunteer/Donate/Contact/Newsletter forms currently simulate submission client-side — connect to an email service or database, e.g. Formspree, Resend, or a Next.js API route)
- Actual photography (all images are Unsplash placeholders — swap in your own photos before launch)

## Notes

- A dependency check flagged `next@15.0.x` for a real security advisory (CVE-2025-66478 / the Dec 11, 2025 follow-up), so this project pins `next@15.5.9`, the patched release. Keep Next.js updated going forward.
- Google Fonts (Sora/Inter/Newsreader) are fetched at build time via `next/font/google` — this requires internet access during `npm run build`.

## Folder Structure

```
app/            routes (App Router)
components/     shared React components
components/ui/  small primitives (Button, Card)
lib/            data.ts (content), utils.ts (cn helper)
types/          shared TypeScript interfaces
```
