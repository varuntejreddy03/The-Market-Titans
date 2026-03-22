import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        background: '#0D1B2E',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
      }}
      className="relative z-10 scroll-mt-24 font-body overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E6FBF] rounded-full blur-[250px] opacity-10 pointer-events-none"></div>

      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 40px',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'start',
      }} className="relative z-10 grid-cols-contact">

        {/* Left Side */}
        <div className="reveal">
          <h2 className="font-display font-[900] leading-tight mb-4" style={{ fontSize: 'clamp(30px,4vw,40px)' }}>
            <span className="text-white">Ready to </span><span style={{ color: '#F5A623' }}>Scale?</span>
          </h2>
          <div className="mb-8">
            <p className="font-display italic text-[#CBD5E0] text-lg border-l-[3px] border-[#F5A623] pl-4">
              "Performance is the only metric that matters."
            </p>
          </div>

          {/* Global Office Cards */}
          <div className="mb-8">
            <span className="font-label text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block" style={{ color: '#4DB8E8' }}>GLOBAL OFFICES</span>
            <div className="flex flex-col gap-3">
              {[
                { flag: 'https://flagcdn.com/us.svg', code: 'US', region: 'US & Canada',                    number: '+1 (267) 298-7777',  tel: '+12672987777'  },
                { flag: 'https://flagcdn.com/gb.svg', code: 'GB', region: 'Potters Bar, Hertfordshire, England', number: '+44 7587 910957', tel: '+447587910957' },
                { flag: 'https://flagcdn.com/de.svg', code: 'DE', region: 'Lichtenberg, Berlin, Germany',    number: '+49 176 58698118', tel: '+4917658698118' },
                { flag: 'https://flagcdn.com/au.svg', code: 'AU', region: 'Wyndham, Melbourne, Australia',   number: '+61 469 342953',  tel: '+61469342953'  },
              ].map(({ flag, code, region, number, tel }) => (
                <a
                  key={tel}
                  href={`tel:${tel}`}
                  className="group flex items-center gap-5 rounded-xl px-5 py-4 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: '#111A2C', border: '1px solid rgba(77,184,232,0.12)', boxSizing: 'border-box' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#F5A623'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(77,184,232,0.12)'}
                >
                  <div className="w-10 h-7 shrink-0 overflow-hidden rounded-sm shadow-sm border border-white/10">
                    <img src={flag} alt={code} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[#8899AA] text-[10px] font-label uppercase tracking-[0.15em] mb-0.5">{region}</div>
                    <div className="text-white font-bold text-[15px] tracking-wide group-hover:text-[#F5A623] transition-colors">{number}</div>
                  </div>
                  <span className="text-[#F5A623] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Email & Location */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[16px]">✉️</span>
              <span className="text-white text-[14px] tracking-wide">info@themarkettitans.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[16px]">📍</span>
              <span className="text-white text-[14px] tracking-wide">Clifton Heights, PA, USA</span>
            </div>
          </div>

          {/* Hours Card */}
          <div className="rounded-xl p-6" style={{ background: '#162236', border: '1px solid rgba(77,184,232,0.2)' }}>
            <div className="flex items-center gap-3 mb-5 w-fit px-4 py-1.5 rounded-full" style={{ background: '#0D1B2E', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4DB8E8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4DB8E8]"></span>
              </span>
              <span className="text-[#4DB8E8] text-[11px] font-bold uppercase tracking-widest leading-none mt-0.5">STANDBY</span>
            </div>
            <div className="flex flex-col gap-3 font-body text-[14px] text-[#CBD5E0]">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-semibold">Mon–Sat:</span>
                <span>9AM–6PM EST</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Sunday:</span>
                <span>11am-4pm EST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="reveal p-8 md:p-10 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative" style={{ background: '#162236', border: '1px solid rgba(77,184,232,0.2)', width: '100%', boxSizing: 'border-box' }}>
          <div className="absolute -top-4 -right-4 bg-[#F5A623] text-[#1B2A4A] font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
            Priority Routing
          </div>
          <form className="space-y-5" style={{ width: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', boxSizing: 'border-box' }}>
              <div>
                <label className="block text-[12px] font-bold text-[#CBD5E0] uppercase tracking-widest mb-2 font-heading">First Name</label>
                <input type="text" className="w-full rounded-lg px-4 py-3 text-white font-body text-[14px] focus:outline-none transition-colors" style={{ background: '#0D1B2E', border: '1px solid rgba(77,184,232,0.2)', boxSizing: 'border-box' }} onFocus={e => e.currentTarget.style.borderColor = '#F5A623'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(77,184,232,0.2)'} placeholder="John" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-[#CBD5E0] uppercase tracking-widest mb-2 font-heading">Last Name</label>
                <input type="text" className="w-full rounded-lg px-4 py-3 text-white font-body text-[14px] focus:outline-none transition-colors" style={{ background: '#0D1B2E', border: '1px solid rgba(77,184,232,0.2)', boxSizing: 'border-box' }} onFocus={e => e.currentTarget.style.borderColor = '#F5A623'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(77,184,232,0.2)'} placeholder="Doe" />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', boxSizing: 'border-box' }}>
              <div>
                <label className="block text-[12px] font-bold text-[#CBD5E0] uppercase tracking-widest mb-2 font-heading">Work Email</label>
                <input type="email" className="w-full rounded-lg px-4 py-3 text-white font-body text-[14px] focus:outline-none transition-colors" style={{ background: '#0D1B2E', border: '1px solid rgba(77,184,232,0.2)', boxSizing: 'border-box' }} onFocus={e => e.currentTarget.style.borderColor = '#F5A623'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(77,184,232,0.2)'} placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-[#CBD5E0] uppercase tracking-widest mb-2 font-heading">Phone</label>
                <input type="tel" className="w-full rounded-lg px-4 py-3 text-white font-body text-[14px] focus:outline-none transition-colors" style={{ background: '#0D1B2E', border: '1px solid rgba(77,184,232,0.2)', boxSizing: 'border-box' }} onFocus={e => e.currentTarget.style.borderColor = '#F5A623'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(77,184,232,0.2)'} placeholder="(555) 000-0000" />
              </div>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-[#CBD5E0] uppercase tracking-widest mb-2 font-heading">How can we help?</label>
              <textarea rows="4" className="w-full rounded-lg px-4 py-3 text-white font-body text-[14px] focus:outline-none transition-colors resize-y" style={{ background: '#0D1B2E', border: '1px solid rgba(77,184,232,0.2)', boxSizing: 'border-box' }} onFocus={e => e.currentTarget.style.borderColor = '#F5A623'} onBlur={e => e.currentTarget.style.borderColor = 'rgba(77,184,232,0.2)'} placeholder="Briefly describe your current bottlenecks..."></textarea>
            </div>
            <button
              type="button"
              className="w-full relative overflow-hidden group rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-[0_8px_20px_rgba(245,166,35,0.3)]"
              style={{ background: 'linear-gradient(135deg, #F5A623, #E8940F)', boxSizing: 'border-box' }}
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

      {/* Mobile stack */}
      <style>{`
        @media (max-width: 768px) {
          .grid-cols-contact { grid-template-columns: 1fr !important; padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
