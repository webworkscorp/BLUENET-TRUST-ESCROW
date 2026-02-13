
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const whatsappNumber = "50683921000";
  const whatsappMessage = encodeURIComponent(
    language === 'es' 
    ? "Hola BLUENET trust & escrow, me gustaría solicitar una consulta profesional."
    : "Hello BLUENET trust & escrow, I would like to request a professional consultation."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer id="contacto" className="bg-white text-brand-primary pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-1">
             <div className="flex flex-col mb-6">
                <a href="#inicio" className="block transition-transform hover:scale-105">
                  <img 
                    src="https://i.imgur.com/hJexHat.jpeg" 
                    alt="BLUENET" 
                    className="h-20 w-auto object-contain self-start mb-4"
                  />
                </a>
              </div>
              <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                {t('footer.desc')}
              </p>
              <div className="flex space-x-4 mt-8">
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-full hover:bg-brand-accent hover:text-white transition-all text-brand-primary" 
                  title="WhatsApp"
                >
                  <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.1-8.5-44-27.1-16.2-14.5-27.1-32.3-30.3-37.8-3.2-5.5-.3-8.5 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </a>
                <a href="#!" className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-full hover:bg-brand-accent hover:text-white transition-all" onClick={(e) => e.preventDefault()}>
                  <Facebook size={18} />
                </a>
                <a href="#!" className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-full hover:bg-brand-accent hover:text-white transition-all" onClick={(e) => e.preventDefault()}>
                  <Instagram size={18} />
                </a>
              </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-accent">{t('footer.sections')}</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><a href="#inicio" className="hover:text-brand-accent transition-colors uppercase tracking-widest text-[10px]">{t('nav.inicio')}</a></li>
              <li><a href="#nosotros" className="hover:text-brand-accent transition-colors uppercase tracking-widest text-[10px]">{t('nav.nosotros')}</a></li>
              <li><a href="#servicios" className="hover:text-brand-accent transition-colors uppercase tracking-widest text-[10px]">{t('nav.servicios')}</a></li>
              <li><a href="#tarifas" className="hover:text-brand-accent transition-colors uppercase tracking-widest text-[10px]">{t('nav.tarifas')}</a></li>
              <li><a href="#metodologia" className="hover:text-brand-accent transition-colors uppercase tracking-widest text-[10px]">{t('nav.metodologia')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-accent">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-[13px] text-gray-600 font-medium">
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-accent flex-shrink-0" />
                  <a href="mailto:mramirez@bluenet.com" className="hover:text-brand-primary transition-colors truncate">mramirez@bluenet.com</a>
                </div>
                <div className="flex items-center gap-3 pl-7">
                  <a href="mailto:jaguilar@bluenet.com" className="hover:text-brand-primary transition-colors truncate">jaguilar@bluenet.com</a>
                </div>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <Phone size={16} className="text-brand-accent flex-shrink-0" />
                <a href="tel:+50683921000" className="hover:text-brand-primary transition-colors font-bold">+506 8392 1000</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-accent flex-shrink-0 mt-1" />
                <span className="leading-tight uppercase text-[11px] font-bold">
                  BARREAL DE HEREDIA, FRENTE A CENADA, HEREDIA, 40104
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
            {t('footer.rights').replace('{year}', new Date().getFullYear().toString())}
          </p>
          <div className="flex gap-8 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
            <a href="#inicio" className="hover:text-brand-accent transition-colors">{t('footer.privacy')}</a>
            <a href="#inicio" className="hover:text-brand-accent transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
