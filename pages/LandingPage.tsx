import React, { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { MentorPool } from '../components/MentorPool';
import { ServiceSection } from '../components/ServiceSection';
import { MentorSection } from '../components/MentorSection';
import { SurveyCTA } from '../components/SurveyCTA';
import { ArrowUp } from 'lucide-react';

export const LandingPage: React.FC = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Hero />
            <MentorPool />
            <ServiceSection />
            <MentorSection />
            <SurveyCTA />

            {/* Floating Action Button for Mobile/Desktop */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-white text-primary p-3 rounded-full shadow-lg border border-gray-200 z-40 hover:bg-gray-50 transition-all animate-fade-in"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </button>
            )}

            {/* Mobile Sticky CTA */}
            {/*
            <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <button
                    onClick={() => window.open('https://forms.gle/WRvrWghuSwGsf2ZQ7', '_blank')}
                    className="w-full bg-primary text-white py-3 rounded-xl font-bold shadow-md active:bg-primary/90"
                >
                    다 퍼줄때 야무지게 받으러가기
                </button>
            </div>
            */}
            {/* Padding for mobile sticky bottom */}
            {/*
            <div className="md:hidden h-20"></div>
            */}
        </>
    );
};
