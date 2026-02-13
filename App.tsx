
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Rates from './components/Rates';
import Methodology from './components/Methodology';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './context/LanguageContext';

const AppContent: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const id = anchor.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);

        if (element) {
          e.preventDefault();
          
          element.classList.add('active');
          const parentReveal = element.closest('.reveal');
          if (parentReveal) parentReveal.classList.add('active');

          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div className="bg-transparent min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Rates />
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.imgur.com/4h58muW.jpeg" 
              alt="Background Methodology and Contact" 
              className="w-full h-full object-cover brightness-[0.65]"
              style={{ 
                imageRendering: 'crisp-edges',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden'
              }}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="relative z-10">
            <Methodology />
            <ConsultationForm />
          </div>
        </div>
      </main>
      <Footer />
      <LanguageSwitcher />
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;
