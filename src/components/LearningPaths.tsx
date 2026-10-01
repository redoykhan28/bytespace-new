const categories = [
  { id: 1, name: "Design",        icon: "/assets/sec-icons (1).png" },
  { id: 2, name: "Development",   icon: "/assets/sec-icons (2).png" },
  { id: 3, name: "IT & Software", icon: "/assets/sec-icons (3).png" },
  { id: 4, name: "Business",      icon: "/assets/sec-icons (4).png" },
  { id: 5, name: "Marketing",     icon: "/assets/sec-icons (5).png" },
  { id: 6, name: "Photography",   icon: "/assets/sec-icons (6).png" },
];

export default function LearningPaths() {
  return (
    <section className="w-full py-[80px] bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* Header */}
        <h2 className="font-poppins font-semibold text-[42px] leading-[1.3] text-center text-text-dark">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-4 text-[16px] md:text-[18px] text-center max-w-5xl font-satoshi font-light leading-relaxed" style={{ color: '#82868E' }}>
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        {/* Category Cards */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 w-full">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group flex flex-col items-center gap-4 p-6 rounded-[20px] border border-gray-200 hover:border-primary hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
            >
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-14 h-14 object-contain"
              />
              <p className="font-satoshi font-semibold text-[16px] text-text-dark text-center group-hover:text-[#1A32F5] transition-colors">
                {cat.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
