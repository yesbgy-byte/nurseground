import React from 'react';
import { ArrowRight, Gift } from 'lucide-react';

export const SurveyCTA: React.FC = () => {
  const handleSurveyLink = () => {
    // Replace with actual Google Form or Typeform URL
    // TODO: Update this link with the real survey URL
    window.open('https://forms.google.com', '_blank');
  };

  return (
    <section id="survey" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-point/20 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 md:flex items-stretch">

          {/* Left Content */}
          <div className="p-10 md:p-16 md:w-2/3 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
              <Gift size={20} />
              <span>사전 예약 혜택</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-6 leading-snug">
              여러분의 소중한 의견이<br />
              <span className="text-primary">널스그라운드</span>를 만듭니다.
            </h2>
            <p className="text-textSub text-lg mb-8 leading-relaxed">
              지금 설문에 참여하여 여러분의 고민을 들려주세요.<br />
              참여해주신 모든 분께 서비스 런칭 시 사용 가능한<br />
              <span className="font-bold text-textMain underline decoration-point/50 decoration-4 underline-offset-4">1:1 멘토링 50% 할인 쿠폰</span>을 드립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSurveyLink}
                className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-primary/90 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                설문조사 참여하기 <ArrowRight size={20} />
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              * 소요 시간: 약 3분 내외
            </p>
          </div>

          {/* Right Visual (Simple Abstract or Graphic) */}
          <div className="bg-primary/10 md:w-1/3 flex items-center justify-center p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-90"></div>
            <div className="relative z-10 text-white text-center">
              <div className="text-6xl font-bold mb-2">50%</div>
              <div className="text-xl font-medium opacity-90">OFF</div>
              <div className="w-12 h-1 bg-white/30 mx-auto my-4"></div>
              <p className="text-sm opacity-80">Early Access<br />Special Benefit</p>
            </div>
            {/* Circle deco */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-point/30 rounded-full blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};