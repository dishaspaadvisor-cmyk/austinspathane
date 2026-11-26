import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SafeImage } from '../components/common/SafeImage';
import { SeoHead } from '../components/seo/SeoHead';
import { BUSINESS_INFO } from '../data/businessInfo';
import { LOCATION_PAGES } from '../data/locations';
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from '../lib/seo';

export function LocationsPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Locations' }];

  return (
    <>
      <SeoHead
        title="Austin Spa Thane Location & Nearby Areas Served | Thane West"
        description="Find directions, landmarks, and area guides for Austin Spa Thane at Dev Milan CHS Ltd., near Tip Top Plaza, LBS Marg, Teen Hath Naka, Thane West."
        canonicalPath="/locations/"
        schemas={[buildBreadcrumbSchema(breadcrumbs), buildLocalBusinessSchema()]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-medium text-[#58785D]">Verified Branch &amp; Area Guides</p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#34332F]">
              Our Teen Hath Naka, Thane West Sanctuary
            </h1>
            <p className="text-base leading-relaxed text-[#77736D]">
              Austin Spa operates one verified Thane branch along L.B.S. Marg near Tip Top Plaza—serving guests across central and western Thane with straightforward highway and station access.
            </p>
          </div>
        </div>

        {/* Single Verified Branch Card */}
        <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-medium text-[#58785D]">Verified Physical Address</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#34332F]">
              Austin Spa — Thane West Branch
            </h2>
            <p className="flex items-start gap-2.5 text-sm sm:text-base text-[#34332F]">
              <MapPin className="w-5 h-5 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{BUSINESS_INFO.address.fullFormatted}</span>
            </p>
            <p className="text-sm text-[#77736D]">{BUSINESS_INFO.openingHours.summary}</p>
            <p className="text-xs text-[#77736D]">{BUSINESS_INFO.openingHours.verificationNote}</p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={BUSINESS_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors"
              >
                Google Maps Directions
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#34332F] bg-[#FFF8F0] border border-[#8DAA91] hover:bg-[#FDF3E7] tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#58785D]" aria-hidden="true" />
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-[#E9E0D6]">
            <iframe
              title="Austin Spa Thane Google Map"
              src={BUSINESS_INFO.maps.embedQueryUrl}
              loading="lazy"
              className="w-full h-72 border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* 4 Local Guides */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#34332F]">
            Local Neighbourhood &amp; Transit Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATION_PAGES.map((loc) => (
              <article
                key={loc.slug}
                className="bg-white border border-[#E9E0D6] hover:border-[#8DAA91] rounded-2xl overflow-hidden flex flex-col transition-colors"
              >
                <div className="aspect-[16/9] bg-[#FDF3E7]">
                  <SafeImage src={loc.heroImage} alt={loc.heroImageAlt} fallbackTitle={loc.title} />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs font-medium text-[#58785D]">{loc.areaLabel}</p>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-[#34332F]">
                      <Link to={`/locations/${loc.slug}/`} className="hover:text-[#D05D3D] transition-colors">
                        {loc.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-[#77736D] leading-relaxed">{loc.introduction}</p>
                  </div>
                  <Link
                    to={`/locations/${loc.slug}/`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D05D3D] hover:text-[#34332F]"
                  >
                    View Landmarks &amp; Directions
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
