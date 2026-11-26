import { Link } from 'react-router-dom';
import { SeoHead } from '../components/seo/SeoHead';

export function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found | Austin Spa Thane"
        description="The page you are looking for could not be found on Austin Spa Thane."
        canonicalPath="/404/"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <p className="text-xs font-medium text-[#58785D]">404 · Page Not Found</p>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#34332F]">
          We Couldn’t Find That Page
        </h1>
        <p className="text-base text-[#77736D]">
          Explore our approved massage treatments, Thane West location guides, or book an appointment directly.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors"
          >
            Return Home
          </Link>
          <Link
            to="/services/"
            className="px-6 py-3 rounded-lg text-sm font-semibold text-[#34332F] bg-white border border-[#8DAA91] hover:bg-[#FDF3E7] transition-colors"
          >
            Browse All Services
          </Link>
        </div>
      </div>
    </>
  );
}
