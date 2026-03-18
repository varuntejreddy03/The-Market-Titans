import React from 'react';

const steps = [
  { number: '01', title: 'Free Consultation', desc: 'We learn your goals and run a deep audit of your current operations.' },
  { number: '02', title: 'Custom Strategy', desc: 'We build your growth plan, aligning marketing with your sales goals.' },
  { number: '03', title: 'Team Deployment', desc: 'Offshore or domestic teams go live within 14 days.' },
  { number: '04', title: 'Scale & Grow', desc: 'We track every dollar of ROI, optimize daily, and repeat what works.' },
];

const HowItWorks = () => (
  <section id="howitworks" className="bg-bg-light py-24 relative overflow-visible">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <span className="section-tag mb-5 block">OUR EXECUTION BLUEPRINT</span>
        <h2 className="font-heading text-navy font-normal leading-tight mb-6" style={{ fontSize: 'clamp(30px,4vw,52px)' }}>
          From Conversation to Revenue<br />in 4 Simple Steps
        </h2>
        <div className="w-20 h-0.5 bg-gold mx-auto"></div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block relative pt-16">
        <div className="absolute top-[108px] left-[12%] right-[12%] h-px border-t-2 border-dashed border-gold/40 z-0"></div>
        <div className="grid grid-cols-4 gap-10 relative z-10">
          {steps.map((step, i) => (
            <div key={i} className="reveal text-center flex flex-col items-center group">
              <div className="relative mb-12">
                <span className="absolute inset-0 rounded-full border-2 border-gold/30 scale-150 animate-pulse group-hover:scale-[1.7] transition-transform duration-500"></span>
                <div className="relative z-10 w-16 h-16 rounded-full bg-navy border-2 border-gold text-gold font-display font-bold text-xl flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(212,160,23,0.4)] group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-white hover:border-gold/20 transition-all duration-400 group-hover:-translate-y-2 cursor-pointer w-full">
                <h3 className="font-heading text-navy font-normal text-xl mb-3">{step.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative">
        <div className="absolute left-8 top-0 bottom-0 w-px border-l-2 border-dashed border-gold/40 z-0"></div>
        <div className="space-y-12 relative z-10">
          {steps.map((step, i) => (
            <div key={i} className="reveal flex items-start gap-8 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-navy border-2 border-gold text-gold font-display font-bold text-xl flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(212,160,23,0.4)]">
                {step.number}
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-white w-full">
                <h3 className="font-heading text-navy font-normal text-xl mb-3">{step.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
