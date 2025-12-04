import React from 'react';
import { Briefcase, Building2, Globe2, Stethoscope, GraduationCap } from 'lucide-react';

const MENTOR_CATEGORIES = [
  { icon: <Stethoscope size={24} />, name: '산업간호사', count: '12명' },
  { icon: <Briefcase size={24} />, name: 'CRA/CRC', count: '18명' },
  { icon: <Building2 size={24} />, name: '공기업/공무원', count: '8명' },
  { icon: <Globe2 size={24} />, name: '해외 간호사', count: '15명' },
  { icon: <GraduationCap size={24} />, name: '보건교사', count: '6명' },
];

const FEATURED_MENTORS = [
  {
    id: 1,
    role: '보험심사간호사',
    exp: '경력 5년차',
    prev: '전) Big 5 대학병원 근무',
    desc: '임상 경력을 바탕으로 병원의 수익과 환자의 권리를 지키는 보험심사 전문가입니다. 3교대 없는 상근직의 삶, 준비 과정부터 실무 이야기까지 들려드려요.',
    tags: ['상근직', '워라밸', '병원행정']
  },
  {
    id: 2,
    role: '임상전담간호사',
    exp: '경력 7년차',
    prev: '현) 수도권 상급종합병원 재직',
    desc: '한 분야의 깊이 있는 전문가로 성장하고 싶으신가요? 현직자가 들려주는 임상전담간호사의 비전과 커리어 로드맵을 공유합니다.',
    tags: ['전문성', '커리어성장', '직무만족도']
  },
  {
    id: 3,
    role: '국내 제약회사 CRA',
    exp: '경력 4년차',
    prev: '전) 대학병원 병동 근무',
    desc: '간호사 면허를 살려 제약 산업의 핵심 인재로 거듭났습니다. 임상 간호사에서 기업으로의 성공적인 이직 준비 꿀팁과 현장 노하우를 알려드립니다.',
    tags: ['제약업계', '이직성공', '기업문화']
  }
];

export const MentorPool: React.FC = () => {
  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full text-sm">Mentors</span>
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mt-4 mb-4">
            다양한 직군의<br />
            <span className="text-primary">검증된 멘토 라인업</span>
          </h2>
          <p className="text-textSub text-lg max-w-2xl mx-auto">
            막막한 탈임상, 먼저 길을 개척한 선배들에게 직접 물어보세요.<br/>
            인터넷엔 없는 '진짜' 정보를 들려드립니다.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {MENTOR_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-base px-6 py-3 rounded-full hover:bg-point/20 transition-colors cursor-pointer border border-transparent hover:border-point">
              <span className="text-textSub">{cat.icon}</span>
              <span className="font-bold text-textMain">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Featured Mentors Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_MENTORS.map((mentor) => (
            <div key={mentor.id} className="bg-white border border-gray-100 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group min-h-[520px] flex flex-col">
              <div className="absolute top-0 right-0 bg-point/30 text-primary px-4 py-1 rounded-bl-xl font-bold text-sm">
                검증된 멘토
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                  👩‍⚕️
                </div>
                <div>
                  <h3 className="font-bold text-xl text-textMain">{mentor.role}</h3>
                  <p className="text-primary font-medium">{mentor.exp}</p>
                </div>
              </div>

              <div className="bg-base rounded-xl p-4 mb-8">
                <p className="text-sm text-textSub font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  {mentor.prev}
                </p>
              </div>

              <p className="text-textSub mb-8 leading-relaxed min-h-[120px] text-lg">
                "{mentor.desc}"
              </p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {mentor.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-md">#{tag}</span>
                ))}
              </div>
              
              <button className="w-full border border-primary text-primary py-4 rounded-lg font-bold hover:bg-primary hover:text-white transition-colors text-lg">
                1:1 멘토링 신청하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};