import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, Clock, Shield, Star, Zap, DollarSign, Calendar, Users, Headphones } from 'lucide-react';
import { PrimaryButton, BackLink } from '../components/NavButtons';
import data from '../data/market_titans_data.json';

export default function IndustryTemplate() {
  const { name } = useParams();
  const industry = data.industries.find(ind => ind.slug === name);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) {
          e.target.classList.add('active');
          observer.unobserve(e.target); // Stop observing once revealed
        }
      }),
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
    return () => observer.disconnect();
  }, [name]);

  if (!industry) {
    return (
      <div className="min-h-screen bg-[#0D1B2E] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4 font-display">Industry Not Found</h1>
        <Link to="/industries" className="text-[#4DB8E8] hover:underline font-bold">Back to Industries</Link>
      </div>
    );
  }

  const icons = [Globe, Clock, Shield, Star, Zap, DollarSign];
  const statIcons = [DollarSign, Calendar, Clock, Users];

  return (
    <main key={name} className="font-body bg-[#0D1B2E] min-h-screen relative z-10 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E6FBF] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 reveal">
            <BackLink to="/industries" label="BACK TO ALL INDUSTRIES" />
          </div>
          <div className="max-w-4xl">
            <h1 className="font-display text-white font-bold mb-6 reveal" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: '1.2' }}>
              {industry.headline}
            </h1>

            <div className="reveal">
              <PrimaryButton to="/contact">GET STARTED &rarr;</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* BODY CONTENT & SERVICES */}
      <section className="py-16 px-6 bg-[#0B1526]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="reveal">
              <h2 className="font-display text-white font-bold text-2xl mb-8 uppercase tracking-wider text-[#4DB8E8]">Overview</h2>
              <div className="space-y-6">
                {industry.paragraphs.slice(0, 4).map((p, i) => (
                  <p key={i} className="text-[#8899AA] text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="reveal">
              <h2 className="font-display text-white font-bold text-2xl mb-8 uppercase tracking-wider text-[#F5A623]">Core Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.sub_titles.slice(0, 8).map((service, i) => (
                  <div key={i} className="bg-[#162236] p-4 rounded-xl border border-white/5 flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#4DB8E8] shrink-0" />
                    <span className="text-white font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST POINTS (6 CARDS) */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display text-white font-bold text-2xl mb-4">Why Partner With Us?</h2>
            <div className="w-24 h-1 bg-[#F5A623] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {industry.mt_trust_points.map((point, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="bg-[#162236] p-8 rounded-2xl border border-[rgba(77,184,232,0.15)] hover:border-[#F5A623] transition-all group">
                  <div className="w-12 h-12 bg-[#4DB8E8]/10 rounded-xl flex items-center justify-center mb-6 text-[#4DB8E8] group-hover:bg-[#F5A623] group-hover:text-white transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{point.title}</h3>
                  <p className="text-[#8899AA] leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS (4 CARDS) */}
      <section className="py-16 px-6 bg-[#0D1B2E] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 reveal">
            {industry.mt_stats.map((stat, i) => {
              const Icon = statIcons[i % statIcons.length];
              return (
                <div key={i} className="text-center p-8 bg-[#111A2C] rounded-2xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4DB8E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-[#F5A623] mb-4 flex justify-center"><Icon size={32} /></div>
                  <div className="text-4xl font-black text-white font-display mb-2">{stat.value}</div>
                  <div className="text-[#4DB8E8] font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-[#8899AA] text-xs uppercase">{stat.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-16 px-6 bg-[#0B1526]/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display text-white font-bold text-2xl mb-4">Flexible Engagement Models</h2>
            <p className="text-[#8899AA]">Scale your team on your terms with our fully managed solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            {industry.mt_engagement.map((model, i) => (
              <div key={i} className="bg-[#162236] p-10 rounded-3xl border-2 border-transparent hover:border-[#F5A623] transition-all relative group">
                <div className="absolute top-6 right-8 text-[#4DB8E8]/20 group-hover:text-[#F5A623]/20 transition-colors">
                  <Users size={60} />
                </div>
                <div className="inline-block px-4 py-1 bg-[#4DB8E8]/10 text-[#4DB8E8] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-[#4DB8E8]/20">
                  {model.hours}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{model.type}</h3>
                <div className="text-[#F5A623] text-xl font-bold mb-6">{model.price}</div>
                <p className="text-[#8899AA] mb-8 text-lg">{model.description}</p>
                <Link to="/contact" className="flex items-center gap-2 text-white font-bold hover:text-[#F5A623] transition-colors group/link">
                  CHOOSE MODEL <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {industry.faqs && industry.faqs.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="font-display text-white font-bold text-4xl mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-[#4DB8E8] mx-auto"></div>
            </div>
            <div className="space-y-6 reveal">
              {industry.faqs.map((faq, i) => (
                <div key={i} className="bg-[#162236] p-8 rounded-2xl border border-white/5">
                  <h3 className="text-white font-bold text-xl mb-4 flex items-start gap-4">
                    <span className="text-[#4DB8E8] font-display text-2xl">Q.</span>
                    {faq.question}
                  </h3>
                  <div className="flex items-start gap-4">
                    <span className="text-[#F5A623] font-display text-2xl">A.</span>
                    <p className="text-[#8899AA] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#1B2A4A] to-[#1E3A6E] rounded-[40px] p-16 text-center relative overflow-hidden reveal">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#F5A623] rounded-full blur-[100px] opacity-10"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#4DB8E8] rounded-full blur-[100px] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-display text-white font-bold text-[28px] md:text-[44px] mb-6 leading-tight">
                {industry.mt_cta.title}
              </h2>
              <p className="text-[#CBD5E0] text-xl mb-10">{industry.mt_cta.subtitle}</p>
              <PrimaryButton to="/contact">{industry.mt_cta.button} &rarr;</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
