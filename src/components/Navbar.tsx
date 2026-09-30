import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 py-6 max-w-7xl mx-auto w-full text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/assets/Header_Logo.png" alt="ByteSpace" className="h-8 object-contain" />
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-10 text-[16px] font-satoshi">
        <Link href="/" className="hover:text-primary transition-colors font-medium">Home</Link>
        <Link href="/courses" className="hover:text-primary transition-colors text-white/80">Courses</Link>
        <Link href="/creators" className="hover:text-primary transition-colors text-white/80">Creators</Link>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-8 text-[16px] font-satoshi">
        <Link href="/signin" className="hover:text-primary transition-colors text-white/80">Sign In</Link>
        <Link href="/join" className="hover:text-primary transition-colors font-medium">Join Us</Link>
        <button className="relative hover:text-primary transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
