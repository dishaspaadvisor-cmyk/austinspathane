import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { JOURNAL_POSTS } from './src/data/blogPosts';
import { BUSINESS_INFO } from './src/data/businessInfo';
import { LOCATION_PAGES } from './src/data/locations';
import { getApprovedServices } from './src/data/services';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface RouteMeta {
  title: string;
  description: string;
  canonicalPath: string;
  is404?: boolean;
}

const STATIC_META: Record<string, RouteMeta> = {
  '/': {
    title: 'Austin Spa Thane – Best Spa & Massage Centre in Thane West',
    description:
      'Professional spa and therapeutic massage centre near Teen Hath Naka & Tip Top Plaza, LBS Marg, Thane West. Thai, Deep Tissue, Swedish, Balinese, Aromatherapy & Couples Suites.',
    canonicalPath: '/',
  },
  '/about/': {
    title: 'About Austin Spa Thane – Standards, Hygiene & Philosophy',
    description:
      'Learn about Austin Spa Thane near Teen Hath Naka & Tip Top Plaza. Discover our professional non-medical wellness standards, hygiene commitment, and suite facilities.',
    canonicalPath: '/about/',
  },
  '/services/': {
    title: 'All 24 Spa & Massage Treatments in Thane West | Austin Spa Thane',
    description:
      'Browse all 24 approved spa and massage treatments at Austin Spa Thane West: Thai, Deep Tissue, Swedish, Balinese, Aromatherapy, Reflexology, Scrubs & Jacuzzi Suites.',
    canonicalPath: '/services/',
  },
  '/locations/': {
    title: 'Austin Spa Thane Location & Nearby Areas Served | Thane West',
    description:
      'Find directions, landmarks, and area guides for Austin Spa Thane at Dev Milan CHS Ltd., near Tip Top Plaza, LBS Marg, Teen Hath Naka, Thane West.',
    canonicalPath: '/locations/',
  },
  '/gallery/': {
    title: 'Sanctuary Gallery – Spa Interiors & Suites | Austin Spa Thane',
    description:
      'Preview the botanical spa reception, massage suites, Thai floor-mat room, foot reflexology corner, and Jacuzzi aesthetic envisioned for Austin Spa Thane.',
    canonicalPath: '/gallery/',
  },
  '/journal/': {
    title: 'Wellness Journal – Massage & Spa Guides for Thane | Austin Spa',
    description:
      'Read 17 practical, honest guides comparing Thai, Balinese, Deep Tissue, Swedish, Four-Hand, Aromatherapy, Reflexology, and spa hygiene in Thane West.',
    canonicalPath: '/journal/',
  },
  '/contact/': {
    title: 'Contact Austin Spa Thane – Address, Phone, Hours & Directions',
    description:
      'Contact Austin Spa Thane at Dev Milan CHS Ltd., Near Tip Top Plaza, LBS Marg, Teen Hath Naka, Thane West. Call +91 91528 44124 or message on WhatsApp.',
    canonicalPath: '/contact/',
  },
  '/booking/': {
    title: 'Book a Spa Appointment in Thane West | Austin Spa Thane',
    description:
      'Reserve your massage, body scrub, or Jacuzzi ritual at Austin Spa Thane near Teen Hath Naka & Tip Top Plaza.',
    canonicalPath: '/booking/',
  },
  '/privacy-policy/': {
    title: 'Privacy Policy | Austin Spa Thane',
    description: 'How Austin Spa Thane handles appointment enquiry details and privacy expectations.',
    canonicalPath: '/privacy-policy/',
  },
  '/terms-and-conditions/': {
    title: 'Terms & Conditions | Austin Spa Thane',
    description: 'Professional spa code of conduct and non-medical wellness scope at Austin Spa Thane.',
    canonicalPath: '/terms-and-conditions/',
  },
  '/cancellation-policy/': {
    title: 'Cancellation Policy | Austin Spa Thane',
    description: 'Rescheduling and cancellation guidelines for standard, couples, and Jacuzzi suite bookings.',
    canonicalPath: '/cancellation-policy/',
  },
  '/sitemap/': {
    title: 'HTML Sitemap – All Pages, Services & Guides | Austin Spa Thane',
    description: 'Complete directory of Austin Spa Thane pages, treatments, location guides, and journal articles.',
    canonicalPath: '/sitemap/',
  },
  '/seo-research/': {
    title: 'Organic SEO Strategy, Competitor Audit & Verification Report | Austin Spa Thane',
    description: 'Competitor research, keyword mapping matrix, and business verification checklist for Austin Spa Thane.',
    canonicalPath: '/seo-research/',
  },
};

