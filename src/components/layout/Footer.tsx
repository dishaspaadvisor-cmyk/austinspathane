import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { FOOTER_COLUMNS } from '../../data/navigation';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E9E0D6] text-[#34332F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Verified Branch Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="font-display text-2xl font-semibold text-[#34332F] inline-block">
              Austin Spa Thane
            </Link>
            <p className="text-sm leading-relaxed text-[#77736D] max-w-md">
              {BUSINESS_INFO.serviceAudience} {BUSINESS_INFO.policiesNote}
            </p>
            <div className="space-y-2.5 text-sm text-[#34332F]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BUSINESS_INFO.address.fullFormatted}</span>
              </p>
              <p className="flex items-center gap-2.5 tabular-nums">
                <Phone className="w-4 h-4 text-[#58785D] shrink-0" aria-hidden="true" />
                <a href={BUSINESS_INFO.phoneHref} className="hover:text-[#D05D3D] transition-colors font-medium">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#58785D] shrink-0" aria-hidden="true" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#D05D3D] transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </p>
              <p className="text-xs text-[#77736D] pt-1">{BUSINESS_INFO.openingHours.summary}</p>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h2 className="font-display text-base font-semibold text-[#34332F] mb-4">Popular Treatments</h2>
            <ul className="space-y-2.5 text-sm text-[#77736D]">
              {FOOTER_COLUMNS.treatments.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-[#D05D3D] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Thane Locations */}
          <div>
            <h2 className="font-display text-base font-semibold text-[#34332F] mb-4">Thane Areas</h2>
            <ul className="space-y-2.5 text-sm text-[#77736D]">
              {FOOTER_COLUMNS.locations.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-[#D05D3D] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore & Legal */}
          <div>
            <h2 className="font-display text-base font-semibold text-[#34332F] mb-4">Explore</h2>
            <ul className="space-y-2.5 text-sm text-[#77736D]">
              {FOOTER_COLUMNS.explore.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-[#D05D3D] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E9E0D6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#77736D]">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.legalBrandLabel}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            {FOOTER_COLUMNS.legal.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-[#D05D3D] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
