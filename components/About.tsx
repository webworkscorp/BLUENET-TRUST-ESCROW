
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="nosotros" 
      className="relative py-28 md:py-40 reveal overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-50">
        <img 
          src="https://i.imgur.com/GS78cD2.jpeg" 
          alt="Background detail" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-7">
            <div className="mb-12">
              <h2 className="text-brand-accent text-[10px] font-black uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-accent"></span>
                {t('about.tag')}
              </h2>
              <h3 className="text-4xl md:text-6xl font-serif font-black text-brand-primary mb-10 leading-tight tracking-tighter uppercase">
                {t('about.title')} <span className="text-brand-accent font-sans font-black tracking-[0.15em] text-2xl md:text-4xl block mt-4 md:mt-0 md:inline-block">{t('about.subtitle')}</span>
              </h3>
              <div className="space-y-8 text-brand-neutralDark text-lg md:text-xl leading-relaxed font-medium opacity-90">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p className="text-brand-primary font-bold text-xl md:text-2xl leading-relaxed pt-4 border-t border-brand-accent/20">
                  {t('about.featured')}
                </p>
              </div>
            </div>

            <div className="relative mt-20 p-1 bg-gradient-to-br from-gray-100 to-transparent">
              <div className="bg-white p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center gap-10 border border-gray-100">
                <div className="relative flex-shrink-0">
                  <img 
                    src="https://i.imgur.com/bl6LoRR.jpeg" 
                    alt="Mauricio Ramírez - Director" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl transition-none"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-brand-primary text-white p-3 rounded-full border-4 border-white shadow-xl">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <h4 className="font-serif text-3xl md:text-4xl font-bold text-brand-primary tracking-tighter mb-1">
                      Mauricio Ramírez
                    </h4>
                    <p className="text-brand-accent text-xs font-black uppercase tracking-[0.4em]">
                      {t('about.director')}
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 italic max-w-sm">
                    {t('about.quote')}
                  </p>
                  <div className="flex justify-center md:justify-start gap-4">
                    <span className="w-12 h-1 bg-brand-primary"></span>
                    <span className="w-4 h-1 bg-brand-accent"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-16">
              <div className="space-y-4">
                <div className="mb-2">
                  <h4 className="font-sans font-black text-[12px] uppercase tracking-[0.4em] text-brand-accent">{t('about.vision')}</h4>
                </div>
                <p className="text-brand-primary font-serif text-xl font-bold leading-relaxed">
                  {t('about.visionText')}
                </p>
              </div>
              <div className="space-y-4">
                <div className="mb-2">
                  <h4 className="font-sans font-black text-[12px] uppercase tracking-[0.4em] text-brand-accent">{t('about.values')}</h4>
                </div>
                <p className="text-brand-primary font-serif text-xl font-bold leading-relaxed">
                  {t('about.valuesText')}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block self-start sticky top-20">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Architecture Detail" 
                className="w-full h-[600px] object-cover grayscale brightness-75 shadow-2xl"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div>
              
              <div className="absolute -bottom-10 -left-10 bg-brand-primary p-10 text-white shadow-3xl max-w-xs">
                <p className="text-4xl font-serif font-bold mb-2">{t('about.years')}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-accent mb-4">{t('about.yearsTag')}</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {t('about.yearsDesc')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
