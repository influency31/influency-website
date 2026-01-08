import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo - Left */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-2xl">
            <span className="text-accent-orange">✱</span>
            <span className="text-accent-green">◆</span>
            <span className="text-accent-pink">❙❙</span>
          </div>
          <span className="font-montserrat font-bold text-lg tracking-wider text-primary">
            INFLUENCY
          </span>
        </a>

        {/* Nav - Center */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-subtitle hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#workflows"
            className="text-sm font-medium text-subtitle hover:text-primary transition-colors"
          >
            How it Works
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-subtitle hover:text-primary transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-subtitle hover:text-primary transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* CTA - Right */}
        <div className="hidden md:flex items-center">
          <a
            href="/waitlist.html"
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-secondary px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            Join The Waitlist
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-primary transition-all ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-all ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-all ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-6">
          <nav className="flex flex-col gap-4">
            <a href="#features" className="text-primary font-medium py-2">
              Features
            </a>
            <a href="#workflows" className="text-primary font-medium py-2">
              How it Works
            </a>
            <a href="#testimonials" className="text-primary font-medium py-2">
              Testimonials
            </a>
            <a href="#pricing" className="text-primary font-medium py-2">
              Pricing
            </a>
            <hr className="my-2 border-outline" />
            <a
              href="/waitlist.html"
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-secondary px-6 py-3 rounded-full text-center font-semibold"
            >
              Join The Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

