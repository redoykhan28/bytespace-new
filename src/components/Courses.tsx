"use client";

import { useState } from 'react';
import Link from 'next/link';
import coursesData from '@/data/courses.json';

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", 
  "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration", 
  "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", 
  "Photography", "Productivity", "Web Development", "Data Science", "Cooking"
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredCourses = coursesData.filter(course => 
    course.categories.includes(activeCategory)
  );

  return (
    <section className="w-full py-[80px] bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <h2 className="font-poppins font-semibold text-[42px] leading-[1.3] text-center text-text-dark">
          Discover Your Passion, <br /> Build Your Skills
        </h2>
        <p className="mt-4 text-[16px] md:text-[18px] text-gray-500 max-w-4xl text-center font-satoshi leading-relaxed font-light">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-5xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-medium font-satoshi transition-all ${
                activeCategory === cat 
                  ? "bg-primary text-text-dark shadow-sm" 
                  : "bg-gray-50 border border-gray-100 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
          <Link href="/courses" className="px-5 py-2.5 rounded-full text-[14px] font-semibold font-satoshi text-blue-600 hover:bg-blue-50 transition-all">
            + More
          </Link>
        </div>

        {/* Course Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-[24px] p-4 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                
                {/* Image Section */}
                <div className="relative w-full h-[240px] rounded-[16px] overflow-hidden group">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Glassmorphism Pills */}
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

                {/* Content Section */}
                <div className="mt-5 px-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-poppins font-semibold text-[20px] text-text-dark pr-4 leading-snug">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0 mt-0.5">
                      <span className="font-satoshi font-medium text-gray-500 text-[15px]">{course.rating}</span>
                      <span className="text-gray-300 text-[16px]">★</span>
                    </div>
                  </div>
                  
                  <p className="text-[14px] font-satoshi text-gray-400 mt-1.5">
                    by <span className="text-blue-600 font-medium">{course.author}</span>
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="bg-gray-50 px-3 py-1.5 rounded-full flex items-center gap-2 border border-gray-100">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <line x1="12" y1="20" x2="12" y2="10"></line>
                        <line x1="18" y1="20" x2="18" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="16"></line>
                      </svg>
                      <span className="text-[13px] font-medium text-gray-500 font-satoshi">{course.level}</span>
                    </div>
                    
                    {/* Students Stack */}
                    <img src="/assets/Auto Layout Horizontal (1).png" alt="Students" className="h-8 object-contain" />
                  </div>

                  <div className="mt-5 mb-2">
                    <p className="font-poppins font-bold text-[22px] text-blue-600">
                      ${course.price}<span className="text-[14px] font-medium text-gray-400 font-satoshi">/lifetime</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500 font-satoshi text-lg">
              No courses found for this category yet. Check out the Featured tab!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
