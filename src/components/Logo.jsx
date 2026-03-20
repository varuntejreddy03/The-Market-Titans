import React from 'react';

// Brand Logo Image component
const BrandLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-[12px] ${className}`}>
    <img 
      src="/logo.png" 
      alt="Market Titans Icon" 
      style={{ height: '44px', width: 'auto', display: 'block', flexShrink: 0 }}
      className="object-contain"
    />
    <div className="flex flex-col text-left justify-center block">
      <span className="text-[#FFFFFF] whitespace-nowrap uppercase m-0" style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '2px', lineHeight: 1, fontFamily: '"Playfair Display", serif' }}>
        MARKET TITANS
      </span>
      <span className="text-[#4DB8E8] whitespace-nowrap uppercase" style={{ fontWeight: 400, fontSize: '9px', letterSpacing: '1.5px', marginTop: '3px', lineHeight: 1, fontFamily: '"Barlow Condensed", sans-serif' }}>
        DIGITAL MARKETING | BPO SOLUTIONS
      </span>
    </div>
  </div>
);

// Compact: For navbar
export const LogoCompact = () => (
  <div className="navbar-logo-wrapper hover:opacity-90 transition-opacity">
    <BrandLogo className="navbar-logo" />
  </div>
);

const Logo = ({ size = 'md' }) => {
  return (
    <div className="logo-full-wrapper" style={{ background: 'transparent', border: 'none', padding: 0 }}>
      <BrandLogo />
    </div>
  );
};

export default Logo;
