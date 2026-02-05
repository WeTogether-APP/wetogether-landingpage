'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // Submit to our API route which handles Netlify Forms
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! We\'ll notify you when we launch.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Clean Minimal Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        {/* Very subtle green accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md  border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9">
                  <img src="/logo.png" alt="WeTogether" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-semibold text-gray-900 tracking-tight">WeTogether</span>
              </div>
              <button
                onClick={() => {
                  const form = document.querySelector('form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-5 py-2.5 bg-green-500 text-white font-medium hover:bg-green-600 rounded-lg transition-all text-sm shadow-sm hover:shadow-md"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-28">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left Side - Content */}
              <div className="space-y-10 text-center lg:text-left">
                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 tracking-tight leading-[1.1]">
                    Travel together,
                    <br />
                    <span className="text-green-600 font-bold">never alone.</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                    Real-time group navigation for coordinated travel. Never lose track of your group again.
                  </p>
                </div>

                {/* Email Form */}
                <form 
                  onSubmit={handleSubmit} 
                  className="max-w-lg mx-auto lg:mx-0 space-y-4 pt-4"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-5 py-4 bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/10 rounded-xl transition-all text-base shadow-sm hover:border-gray-300"
                      disabled={status === 'loading'}
                      required
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="px-8 py-4 bg-green-500 text-white font-medium hover:bg-green-600 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-base shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </div>
                  {message && (
                    <div className={`text-sm text-center lg:text-left ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                      {message}
                    </div>
                  )}
                  <p className="text-sm text-gray-500 text-center lg:text-left">
                    First 1,000 members get early access
                  </p>
                </form>
              </div>

              {/* Right Side - Screenshot */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-gray-100 shadow-2xl" style={{ aspectRatio: '9/16' }}>
                  <Image
                    src="/1.JPG"
                    alt="WeTogether App Screenshot"
                    width={400}
                    height={800}
                    className="w-full h-full object-cover"
                    unoptimized
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Clean and Simple */}
        <section className="py-32 px-6">
          <div className="w-full max-w-6xl mx-auto space-y-32">
            {/* Feature 1 - Login/Sign Up */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-5">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                  Get started in
                  <span className="text-green-600 font-bold"> seconds</span>.
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Sign in or create an account quickly. Welcome back messages keep you connected. Secure login with password protection and easy account recovery.
                </p>
              </div>
              <div className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden border-2 border-gray-100 shadow-xl bg-gray-50" style={{ aspectRatio: '9/16' }}>
                <Image
                  src="/1.JPG"
                  alt="WeTogether Login Screen"
                  width={400}
                  height={711}
                  className="w-full h-full object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Feature 2 - Real-time Tracking */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative w-full max-w-sm mx-auto lg:order-1 rounded-3xl overflow-hidden border-2 border-gray-100 shadow-xl" style={{ aspectRatio: '8/16' }}>
                <Image
                  src="/2.JPG"
                  alt="WeTogether Real-time Group Tracking"
                  width={400}
                  height={711}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="space-y-5 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                  Track your group in <br />
                  <span className="text-green-600 font-bold"> real-time</span>.
                  
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  See where everyone is on a live map. Never lose track of your group. Emergency alerts keep everyone safe. Set destinations and navigate together seamlessly.
                </p>
              </div>
            </div>

            {/* Feature 3 - Group Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-5">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                  Manage your group <br />
                  <span className="text-green-600 font-bold">effortlessly</span>.
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  View all group members, their status, and estimated arrival times. Share group codes easily. Find smart meetup points. Leave or manage groups with one tap.
                </p>
              </div>
              <div className="relative w-full max-w-sm mx-auto lg:order-1 rounded-3xl overflow-hidden border-2 border-gray-100 shadow-xl" style={{ aspectRatio: '8/16' }}>
                <Image
                  src="/3.JPG"
                  alt="WeTogether Group Management"
                  width={400}
                  height={711}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Feature 4 - Start Journey */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative w-full max-w-sm mx-auto lg:order-1 rounded-3xl overflow-hidden border-2 border-gray-100 shadow-xl" style={{ aspectRatio: '8/16' }}>
                <Image
                  src="/4.JPG"
                  alt="WeTogether Start Journey"
                  width={400}
                  height={711}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="space-y-5 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                  Start your journey <br />
                  <span className="text-green-600 font-bold">together</span>.
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Create a new group or join with a code. Travel better, together. Simple interface to get your group on the road quickly and safely.
                </p>
              </div>
            </div>

            {/* Feature 5 - Navigation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-5">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                  Navigate with <br />
                  <span className="text-green-600 font-bold">turn-by-turn directions</span>.
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Follow the leader with clear navigation instructions. See distance, ETA, and arrival time. Group navigation keeps everyone synchronized. Speed limits and trip summaries help you stay informed.
                </p>
              </div>
              <div className="relative w-full max-w-sm mx-auto lg:order-1 rounded-3xl overflow-hidden border-2 border-gray-100 shadow-xl" style={{ aspectRatio: '8/16' }}>
                <Image
                  src="/5.JPG"
                  alt="WeTogether Navigation"
                  width={400}
                  height={711}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Feature 6 - Group Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative w-full max-w-sm mx-auto lg:order-1 rounded-3xl overflow-hidden border-2 border-gray-100 shadow-xl" style={{ aspectRatio: '7/16' }}>
                <Image
                  src="/6.JPG"
                  alt="WeTogether Group Details"
                  width={400}
                  height={711}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="space-y-5 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                  Stay connected with <br /> your 
                  <span className="text-green-600 font-bold"> group</span>.
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  View member roles, distances, and status. Invite new members easily. Group codes make sharing simple. Smart meetup features help coordinate stops and destinations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-6 relative overflow-hidden">
          {/* Background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 via-white to-white" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative w-full max-w-3xl mx-auto text-center space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
                Ready to travel <br />
                <span className="text-green-600 font-bold">together?</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
                Join WeTogether and start coordinating your group travels today.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-5"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 rounded-xl transition-all text-base shadow-sm hover:border-gray-300"
                    disabled={status === 'loading'}
                    required
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-10 py-4 bg-green-500 text-white font-semibold hover:bg-green-600 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </div>
                {message && (
                  <div className={`text-sm ${status === 'success' ? 'text-green-600 font-medium' : 'text-red-600'}`}>
                    {message}
                  </div>
                )}
              </form>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>First 1,000 members get early access</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <img src="/logo.png" alt="WeTogether" className="w-full h-full object-contain" />
                </div>
                <span className="text-lg font-semibold text-gray-900">WeTogether</span>
              </div>
              {/* <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-green-600 transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-green-600 transition-colors">Contact Us</a>
              </div> */}
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} WeTogether. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

   
      </div>
    </div>
  );
}
