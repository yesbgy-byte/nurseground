import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    if (request.method !== 'POST') {
        return response.status(405).json({ message: 'Method not allowed' });
    }

    const { paymentKey, orderId, amount } = request.body;
    const secretKey = process.env.TOSS_SECRET_KEY || 'test_sk_qLlDJaYngroNvkR9bExVezGdRpXx';

    // Base64 encode the secret key
    const basicToken = Buffer.from(secretKey + ':', 'utf-8').toString('base64');

    try {
        const tossResponse = await fetch(
            'https://api.tosspayments.com/v1/payments/confirm',
            {
                method: 'POST',
                headers: {
                    Authorization: `Basic ${basicToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentKey,
                    orderId,
                    amount,
                }),
            }
        );

        const data = await tossResponse.json();

        if (!tossResponse.ok) {
            return response.status(tossResponse.status).json(data);
        }

        return response.status(200).json(data);
    } catch (error: any) {
        return response.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
        });
    }
}
