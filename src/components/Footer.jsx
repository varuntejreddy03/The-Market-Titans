import React from 'react';
import { Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => (
  <footer className="bg-navy pt-24 pb-10 text-white relative z-20 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gold/5 rounded-full blur-[100px]"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

        {/* Brand */}
        <div>
          <div className="mb-6">
            <Logo size="sm" />
          </div>
          <p className="text-white/40 italic text-sm leading-relaxed mb-8">"We build revenue engines."</p>
          <div className="flex gap-3">
            {[<Facebook size={16} />, <Instagram size={16} />, <Linkedin size={16} />].map((icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <h4 className="section-tag mb-8 opacity-40">Quick Navigation</h4>
          <ul className="space-y-4">
            {['Home', 'Services', 'About', 'Why Us', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '')}`} className="nav-link text-white/40 hover:text-gold transition-colors duration-300 flex items-center gap-2 hover:translate-x-1">
                  <ChevronRight size={13} className="text-gold/50" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="section-tag mb-8 opacity-40">Contact Nexus</h4>
          <ul className="space-y-5 text-white/40 text-[14px]">
            {['Clifton Heights, Pennsylvania', '+1 (267) 298-7777', 'info@themarkettitans.com'].map((item) => (
              <li key={item} className="flex items-start gap-3 hover:text-white transition-colors cursor-default">
                <ChevronRight size={13} className="text-gold mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label text-[11px] text-white/30 tracking-[0.15em] uppercase">
          © 2026 THE MARKET TITANS | ALL RIGHTS RESERVED | CLIFTON HEIGHTS, PA
        </p>
        <p className="font-label text-[11px] text-white/20 tracking-[0.15em] uppercase">
          STRATEGIC GROWTH CONSULTING
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
