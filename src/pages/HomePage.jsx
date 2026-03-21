import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="font-body opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{ background: '#0D1B2E' }}>
      {/* 1. HERO — #0D1B2E */}
      <Hero />

      {/* 2. STATS BAR + 4 CARDS — #0D1B2E */}
      <SocialProof />

      {/* 3. SERVICES — #1B2A4A */}
      <Services />

      {/* 4. WHY US — #0D1B2E */}
      <WhyUs />

      {/* 5. HOW IT WORKS TEASER */}
      <section style={{ background: '#1B2A4A' }}>
        <div className="max-w-7xl mx-auto px-10 w-full reveal relative z-10">
          <div 
            className="flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300"
            style={{ 
              background: 'linear-gradient(135deg, #162236, #1E3A6E)', 
              border: '1px solid rgba(77,184,232,0.2)', 
              borderRadius: '20px', 
              padding: '40px 36px' 
            }}
          >
            <h2 className="font-display text-white font-bold max-w-lg leading-tight" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>
              From Consultation to Live Team in <span className="text-[#F5A623]">14 Days.</span>
            </h2>
            <Link
              to="/how-it-works"
              className="flex-shrink-0 font-bold uppercase tracking-widest text-[14px] transition-all duration-300 hover:scale-[1.03] flex items-center justify-center whitespace-nowrap"
              style={{ 
                backgroundColor: '#F5A623', 
                color: '#1B2A4A', 
                padding: '13px 28px', 
                borderRadius: '50px', 
                fontFamily: '"Barlow Condensed", sans-serif',
                boxShadow: '0 8px 30px rgba(245,166,35,0.4)',
                textDecoration: 'none'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#FFBB33';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(245,166,35,0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#F5A623';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(245,166,35,0.4)';
              }}
            >
              SEE THE FULL PROCESS &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BUILT BY FOUNDERS — #1B2A4A */}
      <About />

      {/* 7. SOCIAL PROOF / PROMISE — #0D1B2E */}
      <Testimonials />

      {/* 8. CONTACT FORM — #1B2A4A */}
      <Contact />
    </main>
  );
}
