import { ArrowRight, CheckCircle2, MapPin, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SafeImage } from '../components/common/SafeImage';
import { SeoHead } from '../components/seo/SeoHead';
import { BUSINESS_INFO, SPA_IMAGES } from '../data/businessInfo';
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from '../lib/seo';

export function AboutPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'About Austin Spa' }];

  return (
    <>
      <SeoHead
        title="About Austin Spa Thane – Standards, Hygiene & Philosophy"
        description="Learn about Austin Spa Thane near Teen Hath Naka & Tip Top Plaza. Discover our professional non-medical wellness standards, hygiene commitment, and suite facilities."
        canonicalPath="/about/"
        schemas={[buildBreadcrumbSchema(breadcrumbs), buildLocalBusinessSchema()]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-medium text-[#58785D]">About Austin Spa Thane</p>
              <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#34332F] leading-tight">
                A Legitimate, Calm Wellness Sanctuary in Thane West
              </h1>
              <p className="text-base leading-relaxed text-[#77736D]">
                Located on the 1st Floor of Dev Milan CHS Ltd. right beside Tip Top Plaza and Teen Hath Naka Flyover, Austin Spa Thane exists for one straightforward purpose: offering working professionals, residents, and couples a clean, transparent, and genuinely restorative spa experience.
              </p>
              <p className="text-base leading-relaxed text-[#77736D]">
                Instead of noisy parlour lobbies or vague online menus, we focus on clear consultation, consistent linen hygiene, international relaxation and deep muscular recovery therapies, and respectful privacy from check-in to departure.
              </p>
            </div>
            <div className="lg:col-span-6 aspect-[16/10] rounded-2xl overflow-hidden border border-[#E9E0D6] bg-[#FDF3E7]">
              <SafeImage
                src={SPA_IMAGES.coupleSanctuary}
                alt="Bright couple and private therapy suite at Austin Spa Thane"
                loading="eager"
                fallbackTitle="Austin Spa Sanctuary"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-3">
            <Shield className="w-5 h-5 text-[#58785D]" aria-hidden="true" />
            <h2 className="font-display text-xl font-semibold text-[#34332F]">Strict Professional Policy</h2>
            <p className="text-sm leading-relaxed text-[#77736D]">
              We provide strictly professional, non-medical massage, skin exfoliation, and hydrotherapy care for men, women, and couples. We do not offer Ayurvedic treatments or any non-legitimate services.
            </p>
          </div>
          <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-3">
            <CheckCircle2 className="w-5 h-5 text-[#58785D]" aria-hidden="true" />
            <h2 className="font-display text-xl font-semibold text-[#34332F]">Verified Business Transparency</h2>
            <p className="text-sm leading-relaxed text-[#77736D]">
              We do not publish fabricated customer reviews, invented therapist degrees, or misleading discount traps. Every treatment detail on this site reflects verified modalities offered at our L.B.S. Marg address.
            </p>
          </div>
          <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-3">
            <MapPin className="w-5 h-5 text-[#58785D]" aria-hidden="true" />
            <h2 className="font-display text-xl font-semibold text-[#34332F]">Accessible Teen Hath Naka Hub</h2>
            <p className="text-sm leading-relaxed text-[#77736D]">
              Our single Thane branch connects effortlessly with Naupada, Thane Railway Station, Wagle Estate, Panch Pakhadi, and Eastern Express Highway commuters.
            </p>
          </div>
        </div>

        <div className="bg-white border border-[#E9E0D6] rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-[#34332F]">
              Explore Our Approved 24-Treatment Catalogue
            </h2>
            <p className="text-sm text-[#77736D]">
              Read detailed step-by-step guides, precautions, and aftercare notes for every treatment before booking on {BUSINESS_INFO.phoneDisplay}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/services/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors"
            >
              Browse All Services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#34332F] bg-[#FFF8F0] border border-[#8DAA91] hover:bg-[#FDF3E7] transition-colors"
            >
              Branch Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
