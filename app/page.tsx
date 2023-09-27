import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import ScrollSection from './components/ScrollSection';
import Warning from './components/Warning';

export default function Home() {
  return (
    <div className="w-full text-white">
      {/* Mobile */}
      <div className="xl:hidden w-full">
        <Warning />
      </div>

      {/* Desktop */}
      <div className="hidden xl:block w-full">
        <CustomCursor />
        <Hero />
        <ScrollSection />
      </div>
    </div>
  );
}
