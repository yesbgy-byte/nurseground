import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Dispatch custom event when slide changes
  useEffect(() => {
    const event = new CustomEvent('hero-slide-change', { detail: { slideIndex: currentSlide } });
    window.dispatchEvent(event);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentSlide(1);
      } else {
        // Swipe right - previous slide
        setCurrentSlide(0);
      }
    }
  };

  return (
    <section
      className="relative h-[800px] overflow-hidden bg-[#F7F5F3]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div
        className="w-full h-full transition-transform duration-700 ease-in-out flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Slide 1: Original Content */}
        <div className="w-full h-full flex-shrink-0 relative flex items-center justify-center pt-20">
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-point/10 to-primary/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="animate-fade-in-up space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary font-medium text-sm tracking-wide">간호사를 위한 커리어 플랫폼</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-textMain leading-tight tracking-tight break-keep">
                커리어의 <span className="text-primary relative inline-block">
                  기반
                  <svg className="absolute w-full h-2 bottom-1 left-0 text-point/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span><span className="whitespace-nowrap">이 되어주는 곳,</span><br />
                <span className="block mt-2">널스그라운드</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-textSub max-w-2xl mx-auto leading-relaxed font-light break-keep">
                널스그라운드가 선생님의 취직부터 이직,<br className="hidden md:block" />
                성공적인 탈임상까지 모든 과정을 돕겠습니다.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <button
                  onClick={() => window.open('https://forms.gle/WRvrWghuSwGsf2ZQ7', '_blank')}
                  className="group relative flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">설문참여하고 오픈기념 혜택 받기</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>

                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center px-8 py-4 rounded-full font-medium text-textSub bg-white border border-gray-200 hover:bg-gray-50 hover:text-primary transition-all duration-200"
                >
                  서비스 둘러보기
                </button>
              </div>

              {/* Social Proof */}
              <p className="text-sm text-gray-400 pt-4">
                * 설문 참여 시 1:1 멘토링 할인쿠폰을 드립니다.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2: New Image Content */}
        <div className="w-full h-full flex-shrink-0 relative flex items-center bg-[#11544b]">
          {/* Max Width Container for Image */}
          <div className="w-full h-full max-w-[1920px] mx-auto relative">
            {/* Background Image with Gradient Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-500"
            >
              {/* Responsive Background Image */}
              <style>{`
                .slide-2-bg {
                  background-image: url(/assets/hero-slide-2-mobile.jpg);
                  background-position: center bottom;
                  background-size: cover;
                }
                @media (min-width: 768px) {
                  .slide-2-bg {
                    background-image: url(/assets/hero-slide-2.png);
                    background-position: left center;
                    background-size: cover;
                  }
                }
              `}</style>
              <div className="absolute inset-0 slide-2-bg"></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11544b] via-transparent to-transparent md:bg-[linear-gradient(90deg,#11544b_0%,transparent_10%,transparent_60%,#11544b_100%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center md:justify-end items-center h-full pb-20 md:pb-0">
              <div className="max-w-xl text-center md:text-right text-white space-y-8 md:pr-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg break-keep">
                  뭐든 말해봐,<br />
                  널스그라운드에서
                </h1>

                <button
                  onClick={() => navigate('/mentoring')}
                  className="group relative inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <span>고민 해결하기</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-primary/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};