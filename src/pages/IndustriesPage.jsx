import React, { useEffect } from 'react';
import { ShoppingCart, Building, Cloud, Activity, Landmark, Presentation, Users, Truck } from 'lucide-react';
import { BackToHome, OutlineButton } from '../components/NavButtons';

export default function IndustriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
    return () => observer.disconnect();
  }, []);

  const industries = [
    { title: 'E-Commerce', icon: <ShoppingCart className="w-10 h-10 text-[#4DB8E8]" />, desc: 'Offshore support, order management, customer service' },
    { title: 'Real Estate', icon: <Building className="w-10 h-10 text-[#4DB8E8]" />, desc: 'Lead gen, CRM management, outbound calling' },
    { title: 'SaaS & Tech', icon: <Cloud className="w-10 h-10 text-[#4DB8E8]" />, desc: 'Onboarding support, user success, back-office' },
    { title: 'Healthcare', icon: <Activity className="w-10 h-10 text-[#4DB8E8]" />, desc: 'Patient scheduling, admin support, data entry' },
    { title: 'Financial Services', icon: <Landmark className="w-10 h-10 text-[#4DB8E8]" />, desc: 'Back-office ops, compliance support, reporting' },
    { title: 'Agencies', icon: <Presentation className="w-10 h-10 text-[#4DB8E8]" />, desc: 'White-label fulfillment, client support, campaign execution' },
    { title: 'Coaching & Consulting', icon: <Users className="w-10 h-10 text-[#4DB8E8]" />, desc: 'Appointment setting, follow-up, CRM' },
    { title: 'Retail & Logistics', icon: <Truck className="w-10 h-10 text-[#4DB8E8]" />, desc: 'Order processing, returns, customer support' },
  ];

  return (
    <main className="font-body bg-[#1B2A4A] min-h-screen pb-24 relative z-10 overflow-hidden">
      
      <div className="absolute top-1/4 left-[-10%] w-[800px] h-[800px] bg-[#1E6FBF] rounded-full blur-[250px] opacity-10 pointer-events-none"></div>

      <BackToHome />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20 reveal opacity-0 animate-[fadeIn_0.5s_0.2s_ease_forwards]">
          <h1 className="font-display text-white font-bold mb-5" style={{ fontSize: 'clamp(36px,5vw,56px)' }}>
            Industries We Power.
          </h1>
          <p className="font-body text-[#CBD5E0] text-[18px] max-w-3xl mx-auto leading-relaxed">
            From startups to scaling enterprises — we've built engines across every vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 reveal">
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className="bg-[#162236] p-8 rounded-2xl relative overflow-hidden flex flex-col items-start transition-all duration-300 hover:-translate-y-2 shadow-lg group hover:bg-[#1A2840]"
              style={{ borderBottom: '3px solid transparent' }}
              onMouseEnter={e => { e.currentTarget.style.borderBottom = '3px solid #F5A623'; }}
              onMouseLeave={e => { e.currentTarget.style.borderBottom = '3px solid transparent'; }}
            >
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform origin-left">
                {ind.icon}
              </div>
              <h3 className="font-heading text-white font-bold text-[19px] mb-3 leading-snug">{ind.title}</h3>
              <p className="font-body text-[#8899AA] text-[14px] leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="reveal text-center bg-[#111A2C] rounded-2xl py-8 px-6 border border-[#4DB8E8]/20 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
          <h3 className="font-display text-white font-bold text-[22px] md:text-[26px] mb-6 md:mb-0 md:text-left">
            Don't see your industry? We build custom solutions.
          </h3>
          <OutlineButton to="/contact">CONTACT US &rarr;</OutlineButton>
        </div>

      </div>
    </main>
  );
}
