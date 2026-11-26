import { ArrowRight, Check, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { SafeImage } from '../components/common/SafeImage';
import { SeoHead } from '../components/seo/SeoHead';
import { ServiceCard } from '../components/services/ServiceCard';
import { JOURNAL_POSTS } from '../data/blogPosts';
import { BUSINESS_INFO, SPA_IMAGES, buildWhatsAppUrl } from '../data/businessInfo';
import { HOME_FAQS } from '../data/faqs';
import { GALLERY_ITEMS } from '../data/gallery';
import { LOCATION_PAGES } from '../data/locations';
import { SERVICE_CATEGORIES, getApprovedServices, getPopularServices } from '../data/services';
import { buildFaqSchema, buildLocalBusinessSchema, buildOrganizationSchema } from '../lib/seo';

export function HomePage() {
  const popularServices = getPopularServices().slice(0, 6);
  const allApproved = getApprovedServices();
  const featuredGuides = JOURNAL_POSTS.slice(0, 3);
  const galleryPreview = GALLERY_ITEMS.slice(0, 4);

  return (
    <>
      <SeoHead
        title="Austin Spa Thane – Best Spa & Massage Centre in Thane West"
        description="Professional spa and therapeutic massage centre near Teen Hath Naka & Tip Top Plaza, LBS Marg, Thane West. Thai, Deep Tissue, Swedish, Balinese, Aromatherapy & Couples Suites."
        canonicalPath="/"
        schemas={[
          buildLocalBusinessSchema(),
          buildOrganizationSchema(),
          buildFaqSchema(HOME_FAQS),
        ]}
      />

      {/* Hero Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center py-2">
            <p className="text-xs sm:text-sm font-medium text-[#58785D] tracking-wide">
              Teen Hath Naka · Tip Top Plaza · L.B.S. Marg, Thane West
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-[#34332F]">
              Restorative Spa &amp; Massage Care in Thane West
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#77736D] max-w-xl">
              Step into a bright botanical wellness sanctuary offering Traditional Thai, Deep Tissue, Swedish, Balinese, Aromatherapy, and private Couples &amp; Jacuzzi rituals—strictly professional care for men, women, and couples.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/booking/"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors whitespace-nowrap"
              >
                Book Appointment
              </Link>
              <Link
                to="/services/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-[#34332F] bg-white border border-[#8DAA91] hover:bg-[#FDF3E7] transition-colors whitespace-nowrap"
              >
                Explore 24 Treatments
                <ArrowRight className="w-4 h-4 text-[#58785D]" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-7 pt-6 border-t border-[#E9E0D6] flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#77736D]">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="font-medium text-[#34332F] hover:text-[#D05D3D] tabular-nums transition-colors"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
              <span aria-hidden="true">·</span>
              <span>{BUSINESS_INFO.openingHours.summary}</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-full min-h-[280px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-[#E9E0D6] bg-[#FDF3E7]">
              <SafeImage
                src={SPA_IMAGES.heroReception}
                alt="Sunlit botanical reception and guest lounge at Austin Spa Thane West"
                loading="eager"
                fetchPriority="high"
                fallbackTitle="Austin Spa Thane Reception"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4-column Key Branch Highlights below hero split */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-[#E9E0D6] rounded-xl p-5">
            <p className="text-xs font-medium text-[#58785D]">01. Verified Branch</p>
            <p className="mt-1.5 font-display text-lg font-semibold text-[#34332F]">Near Tip Top Plaza</p>
            <p className="mt-1 text-sm text-[#77736D]">1st Floor, Dev Milan CHS Ltd., L.B.S. Marg, Teen Hath Naka</p>
          </div>
          <div className="bg-white border border-[#E9E0D6] rounded-xl p-5">
            <p className="text-xs font-medium text-[#58785D]">02. Inclusive Care</p>
            <p className="mt-1.5 font-display text-lg font-semibold text-[#34332F]">Men, Women &amp; Couples</p>
            <p className="mt-1 text-sm text-[#77736D]">Private solo rooms, couple sanctuary, and Jacuzzi suites</p>
          </div>
          <div className="bg-white border border-[#E9E0D6] rounded-xl p-5">
            <p className="text-xs font-medium text-[#58785D]">03. Verified Menu</p>
            <p className="mt-1.5 font-display text-lg font-semibold text-[#34332F] tabular-nums">
              {allApproved.length} Approved Rituals
            </p>
            <p className="mt-1 text-sm text-[#77736D]">International dry, oil, scrub &amp; hydrotherapy options</p>
          </div>
          <div className="bg-white border border-[#E9E0D6] rounded-xl p-5">
            <p className="text-xs font-medium text-[#58785D]">04. Daily Timings</p>
            <p className="mt-1.5 font-display text-lg font-semibold text-[#34332F] tabular-nums">10:00 AM – 11:00 PM</p>
            <p className="mt-1 text-sm text-[#77736D]">Open Monday to Sunday · Call to confirm evening slots</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white border-y border-[#E9E0D6] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-[#E9E0D6] bg-[#FDF3E7]">
            <SafeImage
              src={SPA_IMAGES.oilRitual}
              alt="Botanical essential oils and organic cotton linens prepared in a private suite"
              fallbackTitle="Botanical Sanctuary Suite"
            />
          </div>
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-medium text-[#58785D] tracking-wide">
              A Calm Retreat Beside Thane’s Busy Junction
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#34332F]">
              Designed for Unhurried Recovery—Not Rushed Parlour Schedules
            </h2>
            <p className="text-base leading-relaxed text-[#77736D]">
              Whether you commute across the Eastern Express Highway, work long hours in Wagle Estate, or reside nearby in Naupada, Panch Pakhadi, or Thane West, stepping into Austin Spa feels immediately quieter. Soft warm lighting, fresh laundered cottons, and unhurried check-in let your shoulders drop before your session even starts.
            </p>
            <p className="text-base leading-relaxed text-[#77736D]">
              Every treatment at our L.B.S. Marg centre follows clear professional boundaries: authentic relaxation and muscular recovery modalities (never Ayurvedic treatments or ambiguous services), respectful draping, and transparent communication about what suits your comfort best.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/about/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D05D3D] hover:text-[#34332F] transition-colors"
              >
                Read Our Standards &amp; Story
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium text-[#58785D]">Most Requested in Thane West</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#34332F]">
              Popular Spa &amp; Massage Treatments
            </h2>
          </div>
          <Link
            to="/services/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D05D3D] hover:text-[#34332F] whitespace-nowrap"
          >
            View All {allApproved.length} Treatments
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* All Service Categories */}
      <section className="bg-white border-y border-[#E9E0D6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-[#58785D]">Complete Treatment Directory</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#34332F]">
              Browse by Therapy Style &amp; Format
            </h2>
            <p className="mt-3 text-base text-[#77736D]">
              From 30-minute express back or foot relief to multi-stage Four-Hand, Scrub, and private Jacuzzi suites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_CATEGORIES.map((category, idx) => {
              const items = allApproved.filter((s) => s.category === category);
              return (
                <Link
                  key={category}
                  to={`/services/?category=${encodeURIComponent(category)}`}
                  className="group bg-[#FFF8F0] border border-[#E9E0D6] hover:border-[#8DAA91] rounded-2xl p-6 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs font-medium text-[#58785D] tabular-nums">
                      0{idx + 1}. {items.length} Treatments
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-[#34332F] group-hover:text-[#D05D3D] transition-colors">
                      {category}
                    </h3>
                    <p className="mt-2 text-sm text-[#77736D]">
                      {items
                        .slice(0, 3)
                        .map((i) => i.brandName)
                        .join(' · ')}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D05D3D]">
                    Explore Category
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us, Hygiene & Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-medium text-[#58785D]">Professional Standards &amp; Hygiene</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#34332F]">
              Why Guests Across Thane Trust Austin Spa
            </h2>
            <p className="text-base leading-relaxed text-[#77736D]">
              We prioritize clean air, spotless bedding, unhurried room turnaround, and transparent communication—so every solo guest or couple feels respected from arrival to check-out.
            </p>
            <div className="pt-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#E9E0D6] bg-[#FDF3E7]">
                <SafeImage
                  src={SPA_IMAGES.hydroJacuzzi}
                  alt="Sanitized travertine spa Jacuzzi suite with freshly folded sage cotton towels"
                  fallbackTitle="Hygiene & Jacuzzi Facilities"
                />
              </div>
              <p className="mt-2 text-xs text-[#77736D]">
                Illustrative suite concept representing our hygiene and botanical finish standards.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 content-start">
            <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-2.5">
              <ShieldCheck className="w-5 h-5 text-[#58785D]" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-[#34332F]">Fresh Linens Every Session</h3>
              <p className="text-sm leading-relaxed text-[#77736D]">
                Table sheets, face cradles, cotton towels, and Thai attire are changed fresh between every booking, with rooms sanitized before your arrival.
              </p>
            </div>

            <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-2.5">
              <Sparkles className="w-5 h-5 text-[#58785D]" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-[#34332F]">Private Single &amp; Couple Suites</h3>
              <p className="text-sm leading-relaxed text-[#77736D]">
                Enclosed therapy suites with respectful sheet draping throughout, plus dedicated dual-table rooms and Jacuzzi access by advance reservation.
              </p>
            </div>

            <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-2.5">
              <Check className="w-5 h-5 text-[#58785D]" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-[#34332F]">Tailored Pressure Consultation</h3>
              <p className="text-sm leading-relaxed text-[#77736D]">
                Before each treatment, we confirm oil vs dry preference, delicate zones, and pressure level—no forced scripts or one-size pressure.
              </p>
            </div>

            <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-2.5">
              <MapPin className="w-5 h-5 text-[#58785D]" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-[#34332F]">Honest Non-Medical Boundaries</h3>
              <p className="text-sm leading-relaxed text-[#77736D]">
                Strictly legitimate relaxation and therapeutic bodywork. We do not publish fake claims, fabricated reviews, or unverified medical cures.
              </p>
            </div>

            <div className="sm:col-span-2 bg-[#FDF3E7] border border-[#E9E0D6] rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-[#34332F]">Available Branch Facilities</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#34332F]">
                <li>· Climate-controlled private massage rooms</li>
                <li>· Cushioned floor-mat Traditional Thai suites</li>
                <li>· Private Couple &amp; Four-Hand sanctuaries</li>
                <li>· Sanitized private Jacuzzi suite (by booking)</li>
                <li>· En-suite showers &amp; fresh bath towels</li>
                <li>· Dedicated foot reflexology lounge seating</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-white border-y border-[#E9E0D6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium text-[#58785D]">Atmosphere &amp; Spaces</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#34332F]">
                Inside the Sanctuary
              </h2>
              <p className="mt-2 text-sm text-[#77736D]">
                Illustrative botanical suite previews reflecting our serene interior direction; verified branch photography is labelled transparently in our gallery.
              </p>
            </div>
            <Link
              to="/gallery/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D05D3D] hover:text-[#34332F] whitespace-nowrap"
            >
              Open Full Gallery
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryPreview.map((item) => (
              <Link
                key={item.id}
                to="/gallery/"
                className="group block rounded-2xl overflow-hidden border border-[#E9E0D6] bg-[#FFF8F0]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <SafeImage
                    src={item.image}
                    alt={item.alt}
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#58785D]">{item.category}</p>
                  <p className="mt-1 font-display text-base font-semibold text-[#34332F]">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Nearby Areas Served */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-medium text-[#58785D]">Single Verified Thane Branch</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#34332F]">
              Visit Us Near Tip Top Plaza &amp; Teen Hath Naka
            </h2>
            <p className="text-base leading-relaxed text-[#77736D]">
              {BUSINESS_INFO.address.fullFormatted}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BUSINESS_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors"
              >
                Open Google Maps Directions
              </a>
              <Link
                to="/contact/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#34332F] bg-white border border-[#8DAA91] hover:bg-[#FDF3E7] transition-colors"
              >
                Branch Details &amp; Contact
              </Link>
            </div>

            <div className="pt-4">
              <h3 className="font-display text-lg font-semibold text-[#34332F] mb-3">
                Thane Local Area Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LOCATION_PAGES.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/locations/${loc.slug}/`}
                    className="p-4 rounded-xl bg-white border border-[#E9E0D6] hover:border-[#8DAA91] transition-colors"
                  >
                    <p className="text-xs text-[#58785D]">{loc.areaLabel}</p>
                    <p className="mt-1 font-medium text-sm text-[#34332F]">{loc.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#E9E0D6] rounded-2xl overflow-hidden">
            <iframe
              title="Austin Spa Thane Location Map"
              src={BUSINESS_INFO.maps.embedQueryUrl}
              loading="lazy"
              className="w-full h-72 sm:h-80 border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-6 border-t border-[#E9E0D6]">
              <h3 className="font-display text-lg font-semibold text-[#34332F]">
                Convenient Access Across Central &amp; West Thane
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#77736D]">
                Regularly visited by guests arriving from Teen Hath Naka, Naupada, Thane Railway Station, Panch Pakhadi, Charai, Kopri, Tembhi Naka, Wagle Estate, Vartak Nagar, Majiwada, Kapurbawdi, and Manpada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Guides + FAQs */}
      <section className="bg-white border-t border-[#E9E0D6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-medium text-[#58785D]">Educational Wellness Journal</p>
                <h2 className="mt-2 font-display text-3xl font-semibold text-[#34332F]">
                  Honest Guides Before You Book
                </h2>
              </div>
              <Link
                to="/journal/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D05D3D] hover:text-[#34332F] whitespace-nowrap"
              >
                Read All {JOURNAL_POSTS.length} Articles
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredGuides.map((post) => (
                <article
                  key={post.slug}
                  className="bg-[#FFF8F0] border border-[#E9E0D6] rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs text-[#58785D]">
                      {post.category} · {post.readTime}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-[#34332F] leading-snug">
                      <Link to={`/journal/${post.slug}/`} className="hover:text-[#D05D3D] transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2.5 text-sm text-[#77736D] leading-relaxed">{post.introduction}</p>
                  </div>
                  <Link
                    to={`/journal/${post.slug}/`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D05D3D] hover:text-[#34332F]"
                  >
                    Read Guide
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <AccordionFAQ items={HOME_FAQS} title="Frequently Asked Questions" />
            </div>

            <div className="lg:col-span-5 bg-[#FDF3E7] border border-[#E9E0D6] rounded-2xl p-7 space-y-5">
              <p className="text-xs font-medium text-[#58785D]">Ready to Unwind?</p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#34332F]">
                Reserve Your Quiet Slot in Thane West
              </h2>
              <p className="text-sm leading-relaxed text-[#77736D]">
                Call our reception directly, message on WhatsApp, or send a booking enquiry to confirm room availability, session duration, and therapist preferences.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-1">
                <Link
                  to="/booking/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors"
                >
                  Book Appointment Online
                </Link>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-[#34332F] bg-white border border-[#8DAA91] hover:bg-[#FFF8F0] transition-colors"
                >
                  WhatsApp Reception
                </a>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#34332F] hover:text-[#D05D3D] py-2 tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#58785D]" aria-hidden="true" />
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
