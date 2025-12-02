import React, { useState } from 'react';
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';

const clientKey = 'test_ck_0Poxy1XQL8RjvnyJgkK87nO5Wmlg';

export const MentoringPage: React.FC = () => {
    const [price] = useState(50000);

    const handlePayment = async () => {
        try {
            const tossPayments = await loadTossPayments(clientKey) as any;

            await tossPayments.requestPayment('카드', {
                amount: price,
                orderId: Math.random().toString(36).slice(2),
                orderName: '1:1 멘토링 1회권',
                customerName: '김토스',
                customerEmail: 'customer123@gmail.com',
                successUrl: `${window.location.origin}/payment/success`,
                failUrl: `${window.location.origin}/payment/fail`,
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-20 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-primary">1:1 멘토링 신청</h1>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">상품 정보</h2>
                    <div className="flex justify-between items-center border-b pb-4">
                        <span>1:1 커리어 멘토링 (1시간)</span>
                        <span className="font-bold">{price.toLocaleString()}원</span>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8 text-center text-gray-600">
                    <p>결제 버튼을 누르면 토스페이먼츠 결제창이 열립니다.</p>
                </div>

                <button
                    onClick={handlePayment}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                    {price.toLocaleString()}원 결제하기
                </button>
            </div>
        </div>
    );
};
