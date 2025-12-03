import React from 'react';

export const MentoringPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto py-20 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-primary">1:1 멘토링 신청</h1>

            <div className="bg-white p-4 rounded-2xl shadow-lg flex justify-center mb-8">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdukq997s8Az0v0axcB3gA8R31NSnCauul0cWNNDArmW5-ghA/viewform?embedded=true"
                    width="640"
                    height="4500"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                    title="Mentoring Survey"
                    className="overflow-hidden"
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
                        href="https://s.tosspayments.com/BmuBaP4IZGU"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors"
                    >
                        결제하기
                    </a>
                </div>
            </div>
        </div>
    );
};
