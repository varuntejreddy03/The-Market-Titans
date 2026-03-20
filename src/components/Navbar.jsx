import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LogoCompact } from './Logo';

const LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'About',        path: '/about' },
  { label: 'Pricing',      path: '/pricing' },
  { label: 'Roles',        path: '/roles' },
  { label: 'Industries',   path: '/industries' },
  { label: 'Contact',      path: '/contact' },
];

const FONT = '"Barlow Condensed", sans-serif';
const GOLD = '#F5A623';
const NAVY = '#1B2A4A';
const CYAN = '#4DB8E8';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();
  const rafRef                    = useRef(null);

  /* ── scroll state ── */
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
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

  /* ── close menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navBg   = scrolled ? 'rgba(27, 42, 74, 0.97)' : 'rgba(27, 42, 74, 0.85)';
  const navBlur = 'blur(20px)';

  return (
    <>
      {/* ══════════════ TOP BAR — Logo + Hamburger Only ══════════════ */}
      <nav style={{
        position: 'fixed', top: 16, left: 16, right: 16,
        maxWidth: 900, margin: '0 auto',
        borderRadius: 50,
        background: navBg,
        backdropFilter: navBlur,
        WebkitBackdropFilter: navBlur,
        border: '1px solid rgba(77, 184, 232, 0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        zIndex: 2000,
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center',
        padding: '12px 28px',
      }}>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <RouterLink to="/" style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={() => setMenuOpen(false)}>
            <LogoCompact />
          </RouterLink>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: 'none',
              color: GOLD, cursor: 'pointer',
              padding: 8, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </nav>

      {/* ══════════════ FULL DROPDOWN MENU ══════════════ */}
      <div style={{
        position: 'fixed',
        top: scrolled ? 80 : 96,
        left: 16, right: 16,
        maxWidth: 900, margin: '0 auto',
        zIndex: 1900,
        background: 'rgba(13, 27, 46, 0.98)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(77, 184, 232, 0.15)',
        borderRadius: 20,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        display: 'flex', flexDirection: 'column',
        maxHeight: menuOpen ? '80vh' : '0px',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
        transition: 'max-height 0.35s ease, opacity 0.25s ease, visibility 0.25s ease, top 0.3s ease',
        overflow: 'hidden',
      }}>

        {/* Links */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 12px', gap: 4 }}>
          {LINKS.map(({ label, path }, index) => {
            const isActive = location.pathname === path;
            return (
              <RouterLink
                key={label}
                to={path}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '14px 20px', borderRadius: 12,
                  fontFamily: FONT,
                  fontSize: 15, fontWeight: 700,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  color: isActive ? GOLD : 'rgba(255,255,255,0.75)',
                  background: isActive ? 'rgba(245,166,35,0.08)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(245,166,35,0.2)' : 'transparent'}`,
                  cursor: 'pointer', textDecoration: 'none', userSelect: 'none',
                  transition: 'all 0.2s ease',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
                  transitionDelay: menuOpen ? `${index * 0.04}s` : '0s',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(77,184,232,0.08)';
                    e.currentTarget.style.color = CYAN;
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                  }
                }}
              >
                <span>{label}</span>
                <span style={{ fontSize: 14, color: isActive ? GOLD : 'rgba(245,166,35,0.15)', transition: 'color 0.2s' }}>→</span>
              </RouterLink>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ padding: '16px 16px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          <RouterLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '14px 0', width: '100%',
              background: GOLD, color: NAVY, borderRadius: 50,
              fontFamily: FONT, fontSize: 14, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: 'pointer', textDecoration: 'none', userSelect: 'none',
              boxShadow: '0 8px 24px rgba(245,166,35,0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#FFBB33';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(245,166,35,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = GOLD;
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,166,35,0.3)';
            }}
          >
            GET STARTED →
          </RouterLink>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 12, color: 'rgba(255,255,255,0.35)', fontSize: 11, fontFamily: FONT, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <span>+1 (267) 298-7777</span>
            <span style={{ color: 'rgba(245,166,35,0.3)' }}>·</span>
            <span>info@themarkettitans.com</span>
          </div>
        </div>
      </div>

      {/* ══════════════ FULLSCREEN BACKDROP ══════════════ */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1800,
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(4px)',
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
    </>
  );
}
