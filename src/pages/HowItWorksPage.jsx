import React, { useEffect } from 'react';
import HowItWorks from '../components/HowItWorks';
import { BackToHome } from '../components/NavButtons';

export default function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="font-body opacity-0 animate-[fadeIn_0.5s_0.2s_ease_forwards] relative bg-[#1B2A4A]" style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      <BackToHome />
      <HowItWorks />
    </main>
  );
}
