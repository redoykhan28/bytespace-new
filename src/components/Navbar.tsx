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
          <img src="/assets/shop.png" alt="Shop" className="w-6 h-6 object-contain" />
        </button>
      </div>
    </nav>
  );
}
