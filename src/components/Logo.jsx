import React from 'react';

// Shield SVG mark — gold on navy
const ShieldMark = ({ size = 40 }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M30 2L4 12V36C4 52 16 64 30 70C44 64 56 52 56 36V12L30 2Z" fill="#0A0F2C" stroke="#D4A017" strokeWidth="2.5" />
    <path d="M30 8L10 16V36C10 49 19 59 30 64C41 59 50 49 50 36V16L30 8Z" fill="#111A3E" />
    {/* MT monogram */}
    <text
      x="30"
      y="46"
      textAnchor="middle"
      fill="#D4A017"
      fontSize="22"
      fontWeight="700"
      fontFamily="'Barlow Condensed', sans-serif"
      letterSpacing="1"
    >MT</text>
    {/* Gold top bar */}
    <rect x="18" y="18" width="24" height="2" rx="1" fill="#D4A017" opacity="0.7" />
    {/* Arrow motif */}
    <path d="M26 56L30 51L34 56" stroke="#D4A017" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Compact: icon + "THE MARKET TITANS" — for navbar
export const LogoCompact = () => (
  <div className="flex items-center gap-2.5 select-none">
    <ShieldMark size={36} />
    <div className="flex flex-col leading-none">
      <span style={{
        fontFamily: '"Barlow Condensed", sans-serif',
        fontSize: '14px',
        fontWeight: 700,
        letterSpacing: '0.16em',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        lineHeight: 1.15,
      }}>
        THE MARKET TITANS
      </span>
      <span style={{
        fontFamily: '"Barlow Condensed", sans-serif',
        fontSize: '8px',
        fontWeight: 600,
        letterSpacing: '0.2em',
        color: '#D4A017',
        textTransform: 'uppercase',
        lineHeight: 1,
        marginTop: '2px',
      }}>
        STRATEGY · GROWTH · EXECUTION
      </span>
    </div>
  </div>
);

// Full: larger, for overlays / about card / footer
const Logo = ({ size = 'md' }) => {
  const cfg = {
    sm:  { icon: 36, name: '14px', sub: '8px'  },
    md:  { icon: 44, name: '17px', sub: '9px'  },
    lg:  { icon: 56, name: '22px', sub: '11px' },
    xl:  { icon: 72, name: '28px', sub: '13px' },
  };
  const c = cfg[size] || cfg.md;
  return (
    <div className="flex items-center gap-3 select-none">
      <ShieldMark size={c.icon} />
      <div className="flex flex-col leading-none">
        <span style={{
          fontFamily: '"Barlow Condensed", sans-serif',
          fontSize: c.name,
          fontWeight: 700,
          letterSpacing: '0.16em',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          lineHeight: 1.15,
        }}>
          THE MARKET TITANS
        </span>
        <span style={{
          fontFamily: '"Barlow Condensed", sans-serif',
          fontSize: c.sub,
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: '#D4A017',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginTop: '3px',
        }}>
          STRATEGY · GROWTH · EXECUTION
        </span>
      </div>
    </div>
  );
};

export default Logo;
