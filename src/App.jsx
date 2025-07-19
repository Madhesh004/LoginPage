import React from 'react';
import './index.css'; // Tailwind CSS import
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-y-auto font-inter scroll-smooth">

      {/* Stripe Gradient Background */}
      <div className="fixed top-[-550px] left-[-200px] w-[190%] h-[700px] -skew-y-[20deg] transform-gpu overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 animate-gradient" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 pt-6">
        <h1 className="flex text-black text-2xl underline font-black ml-20 mt-[-10px]">Stripe</h1>
      </header>

      {/* Main Content */}
      <main className="relative z-20 flex justify-center items-center px-4 sm:px-8 py-6">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg min-h-[600px] p-8 text-[#414552] text-[14px] leading-normal font-light">
          
          <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-left">Sign in to your account</h2>

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
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
              <a href="#" className="text-sm font-semibold text-indigo-600 hover:underline">Forgot your password?</a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-6">
            <input id="remember" type="checkbox" className="h-4 w-4 text-indigo-800 rounded mr-2" />
            <label htmlFor="remember" className="text-sm font-semibold text-gray-700">
              Remember me on this device
            </label>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition">
            Sign in
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign In */}
          <button className="w-full border border-gray-300 font-semibold py-2 rounded-md mb-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            <span>Sign in with Google</span>
          </button>

          {/* Passkey + SSO */}
          <button className="w-full border border-gray-300 font-semibold py-2 pl-6 rounded-md mb-3 hover:bg-gray-100 transition">
            Sign in with passkey
          </button>
          <button className="w-full border border-gray-300 font-semibold py-2 pl-6 rounded-md mb-3 hover:bg-gray-100 transition">
            Sign in with SSO
          </button>

          {/* Create Account */}
          <div className="text-center font-semibold text-sm text-gray-500 mt-12">
            New to Stripe?{' '}
            <Link to="/signup" className="text-indigo-600 hover:underline cursor-pointer">
              Create account
            </Link>
          </div>

        </div>
      </main>

      {/* Info Note */}
      <p className="leading-relaxed text-center text-sm font-semibold text-gray-500 mt-6 mb-12 flex flex-col items-center gap-2">
        <span>
          If you use two-step authentication,{' '}
          <span className="text-indigo-600 hover:underline">
            keep your backup codes in a secure place.
          </span><br />
          They can help you recover access to your account if you get locked out.
        </span>
      </p>

      {/* Footer */}
      <div className="text-left ml-20 text-sm font-bold text-gray-500 mb-4">
        @Stripe &nbsp; Privacy & Terms
      </div>
    </div>
  );
}

export default App;
