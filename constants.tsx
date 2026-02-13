
import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  Scale,
  Gavel
} from 'lucide-react';
import { NavItem, ServiceItem, RateItem, MethodologyStep } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Contacto', href: '#agendar' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Contratos de Fideicomiso',
    description: '',
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: 'Contratos de Escrow',
    description: '',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Cumplimiento Regulatorio y debidas diligencias',
    description: '',
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: 'Certificaciones Legales y emisión de certificados notariales con fe pública',
    description: '',
    icon: <Scale className="w-6 h-6" />,
  },
  {
    title: 'Consultoría Legal en fideicomiso, Escrow, cumplimiento regulatorio y debidas diligencias',
    description: '',
    icon: <Gavel className="w-6 h-6" />,
  },
];

export const RATES: RateItem[] = [
  {
    title: 'Contrato de Fideicomiso de acción',
    price: '$500',
    period: 'mínimo',
    features: [
      'Pago por adelantado',
      '$200 por hora profesional',
      'Administración $1,500 anuales'
    ]
  },
  {
    title: 'Contrato de Fideicomiso Testamentario',
    price: '$500',
    period: 'mínimo',
    features: [
      'Pago por adelantado',
      '$200 por hora profesional',
      'Administración $1,500 anuales'
    ]
  },
  {
    title: 'Fideicomiso de Garantía',
    price: '$500',
    period: 'mínimo',
    features: [
      'Pago por adelantado',
      '$200 por hora profesional',
      'Administración $1,500 anuales'
    ]
  },
  {
    title: 'Contrato de Escrow',
    price: '$500',
    period: 'mínimo',
    features: [
      'Pago por adelantado',
      '$200 por hora profesional',
      'Administración $1,500 anuales'
    ]
  },
  {
    title: 'Asesoría en Cumplimiento regulatorio & Debida Diligencia',
    price: '$500',
    period: 'mínimo',
    features: [
      'Pago por adelantado',
      '$200 por hora profesional',
      'Administración $1,500 anuales'
    ]
  }
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    number: '01',
    title: 'Análisis Inicial',
    description: 'Evaluamos su situación financiera actual para identificar necesidades y riesgos.'
  },
  {
    number: '02',
    title: 'Plan de Trabajo',
    description: 'Definimos un calendario de cumplimiento y responsabilidades específicas.'
  },
  {
    number: '03',
    title: 'Gestión Continua',
    description: 'Ejecutamos los procesos con reportes periódicos y seguimiento constante.'
  }
];
