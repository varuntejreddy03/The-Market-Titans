import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import RolesPage from './pages/RolesPage';
import RoleCategoryPage from './pages/RoleCategoryPage';
import RoleTemplate from './pages/RoleTemplate.jsx';
import IndustriesPage from './pages/IndustriesPage';
import IndustryTemplate from './pages/IndustryTemplate.jsx';
import ContactPage from './pages/ContactPage';

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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/roles/:category" element={<RoleCategoryPage />} />
        <Route path="/roles/:category/:slug" element={<RoleTemplate />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industry/:name" element={<IndustryTemplate />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>


      <Footer />      {/* Floating Phone CTA — also outside animated wrapper */}
      <div className="group fixed bottom-8 right-8" style={{ zIndex: 1500 }}>
        <span className="absolute right-20 bottom-3 bg-navy-card text-white font-label text-[10px] font-semibold uppercase tracking-[0.2em] px-5 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10 shadow-xl backdrop-blur-xl translate-x-3 group-hover:translate-x-0 pointer-events-none">
          Call Us Now
        </span>
        <div className="relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-25"></span>
          <a
            href="tel:+12672987777"
            className="relative w-14 h-14 bg-[#F5A623] text-[#1B2A4A] rounded-full flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(240,148,26,0.5)] hover:scale-110 hover:bg-[#FFBB33] transition-all ring-4 ring-[#F5A623]/20 hover:ring-[#F5A623]/40"
          >
            <Phone className="w-6 h-6" fill="currentColor" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
