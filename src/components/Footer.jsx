import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => (
  <footer style={{ background: '#060E1A', borderTop: '1px solid rgba(77,184,232,0.15)' }} className="pt-12 pb-8 text-white relative z-20 overflow-hidden">
    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-[#4DB8E8]/5 rounded-full blur-[100px]"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">

        {/* Brand */}
        <div>
          <div className="mb-6 hidden md:block">
            <Logo size="md" />
          </div>
          <p className="italic text-sm leading-relaxed mb-4" style={{ color: '#8899AA' }}>"We build revenue engines."</p>
          <p className="text-[#8899AA] text-[13px] leading-relaxed mb-8">
            High-performance BPO, offshore operations, and marketing consulting for U.S. businesses. Pre-vetted talent. Live in 14 days. Starting at $4/hr.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <Facebook size={16} />, href: 'https://www.facebook.com/themarkettitans', label: 'Facebook' },
              { icon: <Instagram size={16} />, href: 'https://www.instagram.com/markettitansgroup', label: 'Instagram' },
              { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/company/themarkettitans/', label: 'LinkedIn' },
            ].map(({ icon, href, label }) => (
              <a 
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '50%', 
                  background: 'rgba(77,184,232,0.1)', 
                  border: '1px solid rgba(77,184,232,0.2)', 
                  color: '#4DB8E8',
                  padding: '8px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(77,184,232,0.2)';
                  e.currentTarget.style.borderColor = '#4DB8E8';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(77,184,232,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(77,184,232,0.2)';
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav — React Router Links */}
        <div>
          <h4 className="font-label text-[11px] font-bold tracking-[0.2em] uppercase mb-6 md:mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>Quick Navigation</h4>
          <ul className="space-y-3 md:space-y-4">
            {[
              { label: 'HOME', path: '/' },
              { label: 'HOW IT WORKS', path: '/how-it-works' },
              { label: 'ABOUT', path: '/about' },
              { label: 'PRICING', path: '/pricing' },
              { label: 'ROLES', path: '/roles' },
              { label: 'INDUSTRIES', path: '/industries' },
              { label: 'CONTACT', path: '/contact' }
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="text-white/60 hover:text-[#F5A623] transition-colors duration-300 flex items-center gap-2 hover:translate-x-1 uppercase text-sm font-bold tracking-widest">
                  <ChevronRight size={13} style={{ color: 'rgba(77,184,232,0.5)' }} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-label text-[11px] font-bold tracking-[0.2em] uppercase mb-6 md:mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>Contact Nexus</h4>
          <ul className="space-y-4 md:space-y-5 text-white/50 text-[14px]">
            {['Clifton Heights, Pennsylvania', '+1 (267) 298-7777', 'info@themarkettitans.com'].map((item) => (
              <li key={item} className="flex items-start gap-3 hover:text-white transition-colors cursor-default">
                <ChevronRight size={13} className="mt-0.5 flex-shrink-0" style={{ color: '#4DB8E8' }} />
                <span className="break-all md:break-normal">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="pt-6 md:pt-8 flex flex-col items-center gap-3 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <a
          href="https://staffarc.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 transition-opacity duration-300 hover:opacity-90"
          aria-label="Built by StaffArc"
        >
          <span className="text-white/80 text-xl leading-none">♡</span>
          <span className="font-body text-[15px] text-white/85">Made with</span>
          <img
            src="https://www.staffarc.in/images/Staffarc-logo.png"
            alt="StaffArc"
            className="h-7 w-auto"
            loading="lazy"
          />
          <span className="font-body text-[15px] text-[#F07D22] font-semibold">by StaffArc</span>
        </a>
        <p className="font-label text-[10px] md:text-[11px] tracking-[0.15em] uppercase" style={{ color: '#4A5568' }}>
          © 2026{' '}
          <a
            href="https://themarkettitans.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5A623] transition-colors duration-300"
            style={{ color: 'inherit' }}
          >
            THE MARKET TITANS
          </a>{' '}
          | ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