function resolveRouteMeta(reqPath: string): RouteMeta {
  const clean = reqPath === '/' ? '/' : `/${reqPath.replace(/^\/+|\/+$/g, '')}/`;
  if (STATIC_META[clean]) return STATIC_META[clean];

  const services = getApprovedServices();
  if (clean.startsWith('/services/')) {
    const slug = clean.slice('/services/'.length, -1);
    const srv = services.find((s) => s.slug === slug);
    if (srv) {
      return {
        title: srv.metaTitle,
        description: srv.metaDescription,
        canonicalPath: `/services/${srv.slug}/`,
      };
    }
  }

  if (clean.startsWith('/locations/')) {
    const slug = clean.slice('/locations/'.length, -1);
    const loc = LOCATION_PAGES.find((l) => l.slug === slug);
    if (loc) {
      return {
        title: loc.metaTitle,
        description: loc.metaDescription,
        canonicalPath: `/locations/${loc.slug}/`,
      };
    }
  }

  if (clean.startsWith('/journal/')) {
    const slug = clean.slice('/journal/'.length, -1);
    const post = JOURNAL_POSTS.find((p) => p.slug === slug);
    if (post) {
      return {
        title: post.metaTitle,
        description: post.metaDescription,
        canonicalPath: `/journal/${post.slug}/`,
      };
    }
  }

  return {
    title: 'Page Not Found | Austin Spa Thane',
    description: 'The requested page could not be found on Austin Spa Thane.',
    canonicalPath: clean,
    is404: true,
  };
}

function escapeHtmlAttr(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectRouteMeta(html: string, meta: RouteMeta): string {
  const canonicalUrl = `${BUSINESS_INFO.primaryDomain}${meta.canonicalPath}`;
  const safeTitle = escapeHtmlAttr(meta.title);
  const safeDesc = escapeHtmlAttr(meta.description);
  const safeUrl = escapeHtmlAttr(canonicalUrl);

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${safeDesc}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${safeUrl}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${safeUrl}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${safeDesc}" />`
    );
}

