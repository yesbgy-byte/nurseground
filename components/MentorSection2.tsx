import React from 'react';
import { ArrowRight } from 'lucide-react';

export const MentorSection2: React.FC = () => {
  return (
    <section id="mentor" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="md:w-2/3">
            <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">For Mentors</span>
            <h2 className="text-2xl font-bold text-textMain mb-3">
              선배 간호사님의 경험을 나눠주세요
            </h2>
            <p className="text-textSub leading-relaxed">
              후배들의 길잡이가 되어주실 멘토님을 모십니다. <br className="hidden sm:block" />
              수익 창출, 퍼스널 브랜딩, 그리고 네트워킹의 기회를 널스그라운드에서 만나보세요.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-start md:justify-end w-full">
            <a
              href="https://forms.gle/XfAcsZCEGfoQq9oj9"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 bg-white text-textMain font-medium hover:border-primary hover:text-primary transition-all duration-200"
            >
              <span>멘토 지원하기</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};