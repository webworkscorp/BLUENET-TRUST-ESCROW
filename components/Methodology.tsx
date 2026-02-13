
import React from 'react';
import { METHODOLOGY } from '../constants';

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="relative py-24 md:py-32 overflow-hidden bg-transparent">
      {/* Background logic removed to use parent container's background */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] mb-4 drop-shadow-sm">FORMA DE TRABAJO</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight drop-shadow-md">Un proceso estructurado para su tranquilidad</h3>
          </div>
          <p className="text-gray-200 max-w-sm text-base font-semibold border-l-4 border-brand-accent pl-6 drop-shadow-sm">
            Nuestra metodología garantiza que ningún detalle quede al azar, proporcionando un seguimiento continuo y profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {METHODOLOGY.map((step, index) => (
            <div key={index} className="relative group">
              <span className="text-7xl font-sans font-black text-brand-accent/20 absolute -top-8 left-0 transition-colors group-hover:text-brand-accent/40">
                {step.number}
              </span>
              <div className="relative pt-10">
                <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-brand-accent transition-colors drop-shadow-md">
                  {step.title}
                </h4>
                <p className="text-gray-300 text-base leading-relaxed font-medium drop-shadow-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
