import React from 'react';
import './index.css'; // Tailwind CSS import

function Signup() {
  return (
    <div className="relative min-h-screen bg-white overflow-y-auto font-inter scroll-smooth">
      
      {/* Stripe Gradient Background */}
      <div className="fixed top-[-220px] left-[-200px] w-[160%] h-[480px] -skew-y-[8deg] transform-gpu overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 animate-gradient" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 pt-6">
        <h1 className="text-white text-xl sm:text-2xl underline font-black ml-4 sm:ml-20 mt-[-10px]">Stripe</h1>
      </header>

      {/* Main Content */}
      <main className="relative z-20 flex justify-center items-center px-4 sm:px-8 py-6">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg min-h-[600px] p-6 sm:p-8 text-[#414552] text-[14px] leading-normal font-light">
          
          <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-left">Create your account</h2>

          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Create Account Button */}
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition">
            Create Account
          </button>

          {/* Already Have an Account */}
          <div className="text-center font-semibold text-sm text-gray-500 mt-12">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600 hover:underline cursor-pointer">Sign in</a>
          </div>
        </div>
      </main>

      {/* Info Note */}
      <p className="leading-relaxed text-center text-xs sm:text-sm font-semibold text-gray-500 mt-6 mb-12 px-4 sm:px-0">
        If you use two-step authentication,{' '}
        <span className="text-indigo-600 hover:underline">
          keep your backup codes in a secure place.
        </span><br />
        They can help you recover access to your account if you get locked out.
      </p>

      {/* Footer */}
      <div className="text-center sm:text-left text-xs sm:text-sm font-bold text-gray-500 mb-4 px-4 sm:ml-20">
        @Stripe &nbsp; Privacy & Terms
      </div>
    </div>
  );
}

export default Signup;
