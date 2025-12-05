import React from 'react';

export const MentoringPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto py-20 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-primary">1:1 멘토링 신청</h1>

            <div className="bg-white p-4 rounded-2xl shadow-lg flex justify-center mb-8">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeUMqXk7z7XEypQlUXtMr6yZRXeErewkyIeylejRs1AuC3wKw/viewform?embedded=true"
                    width="640"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                    title="Mentoring Survey"
                    className="overflow-hidden w-full h-[1200px] md:h-[1000px]"
                >
                    로드 중…
                </iframe>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">상품 정보</h2>
                    <div className="flex justify-between items-center border-b pb-4">
                        <span>1:1 커리어 멘토링(50분)</span>
                        <div>
                            <span className="line-through text-gray-500 mr-2">30,000원</span>
                            <span className="font-bold text-red-500">10,000원</span>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a
                        href="https://wisewhale.shop.blogpay.co.kr/view/good/avAA1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors"
                    >
                        결제하기
                    </a>

                    <div className="mt-6 text-left text-xs text-gray-600 leading-relaxed">
                        <p className="font-semibold mb-2">⚠️ 취소 및 환불 규정 (필독)</p>

                        <div className="mb-3">
                            <p className="font-medium mb-1">일정 예약 전</p>
                            <ul className="list-none space-y-1 ml-2">
                                <li>• 조건 없이 100% 환불 가능합니다.</li>
                                <li>• 단, 멘토 매칭 후 영업일 기준 5일 이내에 일정을 확정하지 않으시면 이용권이 자동 소멸되며 환불이 불가합니다.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium mb-1">일정 예약 확정 후</p>
                            <ul className="list-none ml-2">
                                <li>• 멘토링 진행 24시간 전부터는 취소 및 환불이 불가하오니 신중하게 일정을 선택해 주시기 바랍니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
