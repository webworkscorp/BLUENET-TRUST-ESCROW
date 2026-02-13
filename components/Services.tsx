
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="relative py-24 md:py-32 reveal overflow-hidden">
      {/* Background Image Container - Optimized for Sharpness */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/LBQxxYB.jpeg" 
          alt="Services Background" 
          className="w-full h-full object-cover"
          style={{ 
            imageRendering: 'crisp-edges',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        />
        {/* Dark overlay to provide depth and contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] mb-4 drop-shadow-sm">Portafolio de Servicios</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md">Soluciones Financieras</h3>
          <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
        </div>

        {/* Grid with border-separation and transparent cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="p-12 bg-black/20 hover:bg-black/40 transition-all duration-500 group cursor-default border border-white/5 flex flex-col"
            >
              <div className="text-brand-accent mb-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-6 group-hover:text-brand-accent transition-colors duration-500">
                {service.title}
              </h4>
              {service.description && (
                <p className="text-gray-300 text-sm leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>
              )}
              <div className="mt-auto">
                <a 
                  href="#agendar" 
                  className="flex items-center text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border-b-2 border-brand-accent pb-1 w-fit group-hover:border-white"
                >
                  Solicitar Consultoría
                  <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
          
          <div className="p-12 bg-brand-primary/80 flex flex-col justify-center items-center text-center relative overflow-hidden group border border-white/5 min-h-[300px]">
            <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h4 className="text-2xl font-serif font-bold text-white mb-10 relative z-10">¿Necesitas un plan a la medida?</h4>
            <a 
              href="#agendar" 
              className="group relative z-10 inline-flex items-center px-10 py-4 bg-brand-accent text-white text-[10px] uppercase tracking-[0.25em] font-black transition-all duration-500 hover:scale-105 hover:bg-brand-accentLight"
            >
              <span className="relative z-10 flex items-center">
                Contactar Ahora
                <ArrowRight className="ml-3 w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
