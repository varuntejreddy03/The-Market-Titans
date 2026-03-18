import React, { useEffect } from 'react';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import BPOCallout from './components/BPOCallout';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Navbar is OUTSIDE every wrapper — nothing can break position:fixed */}
      <Navbar />

      {/* Page content — fade-in animation only applies here, never wraps Navbar */}
      <main className="font-body opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{ paddingTop: 80 }}>
        <Hero />
        <SocialProof />
        <BPOCallout />
        <Services />
        <WhyUs />
        <About />
        <HowItWorks />
        <Testimonials />
        <Contact />
        <Footer />
      </main>

      {/* Floating Phone CTA — also outside animated wrapper */}
      <div className="group fixed bottom-8 right-8" style={{ zIndex: 1500 }}>
        <span className="absolute right-20 bottom-3 bg-navy-card text-white font-label text-[10px] font-semibold uppercase tracking-[0.2em] px-5 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10 shadow-xl backdrop-blur-xl translate-x-3 group-hover:translate-x-0 pointer-events-none">
          Call Us Now
        </span>
        <div className="relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-25"></span>
          <a
            href="tel:+12672987777"
            className="relative w-14 h-14 bg-gold text-navy rounded-full flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(212,160,23,0.5)] hover:scale-110 hover:bg-gold-light transition-all ring-4 ring-gold/20 hover:ring-gold/40"
          >
            <Phone className="w-6 h-6" fill="currentColor" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
