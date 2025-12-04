import React from 'react';
import { ArrowRight, BookOpen, Gift } from 'lucide-react';

export const SurveyCTA2: React.FC = () => {
  const handleSurveyLink = () => {
    // Replace with actual Google Form or Typeform URL
    window.open('https://forms.gle/WRvrWghuSwGsf2ZQ7', '_blank');
  };

  return (
    <section id="survey" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">

          {/* Left: Text Content */}
          <div className="w-full md:w-3/5 text-left">
            <div className="inline-flex items-center gap-2 bg-point text-textMain px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Gift size={16} />
              <span>오직 런칭 전 사전예약 기간만!</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="text-point">"간호업계의 모든 것"</span><br />
              전자책을 무료로 드립니다.
            </h2>

            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              산업간호사, CRA, 공무원 등 <strong>탈임상 직군별 정보</strong>와<br />
              <strong>현직자들의 현실적인 조언</strong>을 한 권에 담았습니다.<br />
              설문에 참여하고 전자책과 멘토링 50% 할인 혜택을 받아가세요.
            </p>

            <button
              onClick={handleSurveyLink}
              className="w-full md:w-auto bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-gray-50 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              설문 3분 참여하고 혜택 받기 <ArrowRight size={20} />
            </button>
          </div>

          {/* Right: Visual Element representing E-Book */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-80 bg-white rounded-r-2xl rounded-l-md shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 border-l-8 border-gray-200 flex flex-col items-center justify-center p-6 text-center">
              <BookOpen size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-extrabold text-textMain mb-2">NURSE<br />CAREER<br />GUIDE</h3>
              <div className="w-16 h-1 bg-point my-4"></div>
              <p className="text-sm text-textSub">간호사를 위한<br />커리어 로드맵 완전정복</p>
              <div className="absolute bottom-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded">PDF ver.</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};