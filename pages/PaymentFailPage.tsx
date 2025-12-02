import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react';

export const PaymentFailPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const message = searchParams.get('message') || '알 수 없는 오류가 발생했습니다.';
    const code = searchParams.get('code');

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
            <div className="text-center">
                <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">결제 요청이 실패했습니다.</h2>
                <div className="bg-red-50 p-4 rounded-lg mb-8 text-left inline-block">
                    <p className="text-red-700 font-medium">오류 내용: {message}</p>
                    {code && <p className="text-red-500 text-sm mt-1">에러 코드: {code}</p>}
                </div>
                <div>
                    <button
                        onClick={() => navigate('/mentoring')}
                        className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
                    >
                        다시 시도하기
                    </button>
                </div>
            </div>
        </div>
    );
};
