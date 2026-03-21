import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const FONT = '"Barlow Condensed", sans-serif';

export const BackToHome = () => (
  <div className="px-0 pt-24 pb-4 relative z-10">
    <Link
      to="/"
      className="inline-flex items-center gap-2 group transition-all duration-300"
      style={{
        color: '#4DB8E8',
        fontFamily: FONT,
        fontSize: '12px',
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        opacity: 0.8
      }}
    >
      <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
      <span>Back to Home</span>
    </Link>
  </div>
);

export const BackLink = ({ to, label, className }) => (
  <Link
    to={to}
    className={`inline-flex items-center gap-2 group transition-all duration-300 ${className}`}
    style={{
      color: '#4DB8E8',
      fontFamily: FONT,
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      opacity: 0.8
    }}
  >
    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
    <span>{label}</span>
  </Link>
);

export const PrimaryButton = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center justify-center hover:scale-105 transition-all duration-300"
    style={{
      backgroundColor: '#F5A623',
      color: '#1B2A4A',
      fontWeight: 700,
      borderRadius: '50px',
      padding: '12px 28px',
      fontFamily: FONT,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '14px',
      textDecoration: 'none',
      boxShadow: '0 8px 25px rgba(245,166,35,0.3)',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = '#FFBB33';
      e.currentTarget.style.boxShadow = '0 12px 35px rgba(245,166,35,0.5)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = '#F5A623';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(245,166,35,0.3)';
    }}
  >
    {children}
  </Link>
);

export const OutlineButton = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center justify-center hover:scale-105 transition-all duration-300"
    style={{
      border: '2px solid #4DB8E8',
      color: '#4DB8E8',
      background: 'transparent',
      fontWeight: 700,
      borderRadius: '50px',
      padding: '12px 28px',
      fontFamily: FONT,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '14px',
      textDecoration: 'none',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = '#4DB8E8';
      e.currentTarget.style.color = '#1B2A4A';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = '#4DB8E8';
    }}
  >
    {children}
  </Link>
);
