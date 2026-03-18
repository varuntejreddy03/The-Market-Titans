import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const reasons = [
  { icon: '⚡', title: 'First-Mover Advantage', desc: 'Lock in founding-client rates before we scale. Early partners get priority access and dedicated attention.' },
  { icon: '🎯', title: 'Direct Founder Access', desc: 'Work directly with our founding team — no account managers, no layers. Pure execution focus.' },
  { icon: '🛡️', title: 'Zero-Risk Kickoff', desc: 'Start with a free strategy session. No contracts until you\'re confident in the plan and the team.' },
];

const Testimonials = () => (
  <section id="testimonials" className="bg-navy py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="section-tag mb-5 block">OUR PROMISE</span>
        <h2 className="font-display text-white font-bold leading-tight mb-4" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
          Be Our First Victory Story.
        </h2>
        <p className="text-white/50 max-w-xl mx-auto text-[17px] leading-relaxed">
          We're a new firm with a clear mission — and we're looking for our first founding clients who want results, not excuses.
        </p>
        <div className="w-20 h-0.5 bg-gold mx-auto mt-8" />
      </div>

      {/* Reason cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {reasons.map((r, i) => (
          <div key={i} className="reveal bg-navy-card border border-white/8 rounded-3xl p-10 group hover:border-gold/40 hover:-translate-y-1 transition-all duration-400 cursor-default">
            <div className="text-4xl mb-6">{r.icon}</div>
            <h3 className="font-heading text-white font-normal text-xl mb-3">{r.title}</h3>
            <p className="text-white/50 text-[15px] leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div className="reveal bg-gradient-to-r from-navy-card to-navy-mid border border-gold/20 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}
          </div>
          <h3 className="font-heading text-white font-normal text-2xl md:text-3xl mb-2">
            Ready to be our first case study?
          </h3>
          <p className="text-white/50 text-[15px]">
            Free strategy session · No commitment · Results-first approach
          </p>
        </div>
        <a
          href="#contact"
          className="btn-text flex-shrink-0 bg-gold text-navy px-10 py-4 rounded-2xl hover:bg-gold-light hover:scale-[1.03] transition-all shadow-xl shadow-gold/20 flex items-center gap-3 whitespace-nowrap"
        >
          CLAIM YOUR SPOT <ArrowRight size={16} />
        </a>
      </div>

    </div>
  </section>
);

export default Testimonials;
