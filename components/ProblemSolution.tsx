import React from 'react';
import { Search, Users, HeartHandshake } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-base/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
            왜 간호사의 커리어 준비는<br />
            늘 외롭고 막막할까요?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Problem 1 */}
          <div className="group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
                <Search className="w-8 h-8 text-gray-400 group-hover:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-textMain mb-3">정보의 파편화</h3>
              <p className="text-textSub leading-relaxed mb-6">
                "탈임상 정보, 어디서 찾죠?"<br />
                알음알음 듣는 카더라 통신,<br />
                신뢰하기 힘든 정보의 홍수.
              </p>
            </div>
            <div className="hidden md:block w-px h-24 bg-gray-200 mx-auto my-4"></div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 transform translate-y-2 group-hover:-translate-y-1 transition-transform duration-300">
              <p className="text-primary font-bold mb-2">체계적인 로드맵</p>
              <p className="text-sm text-textSub">경로별 이직/탈임상<br />실질적 정보 큐레이션</p>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
                <Users className="w-8 h-8 text-gray-400 group-hover:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-textMain mb-3">고립된 준비 과정</h3>
              <p className="text-textSub leading-relaxed mb-6">
                "주변엔 다 병원 간호사뿐..."<br />
                롤모델을 찾기 어렵고<br />
                혼자 결정해야 하는 불안함.
              </p>
            </div>
            <div className="hidden md:block w-px h-24 bg-gray-200 mx-auto my-4"></div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 transform translate-y-2 group-hover:-translate-y-1 transition-transform duration-300">
              <p className="text-primary font-bold mb-2">연결과 지지</p>
              <p className="text-sm text-textSub">현직자 멘토링 및<br />커뮤니티 네트워크</p>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
                <HeartHandshake className="w-8 h-8 text-gray-400 group-hover:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-textMain mb-3">감정적 소외</h3>
              <p className="text-textSub leading-relaxed mb-6">
                "환자는 돌보지만 나는..."<br />
                번아웃과 자존감 하락,<br />
                누구도 돌봐주지 않는 내 마음.
              </p>
            </div>
            <div className="hidden md:block w-px h-24 bg-gray-200 mx-auto my-4"></div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm border border-primary/10 transform translate-y-2 group-hover:-translate-y-1 transition-transform duration-300">
              <p className="text-primary font-bold mb-2">회복과 성장</p>
              <p className="text-sm text-textSub">정서적 지지 기반의<br />안전한 커뮤니티</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};