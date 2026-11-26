import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { JOURNAL_POSTS } from '../data/blogPosts';
import { LOCATION_PAGES } from '../data/locations';
import {
  BUSINESS_VERIFICATION_CHECKLIST,
  COMPETITOR_REPORT,
  KEYWORD_MAPPING_MATRIX,
} from '../data/seoResearch';
import { getApprovedServices } from '../data/services';
import { buildBreadcrumbSchema } from '../lib/seo';

export function SeoResearchPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Organic SEO & Research Report' }];
  const approvedCount = getApprovedServices().length;

  return (
    <>
      <SeoHead
        title="Organic SEO Strategy, Competitor Audit & Verification Report | Austin Spa Thane"
        description="Phase 1 competitor analysis, Phase 2 keyword mapping matrix without cannibalization, content completion metrics, and business verification checklist for Austin Spa Thane."
        canonicalPath="/seo-research/"
        schemas={[buildBreadcrumbSchema(breadcrumbs)]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs font-medium text-[#58785D]">Phases 1, 2, 15 &amp; 16 Deliverables</p>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-[#34332F]">
            Austin Spa Thane — Organic SEO, Competitor &amp; Verification Report
          </h1>
          <p className="mt-3 text-base text-[#77736D] max-w-3xl">
            Structured search research grounded in live Thane SERP observations. Unverified keyword volumes and rankings are marked transparently rather than fabricated.
          </p>
        </div>

        {/* Content Completion Summary */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-[#E9E0D6] rounded-xl p-5">
            <p className="text-xs text-[#58785D]">Approved Treatment Pages</p>
            <p className="mt-1 font-display text-3xl font-semibold text-[#34332F] tabular-nums">
              {approvedCount} / 24
            </p>
          </div>
          <div className="bg-white border border-[#E9E0D6] rounded-xl p-5">
            <p className="text-xs text-[#58785D]">Location Intent Pages</p>
            <p className="mt-1 font-display text-3xl font-semibold text-[#34332F] tabular-nums">
              {LOCATION_PAGES.length}
            </p>
          </div>
          <div className="bg-white border border-[#E9E0D6] rounded-xl p-5">
            <p className="text-xs text-[#58785D]">Educational Journal Articles</p>
            <p className="mt-1 font-display text-3xl font-semibold text-[#34332F] tabular-nums">
              {JOURNAL_POSTS.length}
            </p>
          </div>
          <div className="bg-white border border-[#E9E0D6] rounded-xl p-5">
            <p className="text-xs text-[#58785D]">Keyword Clusters Mapped</p>
            <p className="mt-1 font-display text-3xl font-semibold text-[#34332F] tabular-nums">
              {KEYWORD_MAPPING_MATRIX.length}
            </p>
          </div>
        </section>

        {/* Phase 1 Competitor Comparison */}
        <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 space-y-5">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#34332F]">
              Phase 1: Thane Local Competitor Comparison Report
            </h2>
            <p className="mt-1 text-sm text-[#77736D]">
              Based on verified local search results and directory audits across Thane West, Teen Hath Naka, Naupada, and Ghodbunder Road.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E9E0D6] text-xs text-[#58785D]">
                  <th className="py-3 pr-4 font-semibold">Competitor</th>
                  <th className="py-3 pr-4 font-semibold">Area Focus</th>
                  <th className="py-3 pr-4 font-semibold">Observed Strengths</th>
                  <th className="py-3 pr-4 font-semibold">Observed Gaps</th>
                  <th className="py-3 font-semibold">Austin Spa Differentiation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9E0D6]/70">
                {COMPETITOR_REPORT.map((comp) => (
                  <tr key={comp.name} className="align-top">
                    <td className="py-3.5 pr-4 font-semibold text-[#34332F] whitespace-nowrap">{comp.name}</td>
                    <td className="py-3.5 pr-4 text-[#77736D]">{comp.areaFocus}</td>
                    <td className="py-3.5 pr-4 text-[#77736D]">{comp.observedStrengths}</td>
                    <td className="py-3.5 pr-4 text-[#77736D]">{comp.observedGaps}</td>
                    <td className="py-3.5 text-[#34332F]">{comp.austinDifferentiation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Phase 2 Keyword Mapping Matrix */}
        <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 space-y-5">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#34332F]">
              Phase 2: Keyword Mapping &amp; Anti-Cannibalization Architecture
            </h2>
            <p className="mt-1 text-sm text-[#77736D]">
              Every primary keyword cluster maps to a single authoritative URL. Search volumes remain marked unverified until linked to Google Keyword Planner / Search Console data.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E9E0D6] text-xs text-[#58785D]">
                  <th className="py-3 pr-4 font-semibold">Primary Keyword</th>
                  <th className="py-3 pr-4 font-semibold">Cluster</th>
                  <th className="py-3 pr-4 font-semibold">Intent</th>
                  <th className="py-3 pr-4 font-semibold">Primary URL</th>
                  <th className="py-3 pr-4 font-semibold">Priority</th>
                  <th className="py-3 font-semibold">Volume Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9E0D6]/70">
                {KEYWORD_MAPPING_MATRIX.map((row) => (
                  <tr key={row.keyword} className="align-top">
                    <td className="py-3 pr-4 font-medium text-[#34332F]">{row.keyword}</td>
                    <td className="py-3 pr-4 text-[#77736D] whitespace-nowrap">{row.cluster}</td>
                    <td className="py-3 pr-4 text-[#77736D] whitespace-nowrap">{row.intent}</td>
                    <td className="py-3 pr-4 font-mono text-xs text-[#58785D]">{row.primaryUrl}</td>
                    <td className="py-3 pr-4 text-[#34332F] tabular-nums">{row.priority}</td>
                    <td className="py-3 text-[#77736D] text-xs">{row.verifiedSearchVolume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Business Information Requiring Verification */}
        <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 space-y-5">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#34332F]">
              Business Information Verification Checklist
            </h2>
            <p className="mt-1 text-sm text-[#77736D]">
              Summary of publicly verified citations vs operational details requiring owner confirmation before final domain cutover.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E9E0D6] text-xs text-[#58785D]">
                  <th className="py-3 pr-4 font-semibold">Item</th>
                  <th className="py-3 pr-4 font-semibold">Status</th>
                  <th className="py-3 pr-4 font-semibold">Published Detail</th>
                  <th className="py-3 font-semibold">Owner Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9E0D6]/70">
                {BUSINESS_VERIFICATION_CHECKLIST.map((item) => (
                  <tr key={item.field} className="align-top">
                    <td className="py-3.5 pr-4 font-semibold text-[#34332F]">{item.field}</td>
                    <td className="py-3.5 pr-4 whitespace-nowrap text-xs font-medium text-[#58785D]">
                      {item.status}
                    </td>
                    <td className="py-3.5 pr-4 text-[#34332F]">{item.currentValue}</td>
                    <td className="py-3.5 text-[#77736D]">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
