import React from 'react';

const workflows = [
  {
    step: '01',
    title: 'Create Your Profile',
    description:
      'Sign up and connect your social accounts. Our AI automatically pulls your metrics and creates a stunning profile.',
    image: '/assets/profile-mockup.png',
    chips: [
      { label: 'Auto-sync', color: 'green' },
      { label: 'Verified', color: 'pink' },
    ],
    features: [
      'Connect Instagram, TikTok, YouTube',
      'Auto-import engagement metrics',
      'Showcase your best content',
    ],
  },
  {
    step: '02',
    title: 'Discover & Match',
    description:
      'Swipe through campaigns that match your niche. Like what you see? Swipe right and get matched instantly.',
    image: '/assets/discover-mockup.png',
    chips: [
      { label: 'Smart Match', color: 'orange' },
      { label: 'AI-Powered', color: 'green' },
    ],
    features: [
      'Personalized campaign feed',
      'Filter by niche & budget',
      'Super like your favorites',
    ],
  },
  {
    step: '03',
    title: 'Collaborate & Earn',
    description:
      'Chat directly with brands, negotiate deals, and get paid securely through our platform.',
    image: '/assets/chat-mockup.png',
    chips: [
      { label: 'Secure Pay', color: 'green' },
      { label: 'Fast', color: 'pink' },
    ],
    features: [
      'In-app messaging & contracts',
      'Content approval workflow',
      'Instant payouts via Stripe',
    ],
  },
];

const chipColors = {
  green: 'bg-accent-green/10 text-accent-green',
  pink: 'bg-accent-pink/10 text-accent-pink',
  orange: 'bg-accent-orange/10 text-accent-orange',
};

const Workflows = () => {
  return (
    <section id="workflows" className="py-24 bg-secondary/30">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-green/10 text-accent-green px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-4">
            Start Earning in 3 Simple Steps
          </h2>
          <p className="text-lg text-subtitle max-w-2xl mx-auto">
            Our streamlined process makes it easy to connect with brands and
            start monetizing your influence.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-20">
          {workflows.map((workflow, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <span className="font-montserrat font-bold text-6xl text-primary/10">
                    {workflow.step}
                  </span>
                  <div className="flex gap-2">
                    {workflow.chips.map((chip, i) => (
                      <span
                        key={i}
                        className={`${chipColors[chip.color]} px-3 py-1 rounded-full text-xs font-medium`}
                      >
                        {chip.label}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-primary">
                  {workflow.title}
                </h3>

                <p className="text-lg text-subtitle leading-relaxed">
                  {workflow.description}
                </p>

                <ul className="space-y-3">
                  {workflow.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-accent-green/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-accent-green"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-subtitle">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Media Card */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
                    {/* Phone Mockup Placeholder */}
                    <div className="bg-primary rounded-[2rem] p-2 max-w-[280px] mx-auto">
                      <div className="bg-secondary rounded-[1.75rem] h-[480px] flex items-center justify-center">
                        <div className="text-center p-6">
                          <span className="text-6xl mb-4 block">
                            {index === 0 ? '👤' : index === 1 ? '🔍' : '💬'}
                          </span>
                          <p className="text-sm text-subtitle">
                            {workflow.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div
                    className={`absolute -z-10 w-full h-full rounded-3xl top-4 ${
                      index % 2 === 0 ? '-right-4' : '-left-4'
                    } ${
                      index === 0
                        ? 'bg-accent-green/20'
                        : index === 1
                        ? 'bg-accent-orange/20'
                        : 'bg-accent-pink/20'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflows;

