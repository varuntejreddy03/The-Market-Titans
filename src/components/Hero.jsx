import React from 'react';
import { ArrowDown, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-navy flex flex-col justify-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,160,23,0.18),transparent)] pointer-events-none"></div>
      <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-gold rounded-full opacity-30 animate-[bounce_4s_infinite] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 bg-gold rounded-full opacity-20 animate-[pulse_3s_infinite] pointer-events-none"></div>
      <div className="absolute bottom-[30%] left-[25%] w-2.5 h-2.5 bg-gold rounded-full opacity-25 animate-[bounce_5s_infinite] pointer-events-none"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="opacity-0 animate-[fadeIn_0.5s_ease_forwards] inline-flex items-center space-x-2 border border-gold/50 bg-gold/5 px-5 py-2.5 rounded-full mb-10 badge-pulse">
          <span className="section-tag">⚡ U.S. BUSINESS GROWTH EXPERTS</span>
        </div>

        {/* Headline */}
        <div className="space-y-2 mb-8 opacity-0 animate-[fadeIn_0.5s_0.15s_ease_forwards]">
          <h1 className="font-display text-white font-bold leading-[1.08] tracking-[-0.02em]" style={{ fontSize: 'clamp(44px,7vw,80px)' }}>
            We Don't Sell Services.
          </h1>
          <div className="relative inline-block">
            <h1 className="font-display text-gold font-bold italic leading-[1.08] tracking-[-0.02em]" style={{ fontSize: 'clamp(44px,7vw,80px)' }}>
              We Build Revenue Engines.
            </h1>
            <div className="absolute -bottom-2 left-0 h-0.5 bg-gold hero-underline opacity-70"></div>
          </div>
        </div>

        {/* Subheadline */}
        <p className="opacity-0 animate-[fadeIn_0.5s_0.3s_ease_forwards] text-white/60 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          High-performance BPO, offshore operations, and marketing consulting —{' '}
          <span className="text-gold font-bold text-xl">starting at $4/hour.</span>
        </p>

        {/* CTAs */}
        <div className="opacity-0 animate-[fadeIn_0.5s_0.45s_ease_forwards] flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#contact" className="btn-text w-full sm:w-auto bg-gold text-navy px-10 py-5 rounded-full hover:bg-gold-light hover:shadow-[0_0_40px_rgba(212,160,23,0.5)] hover:scale-[1.03] transition-all shadow-xl shadow-gold/20 flex items-center justify-center">
            GET FREE CONSULTATION →
          </a>
          <a href="#services" className="btn-text w-full sm:w-auto border-2 border-gold text-gold px-10 py-5 rounded-full hover:bg-gold/10 transition-all flex items-center justify-center">
            EXPLORE SOLUTIONS
          </a>
        </div>

        <div className="mb-10 flex justify-center opacity-0 animate-[fadeIn_0.5s_0.6s_ease_forwards]">
          <a href="#services" className="text-gold/40 hover:text-gold transition-colors animate-bounce">
            <ArrowDown size={28} />
          </a>
        </div>

        {/* Trust Bar */}
        <div className="opacity-0 animate-[fadeIn_0.5s_0.6s_ease_forwards] backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-8 py-6 flex flex-wrap justify-center gap-8 md:gap-12 mx-auto">
          {[
            'No Bloated Overhead',
            'BPO from $4/hr',
            '24/7 Operations',
            'Live in 14 Days',
          ].map((item) => (
            <div key={item} className="flex items-center space-x-3 text-white/80">
              <CheckCircle className="text-gold flex-shrink-0" size={17} />
              <span className="font-label text-[13px] font-semibold tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
