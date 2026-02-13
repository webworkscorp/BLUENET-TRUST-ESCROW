
import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  Scale,
  Gavel
} from 'lucide-react';

export const TRANSLATIONS: any = {
  es: {
    nav: {
      inicio: 'Inicio',
      nosotros: 'Quiénes Somos',
      servicios: 'Servicios',
      tarifas: 'Tarifas',
      metodologia: 'Metodología',
      contacto: 'Contacto'
    },
    hero: {
      title1: 'LAS COMISIONES DE',
      trust: 'CONFIANZA',
      title2: 'EN MANO DE',
      experts: 'EXPERTOS',
      description: 'Asesoría a la medida para personas físicas y jurídicas que requieran contratos de fideicomiso y Escrow con base en un modelo de cumplimiento regulatorio',
      cta: 'Agendar Consulta',
      services: 'Nuestros servicios.'
    },
    about: {
      tag: 'QUIÉNES SOMOS',
      title: 'BLUENET',
      subtitle: 'TRUST & ESCROW',
      p1: 'Somos profesionales con muchos años de experiencia haciendo contratos de fideicomiso y escrow a la medida de las necesidades del cliente.',
      p2: 'Nuestro enfoque se basa en el cumplimiento regulatorio de la debida diligencia, para asegurar el cumplimiento del encargado encomendado.',
      featured: 'En Bluenet trust & escrow Realizamos trajes a la medida y nos enfocamos a cumplir como un buen padre de familia o gestor de negocios según corresponda.',
      director: 'Director de Banca y Finanzas',
      quote: '"La integridad es el único activo que no se puede depreciar. Lideramos con transparencia para proteger el futuro de su patrimonio."',
      vision: 'Visión',
      visionText: 'Ser referentes en comisiones de confianza y su cumplimiento regulatorio.',
      values: 'Valores',
      valuesText: 'Responsabilidad, ética y manejo profesional de negocios.',
      years: '15+',
      yearsTag: 'Años de Trayectoria',
      yearsDesc: 'Liderando la industria de servicios fiduciarios con un historial impecable de cumplimiento y seguridad.'
    },
    services: {
      tag: 'Portafolio de Servicios',
      title: 'Soluciones Financieras',
      cta: 'Solicitar Consultoría',
      customTitle: '¿Necesitas un plan a la medida?',
      customCta: 'Contactar Ahora',
      items: [
        'Contratos de Fideicomiso',
        'Contratos de Escrow',
        'Cumplimiento Regulatorio y debidas diligencias',
        'Certificaciones Legales y emisión de certificados notariales con fe pública',
        'Consultoría Legal en fideicomiso, Escrow, cumplimiento regulatorio y debidas diligencias'
      ]
    },
    rates: {
      title: 'TARIFAS DE SERVICIO',
      cta: 'Solicitar Consultoría',
      disclaimer: '(Cualquier gasto adicional será asumido completamente por el cliente)',
      period: 'mínimo',
      features: [
        'Pago por adelantado',
        '$200 por hora profesional',
        'Administración $1,500 anuales'
      ],
      items: [
        'Contrato de Fideicomiso de acción',
        'Contrato de Fideicomiso Testamentario',
        'Fideicomiso de Garantía',
        'Contrato de Escrow',
        'Asesoría en Cumplimiento regulatorio & Debida Diligencia'
      ]
    },
    methodology: {
      tag: 'FORMA DE TRABAJO',
      title: 'Un proceso estructurado para su tranquilidad',
      description: 'Nuestra metodología garantiza que ningún detail quede al azar, proporcionando un seguimiento continuo y profesional.',
      steps: [
        {
          number: '01',
          title: 'Análisis Inicial',
          desc: 'Evaluamos su situación financiera actual para identificar necesidades y riesgos.'
        },
        {
          number: '02',
          title: 'Plan de Trabajo',
          desc: 'Definimos un calendario de cumplimiento y responsabilidades específicas.'
        },
        {
          number: '03',
          title: 'Gestión Continua',
          desc: 'Ejecutamos los procesos con reportes periódicos y seguimiento constante.'
        }
      ]
    },
    form: {
      tag: 'CONTACTO DIRECTO',
      title: 'Agendar Consulta',
      desc: 'Complete el siguiente formulario para iniciar su proceso de gestión financiera y contable. Un especialista revisará su solicitud de inmediato.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Ej: Juan Pérez',
      messageLabel: 'Detalle de la consulta',
      messagePlaceholder: 'Describa brevemente su consulta.',
      submit: 'Enviar consulta',
      time: 'Respuesta estimada en menos de 24 horas laborales'
    },
    footer: {
      desc: 'Asesoría a la medida para personas físicas y jurídicas que requieran contratos de fideicomiso y Escrow con base en un modelo de cumplimiento regulatorio',
      sections: 'Secciones',
      contact: 'Contacto',
      rights: '© {year} BLUENET trust & escrow.',
      privacy: 'Privacidad',
      terms: 'Términos'
    }
  },
  en: {
    nav: {
      inicio: 'Home',
      nosotros: 'About Us',
      servicios: 'Services',
      tarifas: 'Rates',
      metodologia: 'Methodology',
      contacto: 'Contact'
    },
    hero: {
      title1: 'TRUST',
      trust: 'COMMISSIONS',
      title2: 'IN THE HANDS OF',
      experts: 'EXPERTS',
      description: 'Tailored advisory for individuals and corporations requiring trust and Escrow contracts based on a regulatory compliance model',
      cta: 'Schedule Consultation',
      services: 'Our services.'
    },
    about: {
      tag: 'ABOUT US',
      title: 'BLUENET',
      subtitle: 'TRUST & ESCROW',
      p1: 'We are professionals with many years of experience creating trust and escrow contracts tailored to client needs.',
      p2: 'Our approach is based on regulatory due diligence compliance to ensure the fulfillment of the entrusted task.',
      featured: 'At Bluenet trust & escrow we create tailor-made solutions and focus on fulfilling our duties as a good family head or business manager as appropriate.',
      director: 'Banking & Finance Director',
      quote: '"Integrity is the only asset that cannot depreciate. We lead with transparency to protect the future of your wealth."',
      vision: 'Vision',
      visionText: 'To be benchmarks in trust commissions and regulatory compliance.',
      values: 'Values',
      valuesText: 'Responsibility, ethics, and professional business management.',
      years: '15+',
      yearsTag: 'Years of Experience',
      yearsDesc: 'Leading the fiduciary services industry with an impeccable record of compliance and security.'
    },
    services: {
      tag: 'Service Portfolio',
      title: 'Financial Solutions',
      cta: 'Request Consulting',
      customTitle: 'Need a tailored plan?',
      customCta: 'Contact Now',
      items: [
        'Trust Agreements',
        'Escrow Agreements',
        'Regulatory Compliance & Due Diligence',
        'Legal Certifications & Public Notary Certificates',
        'Legal Consulting in Trust, Escrow, and Compliance'
      ]
    },
    rates: {
      title: 'SERVICE RATES',
      cta: 'Request Consulting',
      disclaimer: '(Any additional expenses will be fully covered by the client)',
      period: 'minimum',
      features: [
        'Upfront payment',
        '$200 per professional hour',
        '$1,500 annual management fee'
      ],
      items: [
        'Stock Trust Agreement',
        'Testamentary Trust Agreement',
        'Guaranty Trust',
        'Escrow Agreement',
        'Regulatory Compliance & Due Diligence Advisory'
      ]
    },
    methodology: {
      tag: 'WORKFLOW',
      title: 'A structured process for your peace of mind',
      description: 'Our methodology ensures no detail is left to chance, providing continuous and professional monitoring.',
      steps: [
        {
          number: '01',
          title: 'Initial Analysis',
          desc: 'We evaluate your current financial situation to identify needs and risks.'
        },
        {
          number: '02',
          title: 'Work Plan',
          desc: 'We define a compliance calendar and specific responsibilities.'
        },
        {
          number: '03',
          title: 'Ongoing Management',
          desc: 'We execute processes with periodic reports and constant follow-up.'
        }
      ]
    },
    form: {
      tag: 'DIRECT CONTACT',
      title: 'Schedule Consultation',
      desc: 'Complete the form below to start your financial and accounting management process. A specialist will review your request immediately.',
      nameLabel: 'Name',
      namePlaceholder: 'Ex: John Doe',
      messageLabel: 'Inquiry details',
      messagePlaceholder: 'Briefly describe your inquiry.',
      submit: 'Send inquiry',
      time: 'Estimated response in less than 24 business hours'
    },
    footer: {
      desc: 'Tailored advisory for individuals and corporations requiring trust and Escrow contracts based on a regulatory compliance model',
      sections: 'Sections',
      contact: 'Contact',
      rights: '© {year} BLUENET trust & escrow.',
      privacy: 'Privacy',
      terms: 'Terms'
    }
  }
};

