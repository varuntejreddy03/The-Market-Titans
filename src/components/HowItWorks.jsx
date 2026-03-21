import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from './NavButtons';

const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'Kickoff call to map your bottlenecks and define your ideal engine structure.' },
    { num: '02', title: 'Custom Build', desc: 'We pre-train and veteran-vet your offshore team to match your specific workflows.' },
    { num: '03', title: 'Launch', desc: 'Go live in as little as 14 days with full operational management and KPI tracking.' },
    { num: '04', title: 'Scale', desc: 'Weekly reviews and optimization cycles ensure your engine only gets faster over time.' },
  ];

  return (
    <section id="howitworks" className="bg-[#1B2A4A] relative z-10 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-white font-[900] leading-tight mb-4" style={{ fontSize: 'clamp(26px,4vw,48px)' }}>
            From Kickoff to Revenue — In 14 Days.
          </h2>
          <p className="text-[#CBD5E0] max-w-xl mx-auto text-[15px] md:text-[16px] leading-relaxed">
            Rapid Onboarding. Pure Results.
          </p>
        </div>

        {/* 4 Steps Section */}
        <div className="relative mb-24">
          {/* Horizontal Timeline (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-[#F5A623] z-0 opacity-50 shadow-[0_0_15px_rgba(245,166,35,0.5)]"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map((s, i) => (
              <div 
                key={i} 
                className="reveal group flex flex-col pt-4 transition-all duration-400"
              >
                <div 
                  className="w-full h-full flex flex-col transition-all duration-400"
                  style={{
                    background: '#162236',
                    borderTop: '3px solid #F5A623',
                    borderRadius: '16px',
                    padding: '28px 20px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="font-display font-[800] leading-none mb-4" style={{ color: '#F5A623', fontSize: 'clamp(32px, 4vw, 44px)' }}>
                    {s.num}
                  </div>
                  <h3 className="font-heading text-white font-bold text-[18px] md:text-[20px] mb-3 uppercase tracking-widest">{s.title}</h3>
                  <p className="font-body text-[#8899AA] text-[14px] md:text-[15px] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="reveal text-center bg-[#162236] rounded-2xl md:rounded-3xl py-8 md:py-10 px-6 shadow-[0_8px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#4DB8E8] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
          
          <h3 className="font-display text-white font-[800] mb-6 relative z-10" style={{ fontSize: 'clamp(20px,3vw,32px)' }}>
            Ready to build your revenue engine?
          </h3>
          <div className="relative z-10">
            <PrimaryButton to="/contact">GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
