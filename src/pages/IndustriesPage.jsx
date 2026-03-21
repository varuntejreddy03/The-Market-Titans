import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, TrendingUp, Landmark, Headphones, ShoppingCart, GraduationCap, HardHat, Building2, HeartPulse, Bed, ShieldCheck, Cpu, Network, Gavel, Truck, Factory, Megaphone, Pickaxe, Briefcase, Home, Rocket, PhoneCall, Plane, Zap, Package } from 'lucide-react';
import { BackToHome } from '../components/NavButtons';
import data from '../data/market_titans_data.json';

// Mapping icons to slugs - since JSON doesn't contain component references
const iconMap = {
  "accounting": Landmark,
  "administration": Briefcase,
  "construction": HardHat,
  "customer-support-sales": Headphones,
  "digital-marketing": Megaphone,
  "ecommerce-retail": ShoppingCart,
  "education": GraduationCap,
  "engineering": Cpu,
  "finance-accounting": TrendingUp,
  "healthcare": HeartPulse,
  "hospitality": Bed,
  "insurance": ShieldCheck,
  "it-software-development": Cpu,
  "it-outsourcing": Network,
  "legal": Gavel,
  "logistics": Truck,
  "manufacturing": Factory,
  "marketing-development": Rocket,
  "mining": Pickaxe,
  "professional-services": Briefcase,
  "real-estate": Home,
  "startup": Rocket,
  "telecommunications": PhoneCall,
  "tourism": Plane,
  "utilities-energy": Zap,
  "wholesale": Package
};

export default function IndustriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 50);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="font-body bg-[#0D1B2E] min-h-screen pt-20 pb-12 px-6 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#1E6FBF] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F5A623] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <BackToHome />
          <h1 className="font-display text-white font-bold text-[26px] md:text-[36px] mb-2 reveal">
            Industries We Power.
          </h1>
          <p className="text-[#CBD5E0] text-[13px] md:text-[15px] max-w-2xl reveal">
            From startups to enterprises — we build revenue engines across every vertical.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 reveal">
          {data.industries.map((ind) => {
            const Icon = iconMap[ind.slug] || Globe;
            return (
              <Link 
                key={ind.slug} 
                to={`/industry/${ind.slug}`}
                className="bg-[#162236] p-5 rounded-[12px] border border-[rgba(77,184,232,0.15)] transition-transform duration-200 hover:border-[#F5A623] hover:scale-[1.02] group relative overflow-hidden"
              >
                <div className="mb-4 text-[#4DB8E8] group-hover:text-[#F5A623] transition-colors">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-white font-bold text-[17px] mb-1">{ind.name}</h3>
                <p className="text-[#8899AA] text-[11px] leading-relaxed line-clamp-2">
                   Professional offshore solutions for the {ind.name.toLowerCase()} sector.
                </p>
                <div className="absolute bottom-6 right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#F5A623]">
                  <ArrowRight size={20} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
