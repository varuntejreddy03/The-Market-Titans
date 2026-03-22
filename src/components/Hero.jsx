import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, CheckCircle } from 'lucide-react';

import Logo from './Logo';

const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col justify-center overflow-hidden" style={{ background: 'radial-gradient(ellipse at 60% 50%, #1E3A6E 0%, #1B2A4A 40%, #0D1B2E 100%)', minHeight: '100vh', paddingBottom: 0 }}>
      {/* Background elements... */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(30,111,191,0.2) 0%, transparent 60%)' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E6FBF] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      
      {/* Animated Floating Particles... */}
      {[
        {top: '15%', left: '20%', size: '8px', delay: '0s'},
        {top: '45%', right: '15%', size: '6px', delay: '1.5s'},
        {top: '75%', left: '25%', size: '10px', delay: '3.0s'},
        {top: '30%', right: '35%', size: '8px', delay: '0.8s'},
        {top: '80%', right: '20%', size: '6px', delay: '2.4s'},
        {top: '25%', left: '45%', size: '7px', delay: '4.2s'},
        {top: '60%', left: '10%', size: '9px', delay: '2.0s'},
        {top: '10%', right: '40%', size: '8px', delay: '1.1s'},
        {top: '55%', right: '45%', size: '6px', delay: '3.5s'},
      ].map((p, i) => (
        <div 
          key={i} 
          className="absolute bg-[#4DB8E8] rounded-full opacity-15 pointer-events-none" 
          style={{ ...p, width: p.size, height: p.size, animation: `float 8s ease-in-out ${p.delay} infinite alternate` }}
        ></div>
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center" style={{ paddingTop: '60px' }}>
        {/* Brand Logo in Hero — Desktop Only */}
        <div className="reveal hidden md:flex justify-center mb-6 opacity-0 animate-[fadeIn_0.5s_ease_forwards]">
          <Logo size="lg" />
        </div>

        {/* Badge */}
        <div className="opacity-0 animate-[fadeIn_0.5s_0.1s_ease_forwards] inline-flex items-center space-x-2 border border-gold/50 bg-gold/5 px-5 py-2 rounded-full mb-6 badge-pulse shadow-[0_4px_15px_rgba(245,166,35,0.15)]">
          <span className="section-tag">⚡ U.S. BUSINESS GROWTH EXPERTS</span>
        </div>

        {/* Headline */}
        <div className="space-y-2 mb-6 opacity-0 animate-[fadeIn_0.5s_0.15s_ease_forwards]">
          <h1 className="font-display text-white font-[900]" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)', lineHeight: '1.1' }}>
            We Don't Sell Services.
          </h1>
          <div className="relative inline-block">
            <h1 className="font-display font-[900] text-[#F5A623]" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)', lineHeight: '1.1', textShadow: '0 0 40px rgba(245,166,35,0.3)' }}>
              We Build Revenue Engines.
            </h1>
          </div>
          
          {/* Fixed orange divider — 80px centered */}
          <div className="flex justify-center mt-4">
            <div className="bg-[#F5A623] rounded-full" style={{ width: '60px', height: '3px', margin: '16px auto' }}></div>
          </div>
        </div>

        {/* Subheadline */}
        <p className="opacity-0 animate-[fadeIn_0.5s_0.3s_ease_forwards] text-[#CBD5E0] max-w-2xl mx-auto mb-10" style={{ fontSize: '16px', lineHeight: '1.65' }}>
          High-performance BPO, offshore operations, and marketing consulting —{' '}
          <span className="text-[#F5A623] font-bold">starting at $4/hour.</span>
        </p>

        {/* CTAs */}
        <div className="opacity-0 animate-[fadeIn_0.5s_0.45s_ease_forwards] flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link 
            to="/contact" 
            className="hover:scale-[1.05] transition-all duration-300 flex items-center justify-center text-center"
            style={{ 
              background: 'linear-gradient(135deg, #F5A623, #E8940F)', 
              color: '#1B2A4A', 
              fontWeight: 800, 
              borderRadius: '50px', 
              padding: '13px 28px',
              fontSize: '13px',
              letterSpacing: '1px',
              boxShadow: '0 8px 30px rgba(245,166,35,0.4)',
              textDecoration: 'none'
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(245,166,35,0.6)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(245,166,35,0.4)'}
          >
            GET FREE CONSULTATION
          </Link>
          <a 
            href="#services" 
            className="transition-all duration-300 flex items-center justify-center text-center"
            style={{ 
              border: '2px solid #4DB8E8', 
              color: '#4DB8E8', 
              background: 'transparent', 
              borderRadius: '50px', 
              padding: '13px 28px',
              fontSize: '13px',
              letterSpacing: '1px',
              fontWeight: 800,
              textDecoration: 'none'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#4DB8E8'; e.currentTarget.style.color = '#1B2A4A'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4DB8E8'; }}
          >
            EXPLORE SOLUTIONS
          </a>
        </div>

        <div className="mb-6 flex justify-center opacity-0 animate-[fadeIn_0.5s_0.6s_ease_forwards]">
          <a href="#services" className="text-[#F5A623] hover:text-[#FFBB33] transition-colors animate-bounce">
            <ArrowDown size={28} />
          </a>
        </div>

        {/* Trust Bar */}
        <div 
          className="opacity-0 animate-[fadeIn_0.5s_0.6s_ease_forwards] flex flex-wrap justify-center gap-8 md:gap-12 mx-auto relative py-6 px-8"
          style={{
            background: 'rgba(30, 58, 110, 0.5)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(77,184,232,0.15)',
            borderBottom: '1px solid rgba(77,184,232,0.15)',
            boxShadow: '0 -10px 40px rgba(11,31,77,0.5)'
          }}
        >
          {[
            'Pure Execution Power',
            'BPO from $4/hr',
            '24/7 Operations',
            'Live in 14 Days',
          ].map((item) => (
            <div key={item} className="flex items-center space-x-3 text-white font-semibold">
              <CheckCircle className="text-[#F5A623] flex-shrink-0" size={17} />
              <span style={{ fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
