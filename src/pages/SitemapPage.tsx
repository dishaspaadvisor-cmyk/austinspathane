import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { JOURNAL_POSTS } from '../data/blogPosts';
import { LOCATION_PAGES } from '../data/locations';
import { getApprovedServices } from '../data/services';
import { buildBreadcrumbSchema } from '../lib/seo';

export function SitemapPage() {
  const services = getApprovedServices();
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'HTML Sitemap' }];

  return (
    <>
      <SeoHead
        title="HTML Sitemap – All Pages, Services & Guides | Austin Spa Thane"
        description="Complete directory of Austin Spa Thane pages: all 24 massage treatments, 4 Thane location guides, 17 wellness journal articles, gallery, contact, and policies."
        canonicalPath="/sitemap/"
        schemas={[buildBreadcrumbSchema(breadcrumbs)]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#34332F]">
            Austin Spa Thane — Complete HTML Sitemap
          </h1>
          <p className="mt-2 text-base text-[#77736D]">
            Direct crawlable index of every core page, treatment guide, local area page, and wellness journal article.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-4">
            <h2 className="font-display text-xl font-semibold text-[#34332F]">Core Pages</h2>
            <ul className="space-y-2 text-sm text-[#58785D]">
              <li><Link to="/" className="hover:text-[#D05D3D]">Homepage</Link></li>
              <li><Link to="/about/" className="hover:text-[#D05D3D]">About Austin Spa</Link></li>
              <li><Link to="/services/" className="hover:text-[#D05D3D]">All Services ({services.length})</Link></li>
              <li><Link to="/locations/" className="hover:text-[#D05D3D]">Locations Overview</Link></li>
              <li><Link to="/gallery/" className="hover:text-[#D05D3D]">Sanctuary Gallery</Link></li>
              <li><Link to="/journal/" className="hover:text-[#D05D3D]">Wellness Journal ({JOURNAL_POSTS.length})</Link></li>
              <li><Link to="/contact/" className="hover:text-[#D05D3D]">Contact &amp; Directions</Link></li>
              <li><Link to="/booking/" className="hover:text-[#D05D3D]">Book Appointment</Link></li>
              <li><Link to="/seo-research/" className="hover:text-[#D05D3D]">Organic SEO &amp; Competitor Report</Link></li>
              <li><Link to="/privacy-policy/" className="hover:text-[#D05D3D]">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions/" className="hover:text-[#D05D3D]">Terms &amp; Conditions</Link></li>
              <li><Link to="/cancellation-policy/" className="hover:text-[#D05D3D]">Cancellation Policy</Link></li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-[#34332F] pt-4 border-t border-[#E9E0D6]">
              Thane Location Pages
            </h2>
            <ul className="space-y-2 text-sm text-[#58785D]">
              {LOCATION_PAGES.map((loc) => (
                <li key={loc.slug}>
                  <Link to={`/locations/${loc.slug}/`} className="hover:text-[#D05D3D]">
                    {loc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-4">
            <h2 className="font-display text-xl font-semibold text-[#34332F]">
              All {services.length} Treatment Pages
            </h2>
            <ul className="space-y-2 text-sm text-[#58785D]">
              {services.map((srv) => (
                <li key={srv.slug}>
                  <Link to={`/services/${srv.slug}/`} className="hover:text-[#D05D3D]">
                    {srv.order}. {srv.searchableTitle} ({srv.brandName})
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-4">
            <h2 className="font-display text-xl font-semibold text-[#34332F]">
              All {JOURNAL_POSTS.length} Wellness Journal Articles
            </h2>
            <ul className="space-y-2 text-sm text-[#58785D]">
              {JOURNAL_POSTS.map((post, idx) => (
                <li key={post.slug}>
                  <Link to={`/journal/${post.slug}/`} className="hover:text-[#D05D3D]">
                    {idx + 1}. {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
