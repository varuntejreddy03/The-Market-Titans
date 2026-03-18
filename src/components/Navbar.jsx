import React, { useState, useEffect, useRef } from 'react';
import { Link, scrollSpy } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Home',     to: 'home'     },
  { label: 'Services', to: 'services' },
  { label: 'About',    to: 'about'    },
  { label: 'Why Us',   to: 'whyus'    },
  { label: 'Contact',  to: 'contact'  },
];

const FONT = '"Barlow Condensed", sans-serif';
const GOLD = '#D4A017';
const NAVY = '#0A0F2C';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', userSelect: 'none' }}>
    <svg width="32" height="40" viewBox="0 0 60 72" fill="none">
      <path d="M30 2L4 12V36C4 52 16 64 30 70C44 64 56 52 56 36V12L30 2Z" fill={NAVY} stroke={GOLD} strokeWidth="2.5"/>
      <path d="M30 8L10 16V36C10 49 19 59 30 64C41 59 50 49 50 36V16L30 8Z" fill="#111A3E"/>
      <rect x="18" y="17" width="24" height="2" rx="1" fill={GOLD} opacity="0.8"/>
      <path d="M17 47V31L24 41L30 31L36 41L43 31V47" stroke={GOLD} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M27 57L30 52L33 57" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', color: '#fff', textTransform: 'uppercase' }}>
        THE MARKET TITANS
      </span>
      <span style={{ fontFamily: FONT, fontSize: 8, fontWeight: 600, letterSpacing: '0.2em', color: GOLD, textTransform: 'uppercase', marginTop: 3 }}>
        STRATEGY · GROWTH · EXECUTION
      </span>
    </div>
  </div>
);

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('home');
  const rafRef                    = useRef(null);

  /* ── scroll state ── */
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
        // active section
        const offset = 90;
        let cur = LINKS[0].to;
        for (const { to } of LINKS) {
          const el = document.getElementById(to);
          if (el && el.getBoundingClientRect().top <= offset) cur = to;
        }
        setActive(cur);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafRef.current); };
  }, []);

  /* ── body lock ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── react-scroll spy ── */
  useEffect(() => { scrollSpy.update(); }, []);

  const navH    = scrolled ? 64 : 80;
  const navBg   = scrolled ? 'rgba(10,15,44,0.92)' : 'transparent';
  const navBlur = scrolled ? 'blur(12px)' : 'none';
  const navBorder = scrolled ? `1px solid rgba(212,160,23,0.2)` : '1px solid transparent';
  const navShadow = scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none';

  const scrollOpts = { smooth: true, duration: 500, offset: -80 };

  return (
    <>
      {/* ══════════════ NAVBAR ══════════════ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: navH,
        background: navBg,
        backdropFilter: navBlur,
        WebkitBackdropFilter: navBlur,
        borderBottom: navBorder,
        boxShadow: navShadow,
        zIndex: 1000,
        transition: 'height 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>

          {/* Logo */}
          <Link to="home" {...scrollOpts} style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>

          {/* ── Desktop links ── */}
          <div id="desktop-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {LINKS.map(({ label, to }) => {
              const isActive = active === to;
              return (
                <Link
                  key={to}
                  to={to}
                  {...scrollOpts}
                  style={{
                    position: 'relative',
                    fontFamily: FONT,
                    fontSize: 13, fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: isActive ? GOLD : 'rgba(255,255,255,0.7)',
                    padding: '8px 14px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    userSelect: 'none',
                    display: 'block',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  {label}
                  {/* underline */}
                  <span style={{
                    position: 'absolute', bottom: 4, left: 14, right: 14,
                    height: 2, borderRadius: 2, background: GOLD,
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.25s ease',
                  }} />
                </Link>
              );
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <div id="desktop-cta">
            <Link
              to="contact"
              {...scrollOpts}
              style={{
                fontFamily: FONT, fontSize: 12, fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                background: GOLD, color: NAVY,
                padding: '10px 22px', borderRadius: 999,
                cursor: 'pointer', whiteSpace: 'nowrap',
                boxShadow: scrolled ? `0 0 12px rgba(212,160,23,0.4)` : '0 4px 16px rgba(212,160,23,0.25)',
                textDecoration: 'none', userSelect: 'none',
                transition: 'box-shadow 0.3s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F0C040'; e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              FREE CONSULTATION →
            </Link>
          </div>

          {/* ── Hamburger ── */}
          <div id="hamburger">
            <button
              onClick={() => setMenuOpen(true)}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════════ MOBILE OVERLAY ══════════════ */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 2000,
        background: NAVY,
        display: 'flex', flexDirection: 'column',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.25s ease, visibility 0.25s ease',
      }}>
        {/* overlay top bar */}
        <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', flexShrink: 0 }}>
          <Link to="home" {...scrollOpts} onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 8, display: 'flex', alignItems: 'center' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* overlay links */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px', gap: 8 }}>
          {LINKS.map(({ label, to }) => {
            const isActive = active === to;
            return (
              <Link
                key={to}
                to={to}
                {...scrollOpts}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 20px', borderRadius: 14,
                  fontFamily: '"Playfair Display", serif',
                  fontSize: 28, fontWeight: 700,
                  color: isActive ? GOLD : 'rgba(255,255,255,0.8)',
                  background: isActive ? 'rgba(212,160,23,0.07)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(212,160,23,0.25)' : 'transparent'}`,
                  cursor: 'pointer', textDecoration: 'none', userSelect: 'none',
                  transition: 'all 0.15s',
                }}
              >
                <span>{label}</span>
                <span style={{ fontSize: 20, color: isActive ? GOLD : 'rgba(255,255,255,0.2)' }}>→</span>
              </Link>
            );
          })}
        </div>

        {/* overlay CTA */}
        <div style={{ padding: '20px 20px 48px', borderTop: '1px solid rgba(255,255,255,0.08)', flexShrink: 0 }}>
          <Link
            to="contact"
            {...scrollOpts}
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '16px 0', width: '100%',
              background: GOLD, color: NAVY, borderRadius: 16,
              fontFamily: FONT, fontSize: 14, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: 'pointer', textDecoration: 'none', userSelect: 'none',
              boxShadow: '0 8px 24px rgba(212,160,23,0.3)',
            }}
          >
            GET FREE CONSULTATION →
          </Link>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 14, color: 'rgba(255,255,255,0.25)', fontSize: 11, fontFamily: FONT, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <span>+1 (267) 298-7777</span>
            <span style={{ color: 'rgba(212,160,23,0.3)' }}>·</span>
            <span>info@themarkettitans.com</span>
          </div>
        </div>
      </div>

      {/* ══════════════ RESPONSIVE STYLE ══════════════ */}
      <style>{`
        #desktop-links, #desktop-cta { display: flex; }
        #hamburger { display: none; }
        @media (max-width: 767px) {
          #desktop-links, #desktop-cta { display: none !important; }
          #hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
