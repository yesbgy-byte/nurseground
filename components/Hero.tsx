import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden bg-[#F7F5F3]">
      {/* Background Decoration - More subtle and centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-point/10 to-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="animate-fade-in-up space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary font-medium text-sm tracking-wide">간호사를 위한 커리어 플랫폼</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textMain leading-tight tracking-tight">
            커리어의 <span className="text-primary relative inline-block">
              기반
              <svg className="absolute w-full h-2 bottom-1 left-0 text-point/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>이 되어주는 곳,<br />
            <span className="block mt-2">널스그라운드</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-textSub max-w-2xl mx-auto leading-relaxed font-light">
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

          {/* Social Proof / Trust text (Optional) */}
          <p className="text-sm text-gray-400 pt-4">
            * 설문 참여 시 1:1 멘토링 할인쿠폰을 드립니다.
          </p>
        </div>
      </div>
    </section>
  );
};