import React from 'react';
import { Link } from 'react-router-dom';
import { OutlineButton } from './NavButtons';

const stats = [
  { value: '$4',   suffix: '/hr',  label: 'BPO Starting Price',   sub: 'Per agent, fully managed'     },
  { value: '14',   suffix: ' days', label: 'Live in 14 Days',      sub: 'From kickoff to deployment'   },
  { value: '24/7', suffix: '',      label: 'Always On',            sub: 'Round-the-clock operations'   },
  { value: '0',    suffix: ' HR',   label: 'Zero Overhead',        sub: 'No hiring, no benefits cost'  },
];

const SocialProof = () => (
  <section style={{ background: '#0D1B2E', padding: '100px 0' }} className="relative z-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ value, suffix, label, sub }) => (
          <div 
            key={label} 
            className="reveal text-center group transition-all duration-400"
            style={{
              background: 'linear-gradient(135deg, #162236, #1B2A4A)',
              border: '1px solid rgba(245,166,35,0.2)',
              borderTop: '3px solid #F5A623',
              borderRadius: '16px',
              padding: '32px 20px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="font-display leading-none tracking-tight mb-3 stat-number" style={{ color: '#F5A623', fontSize: '52px', fontWeight: 800 }}>
              {value}<span style={{ fontSize: '26px' }}>{suffix}</span>
            </div>
            <div className="font-label uppercase font-bold mb-1" style={{ color: '#4DB8E8', fontSize: '11px', letterSpacing: '2px' }}>{label}</div>
            <div className="font-label font-semibold" style={{ color: '#8899AA', fontSize: '12px' }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* View Pricing Button */}
      <div className="text-center" style={{ marginTop: '40px' }}>
        <OutlineButton to="/pricing">View Pricing &rarr;</OutlineButton>
      </div>
    </div>
  </section>
);

export default SocialProof;