export const getNavItems = (t: any) => [
  { label: t('nav.inicio'), href: '#inicio' },
  { label: t('nav.nosotros'), href: '#nosotros' },
  { label: t('nav.servicios'), href: '#servicios' },
  { label: t('nav.tarifas'), href: '#tarifas' },
  { label: t('nav.metodologia'), href: '#metodologia' },
  { label: t('nav.contacto'), href: '#agendar' },
];

export const getServices = (t: any) => [
  { title: t('services.items.0'), description: '', icon: <Lock className="w-6 h-6" /> },
  { title: t('services.items.1'), description: '', icon: <ShieldCheck className="w-6 h-6" /> },
  { title: t('services.items.2'), description: '', icon: <UserCheck className="w-6 h-6" /> },
  { title: t('services.items.3'), description: '', icon: <Scale className="w-6 h-6" /> },
  { title: t('services.items.4'), description: '', icon: <Gavel className="w-6 h-6" /> },
];

export const getRates = (t: any) => [
  {
    title: t('rates.items.0'),
    price: '$500',
    period: t('rates.period'),
    features: t('rates.features')
  },
  {
    title: t('rates.items.1'),
    price: '$500',
    period: t('rates.period'),
    features: t('rates.features')
  },
  {
    title: t('rates.items.2'),
    price: '$500',
    period: t('rates.period'),
    features: t('rates.features')
  },
  {
    title: t('rates.items.3'),
    price: '$500',
    period: t('rates.period'),
    features: t('rates.features')
  },
  {
    title: t('rates.items.4'),
    price: '$500',
    period: t('rates.period'),
    features: t('rates.features')
  }
];

export const getMethodology = (t: any) => t('methodology.steps').map((step: any) => ({
  number: step.number,
  title: step.title,
  description: step.desc
}));
