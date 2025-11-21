import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatisticsSection } from './components/StatisticsSection';
import { ProblemSolution } from './components/ProblemSolution';
import { ServiceSection } from './components/ServiceSection';
import { MentorSection } from './components/MentorSection';
import { SurveyCTA } from './components/SurveyCTA';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F7F5F3]">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <StatisticsSection />
        <ProblemSolution />
        <ServiceSection />
        <MentorSection />
        <SurveyCTA />
      </main>

      <Footer />

      {/* Floating Action Button for Mobile/Desktop */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white text-primary p-3 rounded-full shadow-lg border border-gray-200 z-40 hover:bg-gray-50 transition-all animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button 
          onClick={() => document.getElementById('survey')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-primary text-white py-3 rounded-xl font-bold shadow-md active:bg-primary/90"
        >
          50% 할인받고 사전예약
        </button>
      </div>
      {/* Padding for mobile sticky bottom */}
      <div className="md:hidden h-20"></div>
    </div>
  );
};

export default App;