import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl p-8 sm:p-12 lg:p-16 text-center">
          {/* Badge */}
          <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            🚀 Ready to Start?
          </span>

          {/* Headline */}
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-6 max-w-3xl mx-auto leading-tight">
            Start Growing Your
            <br />
            <span className="bg-gradient-to-r from-accent-orange via-accent-pink to-accent-green bg-clip-text text-transparent">
              Creator Career
            </span>{' '}
            Today
          </h2>

          {/* Subtext */}
          <p className="text-lg text-subtitle max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of creators and brands already building meaningful
            partnerships on Influency. Free to start, no credit card required.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#signup"
              className="inline-flex items-center gap-2 bg-primary text-secondary px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started Free
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
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-subtitle transition-colors"
            >
              Talk to Sales
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-outline/50">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent-green"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-subtitle">Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent-green"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-subtitle">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent-green"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-subtitle">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

