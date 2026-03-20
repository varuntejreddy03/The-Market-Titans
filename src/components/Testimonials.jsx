import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Target, Shield } from 'lucide-react';
import { PrimaryButton } from './NavButtons';

const reasons = [
  { icon: <Zap size={24} />, title: 'First-Mover Advantage', desc: 'Lock in founding-client rates before we scale. Early partners get priority access and dedicated attention.' },
  { icon: <Target size={24} />, title: 'Direct Founder Access', desc: 'Work directly with our founding team — no account managers, no layers. Pure execution focus.' },
  { icon: <Shield size={24} />, title: 'Zero-Risk Kickoff', desc: 'Start with a free strategy session. No contracts until you\'re confident in the plan and the team.' },
];

const Testimonials = () => (
  <section id="testimonials" style={{ background: '#0D1B2E', padding: '100px 0' }} className="relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="font-label text-[11px] font-bold tracking-[0.2em] uppercase mb-5 block" style={{ color: '#4DB8E8' }}>OUR PROMISE</span>
        <h2 className="font-display text-white font-bold leading-tight mb-4" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
          Be Our First Victory Story.
        </h2>
        <p className="text-[#8899AA] max-w-xl mx-auto text-[17px] leading-relaxed">
          We're a new firm with a clear mission — and we're looking for our first founding clients who want results, not excuses.
        </p>
        <div className="w-20 h-[2px] bg-[#F5A623] mx-auto mt-8 rounded-full" />
      </div>

      {/* Reason cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {reasons.map((r, i) => (
          <div 
            key={i} 
            className="reveal p-10 group hover:-translate-y-2 transition-all duration-400 cursor-default"
            style={{ 
              background: '#162236', 
              border: '1px solid rgba(245,166,35,0.15)', 
              borderRadius: '16px' 
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
              e.currentTarget.style.borderColor = 'rgba(245,166,35,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(245,166,35,0.15)';
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#F5A623] mb-6 group-hover:shadow-[0_0_20px_rgba(245,166,35,0.3)] transition-all duration-300" style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.2)' }}>
              {r.icon}
            </div>
            <h3 className="font-heading font-bold mb-3 uppercase" style={{ color: '#F5A623', fontSize: '13px', letterSpacing: '2px' }}>{r.title}</h3>
            <p className="text-[#8899AA] text-[15px] leading-relaxed italic">{r.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div 
        className="reveal flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden mt-10 mx-0 md:mx-10"
        style={{ 
          background: 'linear-gradient(135deg, #1B2A4A, #1E3A6E)', 
          border: '1px solid rgba(245,166,35,0.2)', 
          borderRadius: '20px', 
          padding: '36px 24px',
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4DB8E8]/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5A623]/5 rounded-full blur-[80px] -ml-32 -mb-32"></div>
        <div className="relative z-10">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#F5A623] text-[#F5A623]" />)}
          </div>
          <h3 className="font-heading text-white font-bold text-2xl md:text-3xl mb-2">
            Ready to be our first case study?
          </h3>
          <p className="text-[#8899AA] text-[15px]">
            Free strategy session · No commitment · Results-first approach
          </p>
        </div>
        <PrimaryButton to="/contact">Claim Your Spot &rarr;</PrimaryButton>
      </div>

    </div>
  </section>
);

export default Testimonials;
