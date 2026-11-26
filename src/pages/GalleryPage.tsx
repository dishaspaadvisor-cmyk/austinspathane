import { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SafeImage } from '../components/common/SafeImage';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';
import { SeoHead } from '../components/seo/SeoHead';
import { GALLERY_CATEGORIES, GALLERY_ITEMS, GalleryCategory } from '../data/gallery';
import { buildBreadcrumbSchema } from '../lib/seo';

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Gallery' }];

  return (
    <>
      <SeoHead
        title="Sanctuary Gallery – Spa Interiors & Suites | Austin Spa Thane"
        description="Preview the botanical spa reception, massage suites, Thai floor-mat room, foot reflexology corner, and Jacuzzi aesthetic envisioned for Austin Spa Thane."
        canonicalPath="/gallery/"
        schemas={[buildBreadcrumbSchema(breadcrumbs)]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-medium text-[#58785D]">Atmosphere &amp; Sanctuary Design</p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#34332F]">
              Austin Spa Sanctuary Gallery
            </h1>
            <p className="text-base leading-relaxed text-[#77736D]">
              Explore our sunlit botanical design aesthetic across reception, private massage suites, Thai stretching mats, reflexology seating, and Jacuzzi areas.
            </p>
            <p className="text-xs text-[#77736D] bg-white border border-[#E9E0D6] rounded-xl px-4 py-3">
              Transparency Notice: The visuals displayed below are illustrative botanical sanctuary previews created to represent Austin Spa Thane’s warm cream and sage design direction. Authentic branch photography from Dev Milan CHS Ltd. will replace illustrative previews once supplied and verified by branch management.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveIndex(null);
              }}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="group text-left bg-white border border-[#E9E0D6] hover:border-[#8DAA91] rounded-2xl overflow-hidden transition-colors cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#FDF3E7]">
                <SafeImage
                  src={item.image}
                  alt={item.alt}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 space-y-1.5">
                <p className="text-xs text-[#58785D]">
                  {item.category} · {item.sourceDisclosure}
                </p>
                <h2 className="font-display text-lg font-semibold text-[#34332F] group-hover:text-[#D05D3D] transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-[#77736D] leading-relaxed">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <GalleryLightbox
        items={visibleItems}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onSelect={(idx) => setActiveIndex(idx)}
      />
    </>
  );
}
