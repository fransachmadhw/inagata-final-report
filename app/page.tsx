import React from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import ScrollSection from './components/ScrollSection';
import Warning from './components/Warning';
import Greet from './components/Greet';
import Goodbye from './components/Goodbye';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="main-container w-full text-white">
      {/* Mobile */}
      <div className="xl:hidden w-full">
        <Warning />
      </div>

      {/* Desktop */}
      <div className="hidden xl:block w-full">
        <CustomCursor />
        <Hero />
        <Greet />
        <ScrollSection />
        <Goodbye />
        <Contact />
      </div>
    </div>
  );
}
