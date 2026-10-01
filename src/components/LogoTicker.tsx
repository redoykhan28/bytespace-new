export default function LogoTicker() {
  const logos = [
    "/assets/Frame.png",
    "/assets/Frame (1).png",
    "/assets/Frame (2).png",
    "/assets/Frame (3).png",
    "/assets/Frame (4).png"
  ];

  return (
    <section className="w-full py-[80px] bg-[#F5F5F6]">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-10">
        {logos.map((logo, index) => (
          <img 
            key={index}
            src={logo} 
            alt={`Partner Logo ${index + 1}`} 
            className="h-8 md:h-[38px] object-contain"
          />
        ))}
      </div>
    </section>
  );
}
