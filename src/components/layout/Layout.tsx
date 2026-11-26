import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FloatingActions } from '../booking/FloatingActions';
import { FirstVisitOfferPopup } from '../offers/FirstVisitOfferPopup';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0] text-[#34332F]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E8795A] focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingActions />
      <FirstVisitOfferPopup />
    </div>
  );
}
