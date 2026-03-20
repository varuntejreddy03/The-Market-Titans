import React, { useEffect } from 'react';
import { Briefcase, Target, TrendingUp, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { BackToHome, PrimaryButton } from '../components/NavButtons';

export default function AboutPage() {
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

  const whoWeWorkWith = [
    { title: 'Founders', icon: <Briefcase className="w-8 h-8 text-[#F5A623]" />, desc: 'Entrepreneurs looking to delegate execution so they can focus strictly on high-level strategy and scaling.' },
    { title: 'Mid-Sized Companies', icon: <TrendingUp className="w-8 h-8 text-[#F5A623]" />, desc: 'Established teams needing a sudden influx of operational bandwidth without the massive overhead.' },
    { title: 'Growth-Stage Teams', icon: <Target className="w-8 h-8 text-[#F5A623]" />, desc: 'Fast-moving startups requiring instant 24/7 sales and customer support infrastructure to handle scaling.' },
  ];

  const expertise = [
    { title: 'Digital Marketing Strategy & Execution', desc: 'End-to-end campaign deployment tailored for your market.' },
    { title: 'Lead Generation & Sales Funnel Optimization', desc: 'Predictable client acquisition models that convert.' },
    { title: 'Offshore Sales & Customer Service Teams (India-based)', desc: 'Elite offshore talent working in your specific timezone.' },
    { title: 'BPO Consulting & Cost Optimization', desc: 'Streamline your operating expenditures without sacrificing quality.' },
    { title: 'Performance-Driven Growth Systems', desc: 'Data-backed scaling solutions built solely for ROI.' },
    { title: 'Job Assistance', desc: 'Connecting trained professionals with high-growth organizations.' },
  ];

  const results = [
    'Lower Cost Per Acquisition',
    'Scalable Sales Operations',
    '24/7 Customer Support',
    'Higher Profit Margins',
  ];

  return (
    <main className="font-body bg-[#1B2A4A] min-h-screen pb-24 relative z-10 overflow-hidden">
      
      {/* Background Radials */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(77,184,232,0.15) 0%, transparent 70%)' }}></div>
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1E6FBF] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

      <BackToHome />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-24 reveal opacity-0 animate-[fadeIn_0.5s_0.2s_ease_forwards]">
          <h1 className="font-display text-white font-bold leading-[1.1]" style={{ fontSize: 'clamp(36px,5vw,52px)' }}>
            We Help U.S. Businesses Scale Smarter — Not Heavier.
          </h1>
        </div>

        {/* Mission Block */}
        <div className="text-center mb-32 reveal">
          <h2 className="font-display italic leading-tight mb-8" style={{ color: '#F5A623', fontSize: 'clamp(28px,4vw,32px)', textShadow: '0 0 30px rgba(245,166,35,0.2)' }}>
            "We don't sell services. We build revenue engines."
          </h2>
          <div className="w-[80px] h-[3px] bg-[#F5A623] mx-auto rounded-full shadow-[0_0_15px_rgba(245,166,35,0.5)]"></div>
        </div>

        {/* Who We Work With Section */}
        <div className="mb-32 reveal">
          <h3 className="font-display text-white font-bold text-center mb-12" style={{ fontSize: 'clamp(28px,3vw,36px)' }}>Who We Work With</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoWeWorkWith.map((item, i) => (
              <div key={i} className="bg-[#162236] rounded-2xl p-8 border border-[#4DB8E8]/10 hover:border-[#4DB8E8]/30 hover:-translate-y-2 transition-all duration-300 shadow-xl">
                <div className="mb-6 bg-[#1B2A4A] w-16 h-16 rounded-full flex items-center justify-center border border-[#F5A623]/20 shadow-[0_0_15px_rgba(245,166,35,0.1)]">
                  {item.icon}
                </div>
                <h4 className="font-heading text-white font-bold text-xl mb-4 tracking-wide">{item.title}</h4>
                <p className="font-body text-[#8899AA] leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Expertise Section */}
        <div className="mb-32 reveal">
          <h3 className="font-display text-white font-bold text-center mb-12" style={{ fontSize: 'clamp(28px,3vw,36px)' }}>Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <div key={i} className="bg-[#162236] p-8 rounded-tr-xl rounded-br-xl hover:bg-[#1A2840] transition-colors group relative" style={{ borderLeft: '3px solid #F5A623' }}>
                <div className="absolute top-6 right-6 font-display font-bold text-[#1E6FBF] opacity-20 text-6xl pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="font-heading text-white font-bold text-lg mb-3 uppercase tracking-wider relative z-10 w-[85%]">{item.title}</h4>
                <p className="font-body text-[#8899AA] text-[14px] leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-32 reveal">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {results.map((res, i) => (
              <div 
                key={i} 
                className="flex items-center space-x-2 px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(245,166,35,0.05)]"
                style={{ background: 'rgba(245, 166, 35, 0.1)', border: '1px solid #F5A623' }}
              >
                <Check className="w-4 h-4 text-[#F5A623]" />
                <span className="text-[#F5A623] font-label text-[13px] tracking-widest uppercase font-bold">{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Origin Story Block */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#162236] rounded-3xl overflow-hidden border border-[#4DB8E8]/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="bg-[#111A2C] p-12 lg:p-16 flex flex-col justify-center items-start border-r border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#4DB8E8] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            <div className="mb-10 w-[120px] opacity-80 filter brightness-0 invert">
               <Logo />
            </div>
            <h3 className="font-display text-white font-bold leading-tight" style={{ fontSize: 'clamp(32px,4vw,40px)' }}>
              Born in Clifton Heights, PA.<br/><span className="text-[#F5A623]">Built for the world.</span>
            </h3>
          </div>
          
          <div className="p-12 lg:p-16 flex flex-col justify-center items-start bg-[#162236]">
            <p className="text-[#8899AA] text-[16px] leading-[1.8] mb-10">
              The Market Titans began with a singular focus: to strip away the expensive, bloated overhead constraints crippling fast-growing U.S. businesses. By fusing hyper-efficient digital marketing strategies with elite offshore BPO infrastructure, we built an agency model defined entirely by margin expansion and aggressive revenue targeting. We execute where others just consult.
            </p>
            <PrimaryButton to="/contact">Our Mission Manifesto &rarr;</PrimaryButton>
          </div>
        </div>

      </div>
    </main>
  );
}
