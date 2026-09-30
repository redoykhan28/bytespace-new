const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    photo: "/assets/Ellipse.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    photo: "/assets/Ellipse (1).png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    photo: "/assets/Ellipse (2).png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function Testimonials() {
  return (
    <section
      className="w-full py-[80px]"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `
          radial-gradient(circle at 75% 15%, rgba(212, 251, 32, 0.45) 0%, rgba(255, 255, 255, 0) 50%),
          radial-gradient(circle at 5% 95%, rgba(210, 228, 255, 0.7) 0%, rgba(255, 255, 255, 0) 45%)
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Two-column header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          <h2 className="font-poppins font-semibold text-[42px] leading-[1.2] text-text-dark">
            Discover What Our<br />Community Is Saying
          </h2>
          <p className="text-[16px] md:text-[18px] font-satoshi font-light leading-relaxed mt-2" style={{ color: "#82868E" }}>
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-[24px] p-8 shadow-sm flex flex-col gap-5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              {/* Avatar */}
              <img
                src={t.photo}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              {/* Name & Role */}
              <div>
                <p className="font-poppins font-semibold text-[18px] text-text-dark">{t.name}</p>
                <p className="font-satoshi text-[14px] text-blue-600 mt-0.5">{t.role}</p>
              </div>

              {/* Quote */}
              <p className="font-satoshi text-[15px] leading-relaxed text-gray-500 italic">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
