import React from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Globe } from 'lucide-react';
import { PrimaryButton } from './NavButtons';

const Services = () => {
  const services = [
    { id: '01', icon: <Target size={26} />, title: 'Digital Marketing Strategy', desc: 'Data-driven campaigns that dominate your market share and convert prospects into loyal customers.' },
    { id: '02', icon: <TrendingUp size={26} />, title: 'Lead Generation', desc: 'Precision-engineered funnels designed to capture high-intent leads and maximize conversion rates.' },
    { id: '03', icon: <Globe size={26} />, title: 'Offshore Sales Teams', desc: 'Scale your operations with world-class offshore talent delivering 24/7 excellence at a fraction of the cost.' },
  ];

  return (
    <section id="services" style={{ background: '#1B2A4A', padding: '100px 0' }} className="relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <span className="font-label text-[11px] font-bold tracking-[0.2em] uppercase mb-5 block" style={{ color: '#4DB8E8' }}>OUR SOLUTIONS</span>
          <h2 className="font-display font-bold leading-tight text-white" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
            What We Build For You.
          </h2>
          <div className="w-16 h-[3px] bg-[#F5A623] mx-auto mt-6 rounded-full"></div>
          <p className="max-w-xl mx-auto text-[17px] leading-relaxed mt-6" style={{ color: '#8899AA' }}>
            We don't just provide talent — we build systems that generate measurable output and revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="reveal relative p-10 rounded-3xl flex flex-col items-start gap-6 group overflow-hidden hover:-translate-y-2 transition-all duration-500"
              style={{ 
                background: '#162236', 
                border: '1px solid rgba(77,184,232,0.15)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                e.currentTarget.style.borderColor = 'rgba(77,184,232,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(77,184,232,0.15)';
              }}
            >
              <span className="text-white/[0.03] text-7xl font-black absolute top-4 right-6 select-none pointer-events-none group-hover:text-white/[0.06] leading-none transition-all duration-500 scale-125 translate-x-4">
                {service.id}
              </span>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 text-[#F5A623] group-hover:shadow-[0_0_20px_rgba(245,166,35,0.4)] transition-all duration-300 relative z-10" style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.2)' }}>
                  {service.icon}
                </div>
                <h3 className="font-heading text-white font-bold text-[22px] leading-tight mb-4 group-hover:text-[#F5A623] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#8899AA] text-[15px] leading-relaxed mb-8 flex-1">{service.desc}</p>
                <Link to="/contact" className="font-label text-[#F5A623] hover:text-[#4DB8E8] flex items-center gap-2 hover:gap-3 transition-all mt-auto font-bold tracking-widest relative z-10 text-xs uppercase">
                  DISCUSS STRATEGY →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center" style={{ marginTop: '40px' }}>
          <PrimaryButton to="/pricing">See All Services &rarr;</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
