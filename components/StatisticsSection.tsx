import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from 'recharts';
import { ChartDataPoint, ResignationTrendData, ResignationReasonData } from '../types';

const EXP_DATA: ChartDataPoint[] = [
  { name: '1년 미만', value: 43.4, fill: '#00655C' }, // Primary
  { name: '1~3년', value: 20.5, fill: '#2C847C' },
  { name: '3~5년', value: 16.7, fill: '#58A39C' },
  { name: '5년 이상', value: 19.4, fill: '#D1D5DB' },
];

const NEW_NURSE_TREND: ResignationTrendData[] = [
  { year: '2018', rate: 42.7 },
  { year: '2019', rate: 45.5 },
  { year: '2020', rate: 47.7 },
  { year: '2021', rate: 52.8 },
  { year: '2022', rate: 57.4 },
];

const REASON_DATA: ResignationReasonData[] = [
  { reason: '업무 과다/부적응', percentage: 20.8 },
  { reason: '타 병원 이동', percentage: 14.4 },
  { reason: '질병/건강', percentage: 11.2 },
  { reason: '탈간호(직종전환)', percentage: 10.8 },
  { reason: '교대근무', percentage: 6.3 },
];

export const StatisticsSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-lg mb-3 tracking-wide">REALITY CHECK</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-textMain mb-6">
            간호사의 현실,<br className="md:hidden" /> 숫자가 말해줍니다.
          </h3>
          <p className="text-textSub text-lg max-w-2xl mx-auto">
            나만 힘든 게 아닙니다. 구조적인 문제입니다. <br/>
            우리는 건강하지 못한 시스템 속에서 길을 잃고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Experience Distribution */}
          <div className="bg-base rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-textMain mb-2">떠나는 간호사 10명 중 8명은</h4>
            <p className="text-primary font-bold text-2xl mb-6">5년차 미만 저연차</p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={EXP_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {EXP_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    itemStyle={{ color: '#1F2937', fontWeight: 600 }}
                  />
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-textMain font-bold text-lg">
                    80.6%
                  </text>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">2023년 병원간호인력 배치현황 실태조사</p>
          </div>

          {/* Card 2: Rising Trend */}
          <div className="bg-base rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-textMain mb-2">치솟는 신규 간호사 사직률</h4>
            <p className="text-red-500 font-bold text-2xl mb-6">5년새 14.7%p 급등</p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={NEW_NURSE_TREND} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} domain={[30, 60]} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#00655C" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: '#00655C', strokeWidth: 2, stroke: '#fff' }} 
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">2018-2022 신규 간호사 1년 내 사직률</p>
          </div>

           {/* Card 3: Reasons */}
           <div className="bg-base rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-textMain mb-2">병원을 떠나는 이유</h4>
            <p className="text-primary font-bold text-2xl mb-6">업무 과다 및 부적응 1위</p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={REASON_DATA} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="reason" width={80} tick={{fontSize: 11, fill: '#4B5563'}} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px' }} />
                  <Bar dataKey="percentage" fill="#AFDAF0" radius={[0, 4, 4, 0]} barSize={20}>
                    {REASON_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#00655C' : '#AFDAF0'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">2024년 공개 임상 간호사 사직 사유</p>
          </div>

        </div>
      </div>
    </section>
  );
};