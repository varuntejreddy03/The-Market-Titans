import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';
import { PrimaryButton } from './NavButtons';

const About = () => (
  <section id="about" style={{ background: '#1B2A4A', padding: '100px 0' }} className="relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left: Brand Card */}
        <div className="reveal">
          <div className="relative rounded-3xl h-[480px] flex flex-col items-center justify-center overflow-hidden border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]" style={{ background: '#0D1B2E' }}>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4DB8E8]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#F5A623]/5 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className="text-center z-10 px-10 flex flex-col items-center">
              <div className="mb-10">
                <Logo size="lg" />
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { text: '🎯 $4/hr BPO', color: 'bg-white/10 text-white border border-[#F5A623]/30 shadow-[0_0_15px_rgba(245,166,35,0.15)]' },
                  { text: '⚡ 14-Day Launch', color: 'bg-white/10 text-white border border-white/10' },
                  { text: '🌏 24/7 Ops', color: 'bg-white/10 text-white border border-white/10' }
                ].map((b) => (
                  <span key={b.text} className={`${b.color} font-label text-[11px] font-bold px-5 py-2.5 rounded-full tracking-wider shadow-sm`}>
                    {b.text.toUpperCase()}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                {[<Facebook size={16} />, <Instagram size={16} />, <Linkedin size={16} />].map((icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#F5A623] hover:border-[#F5A623] transition-all">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Copy */}
        <div className="reveal">
          <span className="font-label text-[11px] font-bold tracking-[0.2em] uppercase mb-5 block" style={{ color: '#4DB8E8' }}>REVENUE ENGINE PARTNERS</span>
          <h2 className="font-display text-white font-bold leading-tight mb-8" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
            Built by Founders,<br />for Pioneers.
          </h2>
          <p className="text-[#CBD5E0] text-[17px] leading-relaxed mb-10">
            The Market Titans was born in Clifton Heights, PA, with a singular vision — to democratize elite growth infrastructure. We give U.S. businesses the execution power of Fortune 500 companies at a price that fuels, rather than drains, your bank account. We don't just advise; we deploy.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { text: 'RESULTS FIRST' },
              { text: 'GLOBAL REACH' },
              { text: 'NO BUREAUCRACY' }
            ].map((item) => (
              <span key={item.text} className="font-label text-[11px] font-bold px-5 py-3 rounded-xl flex items-center gap-2 tracking-widest" style={{ color: '#4DB8E8', border: '1px solid rgba(77,184,232,0.3)', background: 'rgba(77,184,232,0.05)' }}>
                {item.text}
              </span>
            ))}
          </div>
          <div style={{ marginTop: '40px' }}>
            <PrimaryButton to="/about">Our Full Story &rarr;</PrimaryButton>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;
