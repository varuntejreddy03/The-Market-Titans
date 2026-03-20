import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import { BackToHome } from '../components/NavButtons';

export default function ContactPage() {
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
    <main className="font-body bg-[#1B2A4A] min-h-screen pb-24 relative z-10 overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1E6FBF] rounded-full blur-[250px] opacity-10 pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4DB8E8] rounded-full blur-[200px] opacity-[0.05] pointer-events-none -z-10"></div>
      
      <BackToHome />
      <Contact />
    </main>
  );
}
