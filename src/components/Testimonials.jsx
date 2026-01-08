import React from 'react';

const testimonials = [
  {
    quote:
      "Influency changed the game for me! I went from struggling to find brand deals to having multiple collaborations every month.",
    author: 'Sarah K.',
    role: 'Fashion Creator',
    followers: '250K Followers',
    avatar: 1,
    metric: '+320%',
    metricLabel: 'Income Growth',
  },
  {
    quote:
      "As a brand, finding authentic creators was always a challenge. Influency's verified profiles saved us countless hours.",
    author: 'Michael R.',
    role: 'Marketing Director',
    company: 'OSMO Cosmetics',
    avatar: 12,
    metric: '4.8x',
    metricLabel: 'ROI',
  },
  {
    quote:
      "The payment system gives me peace of mind. I know I'll get paid once I deliver. It's made collaborating stress-free.",
    author: 'Alex T.',
    role: 'Food Creator',
    followers: '180K Followers',
    avatar: 5,
    metric: '$12K',
    metricLabel: 'Monthly Earnings',
  },
  {
    quote:
      "We launched 3 successful campaigns in our first month on Influency. The quality of creators is unmatched!",
    author: 'Jessica L.',
    role: 'Brand Manager',
    company: 'PizzaMat',
    avatar: 20,
    metric: '98%',
    metricLabel: 'Completion Rate',
  },
  {
    quote:
      "The matching algorithm is incredible. Every brand I connect with actually fits my content style and values.",
    author: 'David M.',
    role: 'Lifestyle Creator',
    followers: '500K Followers',
    avatar: 8,
    metric: '45+',
    metricLabel: 'Brand Deals',
  },
  {
    quote:
      "Finally, a platform that understands what creators need. The UX is beautiful and everything just works.",
    author: 'Emma W.',
    role: 'Beauty Creator',
    followers: '320K Followers',
    avatar: 15,
    metric: '5⭐',
    metricLabel: 'Rating',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-accent-pink/10 text-accent-pink px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            💬 Testimonials
          </span>

          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Don't Take Our Word for It
          </h2>

          {/* Big Number */}
          <div className="mt-8 mb-6">
            <p className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-accent-orange via-accent-pink to-accent-green bg-clip-text text-transparent">
              26,900,789
            </p>
            <p className="text-lg text-subtitle mt-2">
              Visitors engaged through our platform
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary rounded-3xl p-5 sm:p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              {/* Metric Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white rounded-2xl px-4 py-2 shadow-sm">
                  <p className="font-montserrat font-bold text-xl text-primary">
                    {testimonial.metric}
                  </p>
                  <p className="text-xs text-subtitle">{testimonial.metricLabel}</p>
                </div>
                <svg
                  className="w-8 h-8 text-accent-pink/30 group-hover:text-accent-pink/50 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-primary leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={`https://i.pravatar.cc/48?img=${testimonial.avatar}`}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-subtitle">
                    {testimonial.role}
                    {testimonial.followers && ` • ${testimonial.followers}`}
                    {testimonial.company && ` • ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {[
            { icon: '🔒', label: 'Secure Payments' },
            { icon: '✅', label: 'Verified Creators' },
            { icon: '⚡', label: 'Fast Matching' },
            { icon: '🛡️', label: 'GDPR Compliant' },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-secondary/50 px-5 py-2.5 rounded-full"
            >
              <span className="text-lg">{badge.icon}</span>
              <span className="text-sm font-medium text-subtitle">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

