import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Replace with your actual video path */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-recording-herself-with-a-smartphone-44419-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                Live Now
              </span>
              <span className="inline-flex items-center gap-2 bg-accent-pink/10 text-accent-pink px-4 py-1.5 rounded-full text-sm font-medium">
                ✨ New Features
              </span>
              <span className="inline-flex items-center gap-2 bg-accent-orange/10 text-accent-orange px-4 py-1.5 rounded-full text-sm font-medium">
                🔥 Trending
              </span>
            </div>

            {/* Big Headline */}
            <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary leading-[1.1] tracking-tight">
              Connecting Brands
              <br />
              with{' '}
              <span className="bg-gradient-to-r from-accent-orange via-accent-pink to-accent-green bg-clip-text text-transparent">
                Amazing Creators
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-subtitle max-w-lg leading-relaxed">
              The ultimate platform for influencer-brand collaborations. Swipe,
              match, and start earning from campaigns that align with your
              content.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/waitlist.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Join The Waitlist
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-secondary border-2 border-outline text-primary px-8 py-4 rounded-full text-base font-semibold hover:border-primary transition-all hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 5, 8, 12, 15].map((num) => (
                  <img
                    key={num}
                    src={`https://i.pravatar.cc/48?img=${num}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-primary">2,500+</span>
                <span className="text-subtitle"> creators joined this week</span>
              </div>
            </div>
          </div>

          {/* Right Column - Overlapping Cards */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Main Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] bg-white rounded-3xl shadow-2xl p-6 z-30 rotate-2 hover:rotate-0 transition-transform">
              <div className="h-40 bg-gradient-to-br from-accent-green to-accent-green/70 rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-6xl">🍕</span>
              </div>
              <h3 className="font-semibold text-lg text-primary mb-1">
                Pizza Challenge 🍕
              </h3>
              <p className="text-sm text-subtitle mb-3">PizzaMat Restaurant</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent-green/10 text-accent-green px-3 py-1 rounded-full text-xs font-medium">
                  +45% ROI
                </span>
                <span className="bg-secondary text-subtitle px-3 py-1 rounded-full text-xs">
                  💰 $500-$1.5K
                </span>
              </div>
            </div>

            {/* Background Card 1 */}
            <div className="absolute top-[15%] left-[10%] w-[240px] sm:w-[280px] bg-white rounded-3xl shadow-xl p-5 z-20 -rotate-6">
              <div className="h-32 bg-gradient-to-br from-accent-pink to-accent-pink/70 rounded-2xl mb-3 flex items-center justify-center">
                <span className="text-5xl">💄</span>
              </div>
              <h3 className="font-semibold text-primary mb-1">Summer Glow ☀️</h3>
              <p className="text-xs text-subtitle">OSMO Cosmetics</p>
              <span className="inline-block mt-2 bg-accent-pink/10 text-accent-pink px-3 py-1 rounded-full text-xs font-medium">
                ✨ Featured
              </span>
            </div>

            {/* Background Card 2 */}
            <div className="absolute bottom-[10%] right-[5%] w-[220px] sm:w-[260px] bg-white rounded-3xl shadow-xl p-5 z-10 rotate-6">
              <div className="h-28 bg-gradient-to-br from-accent-orange to-accent-orange/70 rounded-2xl mb-3 flex items-center justify-center">
                <span className="text-4xl">👟</span>
              </div>
              <h3 className="font-semibold text-primary mb-1">Street Style 🔥</h3>
              <p className="text-xs text-subtitle">UrbanKicks Co.</p>
              <span className="inline-block mt-2 bg-accent-orange/10 text-accent-orange px-3 py-1 rounded-full text-xs font-medium">
                🚀 Hot Deal
              </span>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-[5%] right-[20%] bg-white rounded-2xl shadow-lg px-4 py-3 z-40 animate-bounce">
              <div className="flex items-center gap-2">
                <span className="text-accent-green text-xl">✓</span>
                <span className="text-sm font-medium text-primary">
                  New Match!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

