import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const MentorSection: React.FC = () => {
  return (
    <section id="mentor" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
          <Sparkles size={16} className="text-primary" />
          <span className="font-medium text-textSub text-sm">For Mentors</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-textMain mb-4">
          후배들의 길잡이가 되어주시겠습니까?
        </h2>
        <p className="text-textSub mb-10 max-w-2xl mx-auto leading-relaxed">
          당신의 경험은 누군가에게 가장 확실한 지도가 됩니다.<br />
          널스그라운드 멘토로 활동하며 새로운 가치를 만들어보세요.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-primary">수익 창출</h4>
            <p className="text-sm text-textSub">멘토링, 강연, 콘텐츠 제작 등 다양한 방식으로 부수입을 창출하세요.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-primary">퍼스널 브랜딩</h4>
            <p className="text-sm text-textSub">자신의 전문성을 알리고 업계 내 영향력 있는 리더로 성장하세요.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-primary">네트워킹</h4>
            <p className="text-sm text-textSub">다양한 분야의 열정적인 간호사 멘토들과 교류할 수 있습니다.</p>
          </div>
        </div>

        <a
          href="https://forms.gle/d82VPXf9usBpktr16"
          className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors border-b border-transparent hover:border-primary pb-0.5"
        >
          멘토 지원하러 가기 <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};