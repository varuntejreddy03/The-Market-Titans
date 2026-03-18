import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      setIsOpen(day >= 1 && day <= 6 ? hour >= 9 && hour < 18 : hour >= 12 && hour < 17);
    };
    check();
    const t = setInterval(check, 60000);
    return () => clearInterval(t);
  }, []);

  const inputCls = "w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-navy font-medium focus:bg-white focus:ring-4 focus:ring-gold/20 focus:border-gold outline-none transition-all placeholder:text-slate-300 text-[15px]";

  return (
    <section id="contact" className="bg-bg-light py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start">

          {/* Form */}
          <div className="reveal order-1 lg:order-2">
            <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_30px_80px_-20px_rgba(10,15,44,0.12)] border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="section-tag">First Name</label>
                    <input type="text" placeholder="John" className={inputCls} />
                  </div>
                  <div className="space-y-2">
                    <label className="section-tag">Last Name</label>
                    <input type="text" placeholder="Doe" className={inputCls} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="section-tag">Work Email</label>
                  <input type="email" placeholder="john@company.com" className={inputCls} />
                </div>
                <div className="space-y-2">
                  <label className="section-tag">Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 font-bold text-navy border-r border-slate-200 pr-4 text-[15px]">+1</span>
                    <input type="tel" placeholder="(555) 000-0000" className={`${inputCls} pl-20`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="section-tag">How can we help?</label>
                  <textarea rows="4" placeholder="Describe your revenue goals..." className={`${inputCls} resize-none`}></textarea>
                </div>
                <button type="submit" className="btn-text w-full bg-gold text-navy py-5 rounded-xl hover:bg-gold-light hover:shadow-[0_15px_40px_-10px_rgba(212,160,23,0.5)] hover:scale-[1.02] transition-all shadow-lg shadow-gold/20 flex items-center justify-center gap-3 text-base">
                  BUILD MY ENGINE ✈
                </button>
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="reveal order-2 lg:order-1 bg-navy py-14 px-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-display text-gold font-bold mb-4" style={{ fontSize: 'clamp(48px,6vw,80px)', lineHeight: 1 }}>
                Ready?
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-12 italic border-l-4 border-gold/30 pl-6">
                "The difference between a service and an engine is performance."
              </p>

              <div className="space-y-8 mb-12">
                {[
                  { icon: <Phone size={20} />, text: '+1 (267) 298-7777', label: 'DIRECT LINE' },
                  { icon: <Mail size={20} />, text: 'info@themarkettitans.com', label: 'E-MAIL' },
                  { icon: <MapPin size={20} />, text: 'Clifton Heights, PA', label: 'LOCATION' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="section-tag opacity-40 mb-0.5">{item.label}</p>
                      <span className="font-heading text-white text-lg font-normal group-hover:text-gold transition-colors">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8 pb-6 border-b border-white/5">
                  <span className="section-tag opacity-40">OPERATIONAL HOURS (EST)</span>
                  <div className={`px-4 py-1.5 rounded-full font-label text-[11px] font-semibold tracking-widest border flex items-center gap-2 ${isOpen ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                    <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span>
                    {isOpen ? 'ACTIVE' : 'STANDBY'}
                  </div>
                </div>
                <div className="space-y-4">
                  {[['Mon – Fri:', '9AM – 6PM'], ['Saturday:', '9AM – 6PM'], ['Sunday:', '12PM – 5PM']].map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-white/40 font-label font-semibold tracking-widest uppercase">{day}</span>
                      <span className="font-heading text-white font-normal">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
