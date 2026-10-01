import AnimatedImage from "@/components/AnimatedImage";

export default function Features() {
  return (
    <section className="w-full relative overflow-hidden bg-[#FAFBFF] py-20">
      {/* Background Glow 1 - Top Left Yellow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4FB20]/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      {/* Background Glow 2 - Middle Left Blue */}
      <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-[#1A32F5]/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>

      {/* Background Glow 3 - Bottom Right Blue */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#1A32F5]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-[70px] relative z-10">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="font-poppins font-bold text-[42px] leading-[1.2] text-text-dark">
              Your Path to Professional<br className="hidden lg:block" />
              Growth Starts Here!
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#82868E] font-satoshi font-light leading-relaxed max-w-[500px]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-12 mt-4">
              <div className="flex flex-col gap-1">
                <span className="font-poppins font-bold text-[32px] text-[#1A32F5]">12K</span>
                <span className="font-satoshi text-[16px] text-[#82868E]">Students</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-poppins font-bold text-[32px] text-[#1A32F5]">70+</span>
                <span className="font-satoshi text-[16px] text-[#82868E]">Courses</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-poppins font-bold text-[32px] text-[#1A32F5]">16</span>
                <span className="font-satoshi text-[16px] text-[#82868E]">Creators</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="relative w-full lg:max-w-[650px] lg:-mr-10">
              <AnimatedImage
                useNextImage={true}
                src="/assets/sideframe1.png"
                alt="Professional Growth"
                width={650}
                height={650}
                className="w-full h-auto object-contain relative z-10"
                priority
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-start">
            <div className="relative w-full lg:max-w-[650px] lg:-ml-6">
              {/* Background Glow 4 - Bottom Left Yellow near image */}
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4FB20]/40 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none -z-10"></div>
              
              <AnimatedImage
                useNextImage={true}
                src="/assets/sideframe2.png"
                alt="Create Courses"
                width={650}
                height={650}
                className="w-full h-auto object-contain relative z-10"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:pl-10">
            <h2 className="font-poppins font-bold text-[42px] leading-[1.2] text-text-dark max-w-[400px]">
              Create & Manage Courses Easily.
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#82868E] font-satoshi font-light leading-relaxed max-w-[500px]">
              <span className="font-bold text-text-dark">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* List */}
            <div className="flex flex-col gap-4 mt-2">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#1A32F5"/>
                    <path d="M7.5 12L10.5 15L16.5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-satoshi text-[16px] text-text-dark font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
