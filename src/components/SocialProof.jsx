import React from 'react';

const stats = [
  { value: '$4',   suffix: '/hr',  label: 'BPO Starting Price',   sub: 'Per agent, fully managed'     },
  { value: '14',   suffix: ' days', label: 'Live in 14 Days',      sub: 'From kickoff to deployment'   },
  { value: '24/7', suffix: '',      label: 'Always On',            sub: 'Round-the-clock operations'   },
  { value: '0',    suffix: ' HR',   label: 'Zero Overhead',        sub: 'No hiring, no benefits cost'  },
];

const SocialProof = () => (
  <section className="bg-[#07091E] border-t border-b border-white/5 relative z-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
        {stats.map(({ value, suffix, label, sub }) => (
          <div key={label} className="text-center group py-10 lg:py-12 px-4">
            <div className="font-display text-gold font-bold leading-none tracking-tight mb-3" style={{ fontSize: 'clamp(36px,5vw,52px)' }}>
              {value}<span className="text-gold/70" style={{ fontSize: 'clamp(18px,2.5vw,26px)' }}>{suffix}</span>
            </div>
            <div className="w-8 h-0.5 bg-gold mx-auto mb-3 opacity-30 group-hover:opacity-100 group-hover:w-12 transition-all duration-500" />
            <div className="section-tag mb-1">{label}</div>
            <div className="text-white/30 text-[11px] font-label tracking-wide">{sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
