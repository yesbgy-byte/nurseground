import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkHeader, setIsDarkHeader] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSlideChange = (e: CustomEvent) => {
      // Slide index 1 is the dark slide
      setIsDarkHeader(e.detail.slideIndex === 1);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hero-slide-change', handleSlideChange as EventListener);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hero-slide-change', handleSlideChange as EventListener);
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      // Clear state
      navigate('/', { replace: true, state: {} });
    }
  }, [location, navigate]);

  // Determine text color: White if (Dark Header AND Not Scrolled), otherwise default dark gray
  // Also force default color if mobile menu is open (since mobile menu bg is white)
  const textColorClass = (isDarkHeader && !isScrolled && !isMobileMenuOpen) ? 'text-white hover:text-white/80' : 'text-textSub hover:text-primary';
  const logoSrc = (isDarkHeader && !isScrolled && !isMobileMenuOpen) ? '/assets/logo-white.png' : '/assets/logo.png';
  // Note: Assuming you might want a white logo later. For now, we'll keep using the same logo but maybe add brightness filter if needed.
  // Actually, let's stick to text color changes first. If logo needs change, user will ask.

  // Dynamic logo filter for dark mode
  const logoStyle = (isDarkHeader && !isScrolled && !isMobileMenuOpen) ? { filter: 'brightness(0) invert(1)' } : {};

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img
            src="/assets/logo.png"
            alt="NurseGround"
            className="h-[50px] md:h-[60px] w-auto transition-all duration-300"
            style={logoStyle}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection('problem')} className={`${textColorClass} font-medium transition-colors`}>왜 널스그라운드인가</button>
          <Link to="/mentoring" className={`${textColorClass} font-medium transition-colors`}>1:1 멘토링</Link>
          <button onClick={() => window.open('https://nurseground.notion.site/2b797ed64f41802688b5ed05fe63c13a', '_blank')} className={`${textColorClass} font-medium transition-colors`}>이용 가이드</button>
          <button onClick={() => scrollToSection('mentor')} className={`${textColorClass} font-medium transition-colors`}>멘토 지원</button>
          <button
            onClick={() => window.open('https://forms.gle/WRvrWghuSwGsf2ZQ7', '_blank')}
            className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
          >
            지금 시작하기
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className={`md:hidden ${isDarkHeader && !isScrolled ? 'text-white' : 'text-primary'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} className="text-primary" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
          <button onClick={() => scrollToSection('problem')} className="text-left text-textMain font-medium py-2">왜 널스그라운드인가</button>
          <Link to="/mentoring" className="text-left text-textMain font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>1:1 멘토링</Link>
          <button onClick={() => window.open('https://nurseground.notion.site/2b797ed64f41802688b5ed05fe63c13a', '_blank')} className="text-left text-textMain font-medium py-2">이용 가이드</button>
          <button onClick={() => scrollToSection('mentor')} className="text-left text-textMain font-medium py-2">멘토 지원</button>
          <button
            onClick={() => window.open('https://forms.gle/WRvrWghuSwGsf2ZQ7', '_blank')}
            className="bg-primary text-white w-full py-3 rounded-lg font-bold text-center"
          >
            지금 시작하기
          </button>
        </div>
      )}
    </header>
  );
};