import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: '#0D1B2E', padding: '100px 0' }} className="relative z-10 scroll-mt-24 font-body overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1E6FBF] rounded-full blur-[250px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Contact Details */}
          <div className="reveal">
            <h2 className="font-display font-[900] leading-tight mb-4" style={{ fontSize: 'clamp(40px,5vw,48px)' }}>
              <span className="text-white">Ready to </span><span style={{ color: '#F5A623' }}>Scale?</span>
            </h2>
            <div className="mb-12">
              <p className="font-display italic text-[#CBD5E0] text-xl md:text-2xl border-l-[3px] border-[#F5A623] pl-4">
                "Performance is the only metric that matters."
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-center text-white text-[16px]">
                <span className="w-8 shrink-0 text-[20px]" style={{ color: '#F5A623' }}>📞</span>
                <span className="font-semibold tracking-wide">+1 (267) 298-7777</span>
              </div>
              <div className="flex items-center text-white text-[16px]">
                <span className="w-8 shrink-0 text-[20px]" style={{ color: '#F5A623' }}>✉️</span>
                <span className="tracking-wide">info@themarkettitans.com</span>
              </div>
              <div className="flex items-center text-white text-[16px]">
                <span className="w-8 shrink-0 text-[20px]" style={{ color: '#F5A623' }}>📍</span>
                <span className="tracking-wide">Clifton Heights, PA</span>
              </div>
            </div>

            {/* Hours Card */}
            <div className="rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)]" style={{ background: '#162236', border: '1px solid rgba(77,184,232,0.2)' }}>
              <div className="flex items-center gap-3 mb-6 w-fit px-4 py-1.5 rounded-full" style={{ background: '#0D1B2E', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4DB8E8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4DB8E8]"></span>
                </span>
                <span className="text-[#4DB8E8] text-[11px] font-bold uppercase tracking-widest leading-none mt-0.5">STANDBY</span>
              </div>
              
              <div className="flex flex-col gap-3 font-body text-[14px] text-[#CBD5E0]">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-semibold">Mon–Fri:</span>
                  <span>9AM–6PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-semibold">Saturday:</span>
                  <span>9AM–6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday:</span>
                  <span>12PM–5PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Form */}
          <div className="reveal p-8 md:p-12 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative" style={{ background: '#162236', border: '1px solid rgba(77,184,232,0.2)' }}>
            
            <div className="absolute -top-4 -right-4 bg-[#F5A623] text-[#1B2A4A] font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
              Priority Routing
            </div>

            <form className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] font-bold text-[#CBD5E0] uppercase tracking-widest mb-2 font-heading">First Name</label>
                  <input type="text" className="w-full rounded-lg px-4 py-3.5 text-white font-body text-[15px] focus:outline-none transition-colors" style={{ background: '#0D1B2E', border: '1px solid rgba(77,184,232,0.2)' }} onFocus={e => e.currentTarget.style.borderColor = '#F5A623'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(77,184,232,0.2)'} placeholder="John" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#CBD5E0] uppercase tracking-widest mb-2 font-heading">Last Name</label>
                  <input type="text" className="w-full rounded-lg px-4 py-3.5 text-white font-body text-[15px] focus:outline-none transition-colors" style={{ background: '#0D1B2E', border: '1px solid rgba(77,184,232,0.2)' }} onFocus={e => e.currentTarget.style.borderColor = '#F5A623'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(77,184,232,0.2)'} placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] font-bold text-[#CBD5E0] uppercase tracking-widest mb-2 font-heading">Work Email</label>
                  <input type="email" className="w-full rounded-lg px-4 py-3.5 text-white font-body text-[15px] focus:outline-none transition-colors" style={{ background: '#0D1B2E', border: '1px solid rgba(77,184,232,0.2)' }} onFocus={e => e.currentTarget.style.borderColor = '#F5A623'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(77,184,232,0.2)'} placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#CBD5E0] uppercase tracking-widest mb-2 font-heading">Phone</label>
                  <input type="tel" className="w-full rounded-lg px-4 py-3.5 text-white font-body text-[15px] focus:outline-none transition-colors" style={{ background: '#0D1B2E', border: '1px solid rgba(77,184,232,0.2)' }} onFocus={e => e.currentTarget.style.borderColor = '#F5A623'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(77,184,232,0.2)'} placeholder="(555) 000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#CBD5E0] uppercase tracking-widest mb-2 font-heading">How can we help?</label>
                <textarea rows="4" className="w-full rounded-lg px-4 py-3.5 text-white font-body text-[15px] focus:outline-none transition-colors resize-y" style={{ background: '#0D1B2E', border: '1px solid rgba(77,184,232,0.2)' }} onFocus={e => e.currentTarget.style.borderColor = '#F5A623'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(77,184,232,0.2)'} placeholder="Briefly describe your current bottlenecks..."></textarea>
              </div>

              <button 
                type="button"
                className="w-full relative overflow-hidden group rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-[0_8px_20px_rgba(245,166,35,0.3)] mt-4"
                style={{ background: 'linear-gradient(135deg, #F5A623, #E8940F)' }}
              >
                <div className="relative z-10 py-4 flex items-center justify-center gap-2">
                  <span className="font-heading text-[#1B2A4A] text-[15px] tracking-widest uppercase" style={{ fontWeight: 800 }}>
                    Build My Engine &rarr;
                  </span>
                </div>
                <div className="absolute inset-0 bg-[#FFBB33] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
