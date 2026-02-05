'use client';

import Image from 'next/image';

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.wemovetogether.app&hl=en_GB';

export default function WaitlistPage() {
  const handleDownload = () => {
    window.open(GOOGLE_PLAY_URL, '_blank');
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
                onClick={handleDownload}
                className="px-5 py-2.5 bg-green-500 text-white font-medium hover:bg-green-600 rounded-lg transition-all text-sm shadow-sm hover:shadow-md"
              >
                Download Now
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

                {/* Download Button */}
                <div className="max-w-lg mx-auto lg:mx-0 space-y-4 pt-4">
                  <button
                    onClick={handleDownload}
                    className="w-full sm:w-auto px-10 py-4 bg-green-500 text-white font-medium hover:bg-green-600 rounded-xl transition-all text-base shadow-md hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.67-1.09-.21-2.18-.42-3.37-.42C8.5 20.53 7.5 21.5 6 21.5c-1.5 0-2.5-1-2.5-2.5 0-1.5 1-2.5 2.5-2.5 1.5 0 2.5 1 3.6 1.1.9.1 1.8-.1 2.7-.2 1.1-.2 2.2-.4 3.3-.2 1.1.2 2.2.5 3.1 1.1.9.6 1.5 1.4 1.5 2.3 0 .9-.6 1.7-1.5 2.3zm-1.1-6.3c-1.1.8-2.5 1.2-3.9 1.2-1.4 0-2.8-.4-3.9-1.2-1.1-.8-1.7-2-1.7-3.2 0-1.2.6-2.4 1.7-3.2 1.1-.8 2.5-1.2 3.9-1.2 1.4 0 2.8.4 3.9 1.2 1.1.8 1.7 2 1.7 3.2 0 1.2-.6 2.4-1.7 3.2z"/>
                    </svg>
                    Download on Google Play
                  </button>
                  <p className="text-sm text-gray-500 text-center lg:text-left">
                    Available now on the Google Play Store
                  </p>
                </div>
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
