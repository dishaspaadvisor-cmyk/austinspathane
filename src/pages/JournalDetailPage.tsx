import { Link, useParams } from 'react-router-dom';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SafeImage } from '../components/common/SafeImage';
import { SeoHead } from '../components/seo/SeoHead';
import { ServiceCard } from '../components/services/ServiceCard';
import { getJournalPostBySlug } from '../data/blogPosts';
import { getLocationBySlug } from '../data/locations';
import { getApprovedServices } from '../data/services';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from '../lib/seo';
import { NotFoundPage } from './NotFoundPage';

export function JournalDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const post = getJournalPostBySlug(slug);

  if (!post) {
    return <NotFoundPage />;
  }

  const allServices = getApprovedServices();
  const relatedServices = post.relatedServiceSlugs
    .map((s) => allServices.find((item) => item.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedLocation = getLocationBySlug(post.relatedLocationSlug);

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Journal', to: '/journal/' },
    { label: post.title },
  ];

  return (
    <>
      <SeoHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalPath={`/journal/${post.slug}/`}
        ogType="article"
        schemas={[
          buildBreadcrumbSchema(breadcrumbs),
          buildArticleSchema(post),
          ...(post.faqs.length ? [buildFaqSchema(post.faqs)] : []),
        ]}
      />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <header className="space-y-4">
            <p className="text-xs sm:text-sm font-medium text-[#58785D]">
              {post.category} · {post.readTime} · By {post.author} · Published {post.publishedDate}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#34332F] leading-tight">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#77736D]">
              {post.introduction}
            </p>
          </header>

          <div className="mt-8 aspect-[16/9] rounded-2xl overflow-hidden border border-[#E9E0D6] bg-[#FDF3E7]">
            <SafeImage
              src={post.heroImage}
              alt={post.heroImageAlt}
              loading="eager"
              fallbackTitle={post.title}
            />
          </div>
        </div>

        <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-10 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-[#34332F]">
                {section.heading}
              </h2>
              {section.subheading && (
                <h3 className="font-display text-lg font-medium text-[#58785D]">
                  {section.subheading}
                </h3>
              )}
              {section.paragraphs?.map((p) => (
                <p key={p} className="text-base leading-relaxed text-[#77736D]">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 pt-1 text-base text-[#77736D]">
                  {section.bullets.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {post.faqs.length > 0 && (
          <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8">
            <AccordionFAQ items={post.faqs} title="Questions About This Topic" />
          </section>
        )}

        {/* Internal Links to Location & Booking */}
        <section className="bg-[#FDF3E7] border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h2 className="font-display text-2xl font-semibold text-[#34332F]">
              Ready to Book Your Session in Thane West?
            </h2>
            {relatedLocation && (
              <p className="text-sm text-[#77736D]">
                Visit our Teen Hath Naka branch — view our{' '}
                <Link
                  to={`/locations/${relatedLocation.slug}/`}
                  className="font-medium text-[#58785D] underline underline-offset-4 hover:text-[#D05D3D]"
                >
                  {relatedLocation.title} local guide
                </Link>
                .
              </p>
            )}
          </div>
          <Link
            to="/booking/"
            className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors whitespace-nowrap"
          >
            Book Appointment
          </Link>
        </section>

        {relatedServices.length > 0 && (
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-[#34332F]">
              Related Treatments Mentioned
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((srv) => (
                <ServiceCard key={srv.id} service={srv} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
