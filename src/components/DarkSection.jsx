import React from 'react';

const DarkSection = () => {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium">
              🚀 For Brands
            </span>

            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-secondary leading-tight">
              Connect with{' '}
              <span className="bg-gradient-to-r from-accent-orange via-accent-pink to-accent-green bg-clip-text text-transparent">
                8,000+
              </span>{' '}
              Verified Creators
            </h2>

            <p className="text-lg text-secondary/70 leading-relaxed max-w-lg">
              Launch campaigns that reach millions. Our verified creator network
              delivers authentic engagement and measurable results for your
              brand.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-montserrat font-bold text-3xl text-secondary">
                  2.5M+
                </h4>
                <p className="text-secondary/60 text-sm">
                  Combined Follower Reach
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-montserrat font-bold text-3xl text-secondary">
                  4.8%
                </h4>
                <p className="text-secondary/60 text-sm">
                  Average Engagement Rate
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-montserrat font-bold text-3xl text-secondary">
                  98%
                </h4>
                <p className="text-secondary/60 text-sm">
                  Campaign Completion Rate
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-montserrat font-bold text-3xl text-secondary">
                  24h
                </h4>
                <p className="text-secondary/60 text-sm">
                  Average Response Time
                </p>
              </div>
            </div>

            {/* CTA with inverted colors */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#brand-signup"
                className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded-full text-base font-semibold hover:bg-white transition-all hover:shadow-xl"
              >
                Start as a Brand
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
                href="#case-studies"
                className="inline-flex items-center gap-2 border-2 border-secondary/30 text-secondary px-8 py-4 rounded-full text-base font-semibold hover:border-secondary/60 transition-all"
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* Right - Decorative Card */}
          <div className="relative">
            {/* Main Card - Overlapping section boundary */}
            <div className="relative lg:translate-y-12">
              <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-primary">
                      Campaign Dashboard
                    </h4>
                    <p className="text-sm text-subtitle">Real-time analytics</p>
                  </div>
                  <span className="bg-accent-green/10 text-accent-green px-3 py-1 rounded-full text-xs font-medium">
                    Live
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-secondary rounded-2xl p-4 text-center">
                    <p className="font-montserrat font-bold text-2xl text-primary">
                      12
                    </p>
                    <p className="text-xs text-subtitle">Active</p>
                  </div>
                  <div className="bg-secondary rounded-2xl p-4 text-center">
                    <p className="font-montserrat font-bold text-2xl text-primary">
                      47
                    </p>
                    <p className="text-xs text-subtitle">Matches</p>
                  </div>
                  <div className="bg-secondary rounded-2xl p-4 text-center">
                    <p className="font-montserrat font-bold text-2xl text-primary">
                      $4.2K
                    </p>
                    <p className="text-xs text-subtitle">Spent</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-subtitle">Campaign Progress</span>
                    <span className="font-semibold text-primary">75%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent-green to-accent-green/70 rounded-full"
                      style={{ width: '75%' }}
                    />
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <p className="text-sm text-subtitle">Recent Activity</p>
                  <div className="space-y-2">
                    {[
                      { name: 'Sarah K.', action: 'accepted campaign', time: '2m ago' },
                      { name: 'Alex T.', action: 'submitted content', time: '15m ago' },
                      { name: 'Maya L.', action: 'new match', time: '1h ago' },
                    ].map((activity, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-secondary/50 transition-colors"
                      >
                        <img
                          src={`https://i.pravatar.cc/32?img=${i + 20}`}
                          alt={activity.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-primary truncate">
                            <span className="font-medium">{activity.name}</span>{' '}
                            {activity.action}
                          </p>
                        </div>
                        <span className="text-xs text-subtitle whitespace-nowrap">
                          {activity.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent-orange text-white px-4 py-2 rounded-2xl shadow-lg text-sm font-semibold">
                🔥 Hot Campaign
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;

