import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Landmark, Headphones, Megaphone, Briefcase, UserPlus } from 'lucide-react';
import { BackToHome, PrimaryButton } from '../components/NavButtons';
import data from '../data/market_titans_data.json';

const categoryIconMap = {
  "it-software-development": Code,
  "finance-accounting": Landmark,
  "customer-support-sales": Headphones,
  "digital-marketing": Megaphone,
  "admin-hr-recruitment": Briefcase
};

export default function RolesPage() {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1E3A6E] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <BackToHome />
          <h1 className="font-display text-white font-bold text-[26px] md:text-[42px] mb-3 reveal" style={{ lineHeight: '1.1' }}>
            World-Class Offshore Talent.
          </h1>
          <p className="text-[#CBD5E0] text-[13px] md:text-[15px] max-w-2xl reveal">
            Pre-vetted. U.S.-trained. Deployed in 14 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal mb-32">
          {data.role_categories.map((cat) => {
            const Icon = categoryIconMap[cat.slug] || Briefcase;
            return (
              <Link 
                key={cat.slug} 
                to={`/roles/${cat.slug}`}
                className="bg-[#162236] p-6 rounded-[16px] border-t-[3px] border-[#F5A623] hover:border-[#4DB8E8] shadow-lg transition-transform duration-200 hover:scale-[1.02] relative group overflow-hidden"
              >
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                  <Icon size={100} />
                </div>
                
                <div className="mb-5 p-3 bg-white/5 inline-block rounded-xl text-[#4DB8E8] group-hover:bg-[#F5A623]/10 group-hover:text-[#F5A623] transition-all">
                  <Icon size={28} />
                </div>
                
                <h3 className="font-display text-white font-bold text-[20px] mb-2">{cat.category}</h3>
                <div className="flex items-center gap-2 mb-6">
                  <span className="bg-[#4DB8E8]/10 text-[#4DB8E8] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#4DB8E8]/20">
                    {cat.total_roles || cat.roles.length} ROLES
                  </span>
                </div>
                
                <div className="flex items-center gap-3 text-[#F5A623] font-bold text-[14px] uppercase tracking-wider group-hover:gap-5 transition-all">
                  VIEW ROLES <ArrowRight size={18} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CUSTOM DEPLOYMENT SECTION */}
        <div className="bg-[#111A2C] border-2 border-[rgba(77,184,232,0.15)] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden reveal">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#4DB8E8] rounded-full blur-[100px] opacity-10"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#F5A623] rounded-full blur-[100px] opacity-10"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-white font-bold text-3xl md:text-5xl mb-8">
              Don't see the specific role you need?
            </h2>
            <p className="text-[#8899AA] text-lg mb-12">
              We specialize in custom offshore talent strategies. We can headhunt, vet, and deploy specialists for any technical or administrative requirement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <PrimaryButton to="/contact">INQUIRE ABOUT CUSTOM ROLE &rarr;</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
