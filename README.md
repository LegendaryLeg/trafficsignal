# Trafficsignal (ДорЗнак)

Production-ready landing website for road sign manufacturing services in Kazakhstan.

Live site: [https://www.trafficsignal.kz/](https://www.trafficsignal.kz/)

## Overview

This project is a modern React + Vite landing page built for **ДорЗнак**, focused on:

- presenting traffic sign product categories
- showcasing film/pricing options
- driving WhatsApp inquiries as the primary conversion goal
- fast performance and clean SEO setup for search visibility

## Features

- Modern, responsive one-page layout
- Animated UI sections using Motion
- Product/sign category presentation blocks
- WhatsApp call-to-action integration across key sections
- SEO baseline setup:
  - canonical URL
  - Open Graph and Twitter metadata
  - JSON-LD (`LocalBusiness`) structured data
  - `robots.txt`
  - `sitemap.xml`

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animation:** Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Project Structure

```text
src/
  app/
    components/
      Navigation.tsx
      Hero.tsx
      SignCategories.tsx
      Pricing.tsx
      WhyUs.tsx
      CTABand.tsx
      StatsBar.tsx
      ScrollingTicker.tsx
      Footer.tsx
public/
  2/
  content/
  main-file/
  robots.txt
  sitemap.xml
index.html
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build locally

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start local Vite dev server
- `npm run build` - type-check and create production build
- `npm run preview` - preview built app from `dist/`
- `npm run vercel-build` - CI/build command used for Vercel

## Deployment (Vercel)

This project is configured for Vercel deployment.

Typical flow:

1. Push changes to the connected Git repository
2. Vercel builds and deploys automatically
3. Verify production URLs:
   - `/`
   - `/robots.txt`
   - `/sitemap.xml`

## SEO and Indexing Notes

After deployment, submit the site for indexing:

- Google Search Console: submit `https://www.trafficsignal.kz/sitemap.xml`
- Bing Webmaster Tools: submit the same sitemap URL

Also ensure:

- canonical domain remains `https://www.trafficsignal.kz/`
- all important pages are crawlable
- metadata remains consistent after future updates

## Contact

- for any questions email here: raiyan.mokhd@gmail.com