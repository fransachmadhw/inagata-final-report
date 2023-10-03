import React from 'react';
import Head from 'next/head';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import ScrollSection from './components/ScrollSection';
import Warning from './components/Warning';
import Greet from './components/Greet';

export default function Home() {
  return (
    <div className="main-container w-full text-white">
      <Head>
        <title>Frans | Inagata Final Report</title>
        <meta
          name="description"
          content="Frans is a front end developer who specializes in building digital products powered with popular technologies."
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/icons/face.svg"
        />
      </Head>
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
      </div>
    </div>
  );
}
