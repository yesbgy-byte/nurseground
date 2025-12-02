import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export const PaymentSuccessPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [isConfirming, setIsConfirming] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const confirmPayment = async () => {
            const paymentKey = searchParams.get('paymentKey');
            const orderId = searchParams.get('orderId');
            const amount = searchParams.get('amount');

            if (!paymentKey || !orderId || !amount) {
                setIsConfirming(false);
                setErrorMessage('결제 정보가 부족합니다.');
                return;
            }

            try {
                const response = await fetch('/api/confirm-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        paymentKey,
                        orderId,
                        amount,
                    }),
                });

                if (!response.ok) {
                    const json = await response.json();
                    throw new Error(json.message || '결제 승인에 실패했습니다.');
                }

                setIsSuccess(true);
            } catch (error: any) {
                setErrorMessage(error.message);
            } finally {
                setIsConfirming(false);
            }
        };

        confirmPayment();
    }, [searchParams]);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
            {isConfirming ? (
                <div className="text-center">
                    <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800">결제 승인 중입니다...</h2>
                    <p className="text-gray-600 mt-2">잠시만 기다려주세요.</p>
                </div>
            ) : isSuccess ? (
                <div className="text-center">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">결제가 완료되었습니다!</h2>
                    <p className="text-gray-600 mb-8">멘토링 신청이 성공적으로 접수되었습니다.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">결제에 실패했습니다.</h2>
                    <p className="text-red-600 mb-8">{errorMessage}</p>
                    <button
                        onClick={() => navigate('/mentoring')}
                        className="bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-bold hover:bg-gray-300 transition-colors"
                    >
                        다시 시도하기
                    </button>
                </div>
            )}
        </div>
    );
};
