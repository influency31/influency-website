import React from 'react';

const stats = [
  {
    value: '50K+',
    label: 'Active Creators',
    icon: '👤',
  },
  {
    value: '8,000+',
    label: 'Brand Partners',
    icon: '🏢',
  },
  {
    value: '$2.5M+',
    label: 'Paid to Creators',
    icon: '💰',
  },
];

const StatsRow = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg shadow-primary/5 border border-outline/50 p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <span className="text-4xl mb-4 block">{stat.icon}</span>
              <h3 className="font-montserrat font-bold text-4xl sm:text-5xl text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-subtitle text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsRow;

