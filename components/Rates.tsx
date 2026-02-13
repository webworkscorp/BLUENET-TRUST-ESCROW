
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { getRates } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Rates: React.FC = () => {
  const { t } = useLanguage();
  const rates = getRates(t);

  return (
    <section id="tarifas" className="relative py-24 md:py-32 overflow-hidden bg-brand-primary">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/mllVSrB.jpeg" 
          alt="Rates Background" 
          className="w-full h-full object-cover brightness-[0.85]"
          style={{ imageRendering: 'crisp-edges' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md uppercase">{t('rates.title')}</h3>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {rates.map((rate, index) => (
            <div 
              key={index}
              className="relative p-10 bg-white/95 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-brand-primary"
            >
              <h4 className="text-xl font-serif font-bold text-brand-primary mb-2 min-h-[3rem]">{rate.title}</h4>
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-3xl font-serif font-bold text-brand-primary">{rate.price}</span>
                  <span className="text-gray-500 text-[10px] ml-2 font-black uppercase tracking-wider">{rate.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {rate.features.map((feature: string, fIndex: number) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-600 font-semibold">
                    <Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 bg-brand-primary text-white hover:bg-brand-accent"
              >
                {t('rates.cta')}
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-[11px] text-gray-200 uppercase tracking-widest font-black max-w-2xl mx-auto leading-relaxed drop-shadow-sm italic">
          {t('rates.disclaimer')}
        </p>
      </div>
    </section>
  );
};

export default Rates;
