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
    <section id="bpo" className="bg-bg-light py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Copy */}
          <div className="reveal">
            <span className="section-tag mb-5 block">OUR FLAGSHIP OFFERING</span>
            <h2 className="font-heading text-navy font-normal leading-tight mb-6" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
              World-Class BPO Teams.<br />
              Starting at $4/Hour.
            </h2>
            <p className="text-slate-600 mb-10 text-[17px] leading-relaxed">
              Most U.S. companies are overpaying by 4–6x for talent they don't need to hire full-time. We deploy pre-trained offshore teams across sales, customer service, operations, and back-office support — delivering measurable output from day one, at a fraction of domestic cost.
            </p>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700 font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Price Card */}
          <div className="reveal flex justify-center lg:justify-end">
            <div className="bg-navy border-2 border-gold rounded-3xl p-10 w-full max-w-sm shadow-[0_30px_80px_-20px_rgba(10,15,44,0.4)] price-glow">
              <p className="section-tag mb-3">BPO TEAM PACKAGE</p>
              <p className="text-white/60 font-label text-sm tracking-widest uppercase mb-2">Starting at</p>
              <div className="flex items-end gap-2 mb-2">
                <span className="font-display text-gold font-bold" style={{ fontSize: '72px', lineHeight: 1 }}>$4</span>
                <span className="text-gold font-label font-semibold text-2xl mb-3">/hour</span>
              </div>
              <p className="text-white/50 font-label text-sm tracking-wider uppercase mb-10">
                Per Agent · Fully Managed · 24/7 Ready
              </p>
              <div className="w-full h-px bg-gold/20 mb-10"></div>
              <a
                href="#contact"
                className="btn-text w-full bg-gold text-navy py-4 rounded-xl flex items-center justify-center hover:bg-gold-light hover:scale-[1.02] transition-all shadow-lg shadow-gold/20"
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
