import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HEADER_NAV_ITEMS } from '../../data/navigation';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#E9E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="font-display text-2xl font-semibold tracking-tight text-[#34332F] whitespace-nowrap shrink-0"
        >
          Austin Spa
        </Link>

        {/* Zone 2: 5 concise single-line text links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {HEADER_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium whitespace-nowrap shrink-0 transition-colors underline-offset-4 hover:underline ${
                  isActive ? 'text-[#D05D3D] underline' : 'text-[#34332F] hover:text-[#D05D3D]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/booking/"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Book Session
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E9E0D6] text-[#34332F] hover:bg-[#FDF3E7] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E9E0D6] bg-[#FFF8F0] px-4 py-4 space-y-1">
          {HEADER_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive ? 'bg-[#FDF3E7] text-[#D05D3D]' : 'text-[#34332F] hover:bg-[#FDF3E7]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact/"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-3 rounded-lg text-base font-medium text-[#34332F] hover:bg-[#FDF3E7]"
          >
            Contact
          </Link>
          <div className="pt-2">
            <Link
              to="/booking/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full py-3 px-5 rounded-lg text-base font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors"
            >
              Book Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
