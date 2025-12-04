import React from 'react';
import { ClipboardEdit, UserCheck, MessageSquare } from 'lucide-react';

export const MentoringProcess: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
            복잡한 절차 없이,<br />
            <span className="text-primary">초간단 3단계</span>로 시작하세요
          </h2>
          <p className="text-textSub">
            원하는 멘토를 찾고, 신청서를 쓰면 끝. 모든 과정은 익명으로 안전하게 진행됩니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center mb-6 shadow-lg z-10">
              <span className="text-3xl font-bold text-primary">1</span>
            </div>
            <div className="bg-base p-6 rounded-xl w-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-center mb-4 text-primary">
                <ClipboardEdit size={40} />
              </div>
              <h3 className="text-xl font-bold text-textMain mb-2">신청서 작성하기</h3>
              <p className="text-textSub text-sm leading-relaxed">
                현재 커리어 정보(연차, 부서)와<br/>
                가장 고민되는 질문들을<br/>
                간단하게 작성해주세요.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
             <div className="w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center mb-6 shadow-lg z-10">
              <span className="text-3xl font-bold text-primary">2</span>
            </div>
            <div className="bg-base p-6 rounded-xl w-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-center mb-4 text-primary">
                <UserCheck size={40} />
              </div>
              <h3 className="text-xl font-bold text-textMain mb-2">멘토 매칭 & 확정</h3>
              <p className="text-textSub text-sm leading-relaxed">
                희망하는 멘토를 선택하면<br/>
                매칭 담당자가 확인 후<br/>
                일정을 조율하고 확정합니다.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
             <div className="w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center mb-6 shadow-lg z-10">
              <span className="text-3xl font-bold text-primary">3</span>
            </div>
            <div className="bg-base p-6 rounded-xl w-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-center mb-4 text-primary">
                <MessageSquare size={40} />
              </div>
              <h3 className="text-xl font-bold text-textMain mb-2">멘토링 진행</h3>
              <p className="text-textSub text-sm leading-relaxed">
                약속된 시간에 줌(Zoom)이나<br/>
                채팅으로 1:1 상담을<br/>
                진행합니다.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <button onClick={() => document.getElementById('survey')?.scrollIntoView({behavior: 'smooth'})} className="bg-textMain text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-colors">
                지금 바로 멘토 찾으러 가기
            </button>
        </div>
      </div>
    </section>
  );
};