import React from 'react';

const Feature = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Large Rounded Card */}
        <div className="bg-secondary rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <span className="inline-block bg-accent-pink/10 text-accent-pink px-4 py-1.5 rounded-full text-sm font-medium">
                ✨ Smart Discovery
              </span>

              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
                Find Your Perfect
                <br />
                Brand Match
              </h2>

              <p className="text-lg text-subtitle leading-relaxed max-w-lg">
                Our AI-powered algorithm analyzes your content, audience, and
                engagement to connect you with brands that truly align with your
                style and values.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-accent-green/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-accent-green text-lg">🎯</span>
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Precision Matching
                    </h4>
                    <p className="text-sm text-subtitle">
                      Get matched with campaigns that fit your niche perfectly
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-accent-pink/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-accent-pink text-lg">📊</span>
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Real Analytics
                    </h4>
                    <p className="text-sm text-subtitle">
                      Track performance and optimize your collaborations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-accent-orange/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-accent-orange text-lg">⚡</span>
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Instant Notifications
                    </h4>
                    <p className="text-sm text-subtitle">
                      Never miss a brand opportunity with real-time alerts
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#learn-more"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn more about matching
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
            </div>

            {/* Right - Video/Image Placeholder */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Video Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-accent-pink/20 via-accent-orange/10 to-accent-green/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-primary ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-subtitle">Watch how it works</p>
                  </div>
                </div>

                {/* Accent Highlights */}
                <div className="absolute top-4 right-4 bg-accent-green text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                  +45% Match Rate
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent-pink/20 rounded-full flex items-center justify-center">
                      <span className="text-lg">🎉</span>
                    </div>
                    <div>
                      <p className="text-xs text-subtitle">New match!</p>
                      <p className="text-sm font-semibold text-primary">
                        OSMO Cosmetics
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Background */}
              <div className="absolute -z-10 w-full h-full bg-accent-pink/10 rounded-3xl top-6 -right-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

