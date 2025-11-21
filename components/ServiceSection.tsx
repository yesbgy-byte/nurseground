import React from 'react';
import { Compass, UserCheck, MessageCircle } from 'lucide-react';

export const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-point font-bold tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mt-2">
            간호사 커리어의<br />
            <span className="text-primary">원스톱 생태계</span>
          </h2>
        </div>

        <div className="space-y-24">

          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="bg-base rounded-3xl p-8 md:p-12">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6">
                  <Compass size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textMain mb-4">맞춤형 커리어 로드맵</h3>
                <p className="text-textSub mb-6 leading-relaxed">
                  임상 경력을 살린 이직부터 완전히 새로운 분야로의 도전까지.<br />
                  산업간호사, CRA, 심사간호사, 공무원, 해외진출 등<br />
                  간호사 면허로 갈 수 있는 모든 길을 큐레이션합니다.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-textMain">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    비/임상 직군 포괄 채용 정보
                  </li>
                  <li className="flex items-center gap-2 text-sm text-textMain">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    커리어 진단 & 개인 맞춤 추천
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img src="/assets/career_roadmap.png" alt="Career Roadmap" className="rounded-3xl shadow-xl w-full object-cover h-64 md:h-96" />
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img src="/assets/mentoring_session.png" alt="Mentoring" className="rounded-3xl shadow-xl w-full object-cover h-64 md:h-96" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-base rounded-3xl p-8 md:p-12">
                <div className="w-12 h-12 bg-point text-textMain rounded-xl flex items-center justify-center mb-6">
                  <UserCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textMain mb-4">현직자 1:1 멘토링</h3>
                <p className="text-textSub mb-6 leading-relaxed">
                  인터넷 검색으로는 알 수 없는 '진짜' 이야기를 듣습니다.<br />
                  내가 가고 싶은 길을 먼저 걸어간 선배의<br />
                  생생한 경험과 실질적인 조언을 만나보세요.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-textMain">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    직무별 검증된 멘토풀 보유
                  </li>
                  <li className="flex items-center gap-2 text-sm text-textMain">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    자소서 첨삭 및 모의 면접
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="bg-base rounded-3xl p-8 md:p-12">
                <div className="w-12 h-12 bg-white border-2 border-primary text-primary rounded-xl flex items-center justify-center mb-6">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-textMain mb-4">안전한 커뮤니티</h3>
                <p className="text-textSub mb-6 leading-relaxed">
                  비슷한 고민을 가진 동료들과 연결됩니다.<br />
                  무조건적인 위로보다 문제 인식을 공유하고,<br />
                  건강하게 커리어를 설계하는 동료를 만납니다.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-textMain">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    익명 기반의 솔직한 소통
                  </li>
                  <li className="flex items-center gap-2 text-sm text-textMain">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    정서적 회복을 돕는 콘텐츠
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img src="/assets/community_support.png" alt="Community" className="rounded-3xl shadow-xl w-full object-cover h-64 md:h-96" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};