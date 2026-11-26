import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { ServiceCard } from '../components/services/ServiceCard';
import { SERVICE_CATEGORIES, ServiceCategory, getApprovedServices } from '../data/services';
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from '../lib/seo';

export function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [query, setQuery] = useState('');

  const allServices = getApprovedServices();

  const filteredServices = useMemo(() => {
    return allServices.filter((srv) => {
      const matchesCat = selectedCategory === 'All' || srv.category === selectedCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        srv.searchableTitle.toLowerCase().includes(q) ||
        srv.brandName.toLowerCase().includes(q) ||
        srv.shortSummary.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [allServices, selectedCategory, query]);

  function handleCategorySelect(cat: string) {
    setSelectedCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  }

  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Services' }];

  return (
    <>
      <SeoHead
        title="All 24 Spa & Massage Treatments in Thane West | Austin Spa Thane"
        description="Browse all 24 approved spa and massage treatments at Austin Spa Thane West: Thai, Deep Tissue, Swedish, Balinese, Aromatherapy, Reflexology, Scrubs & Jacuzzi Suites."
        canonicalPath="/services/"
        schemas={[buildBreadcrumbSchema(breadcrumbs), buildLocalBusinessSchema()]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-medium text-[#58785D]">Approved Service Catalogue</p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#34332F]">
              Spa &amp; Massage Treatments in Thane West
            </h1>
            <p className="text-base leading-relaxed text-[#77736D]">
              Explore our curated menu of {allServices.length} approved dry, aromatic oil, four-hand, couples, body scrub, and Jacuzzi rituals. Select any treatment for detailed techniques, precautions, and aftercare guidance.
            </p>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search
                className="w-4 h-4 text-[#77736D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                aria-label="Filter treatments by keyword"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Thai, Deep Tissue, Jacuzzi..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E9E0D6] bg-white text-sm text-[#34332F] focus:border-[#E8795A]"
              />
            </div>
            <p className="text-sm text-[#77736D] tabular-nums">
              Showing {filteredServices.length} of {allServices.length} treatments
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Treatment categories">
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'All'}
              onClick={() => handleCategorySelect('All')}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-[#E8795A] text-white'
                  : 'bg-white text-[#34332F] border border-[#E9E0D6] hover:border-[#8DAA91]'
              }`}
            >
              All Treatments
            </button>
            {SERVICE_CATEGORIES.map((cat: ServiceCategory) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => handleCategorySelect(cat)}
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
        </div>

        {filteredServices.length === 0 ? (
          <div className="bg-white border border-[#E9E0D6] rounded-2xl p-10 text-center space-y-3">
            <p className="font-display text-xl font-semibold text-[#34332F]">
              No matching treatments found
            </p>
            <p className="text-sm text-[#77736D]">
              Try clearing your search filter or browsing all categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                handleCategorySelect('All');
              }}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
