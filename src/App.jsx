import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import StatsRow from './components/StatsRow';
import Workflows from './components/Workflows';
import Feature from './components/Feature';
import DarkSection from './components/DarkSection';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <StatsRow />
        <Workflows />
        <Feature />
        <DarkSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

