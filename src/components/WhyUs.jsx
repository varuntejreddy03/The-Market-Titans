import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyUs = () => {
  const benefits = [
    'Lower Cost Per Acquisition', 'Scalable Sales Operations',
    '24/7 Customer Support', 'Higher Profit Margins',
    'Offshore Talent Pool', 'Guaranteed Success Path',
  ];

  const stats = [
    { number: '$4/hr', label: 'BPO Starting Price', desc: 'Pre-trained offshore agents, fully managed from day one.' },
    { number: '14',    label: 'Days to Go Live',    desc: 'From kickoff call to active team deployment.' },
    { number: '24/7',  label: 'Always On',          desc: 'Round-the-clock operations, zero downtime.' },
  ];

  return (
    <section id="whyus" className="bg-navy py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#D4A017 0,#D4A017 1px,transparent 1px,transparent 24px)' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">

          {/* Stats — first on mobile */}
          <div className="grid grid-cols-1 gap-6 order-1 lg:order-2">
            {stats.map((stat, i) => (
              <div key={i} className="reveal bg-navy-card border-l-4 border-gold p-8 rounded-r-2xl flex items-center gap-8 group hover:-translate-y-1 transition-all duration-300 shadow-xl card-hover cursor-pointer">
                <div className="font-display text-gold font-bold leading-none min-w-[100px]" style={{ fontSize: '52px' }}>{stat.number}</div>
                <div>
                  <h4 className="font-heading text-white font-normal text-xl mb-1">{stat.label}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Copy */}
          <div className="reveal order-2 lg:order-1">
            <span className="section-tag mb-5 block">WHY THE MARKET TITANS</span>
            <h2 className="font-heading text-white font-normal leading-tight mb-8" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
              We Bridge U.S. Ambition<br />with Global Power
            </h2>
            <div className="border-l-4 border-gold pl-6 mb-12">
              <p className="text-white/50 text-lg leading-relaxed italic">
                Our model is built for the modern entrepreneur. We remove the physical and financial hurdles of domestic scaling by leveraging optimized global teams and high-conversion systems.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-colors duration-300 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold group-hover:text-navy" />
                  </div>
                  <span className="text-white font-medium text-[15px] group-hover:text-gold transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
