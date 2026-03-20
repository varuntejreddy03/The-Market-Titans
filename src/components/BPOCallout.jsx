import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BPOCallout = () => {
  const features = [
    'Pre-vetted agents trained in U.S. business standards',
    'Sales, support, data entry, and back-office coverage',
    'Deployed and live in under 14 days',
    'Fully managed — no HR, no overhead',
  ];

  return (
    <section className="bg-bg-light py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Copy */}
          <div className="reveal">
            <span className="section-tag mb-5">BPO SOLUTIONS</span>
            <h2 className="font-display text-navy font-bold mb-4 leading-tight" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
              World-Class BPO Teams.<br />
              Starting at $4/Hour.
            </h2>
            <div className="w-12 h-1 bg-gold rounded-full mb-10"></div>
            
            <div className="brand-quote mb-10">
              <p className="text-body text-lg text-secondary">
                Most U.S. companies are overpaying by 4–6x for talent they don't need to hire full-time. We deploy pre-trained offshore teams that deliver measurable output from day one.
              </p>
            </div>

            <p className="text-secondary text-[17px] leading-relaxed mb-10">
              We remove the physical and financial hurdles of domestic scaling by leveraging optimized global teams and high-conversion systems.
            </p>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 group">
                  <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-[#4A5568] font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Price Card */}
          <div className="reveal flex justify-center lg:justify-end">
            <div className="bg-gradient-to-b from-navy to-[#081533] border border-white/10 rounded-3xl p-10 w-full max-w-sm shadow-[0_30px_80px_-20px_rgba(11,31,77,0.4)] price-glow">
              <p className="section-tag mb-3 !text-gold">BPO TEAM PACKAGE</p>
              <p className="text-white/60 font-label text-sm tracking-widest uppercase mb-2">Starting at</p>
              <div className="flex items-end gap-2 mb-2">
                <span className="font-display text-gold font-bold" style={{ fontSize: '72px', lineHeight: 1 }}>$4</span>
                <span className="text-gold font-label font-semibold text-2xl mb-3">/hour</span>
              </div>
              <p className="text-white/40 font-label text-sm tracking-wider uppercase mb-10">
                Per Agent · Fully Managed · 24/7 Ready
              </p>
              <div className="w-full h-px bg-gold/20 mb-10"></div>
              <a
                href="#contact"
                className="btn-text w-full bg-gold text-white py-4 rounded-xl flex items-center justify-center hover:bg-gold-dark hover:scale-[1.02] transition-all shadow-lg shadow-gold/20"
              >
                BUILD MY TEAM →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BPOCallout;
