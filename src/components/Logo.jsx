import React from 'react';

// Brand Logo Image component
const BrandLogo = ({ className = "", size = 'md' }) => {
  const sizes = {
    sm: { img: '36px', text: '16px', gap: '10px', spacing: '1.5px' },
    md: { img: '48px', text: '20px', gap: '14px', spacing: '2px' },
    lg: { img: '64px', text: '28px', gap: '18px', spacing: '3px' },
    xl: { img: '120px', text: '40px', gap: '24px', spacing: '4px' },
  };
  
  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-[${currentSize.gap}] ${className}`} style={{ gap: currentSize.gap }}>
      <img 
        src="/logo.png" 
        alt="Market Titans Icon" 
        style={{ height: currentSize.img, width: 'auto', display: 'block', flexShrink: 0 }}
        className="object-contain"
      />
      <div className="flex flex-col text-left justify-center block">
        <span className="text-[#FFFFFF] whitespace-nowrap uppercase m-0" style={{ 
          fontWeight: 800, 
          fontSize: currentSize.text, 
          letterSpacing: currentSize.spacing, 
          lineHeight: 1, 
          fontFamily: '"Playfair Display", serif' 
        }}>
          MARKET TITANS
        </span>
      </div>
    </div>
  );
};

// Compact: For navbar
export const LogoCompact = () => (
  <div className="navbar-logo-wrapper hover:opacity-90 transition-opacity">
    <BrandLogo className="navbar-logo" size="sm" />
  </div>
);

const Logo = ({ size = 'md', className = "" }) => {
  return (
    <div className={`logo-full-wrapper ${className}`} style={{ background: 'transparent', border: 'none', padding: 0 }}>
      <BrandLogo size={size} />
    </div>
  );
};

export default Logo;
