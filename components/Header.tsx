import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/assets/logo.png" alt="NurseGround" className="h-[30px] md:h-[40px] w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection('problem')} className="text-textSub hover:text-primary font-medium transition-colors">왜 널스그라운드인가</button>
          <button onClick={() => window.open('https://hypnotic-gymnast-e68.notion.site/2b497ed64f41806a9e6ff1df39f15cea?source=copy_link', '_blank')} className="text-textSub hover:text-primary font-medium transition-colors">이용 가이드</button>
          <button onClick={() => scrollToSection('mentor')} className="text-textSub hover:text-primary font-medium transition-colors">멘토 지원</button>
          <button
            onClick={() => window.open('https://hypnotic-gymnast-e68.notion.site/2b497ed64f41806a9e6ff1df39f15cea?source=copy_link', '_blank')}
            className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
          >
            지금 시작하기
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
          <button onClick={() => scrollToSection('problem')} className="text-left text-textMain font-medium py-2">왜 널스그라운드인가</button>
          <button onClick={() => window.open('https://hypnotic-gymnast-e68.notion.site/2b497ed64f41806a9e6ff1df39f15cea?source=copy_link', '_blank')} className="text-left text-textMain font-medium py-2">이용 가이드</button>
          <button onClick={() => scrollToSection('mentor')} className="text-left text-textMain font-medium py-2">멘토 지원</button>
          <button
            onClick={() => window.open('https://hypnotic-gymnast-e68.notion.site/2b497ed64f41806a9e6ff1df39f15cea?source=copy_link', '_blank')}
            className="bg-primary text-white w-full py-3 rounded-lg font-bold text-center"
          >
            지금 시작하기
          </button>
        </div>
      )}
    </header>
  );
};