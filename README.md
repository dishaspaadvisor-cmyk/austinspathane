# Austin Spa Thane (`austinspathane.in`)

Complete multi-page organic SEO & wellness web application for **Austin Spa Thane**, located at:

> Commercial Premises 102-A & 103-A, 1st Floor, Dev Milan CHS Ltd., Near Tip Top Plaza, L.B.S. Marg, Teen Hath Naka Flyover, Thane West, Maharashtra 400602  
> Phone: +91 91528 44124 · Email: austinspa.thane@gmail.com

## Key Architecture & Features

- **Fresh Botanical Luxury Design System**: Warm Cream (`#FFF8F0`), Coral (`#E8795A`), Botanical Sage (`#8DAA91`), Dark Ink (`#34332F`), and Muted Text (`#77736D`), paired with `Fraunces` editorial serif and `Plus Jakarta Sans`.
- **Centralized 24-Treatment Service Catalogue (`src/data/services.ts`)**: Includes availability status gating (`approved`, `pending_verification`, `unavailable`), searchable H1s, brand labels, and unique 24-part educational pages with zero duplicated paragraphs, zero fabricated pricing, zero Ayurvedic listings, and zero unverified medical claims.
- **Thane Local SEO Architecture (`src/data/locations.ts`)**: Dedicated local intent guides (`/locations/thane/`, `/locations/thane-west/`, `/locations/teen-hath-naka-thane/`, `/locations/naupada-thane/`) anchored strictly to the single verified Teen Hath Naka branch.
- **17 Wellness Journal Guides (`src/data/blogPosts.ts`)**: Original Indian-English educational guides covering modality comparisons, first-visit etiquette, hygiene standards, and Thane commuter guides.
- **Technical SEO & Server Routes (`server.ts`, `src/lib/seo.ts`)**:
  - Route-aware `<title>`, `<meta name="description">`, OpenGraph, Twitter Cards, and self-referencing canonicals injected server-side and updated client-side.
  - Dynamic `/sitemap.xml` and `/robots.txt` plus crawlable `/sitemap/` HTML directory.
  - Schema.org JSON-LD (`DaySpa`, `Organization`, `BreadcrumbList`, `Service`, `Article`, `FAQPage`) matching visible page content.
  - Server-side `POST /api/enquiries` validation paired with WhatsApp confirmation summary.
- **SEO & Business Verification Report (`/seo-research/`)**: Houses the Phase 1 Competitor Comparison Report, Phase 2 Keyword Mapping Matrix, and Business Information Verification Checklist.

## Running Locally & Production Deployment

```bash
npm install
npm run dev      # Starts Express + Vite middleware on port 3000
npm run lint     # TypeScript check (tsc --noEmit)
npm run build    # Builds Vite production bundle to dist/
npm run start    # Runs Express serving dist/ on port 3000
```

## Owner Verification Checklist Before Live Domain Cutover

1. Confirm daily operating hours (`10:00 AM – 11:00 PM` publicly listed) and secondary directory phone lines (`+91 96061 81706`).
2. Confirm exact session slot durations (e.g. 45 / 60 / 90 minutes) and Jacuzzi maintenance lead times.
3. Replace illustrative gallery previews (`/src/assets/images/...`) with verified high-resolution branch photography.
4. Export verified search volumes via Google Keyword Planner & link Google Search Console once `austinspathane.in` goes live.
