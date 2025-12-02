import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { MentoringPage } from './pages/MentoringPage';
import { PaymentSuccessPage } from './pages/PaymentSuccessPage';
import { PaymentFailPage } from './pages/PaymentFailPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans bg-[#F7F5F3]">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/mentoring" element={<MentoringPage />} />
            <Route path="/payment/success" element={<PaymentSuccessPage />} />
            <Route path="/payment/fail" element={<PaymentFailPage />} />
          </Routes>
        </main>

        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  );
};

export default App;
