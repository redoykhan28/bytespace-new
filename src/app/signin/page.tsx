"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SignIn() {
  const [formData, setFormData] = useState({
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
    if (!formData.email || !formData.password) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    
    // Simulate successful login
    showToast('Success! Logging you in...', 'success');
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
          {/* Text Content */}
          <div className="mb-10 max-w-md">
            <h1 className="font-poppins font-bold text-white text-[32px] md:text-[40px] leading-tight mb-4 lg:mb-6 mt-2">
              Sign in with ease
            </h1>
            <p className="font-satoshi font-light text-white/90 text-[16px] md:text-[18px] leading-relaxed">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          {/* Graphics */}
          <div className="relative flex-1 flex items-start justify-start pointer-events-none">
            <img 
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
              <p className="text-[#1A32F5] font-satoshi text-[14px] mb-2 font-medium">Sign In</p>
              <h2 className="font-poppins font-bold text-text-dark text-[36px] md:text-[42px] leading-tight">
                Welcome Back
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-6" noValidate>
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
                  Sign In
                </button>
              </div>
            </form>

            {/* Separator */}
            <div className="flex items-center my-8 lg:my-10">
              <div className="flex-1 h-[1px] bg-gray-200"></div>
              <p className="px-4 text-gray-400 font-satoshi text-[14px]">or</p>
              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-6 mb-10">
              <button className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-300 hover:shadow-sm transition-all text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V15.39h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 3.39h-2.33v6.489C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </button>
              <button className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-300 hover:shadow-sm transition-all text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="currentColor"/>
                </svg>
              </button>
            </div>

            {/* Footer Link */}
            <div className="text-center pt-2">
              <p className="font-satoshi text-[14px] text-gray-500">
                New user? <Link href="/join" className="text-[#1A32F5] hover:underline">Create an account</Link>
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
