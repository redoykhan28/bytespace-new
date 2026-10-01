"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import coursesData from '@/data/courses.json';

// Category tabs visible in the filter strip
const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Cooking",
];

// How many cards to show per page
const COURSES_PER_PAGE = 12;

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter courses by active category and optional search query
  const filtered = coursesData.filter((course) => {
    const matchesCategory = course.categories.includes(activeCategory);
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic — only show if more than 12 results
  const totalPages = Math.ceil(filtered.length / COURSES_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1); // reset to page 1 on category switch
  };

  return (
    <>
      {/* === HERO HEADER (short, blue background with search) === */}
      <div
        className="relative w-full flex flex-col items-center justify-center text-center px-6 pb-14"
        style={{
          backgroundImage: "url('/assets/Register.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '130px',
          minHeight: '260px',
        }}
      >
        {/* Shared Navbar floats on top of the blue bg */}
        <Navbar />

        {/* Page Title */}
        <h1 className="font-poppins font-bold text-white text-[36px] md:text-[42px] mb-8">
          Find Your Next Course
        </h1>

        {/* Search bar — same style as homepage hero */}
        <div className="w-full max-w-2xl bg-white rounded-full p-2 flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          <div className="pl-5 pr-3 text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            className="flex-1 bg-transparent outline-none text-text-dark text-[16px] font-satoshi px-2 placeholder:text-gray-400"
          />
          <button className="bg-primary text-text-dark font-semibold px-7 py-3 rounded-full hover:bg-[#c3e817] transition-all text-[15px] flex items-center gap-2 shadow-sm">
            Courses
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* === MAIN CONTENT AREA === */}
      <main className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">

          {/* --- Filter Bar --- */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            {/* Left: Filter / Level / Category buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              {["Filter", "Level", "Category"].map((btn) => (
                <button
                  key={btn}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-[14px] font-satoshi font-medium text-gray-600 hover:border-gray-300 transition-all"
                >
                  {btn === "Filter" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                    </svg>
                  )}
                  {btn === "Level" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
                  )}
                  {btn === "Category" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14M15.54 8.46a5 5 0 0 1 0 7.07M8.46 15.54a5 5 0 0 1 0-7.07"></path>
                    </svg>
                  )}
                  {btn}
                </button>
              ))}
            </div>

            {/* Right: Most relevant */}
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-[14px] font-satoshi font-medium text-gray-600 hover:border-gray-300 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="21" y1="10" x2="3" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="11" y2="14"></line>
                <line x1="21" y1="18" x2="11" y2="18"></line>
              </svg>
              Most relevant
            </button>
          </div>

          {/* --- Category Tabs --- */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-medium font-satoshi transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-text-dark shadow-sm"
                    : "bg-gray-50 border border-gray-100 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* --- Course Grid --- */}
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`} className="block group">
                  <div className="bg-white rounded-[24px] p-4 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 h-full">

                    {/* Image */}
                    <div className="relative w-full h-[220px] rounded-[16px] overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Info pills overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                        <span className="bg-white/85 backdrop-blur-md text-gray-700 text-[11px] font-semibold px-3 py-1.5 rounded-full font-satoshi shadow-sm">
                          {course.lessons} Lessons
                        </span>
                        <span className="bg-white/85 backdrop-blur-md text-gray-700 text-[11px] font-semibold px-3 py-1.5 rounded-full font-satoshi shadow-sm">
                          {course.duration}
                        </span>
                        <span className="bg-white/85 backdrop-blur-md text-gray-700 text-[11px] font-semibold px-3 py-1.5 rounded-full font-satoshi shadow-sm">
                          {course.comments} Comments
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-5 px-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-poppins font-semibold text-[18px] text-text-dark pr-4 leading-snug">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-1 flex-shrink-0 mt-0.5">
                          <span className="font-satoshi font-medium text-gray-500 text-[14px]">{course.rating}</span>
                          <span className="text-gray-300 text-[15px]">★</span>
                        </div>
                      </div>

                      <p className="text-[13px] font-satoshi text-gray-400 mt-1.5">
                        by <span className="text-blue-600 font-medium">{course.author}</span>
                      </p>

                      <div className="flex items-center justify-between mt-5">
                        <div className="bg-gray-50 px-3 py-1.5 rounded-full flex items-center gap-2 border border-gray-100">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                            <line x1="12" y1="20" x2="12" y2="10"></line>
                            <line x1="18" y1="20" x2="18" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="16"></line>
                          </svg>
                          <span className="text-[12px] font-medium text-gray-500 font-satoshi">{course.level}</span>
                        </div>
                        <img src="/assets/Auto Layout Horizontal (1).png" alt="Students" className="h-8 object-contain" />
                      </div>

                      <div className="mt-4 mb-1">
                        <p className="font-poppins font-bold text-[20px] text-blue-600">
                          ${course.price}<span className="text-[13px] font-medium text-gray-400 font-satoshi">/lifetime</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 font-satoshi text-lg">
              No courses found. Try a different category or search term.
            </div>
          )}

          {/* --- Pagination (only shows if more than 12 courses) --- */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-16 mb-6">
              {/* Prev */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full text-[15px] font-satoshi font-medium transition-all ${
                    currentPage === page
                      ? "bg-primary text-text-dark shadow-sm"
                      : "border border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          )}

        </div>
      </main>

      {/* Shared Footer */}
      <Footer />
    </>
  );
}
