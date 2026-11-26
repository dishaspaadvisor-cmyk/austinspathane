import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { FAQItem } from '../../data/faqs';

interface AccordionFAQProps {
  items: FAQItem[];
  title?: string;
}

export function AccordionFAQ({ items, title }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {title && (
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#34332F] mb-6">
          {title}
        </h2>
      )}
      <div className="divide-y divide-[#E9E0D6] border-t border-b border-[#E9E0D6]">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.question} className="py-4">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-start justify-between gap-4 text-left py-1 group cursor-pointer"
              >
                <span className="text-base font-medium text-[#34332F] group-hover:text-[#D05D3D] transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[#58785D] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#77736D] max-w-3xl">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
