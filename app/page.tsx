import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
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
      </div>
    </div>
  );
}
