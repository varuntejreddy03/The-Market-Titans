import React, { useEffect } from 'react';
import { PhoneCall, Headphones, Keyboard, Share2, ClipboardList, Search } from 'lucide-react';
import { BackToHome, PrimaryButton } from '../components/NavButtons';

export default function RolesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
    return () => observer.disconnect();
  }, []);

  const roles = [
    { title: 'Sales Development Rep (SDR)', icon: <PhoneCall className="w-8 h-8 text-[#F5A623]" />, desc: 'Outbound prospecting, cold calling, lead qualification' },
    { title: 'Customer Service Agent', icon: <Headphones className="w-8 h-8 text-[#F5A623]" />, desc: '24/7 support, ticket handling, live chat' },
    { title: 'Data Entry Specialist', icon: <Keyboard className="w-8 h-8 text-[#F5A623]" />, desc: 'CRM updates, spreadsheet management, reporting' },
    { title: 'Digital Marketing Assistant', icon: <Share2 className="w-8 h-8 text-[#F5A623]" />, desc: 'Social media, content scheduling, ad support' },
    { title: 'Back-Office Support', icon: <ClipboardList className="w-8 h-8 text-[#F5A623]" />, desc: 'Admin tasks, documentation, process management' },
    { title: 'Lead Generation Specialist', icon: <Search className="w-8 h-8 text-[#F5A623]" />, desc: 'Research, outreach lists, email campaigns' },
  ];

  return (
    <main className="font-body bg-[#1B2A4A] min-h-screen pb-24 relative z-10 overflow-hidden">
      
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#4DB8E8] rounded-full blur-[200px] opacity-5 pointer-events-none"></div>

      <BackToHome />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20 reveal opacity-0 animate-[fadeIn_0.5s_0.2s_ease_forwards]">
          <h1 className="font-display text-white font-bold mb-5" style={{ fontSize: 'clamp(36px,5vw,56px)' }}>
            World-Class Offshore Talent.
          </h1>
          <p className="font-body text-[#CBD5E0] text-[18px] max-w-2xl mx-auto">
            Pre-vetted. U.S.-trained. Deployed in 14 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 reveal">
          {roles.map((r, i) => (
            <div 
              key={i} 
              className="bg-[#162236] p-8 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col items-start transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] group"
            >
              <div className="mb-6 bg-[#1B2A4A] p-4 rounded-xl border border-[#F5A623]/20 shadow-[0_0_15px_rgba(245,166,35,0.1)] group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <h3 className="font-heading text-white font-bold text-[20px] mb-3 leading-snug w-full pr-10">{r.title}</h3>
              <p className="font-body text-[#8899AA] text-[15px] leading-relaxed mb-8 flex-1">{r.desc}</p>
              <div className="mt-auto px-4 py-1.5 rounded-full border border-[#4DB8E8]/30 bg-[#4DB8E8]/10 text-[#4DB8E8] text-[11px] font-bold uppercase tracking-widest">
                From $4/hr
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center bg-[#162236] rounded-3xl py-14 px-6 border border-[#F5A623]/20 shadow-[0_8px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F5A623] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
          <h3 className="font-display text-white font-[800] mb-8 relative z-10" style={{ fontSize: 'clamp(28px,3vw,36px)' }}>
            Need a custom role? We build teams around your workflow.
          </h3>
          <div className="relative z-10">
            <PrimaryButton to="/contact">Discuss Custom Role &rarr;</PrimaryButton>
          </div>
        </div>

      </div>
    </main>
  );
}
