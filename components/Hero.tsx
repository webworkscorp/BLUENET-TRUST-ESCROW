
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 animate-fade-in">
        <img 
          src="https://i.imgur.com/p4OVT13.jpeg" 
          alt="BLUENET Excellence" 
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          style={{ imageRendering: 'high-quality' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start -mt-20 md:-mt-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-primary mb-8 leading-[1.15] animate-fade-up tracking-tighter uppercase">
            {t('hero.title1')} <br />
            <span className="text-brand-accent italic font-normal">{t('hero.trust')}</span> <br />
            {t('hero.title2')} <span className="relative">
              {t('hero.experts')}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>
          
          <p className="text-brand-neutralDark text-lg md:text-2xl max-w-2xl mb-12 font-medium leading-relaxed animate-fade-up border-l-4 border-brand-accent pl-8">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 animate-fade-up">
            <button 
              onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-14 py-5 bg-brand-primary text-white text-[11px] uppercase tracking-[0.4em] font-black transition-all duration-500 hover:bg-brand-accent hover:shadow-[0_20px_40px_rgba(74,144,226,0.3)]"
            >
              <span className="relative z-10 flex items-center">
                {t('hero.cta')}
                <ArrowRight className="ml-4 w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center w-full sm:w-auto px-14 py-5 text-brand-primary text-[11px] uppercase tracking-[0.4em] font-black transition-all duration-300 hover:text-brand-accent"
            >
              <span className="border-b-2 border-brand-primary/20 group-hover:border-brand-accent pb-1 transition-colors">
                {t('hero.services')}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-brand-primary/30 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
