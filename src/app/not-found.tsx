import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Custom 404 page — served automatically by Next.js when a route is not found.
// Uses the shared Navbar and Footer just like the main landing page.
export default function NotFound() {
  return (
    <>
      {/* 404 Hero Section — wraps the Navbar so it sits on top of the blue bg */}
      <div
        className="relative w-full flex flex-col items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('/assets/Register.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          paddingTop: '120px',
          paddingBottom: '80px',
        }}
      >
        {/* Shared site Navbar — floats on top of the blue background */}
        <Navbar />

        {/* Large 404 graphic */}
        <div className="w-full max-w-[680px] mx-auto">
          <img
            src="/assets/404.png"
            alt="404 - Page not found"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Error heading */}
        <h1 className="font-poppins font-bold text-white text-[32px] md:text-[42px] leading-tight max-w-2xl -mt-10">
          The page you are looking<br />for doesn&apos;t exist
        </h1>

        {/* Sub-text */}
        <p className="font-satoshi font-light text-white/80 text-[16px] md:text-[18px] mt-5 max-w-md leading-relaxed">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Back to Home CTA button */}
        <Link
          href="/"
          className="mt-10 inline-block bg-primary text-text-dark font-satoshi font-semibold text-[16px] px-10 py-4 rounded-full hover:bg-[#c3e817] hover:scale-105 transition-all duration-300 shadow-md"
        >
          Back to Home
        </Link>
      </div>

      {/* Shared site Footer — same as home page */}
      <Footer />
    </>
  );
}
