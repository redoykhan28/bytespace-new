export default function CTA() {
  return (
    <section className="w-full">
      <div
        className="relative w-full flex flex-col items-center justify-center text-center px-8 py-20"
        style={{
          backgroundImage: "url('/assets/ctaimg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1A32F5',
        }}
      >
        {/* Heading */}
        <h2 className="font-poppins font-semibold text-[42px] leading-[1.25] text-white max-w-2xl">
          Unlock Your Potential as a<br />Creator with ByteSpace
        </h2>

        {/* Description */}
        <p className="mt-6 text-[16px] md:text-[18px] text-white/80 font-satoshi font-light leading-relaxed max-w-2xl">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* CTA Button */}
        <button className="mt-10 bg-primary text-text-dark font-satoshi font-semibold text-[16px] px-10 py-4 rounded-full hover:bg-[#c3e817] hover:scale-105 transition-all duration-300 shadow-lg">
          Join as Creator
        </button>
      </div>
    </section>
  );
}
