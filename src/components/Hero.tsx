"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  // When user hits Search, redirect to courses archive with the query pre-filled
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push('/courses?q=' + encodeURIComponent(trimmed));
    } else {
      router.push('/courses');
    }
  };

  return (
    <section
      className="relative w-full flex flex-col items-center overflow-hidden pt-[150px] pb-0"
      style={{
        backgroundImage: "url('/assets/heroimg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0537F5'
      }}
    >
      {/* Top Text and Search */}
      <div className="relative z-20 text-center w-full max-w-4xl px-4 flex flex-col items-center">
        <h1 className="font-poppins font-semibold text-[56px] md:text-[72px] leading-[1.15] text-white tracking-tight">
          Get Access to Hundreds<br />Courses Available
        </h1>
        <p className="mt-6 text-[16px] md:text-[18px] text-white max-w-[700px] font-satoshi font-light">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar — submits and redirects to /courses?q=... */}
        <form
          onSubmit={handleSearch}
          className="mt-10 w-full max-w-2xl bg-white rounded-full p-2 flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
        >
          <div className="pl-5 pr-3 text-gray-500">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Course, topic, creator"
            className="flex-1 bg-transparent outline-none text-text-dark text-[16px] font-satoshi px-2 placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="bg-primary text-text-dark font-medium px-8 md:px-10 py-3 rounded-full hover:bg-[#c3e817] transition-all text-[16px] shadow-sm"
          >
            Search
          </button>
        </form>
      </div>

      {/* Graphics Area (Person + Cards) */}
      <div className="relative mt-16 lg:mt-20 w-full max-w-[950px] flex justify-center items-end pointer-events-none z-10">
        {/* Center Person image - Sets the height of the container */}
        <img
          src="/assets/heroperson.webp"
          alt="Student"
          className="max-h-[550px] w-auto object-contain object-bottom pointer-events-auto relative z-10 translate-x-4 lg:translate-x-6"
        />

        {/* Top Left Card */}
        <div className="absolute top-[32%] left-[8%] lg:left-[10%] bg-white rounded-[20px] p-4 pr-8 shadow-[0_20px_40px_rgba(0,0,0,0.12)] pointer-events-auto flex items-center gap-4 hover:-translate-y-1 transition-transform z-20 scale-90 md:scale-100 origin-top-left">
          <div>
            <p className="font-semibold text-[15px] text-text-dark font-satoshi">UI/UX Design</p>
            <p className="text-[12px] text-gray-500 mt-0.5 font-satoshi">200 Courses &bull; 1000+ Students</p>
          </div>
        </div>

        {/* Top Right Card */}
        <div className="absolute top-[28%] right-[2%] lg:right-[16%] bg-white rounded-[20px] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)] pointer-events-auto w-52 hover:-translate-y-1 transition-transform z-20 scale-90 md:scale-100 origin-top-right">
          <p className="text-[12px] font-medium text-gray-500 mb-2 font-satoshi">Learning Progress</p>
          <p className="text-3xl font-bold text-text-dark font-poppins">55%</p>
          <div className="w-full bg-gray-100 h-2.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-primary h-full rounded-full w-[55%]"></div>
          </div>
        </div>

        {/* Bottom Left Card */}
        <div className="absolute bottom-[8%] left-[0%] lg:left-[6%] bg-white rounded-[20px] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.12)] pointer-events-auto flex flex-col min-w-[220px] hover:-translate-y-1 transition-transform z-20 scale-90 md:scale-100 origin-bottom-left">
          <p className="text-[14px] font-semibold text-text-dark font-satoshi">Happy Students</p>
          <div className="flex items-center gap-1 mt-1.5 mb-4">
            <p className="text-[13px] font-bold text-text-dark font-satoshi">4.5</p>
            <p className="text-[12px] text-gray-500 ml-1 font-satoshi">(240)</p>
            <span className="text-primary text-sm ml-0.5">★</span>
          </div>
          <div className="flex items-center">
            <img src="/assets/peoples.webp" alt="Students" className="h-9 object-contain z-0" />
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-[12px] font-bold text-text-dark -ml-3 border-2 border-white relative z-10 font-satoshi">
              2K+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
