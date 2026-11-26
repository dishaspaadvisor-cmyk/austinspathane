import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SpaService } from '../../data/serviceTypes';
import { SafeImage } from '../common/SafeImage';

interface ServiceCardProps {
  service: SpaService;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <article
      className={`group bg-white border border-[#E9E0D6] hover:border-[#8DAA91] rounded-2xl overflow-hidden flex flex-col transition-colors ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      <Link to={`/services/${service.slug}/`} className="block aspect-[4/3] overflow-hidden bg-[#FDF3E7]">
        <SafeImage
          src={service.heroImage}
          alt={service.heroImageAlt}
          fallbackTitle={service.brandName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </Link>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-xs text-[#58785D] font-medium tracking-wide">
          {service.category}
          <span aria-hidden="true" className="mx-1.5 text-[#77736D]">
            ·
          </span>
          <span className="text-[#77736D]">{service.brandName}</span>
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-[#34332F] leading-snug">
          <Link to={`/services/${service.slug}/`} className="hover:text-[#D05D3D] transition-colors">
            {service.searchableTitle}
          </Link>
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-[#77736D] flex-1">{service.shortSummary}</p>
        <div className="mt-5 pt-4 border-t border-[#E9E0D6]/70 flex items-center justify-between gap-4">
          <Link
            to={`/services/${service.slug}/`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D05D3D] hover:text-[#34332F] transition-colors whitespace-nowrap"
          >
            View Treatment Details
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            to={`/booking/?service=${service.slug}`}
            className="text-xs font-medium text-[#58785D] hover:text-[#34332F] underline-offset-4 hover:underline whitespace-nowrap"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
