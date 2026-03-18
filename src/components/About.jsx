import React from 'react';
import { ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const About = () => (
  <section id="about" className="bg-white py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left: Brand Card */}
        <div className="reveal">
          <div className="relative bg-gradient-to-br from-navy to-navy-card rounded-3xl h-[480px] flex flex-col items-center justify-center overflow-hidden border border-gold/20 shadow-[0_40px_80px_-20px_rgba(10,15,44,0.3)]">
            <div className="absolute top-10 left-10 w-48 h-48 bg-gold/10 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-gold/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className="text-center z-10 px-10 flex flex-col items-center">
              <div className="mb-10">
                <Logo size="lg" />
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {['🎯 $4/hr BPO', '⚡ 14-Day Launch', '🌏 24/7 Ops'].map((b) => (
                  <span key={b} className="bg-white/5 text-gold font-label text-[11px] font-semibold px-4 py-2 rounded-full border border-white/10 tracking-wider">
                    {b.toUpperCase()}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                {[<Facebook size={16} />, <Instagram size={16} />, <Linkedin size={16} />].map((icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Copy */}
        <div className="reveal">
          <span className="section-tag mb-5 block">REVENUE ENGINE PARTNERS</span>
          <h2 className="font-heading text-navy font-normal leading-tight mb-8" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
            Built by Founders,<br />for Pioneers.
          </h2>
          <p className="text-slate-600 text-[17px] leading-relaxed mb-10">
            The Market Titans was born in Clifton Heights, PA, with a singular vision — to democratize elite growth infrastructure. We give U.S. businesses the execution power of Fortune 500 companies at a price that fuels, rather than drains, your bank account. We don't just advise; we deploy.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {[{ text: 'RESULTS FIRST', emoji: '🎯' }, { text: 'GLOBAL REACH', emoji: '🌏' }, { text: 'NO BUREAUCRACY', emoji: '⚡' }].map((item) => (
              <span key={item.text} className="bg-navy/5 border border-navy/10 text-navy font-label text-[11px] font-semibold px-5 py-3 rounded-xl flex items-center gap-2 tracking-widest">
                <span>{item.emoji}</span><span>{item.text}</span>
              </span>
            ))}
          </div>
          <a href="#contact" className="group inline-flex items-center text-gold font-bold text-lg hover:gap-4 transition-all gap-2">
            <span>Our Mission Manifesto</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  </section>
);

export default About;
