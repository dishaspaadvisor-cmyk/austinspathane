import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SafeImage } from '../components/common/SafeImage';
import { SeoHead } from '../components/seo/SeoHead';
import { JOURNAL_POSTS, JournalPost } from '../data/blogPosts';
import { buildBreadcrumbSchema } from '../lib/seo';

const JOURNAL_CATEGORIES: Array<'All' | JournalPost['category']> = [
  'All',
  'Modality Guides',
  'Comparisons',
  'First Visit & Hygiene',
  'Local Thane Guides',
];

export function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | JournalPost['category']>('All');
  const filtered =
    selectedCategory === 'All'
      ? JOURNAL_POSTS
      : JOURNAL_POSTS.filter((p) => p.category === selectedCategory);

  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Journal' }];

  return (
    <>
      <SeoHead
        title="Wellness Journal – Massage & Spa Guides for Thane | Austin Spa"
        description="Read 17 practical, honest guides comparing Thai, Balinese, Deep Tissue, Swedish, Four-Hand, Aromatherapy, Reflexology, and spa hygiene in Thane West."
        canonicalPath="/journal/"
        schemas={[buildBreadcrumbSchema(breadcrumbs)]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-medium text-[#58785D]">Educational Resources</p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#34332F]">
              Austin Spa Wellness Journal
            </h1>
            <p className="text-base leading-relaxed text-[#77736D]">
              Straightforward, locally grounded guides written to help Thane guests compare massage styles, prepare for a first visit, and make informed choices without hype.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Article categories">
          {JOURNAL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#E8795A] text-white'
                  : 'bg-white text-[#34332F] border border-[#E9E0D6] hover:border-[#8DAA91]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-[#E9E0D6] hover:border-[#8DAA91] rounded-2xl overflow-hidden flex flex-col transition-colors"
            >
              <Link to={`/journal/${post.slug}/`} className="block aspect-[16/10] bg-[#FDF3E7] overflow-hidden">
                <SafeImage
                  src={post.heroImage}
                  alt={post.heroImageAlt}
                  fallbackTitle={post.title}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs text-[#58785D]">
                    {post.category} · {post.readTime} · Updated {post.updatedDate}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-[#34332F] leading-snug">
                    <Link to={`/journal/${post.slug}/`} className="hover:text-[#D05D3D] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-[#77736D] leading-relaxed">{post.introduction}</p>
                </div>
                <Link
                  to={`/journal/${post.slug}/`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D05D3D] hover:text-[#34332F]"
                >
                  Read Full Guide
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
