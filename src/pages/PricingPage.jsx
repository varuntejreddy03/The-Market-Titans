import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackToHome, PrimaryButton, OutlineButton } from '../components/NavButtons';

export default function PricingPage() {
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

  return (
    <main className="font-body bg-[#1B2A4A] min-h-screen pb-24 relative z-10 overflow-hidden">
      
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[#1E6FBF] rounded-full blur-[250px] opacity-10 pointer-events-none -z-10"></div>
      
      <BackToHome />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-20 reveal opacity-0 animate-[fadeIn_0.5s_0.2s_ease_forwards]">
          <h1 className="font-display text-white font-bold leading-tight mb-5" style={{ fontSize: 'clamp(36px,5vw,56px)' }}>
            Simple, Transparent Pricing.
          </h1>
          <p className="font-body text-[#CBD5E0] text-[18px] max-w-2xl mx-auto">
            No hidden fees. No bloated retainers. Just results.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 mb-20 reveal max-w-6xl mx-auto">
          
          {/* STARTER */}
          <div className="flex-1 bg-[#162236] rounded-2xl p-10 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl" style={{ border: '1px solid rgba(77,184,232,0.2)' }}>
            <div className="mb-6">
              <h3 className="font-heading text-white font-bold text-2xl tracking-wider uppercase mb-3">Starter</h3>
              <div className="mb-2">
                <span className="font-display font-[800] text-[#F5A623] leading-none" style={{ fontSize: 'clamp(40px,4vw,48px)' }}>$4/hr</span>
              </div>
              <p className="text-[#8899AA] text-[14px]">Per Agent · Fully Managed</p>
            </div>
            <div className="w-full h-[1px] bg-white/10 mb-8"></div>
            <ul className="flex-1 space-y-4 mb-10 w-full">
              {['BPO Agent', 'Sales Support', 'Data Entry', 'Back-office', '24/7 Ready', 'Live in 14 Days'].map((f, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-[#F5A623] shrink-0 mr-3 mt-0.5" />
                  <span className="text-white text-[15px]">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto text-center">
              <OutlineButton to="/contact">Get Started</OutlineButton>
            </div>
          </div>

          {/* GROWTH */}
          <div className="flex-[1.15] rounded-3xl p-10 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-3 shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-20" style={{ background: 'linear-gradient(135deg, #1E3A6E, #1B2A4A)', border: '2px solid #F5A623' }}>
            <div className="absolute top-0 right-0 bg-[#F5A623] text-[#1B2A4A] font-bold text-[11px] uppercase tracking-widest px-4 py-1 rounded-bl-xl font-heading">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="font-heading text-white font-bold text-2xl tracking-wider uppercase mb-3">Growth</h3>
              <div className="mb-2 flex items-center">
                <span className="font-display font-[800] text-[#F5A623] leading-none" style={{ fontSize: 'clamp(44px,4vw,56px)' }}>$4–8/hr</span>
              </div>
              <p className="text-[#4DB8E8] text-[15px] font-medium tracking-wide">Complete Revenue System</p>
            </div>
            <div className="w-full h-[1px] bg-[#F5A623]/30 mb-8"></div>
            <ul className="flex-1 space-y-5 mb-10 w-full">
              {['Everything in Starter', 'Lead Generation', 'Sales Funnel', 'Digital Marketing Strategy', 'KPI Dashboard', 'Weekly Reviews'].map((f, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-[#F5A623] shrink-0 mr-3 mt-0.5" />
                  <span className={i === 0 ? "text-[#CBD5E0] font-semibold text-[15px]" : "text-white text-[15px]"}>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto text-center">
              <PrimaryButton to="/contact">Get Started</PrimaryButton>
            </div>
          </div>

          {/* ENTERPRISE */}
          <div className="flex-1 bg-[#162236] rounded-2xl p-10 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-xl" style={{ border: '1px solid rgba(77,184,232,0.2)' }}>
            <div className="mb-6">
              <h3 className="font-heading text-white font-bold text-2xl tracking-wider uppercase mb-3">Enterprise</h3>
              <div className="mb-2">
                <span className="font-display font-[800] text-[#F5A623] leading-none" style={{ fontSize: 'clamp(40px,4vw,48px)' }}>Custom</span>
              </div>
              <p className="text-[#8899AA] text-[14px]">Bespoke Scaling Infrastructure</p>
            </div>
            <div className="w-full h-[1px] bg-white/10 mb-8"></div>
            <ul className="flex-1 space-y-4 mb-10 w-full">
              {['Full Revenue Engine', 'Offshore Team', 'Marketing System', 'BPO Consulting', 'Dedicated Manager', 'Priority Support'].map((f, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-[#F5A623] shrink-0 mr-3 mt-0.5" />
                  <span className="text-white text-[15px]">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto text-center">
              <OutlineButton to="/contact">Get Started</OutlineButton>
            </div>
          </div>
          
        </div>

        {/* Bottom Note */}
        <div className="text-center reveal">
          <p className="text-[#8899AA] text-[13px] md:text-[14px] uppercase tracking-widest font-bold">
            Free strategy session <span className="mx-2 text-[#F5A623]">·</span> No contracts until confident <span className="mx-2 text-[#F5A623]">·</span> Results-first approach
          </p>
        </div>

      </div>
    </main>
  );
}