async function startServer() {
  const app = express();
  const isProd = process.env.NODE_ENV === 'production' && fs.existsSync(path.resolve(__dirname, 'dist/index.html'));
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '100kb' }));

  // Robots.txt
  app.get('/robots.txt', (_req, res) => {
    res.type('text/plain').send(
      `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${BUSINESS_INFO.primaryDomain}/sitemap.xml\n`
    );
  });

  // XML Sitemap
  app.get('/sitemap.xml', (_req, res) => {
    const services = getApprovedServices();
    const today = '2026-11-26';
    const urls = [
      ...Object.keys(STATIC_META),
      ...services.map((s) => `/services/${s.slug}/`),
      ...LOCATION_PAGES.map((l) => `/locations/${l.slug}/`),
      ...JOURNAL_POSTS.map((p) => `/journal/${p.slug}/`),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
      .map(
        (u) =>
          `  <url>\n    <loc>${BUSINESS_INFO.primaryDomain}${u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
      )
      .join('\n')}\n</urlset>\n`;

    res.type('application/xml').send(xml);
  });

  // Validated Booking Enquiry API
  const recentEnquiries: Array<{
    referenceId: string;
    name: string;
    phone: string;
    service: string;
    date: string;
    preferredTime: string;
    guests: string;
    message: string;
    createdAt: string;
  }> = [];

  app.post('/api/enquiries', async (req, res) => {
    const { name, phone, service, date, preferredTime, guests, message, source } = req.body || {};

    if (typeof name !== 'string' || name.trim().length < 2) {
      res.status(400).json({ error: 'Please provide your full name.' });
      return;
    }
    if (typeof phone !== 'string' || phone.replace(/[^\d+]/g, '').length < 10) {
      res.status(400).json({ error: 'Please provide a valid phone number.' });
      return;
    }
    if (typeof date !== 'string' || !date.trim()) {
      res.status(400).json({ error: 'Please provide a preferred appointment date.' });
      return;
    }

    const referenceId = `AST-${Date.now().toString(36).toUpperCase()}`;
    const createdAt = new Date().toISOString();
    const cleanService = typeof service === 'string' && service.trim() ? service.trim().slice(0, 140) : 'General Enquiry';
    const cleanGuests = typeof guests === 'string' && guests.trim() ? guests.trim().slice(0, 40) : '1 Guest';
    const cleanMessage = typeof message === 'string' ? message.trim().slice(0, 500) : '';
    const cleanTime = typeof preferredTime === 'string' ? preferredTime.trim().slice(0, 60) : '';
    const cleanSource =
      typeof source === 'string' && source.trim() ? source.trim().slice(0, 80) : 'austinspathane.in';

    const combinedNotes = [
      `Treatment: ${cleanService}`,
      `Guests: ${cleanGuests}`,
      cleanMessage ? `Notes: ${cleanMessage}` : '',
    ]
      .filter(Boolean)
      .join(' | ');

    const sheetRow = {
      referenceId,
      customerName: name.trim().slice(0, 120),
      phone: phone.trim().slice(0, 30),
      branch: 'Austin Spa Thane West (Teen Hath Naka)',
      preferredDate: date.trim().slice(0, 20),
      preferredTime: cleanTime,
      notes: combinedNotes,
      source: cleanSource,
      createdAt,
    };

    recentEnquiries.push({
      referenceId,
      name: sheetRow.customerName,
      phone: sheetRow.phone,
      service: cleanService,
      date: sheetRow.preferredDate,
      preferredTime: cleanTime,
      guests: cleanGuests,
      message: cleanMessage,
      createdAt,
    });

    if (recentEnquiries.length > 200) {
      recentEnquiries.shift();
    }

    const sheetDbUrl = process.env.SHEETDB_API_URL;
    if (!sheetDbUrl) {
      res.status(500).json({ error: 'Google Sheet database endpoint is not configured on the server.' });
      return;
    }

    try {
      const sheetRes = await fetch(sheetDbUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: [sheetRow] }),
      });

      if (!sheetRes.ok) {
        const errText = await sheetRes.text().catch(() => '');
        console.error('SheetDB insert failed:', sheetRes.status, errText);
        res.status(502).json({
          error: 'Could not save enquiry to Google Sheet right now. Please call +91 91528 44124 directly.',
        });
        return;
      }

      res.status(201).json({
        ok: true,
        referenceId,
        savedToSheet: true,
        message: 'Appointment enquiry saved and received by Austin Spa Thane reception desk.',
      });
    } catch (err) {
      console.error('SheetDB network error:', err);
      res.status(502).json({
        error: 'Unable to reach Google Sheet database right now. Please call +91 91528 44124 directly.',
      });
    }
  });

  let vite: Awaited<ReturnType<typeof createViteServer>> | null = null;

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist'), { index: false }));
  }

  app.use(async (req, res, next) => {
    const urlPath = req.originalUrl.split('?')[0];
    const isViteOrAsset =
      urlPath.startsWith('/api/') ||
      urlPath.startsWith('/@') ||
      urlPath.startsWith('/src/') ||
      urlPath.startsWith('/node_modules/') ||
      urlPath.startsWith('/assets/') ||
      /\.[a-zA-Z0-9]+$/.test(urlPath);

    if (req.method !== 'GET' || isViteOrAsset) {
      next();
      return;
    }

    try {
      const routeMeta = resolveRouteMeta(urlPath);
      const templatePath = isProd
        ? path.resolve(__dirname, 'dist/index.html')
        : path.resolve(__dirname, 'index.html');

      let html = fs.readFileSync(templatePath, 'utf-8');
      if (vite) {
        html = await vite.transformIndexHtml(req.originalUrl, html);
      }

      const finalHtml = injectRouteMeta(html, routeMeta);
      res
        .status(routeMeta.is404 ? 404 : 200)
        .set({ 'Content-Type': 'text/html' })
        .end(finalHtml);
    } catch (err) {
      next(err);
    }
  });

  if (vite) {
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Austin Spa Thane server listening on http://localhost:${PORT}`);
  });
}

startServer();
