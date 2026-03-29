# Dutch Survival Hacks — Claude Instructions

## Project overview
Static HTML/CSS expat survival guide for the Netherlands.
Live at: https://dutchsurvivalhacks.seniorease.eu/
Audience: international knowledge workers relocating to the Netherlands.
Tone: informal but professional — "helpful insider". Site language: English.

## File structure
```
site/
  index.html                        — homepage
  guide.html                        — guide/checklist page
  about.html                        — about the site / who runs it
  guide-thank-you.html
  newsletter-thank-you.html
  styles.css                        — all styling (single stylesheet)
  assets/
    logo.png                        — canal houses + compass, AI-generated
    logo.svg                        — simple bicycle SVG (not in use)
    checklist.pdf                   — live PDF download
    checklist.html                  — checklist source
  bsn-number-netherlands.html
  30-percent-ruling-netherlands.html
  digid-netherlands-expat.html
  health-insurance-netherlands-expat.html
  dutch-bank-account-expat.html
  exchange-driving-licence-netherlands.html
  finding-rental-netherlands-expat.html
  dutch-public-holidays-calendar.html
  schools-childcare-netherlands-expat.html
  formspree-forms.js                — AJAX submit for Formspree (skips localized hosted thank-you page)
  analytics-config.js               — GA4 Measurement ID (empty = no tracking); set G-XXXXXXXXXX before measuring
  analytics.js                      — loads gtag when ID is set

docs/
  ANALYTICS-AND-WELCOME-EMAIL.md    — GA4 setup + Mailchimp / Zapier welcome flow

tiktok-videos/                      — Remotion project for TikTok video templates
  src/Root.tsx                      — registers TipVideo and ListVideo compositions
  src/brand.ts                      — brand colors
```

## Design system
- Background: cream `#faf7f4`
- Accent / primary CTA: terracotta `#c0533a`
- Header: navy `#1e3a5f`
- Cards: box-shadow, no border
- No uppercase section headings
- Logo: left-aligned in header (130px), flex layout with text to the right
- Favicon and og:image on all pages

## Conventions
- Pure static HTML + CSS — no build step, no framework
- Single `styles.css` for all pages — do not create per-page stylesheets
- Every page must include: favicon, og:image, consistent header with logo, consistent footer
- Do not add JavaScript unless explicitly asked (exceptions: `formspree-forms.js` on checklist/newsletter pages; `analytics-config.js` + `analytics.js` on all main HTML pages for optional GA4)
- Keep HTML semantic and accessible

## TikTok / Remotion
- Project: `tiktok-videos/`
- Dev server: `cd tiktok-videos && npm start` → http://localhost:3003
- Brand colors imported from `src/brand.ts`

## Out of scope (not yet done)
- Email form is not connected (action="#") — do not wire up without being asked
- No CMS, no server-side code
