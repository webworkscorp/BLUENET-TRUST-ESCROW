
import React, { useState } from 'react';

const ConsultationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    
    const phoneNumber = "50683921000";
    const text = `*Solicitud de Consulta Profesional*\n\n*Remitente:* ${name}\n*Consulta:* ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendar" className="relative py-24 reveal overflow-hidden bg-transparent">
      {/* Background logic removed to use parent container's background */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] mb-4 drop-shadow-sm">CONTACTO DIRECTO</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-md">Agendar Consulta</h3>
        <p className="text-gray-200 font-medium mb-12 max-w-xl mx-auto text-lg drop-shadow-sm">
          Complete el siguiente formulario para iniciar su proceso de gestión financiera y contable. Un especialista revisará su solicitud de inmediato.
        </p>

        <form onSubmit={handleWhatsApp} className="space-y-8 text-left bg-white/95 backdrop-blur-md p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="group">
            <label htmlFor="name" className="block text-xs uppercase tracking-widest font-black text-brand-primary mb-3 transition-colors group-focus-within:text-brand-accent">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-4 border border-gray-200 bg-gray-50 focus:border-brand-primary focus:bg-white focus:outline-none transition-all duration-300 font-semibold text-brand-primary placeholder:text-gray-400"
              placeholder="Ej: Juan Pérez"
            />
          </div>

          <div className="group">
            <label htmlFor="message" className="block text-xs uppercase tracking-widest font-black text-brand-primary mb-3 transition-colors group-focus-within:text-brand-accent">
              Detalle de la consulta
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-4 border border-gray-200 bg-gray-50 focus:border-brand-primary focus:bg-white focus:outline-none transition-all duration-300 font-semibold text-brand-primary placeholder:text-gray-400 resize-none"
              placeholder="Describa brevemente su consulta."
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full group relative overflow-hidden inline-flex items-center justify-center px-12 py-5 bg-brand-primary text-white text-xs uppercase tracking-[0.4em] font-black transition-all duration-500 hover:shadow-2xl hover:bg-brand-accent"
            >
              <span className="relative z-10">Enviar consulta</span>
            </button>
            <p className="text-center mt-6 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              Respuesta estimada en menos de 24 horas laborales
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;
