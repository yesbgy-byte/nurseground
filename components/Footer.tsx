import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-white text-xl font-bold mb-4">NurseGround</h2>
            <p className="text-sm mb-4 max-w-md">
              간호사가 자신의 삶과 커리어를 건강하게 설계할 수 있도록 돕습니다.<br />
              커리어 고민이 있을 때 가장 먼저 찾는 간호사 커리어 플랫폼.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">nurseground.official@gmail.com</p>
            <p className="text-sm"></p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nurseground/" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://www.threads.com/@nurseground" className="hover:text-white transition-colors">Threads</a>
              <a href="https://pf.kakao.com/_kKUpn" className="hover:text-white transition-colors">Youtube</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-xs text-center">
          <p>&copy; 2025 NurseGround. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
