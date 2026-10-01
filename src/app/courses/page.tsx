"use client";

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import coursesData from '@/data/courses.json';

const categoryTabs = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Cooking",
];

const levelOptions = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const sortOptions = [
  "Most relevant",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

// How many courses to show per page
const PER_PAGE = 12;

// Inner component that uses useSearchParams (must be wrapped in Suspense)
function CoursesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialise search from URL query param (e.g. ?q=figma from homepage search)
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown open states
  const [levelOpen, setLevelOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const levelRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (levelRef.current && !levelRef.current.contains(e.target as Node)) setLevelOpen(false);
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) setCategoryOpen(false);
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) setSortOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // If the URL ?q param changes (e.g. user navigates here from home), update local state
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setQuery(q);
  }, [searchParams]);

  // ---- FILTERING ----
  let results = coursesData.filter((course) => {
    // When a search term is active, search across ALL categories (ignore active tab)
    // so users coming from the homepage search always see results
    const searchIsActive = query.trim() !== '';
    const matchesCategory = searchIsActive || course.categories.includes(activeCategory);
    const matchesSearch =
      searchIsActive
        ? course.title.toLowerCase().includes(query.toLowerCase()) ||
          course.author.toLowerCase().includes(query.toLowerCase())
        : true;
    const matchesLevel =
      selectedLevel === 'All Levels' || course.level === selectedLevel;
    return matchesCategory && matchesSearch && matchesLevel;
  });

  // ---- SORTING ----
  results = [...results].sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    if (sortBy === 'Newest') return b.id - a.id;
    return 0; // "Most relevant" keeps original order
  });

  // ---- PAGINATION ----
  const totalPages = Math.ceil(results.length / PER_PAGE);
  const paginated = results.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const changeCategory = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  // Search submit from archive page header bar
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    router.replace('/courses?q=' + encodeURIComponent(query.trim()), { scroll: false });
  };

  return (
    <>
      {/* === SHORT BLUE HERO HEADER === */}
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
        <Navbar />

        <h1 className="font-poppins font-bold text-white text-[36px] md:text-[42px] mb-8">
          Find Your Next Course
        </h1>

        {/* Live search bar — same look as homepage hero */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-2xl bg-white rounded-full p-2 flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
        >
          <div className="pl-5 pr-3 text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setCurrentPage(1); }}
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-text-dark text-[16px] font-satoshi px-2 placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="bg-primary text-text-dark font-semibold px-7 py-3 rounded-full hover:bg-[#c3e817] transition-all text-[15px] flex items-center gap-2 shadow-sm"
          >
            Courses
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </form>
      </div>

      {/* === MAIN CONTENT === */}
      <main className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">

          {/* --- Filter Bar --- */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">

            <div className="flex items-center gap-3 flex-wrap">

              {/* Filter button — clears all active filters */}
              <button
                onClick={() => {
                  setSelectedLevel('All Levels');
                  setSortBy('Most relevant');
                  setQuery('');
                  setCurrentPage(1);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-[14px] font-satoshi font-medium text-gray-600 hover:border-primary hover:text-primary transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Filter
                {(selectedLevel !== 'All Levels' || query) && (
                  <span className="w-2 h-2 rounded-full bg-[#1A32F5] inline-block"></span>
                )}
              </button>

              {/* Level Dropdown */}
              <div className="relative" ref={levelRef}>
                <button
                  onClick={() => { setLevelOpen(!levelOpen); setCategoryOpen(false); setSortOpen(false); }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-[14px] font-satoshi font-medium transition-all ${selectedLevel !== 'All Levels' ? 'border-[#1A32F5] text-[#1A32F5]' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="18" y1="20" x2="18" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                  </svg>
                  {selectedLevel === 'All Levels' ? 'Level' : selectedLevel}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {levelOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-gray-100 z-50 py-2 min-w-[160px]">
                    {levelOptions.map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => { setSelectedLevel(lvl); setLevelOpen(false); setCurrentPage(1); }}
                        className={`w-full text-left px-5 py-2.5 text-[14px] font-satoshi hover:bg-gray-50 transition-colors ${selectedLevel === lvl ? 'text-[#1A32F5] font-semibold' : 'text-gray-600'}`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="relative" ref={categoryRef}>
                <button
                  onClick={() => { setCategoryOpen(!categoryOpen); setLevelOpen(false); setSortOpen(false); }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-[14px] font-satoshi font-medium transition-all ${activeCategory !== 'Featured' ? 'border-[#1A32F5] text-[#1A32F5]' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  {activeCategory === 'Featured' ? 'Category' : activeCategory}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {categoryOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-gray-100 z-50 py-2 min-w-[200px] max-h-[300px] overflow-y-auto">
                    {categoryTabs.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { changeCategory(cat); setCategoryOpen(false); }}
                        className={`w-full text-left px-5 py-2.5 text-[14px] font-satoshi hover:bg-gray-50 transition-colors ${activeCategory === cat ? 'text-[#1A32F5] font-semibold' : 'text-gray-600'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sort Dropdown (Most Relevant) */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => { setSortOpen(!sortOpen); setLevelOpen(false); setCategoryOpen(false); }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-[14px] font-satoshi font-medium text-gray-600 hover:border-gray-300 transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="21" y1="10" x2="3" y2="10"></line>
                  <line x1="21" y1="6" x2="3" y2="6"></line>
                  <line x1="21" y1="14" x2="11" y2="14"></line>
                  <line x1="21" y1="18" x2="11" y2="18"></line>
                </svg>
                {sortBy}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {sortOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-gray-100 z-50 py-2 min-w-[200px]">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSortBy(opt); setSortOpen(false); setCurrentPage(1); }}
                      className={`w-full text-left px-5 py-2.5 text-[14px] font-satoshi hover:bg-gray-50 transition-colors ${sortBy === opt ? 'text-primary font-semibold' : 'text-gray-600'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* --- Category Tabs --- */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categoryTabs.map((cat) => (
              <button
                key={cat}
                onClick={() => changeCategory(cat)}
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

          {/* Active filters summary — shows what's currently applied */}
          {(query || selectedLevel !== 'All Levels') && (
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-[13px] text-gray-400 font-satoshi">Active filters:</span>
              {query && (
                <span className="bg-blue-50 text-[#1A32F5] border border-blue-100 text-[13px] font-satoshi px-3 py-1 rounded-full flex items-center gap-2">
                  Search: "{query}"
                  <button onClick={() => { setQuery(''); setCurrentPage(1); }} className="hover:text-red-500 transition-colors">✕</button>
                </span>
              )}
              {selectedLevel !== 'All Levels' && (
                <span className="bg-blue-50 text-[#1A32F5] border border-blue-100 text-[13px] font-satoshi px-3 py-1 rounded-full flex items-center gap-2">
                  {selectedLevel}
                  <button onClick={() => { setSelectedLevel('All Levels'); setCurrentPage(1); }} className="hover:text-red-500 transition-colors">✕</button>
                </span>
              )}
              <span className="text-[13px] text-gray-400 font-satoshi ml-2">{results.length} result{results.length !== 1 ? 's' : ''} found</span>
            </div>
          )}

          {/* --- Course Grid --- */}
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`} className="block group">
                  <div className="bg-white rounded-[24px] p-4 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 h-full">
                    <div className="relative w-full h-[220px] rounded-[16px] overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                        <span className="bg-white/85 backdrop-blur-md text-gray-700 text-[11px] font-semibold px-3 py-1.5 rounded-full font-satoshi shadow-sm">{course.lessons} Lessons</span>
                        <span className="bg-white/85 backdrop-blur-md text-gray-700 text-[11px] font-semibold px-3 py-1.5 rounded-full font-satoshi shadow-sm">{course.duration}</span>
                        <span className="bg-white/85 backdrop-blur-md text-gray-700 text-[11px] font-semibold px-3 py-1.5 rounded-full font-satoshi shadow-sm">{course.comments} Comments</span>
                      </div>
                    </div>
                    <div className="mt-5 px-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-poppins font-semibold text-[18px] text-text-dark pr-4 leading-snug">{course.title}</h3>
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
            <div className="text-center py-24 text-gray-400 font-satoshi text-lg">
              No courses match your search. Try a different term or clear the filters.
            </div>
          )}

          {/* --- Pagination (only rendered when more than 12 courses) --- */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-16 mb-6">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
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

      <Footer />
    </>
  );
}

// Suspense wrapper required because useSearchParams() needs it in Next.js App Router
export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-satoshi text-gray-400">Loading courses...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
