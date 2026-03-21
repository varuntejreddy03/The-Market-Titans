import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const WhyUs = () => {
  const benefits = [
    'Lower Cost Per Acquisition', 'Scalable Sales Operations',
    '24/7 Customer Support', 'Higher Profit Margins'
  ];

  const stats = [
    { number: '$4/hr', label: 'BPO Starting Price', desc: 'Pre-trained offshore agents, fully managed from day one.' },
    { number: '14',    label: 'Days to Go Live',    desc: 'From kickoff call to active team deployment.' },
    { number: '82%',   label: 'Cost Savings',       desc: 'Average savings vs. hiring equivalent full-time domestic staff.' },
  ];

  return (
    <section id="whyus" style={{ background: '#0D1B2E' }} className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 order-1 lg:order-2">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="reveal flex items-center gap-8 group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{ 
                  background: '#162236', 
                  borderRadius: '12px', 
                  padding: '22px 28px',
                  border: '1px solid rgba(77,184,232,0.1)',
                  borderLeft: '4px solid #F5A623',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div className="font-display font-bold leading-none min-w-[80px]" style={{ color: '#F5A623', fontSize: '40px' }}>{stat.number}</div>
                <div>
                  <h4 className="font-heading text-white font-bold text-xl mb-1">{stat.label}</h4>
                  <p className="text-[#8899AA] text-sm leading-relaxed">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Copy */}
          <div className="reveal order-2 lg:order-1">
            <span className="font-label text-[11px] font-bold tracking-[0.2em] uppercase mb-5 block" style={{ color: '#4DB8E8' }}>WHY THE MARKET TITANS</span>
            <h2 className="font-heading text-white font-normal leading-tight mb-6" style={{ fontSize: 'clamp(26px,3.5vw,42px)' }}>
              We Bridge U.S. Ambition<br />with Global Power
            </h2>
            <div className="border-l-4 border-[#F5A623] pl-6 mb-12">
              <p className="text-[#CBD5E0] text-lg leading-relaxed italic">
                Our model is built for the modern entrepreneur. We remove the physical and financial hurdles of domestic scaling by leveraging optimized global teams and high-conversion systems.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center group-hover:bg-[#F5A623] transition-colors duration-300 flex-shrink-0" style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.3)' }}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623] group-hover:text-white" />
                  </div>
                  <span className="text-[#CBD5E0] font-medium text-[15px] group-hover:text-[#F5A623] transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* See How It Works — Outline Button */}
            <div style={{ marginTop: '40px' }}>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center hover:scale-105 transition-all duration-300"
                style={{
                  border: '2px solid #4DB8E8',
                  color: '#4DB8E8',
                  background: 'transparent',
                  fontWeight: 700,
                  borderRadius: '50px',
                  padding: '12px 28px',
                  fontFamily: '"Barlow Condensed", sans-serif',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#4DB8E8';
                  e.currentTarget.style.color = '#1B2A4A';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#4DB8E8';
                }}
              >
                See How It Works &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
