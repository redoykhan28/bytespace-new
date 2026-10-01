"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AnimatedImage from '@/components/AnimatedImage';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [toast, setToast] = useState<{show: boolean, message: string, type: 'success' | 'error'}>({ show: false, message: '', type: 'success' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    
    // Simulate successful registration
    showToast('Success! Processing your registration...', 'success');
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  return (
    <main 
      className="min-h-screen w-full relative flex flex-col p-6 lg:p-12 xl:p-16"
      style={{
        backgroundImage: "url('/assets/Register.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0F32E5',
      }}
    >
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg font-satoshi text-white transition-all duration-300 ${toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
          {toast.message}
        </div>
      )}

      {/* Header / Logo */}
      <div className="w-full max-w-7xl mx-auto mb-12 lg:mb-16">
        <Link href="/" className="inline-block">
          <img src="/assets/login-logo.png" alt="ByteSpace Logo" className="h-8 object-contain" />
        </Link>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 flex-1">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Text Content - Top aligned with the right side form */}
          <div className="mb-10 max-w-md">
            <h1 className="font-poppins font-bold text-white text-[32px] md:text-[40px] leading-tight mb-4 lg:mb-6 mt-2">
              Sign up and come in
            </h1>
            <p className="font-satoshi font-light text-white/90 text-[16px] md:text-[18px] leading-relaxed">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>
          </div>

          {/* Graphics */}
          <div className="relative flex-1 flex items-start justify-start pointer-events-none">
            <AnimatedImage 
              src="/assets/login-img.png" 
              alt="Platform Preview" 
              className="w-full max-w-[500px] object-contain relative -left-4 lg:-left-6"
            />
          </div>
        </div>

        {/* Right Form Area */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start">
          <div className="bg-white w-full max-w-[550px] rounded-[30px] p-8 md:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            
            <div className="mb-8">
              <p className="text-[#1A32F5] font-satoshi text-[14px] mb-2 font-medium">Create an Account</p>
              <h2 className="font-poppins font-bold text-text-dark text-[36px] md:text-[42px] leading-tight">
                Welcome to<br />ByteSpace
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-6" noValidate>
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="font-satoshi text-text-dark text-[14px] font-medium">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Jamie Davis"
                  className="w-full border border-gray-200 rounded-[12px] px-5 py-4 font-satoshi text-[15px] outline-none focus:border-[#1A32F5] transition-colors placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-satoshi text-text-dark text-[14px] font-medium">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="designer@example.com"
                  className="w-full border border-gray-200 rounded-[12px] px-5 py-4 font-satoshi text-[15px] outline-none focus:border-[#1A32F5] transition-colors placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label className="font-satoshi text-text-dark text-[14px] font-medium">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="********"
                  className="w-full border border-gray-200 rounded-[12px] px-5 py-4 font-satoshi text-[15px] outline-none focus:border-[#1A32F5] transition-colors placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-2 lg:mt-4">
                <button 
                  type="submit"
                  className="bg-primary hover:bg-[#c3e817] text-text-dark font-satoshi font-semibold px-10 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                >
                  Continue
                </button>
              </div>
            </form>

            <div className="mt-8 lg:mt-10 pt-6 text-center border-t border-gray-100">
              <p className="font-satoshi text-[14px] text-gray-500">
                Already have an account? <Link href="/signin" className="text-[#1A32F5] hover:underline">Login</Link>
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
