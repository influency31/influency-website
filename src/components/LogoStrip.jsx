import React from 'react';

const logos = [
  { name: 'OSMO', style: 'font-bold' },
  { name: 'PizzaMat', style: 'font-semibold' },
  { name: 'UrbanKicks', style: 'font-bold tracking-tight' },
  { name: 'GlowUp', style: 'font-semibold italic' },
  { name: 'TechFlow', style: 'font-bold' },
  { name: 'FitPro', style: 'font-extrabold' },
  { name: 'StyleHub', style: 'font-semibold tracking-wide' },
  { name: 'BeautyBox', style: 'font-bold' },
];

const LogoStrip = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Title */}
        <p className="text-center text-sm text-subtitle uppercase tracking-widest mb-10">
          Trusted by innovative brands worldwide
        </p>

        {/* Logo Row */}
        <div className="bg-white rounded-2xl shadow-sm border border-outline/50 py-8 px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-subtitle/40 hover:text-subtitle/70 transition-colors cursor-pointer"
              >
                <span className={`text-xl ${logo.style}`}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;

