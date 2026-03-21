import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PrimaryButton, BackLink } from '../components/NavButtons';
import data from '../data/market_titans_data.json';

// Fallback US Salary Map for the calculator
const salaryMap = {
  "software-development": 115000,
  "web-development": 95000,
  "app-developer": 105000,
  "full-stack-developer": 120000,
  "back-end-developer": 110000,
  "front-end-development": 100000,
  "cloud-developer": 125000,
  "shopify-developer": 90000,
  "cyber-security": 130000,
  "quality-engineer": 85000,
  "accountant": 75000,
  "financial-analyst": 85000,
  "bookkeeper": 55000,
  "payroll-processor": 60000,
  "accounts-receivable": 50000,
  "accounts-payable": 50000,
  "customer-service": 45000,
  "live-chat-support": 42000,
  "help-desk": 48000,
  "marketing-manager": 95000,
  "social-media-manager": 65000,
  "seo-specialist": 75000,
  "content-marketing": 70000,
  "copywriting": 68000,
  "executive-assistant": 70000,
  "office-administration": 48000,
  "personal-assistant": 52000,
  "recruiter": 75000,
  "hr-support": 60000
};

export default function RoleCategoryPage() {
  const { category } = useParams();
  const categoryData = data.role_categories.find(c => c.slug === category);

  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const [usSalary, setUsSalary] = useState('');
  const [staffCount, setStaffCount] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) {
          e.target.classList.add('active');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
    
    if (categoryData && categoryData.roles[0]) {
        const slug = categoryData.roles[0].slug;
        setUsSalary(salaryMap[slug] || 60000);
    }
    
    return () => observer.disconnect();
  }, [category, categoryData]);

  const calculations = useMemo(() => {
    if (!categoryData) return null;
    const numStaff = Math.max(1, parseInt(staffCount) || 1);
    const usAnnual = (parseInt(usSalary) || 0) * numStaff;
    const mtCostPerHead = 4 * 40 * 52;
    const mtAnnual = mtCostPerHead * numStaff;
    const savings = usAnnual - mtAnnual;
    return { usAnnual, mtAnnual, savings: Math.max(0, savings) };
  }, [usSalary, staffCount, categoryData]);

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-[#0D1B2E] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4 font-display">Category Not Found</h1>
        <Link to="/roles" className="text-[#4DB8E8] hover:underline font-bold">Back to All Categories</Link>
      </div>
    );
  }

  return (
    <main key={category} className="font-body bg-[#0D1B2E] min-h-screen relative z-10 overflow-hidden">
      
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E6FBF] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 reveal">
            <BackLink to="/roles" label="BACK TO ALL DEPARTMENTS" />
          </div>
          <div className="max-w-4xl">
            <h1 className="font-display text-white font-bold mb-4 reveal" style={{ fontSize: 'clamp(28px, 5vw, 42px)', lineHeight: '1.2' }}>
              Offshore {categoryData.category} Experts.
            </h1>
            <p className="text-[#CBD5E0] text-lg mb-8 reveal">Highly skilled specialists ready to scale your operations.</p>
            <div className="reveal">
              <PrimaryButton to="/contact">GET STARTED &rarr;</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {categoryData.roles.map((role) => (
              <div 
                key={role.slug} 
                className="bg-[#162236] p-8 rounded-[16px] border border-[rgba(77,184,232,0.15)] flex flex-col items-start transition-all duration-300 hover:border-[#F5A623] hover:scale-[1.02] group h-full"
              >
                <h3 className="font-display text-white font-bold text-[20px] mb-3">{role.name}</h3>
                <p className="font-body text-[#8899AA] text-[14px] leading-relaxed mb-8 flex-1 line-clamp-3">
                  {role.meta_description || "Expert offshore support tailored to your business needs."}
                </p>
                <div className="mt-auto w-full">
                  <div className="inline-block px-3 py-1 bg-[#4DB8E8]/10 text-[#4DB8E8] rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#4DB8E8]/20 mb-6">
                    FROM $4/HR
                  </div>
                  <Link to={`/roles/${category}/${role.slug}`} className="flex items-center text-[#F5A623] font-bold text-[13px] uppercase tracking-wider group-hover:gap-2 transition-all">
                    VIEW DETAILS <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0B1526]/50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display text-white font-bold text-[32px] md:text-[40px] mb-3">Cost Savings Calculator</h2>
            <p className="text-[#CBD5E0] text-lg max-w-2xl mx-auto">Calculate your annual savings with Market Titans.</p>
          </div>

          <div className="bg-[#162236] p-8 md:p-12 rounded-[24px] border border-[#F5A623] shadow-2xl reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-[#8899AA] text-[10px] font-bold uppercase tracking-widest mb-2">Select Role</label>
                  <select 
                    className="w-full bg-[#1B2A4A] border border-white/10 rounded-xl px-4 py-4 text-white font-bold"
                    value={selectedRoleIndex}
                    onChange={(e) => {
                        const idx = e.target.value;
                        setSelectedRoleIndex(idx);
                        const roleSlug = categoryData.roles[idx].slug;
                        setUsSalary(salaryMap[roleSlug] || 60000);
                    }}
                  >
                    {categoryData.roles.map((r, i) => (
                      <option key={r.slug} value={i}>{r.name}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8899AA] text-[10px] font-bold uppercase tracking-widest mb-2">US Salary ($)</label>
                    <input type="number" value={usSalary} onChange={(e) => setUsSalary(e.target.value)} className="w-full bg-[#1B2A4A] border border-white/10 rounded-xl p-4 text-white font-bold" />
                  </div>
                  <div>
                    <label className="block text-[#8899AA] text-[10px] font-bold uppercase tracking-widest mb-2">Staff</label>
                    <input type="number" value={staffCount} onChange={(e) => setStaffCount(e.target.value)} className="w-full bg-[#1B2A4A] border border-white/10 rounded-xl p-4 text-white font-bold" />
                  </div>
                </div>
                <PrimaryButton to="/contact" className="w-full justify-center">GET FREE QUOTE</PrimaryButton>
              </div>

              <div className="bg-[#111A2C] rounded-2xl p-8 border border-white/5 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <div className="text-[#8899AA] text-[10px] font-bold uppercase mb-1">U.S. Annual Cost</div>
                    <div className="text-[#FF6B6B] text-2xl font-bold">${calculations?.usAnnual.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-[#8899AA] text-[10px] font-bold uppercase mb-1">Market Titans Cost</div>
                    <div className="text-[#4DB8E8] text-2xl font-bold">${calculations?.mtAnnual.toLocaleString()}</div>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-[#F5A623] text-[10px] font-bold uppercase mb-1">Savings:</div>
                    <div className="text-[#F5A623] text-4xl font-black">${calculations?.savings.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1B2A4A] to-[#1E3A6E] rounded-[32px] p-12 reveal">
             <h2 className="font-display text-white font-bold text-3xl mb-6">Ready to Hire {categoryData.category}?</h2>
             <PrimaryButton to="/contact">BUILD MY TEAM &rarr;</PrimaryButton>
          </div>
        </div>
      </section>

    </main>
  );
}
