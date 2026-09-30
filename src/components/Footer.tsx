import Link from "next/link";

const footerLinks = [
  {
    items: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    items: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    items: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-6 flex flex-col pr-4 lg:pr-20">
            <img src="/assets/black-logo.png" alt="ByteSpace" className="h-9 w-auto object-contain object-left mb-6" />
            <p className="text-[14.5px] font-satoshi text-gray-600 leading-relaxed mb-10">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-200 rounded-full px-6 py-3.5 text-[15px] font-satoshi outline-none focus:border-primary transition-colors text-text-dark placeholder:text-gray-400"
              />
              <button className="bg-primary text-text-dark font-satoshi font-semibold text-[15px] px-9 py-3.5 rounded-full hover:bg-[#c3e817] transition-all whitespace-nowrap">
                Search
              </button>
            </div>

            <p className="text-[12.5px] font-satoshi text-gray-500 leading-relaxed pr-8">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col, colIdx) => (
            <div key={colIdx} className="lg:col-span-2 flex flex-col gap-6 pt-1">
              {col.items.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[14.5px] font-satoshi text-gray-600 hover:text-text-dark transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-28 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13.5px] font-satoshi text-gray-500">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-10">
            <Link href="#" className="text-[13.5px] font-satoshi text-gray-500 hover:text-text-dark transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[13.5px] font-satoshi text-gray-500 hover:text-text-dark transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[13.5px] font-satoshi text-gray-500 hover:text-text-dark transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
