import React from 'react';
import { Target, TrendingUp, Globe, Building2, Zap, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    { id: '01', icon: <Target size={26} />, title: 'Digital Marketing Strategy', desc: 'Data-driven campaigns that dominate your market share and convert prospects into loyal customers.' },
    { id: '02', icon: <TrendingUp size={26} />, title: 'Lead Generation', desc: 'Precision-engineered funnels designed to capture high-intent leads and maximize conversion rates.' },
    { id: '03', icon: <Globe size={26} />, title: 'Offshore Sales Teams', desc: 'Scale your operations with world-class offshore talent delivering 24/7 excellence at a fraction of the cost.' },
    { id: '04', icon: <Building2 size={26} />, title: 'BPO Consulting', desc: 'Strategic operational analysis to identify waste and restructure your business for peak efficiency.' },
    { id: '05', icon: <Zap size={26} />, title: 'Performance Growth', desc: 'Custom-built revenue engines that automate your growth and provide predictable scaling.' },
    { id: '06', icon: <Briefcase size={26} />, title: 'Job Assistance', desc: 'Connecting talent with growth-stage companies to build high-performance teams that last.' },
  ];

  return (
    <section id="services" className="bg-bg-light py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="section-tag mb-4 block">WHAT WE DO</span>
          <h2 className="font-heading text-navy font-normal leading-tight mb-6" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
            Everything You Need to Scale —<br />Without the Overhead
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal group relative bg-white p-10 rounded-2xl border border-gray-100 hover:border-l-4 hover:border-l-gold hover:border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gold/8 transition-all duration-400 hover:-translate-y-1 flex flex-col overflow-hidden cursor-pointer"
              style={{ borderRadius: '16px' }}
            >
              <span className="text-slate-100 text-7xl font-black absolute top-4 right-6 select-none pointer-events-none group-hover:text-gold/8 leading-none transition-colors">
                {service.id}
              </span>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-navy font-normal text-[22px] leading-tight mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-1">{service.desc}</p>
                <a href="#contact" className="nav-link text-gold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                  DISCUSS STRATEGY →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
