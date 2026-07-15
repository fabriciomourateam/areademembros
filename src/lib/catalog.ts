// Catálogo de conteúdo da Área de Membros no estilo Netflix.
//
// Modelo: a HOME mostra UMA fileira de CARDS GRANDES (as categorias). Ao clicar
// numa categoria, abre-se a visão daquela categoria, que "engloba" a seção
// interna completa e mostra, no topo, os demais conteúdos (vídeos/ferramentas)
// como capas de acesso rápido. Nada é descartado.

import type { LucideIcon } from 'lucide-react';
import type { LockKey } from './access';
import type { SectionKey } from '@/components/netflix/sectionRegistry';
import {
  Play,
  Utensils,
  Dumbbell,
  CheckCircle,
  RefreshCw,
  Calculator,
  Pill,
  BookOpen,
  ChefHat,
  Gift,
  Users,
  Activity,
  Target,
  Clock,
  Zap,
  TrendingUp,
  Wrench,
  Sparkles,
} from 'lucide-react';

export type CardType = 'video' | 'section' | 'link';

export interface CatalogItem {
  id: string;
  title: string;
  subtitle?: string;
  type: CardType;
  /** YouTube video id (para type === 'video') */
  videoId?: string;
  /** rota interna da seção detalhada (para type === 'section') */
  route?: string;
  /** URL externa (para type === 'link') */
  href?: string;
  icon: LucideIcon;
  /** classes tailwind de gradiente usadas na capa quando não há thumbnail */
  gradient: string;
  locked?: boolean;
  lockKey?: LockKey;
  badge?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  badge?: string;
  locked?: boolean;
  lockKey?: LockKey;
  /** capas de acesso rápido exibidas dentro da categoria */
  items: CatalogItem[];
  /** seção detalhada completa embutida na categoria (opcional) */
  embedSection?: SectionKey;
}

export const HERO = {
  title: 'Bem-vindo(a) à FM Team',
  tagline: 'Área de Membros',
  description:
    'Escolha uma categoria abaixo para começar. Cada uma reúne todos os vídeos, orientações e ferramentas em um só lugar.',
  videoId: 'ZebZRgAckcQ',
  icon: Play,
};

export const CATEGORIES: Category[] = [
  {
    id: 'start',
    title: 'Comece por aqui',
    description: 'Vídeo de boas-vindas e o passo a passo para dar o primeiro passo.',
    icon: Play,
    gradient: 'from-green-600 to-emerald-800',
    badge: 'Essencial',
    embedSection: 'home',
    items: [
      {
        id: 'welcome',
        title: 'Boas-vindas FM Team',
        subtitle: 'Vídeo de introdução',
        type: 'video',
        videoId: 'ZebZRgAckcQ',
        icon: Play,
        gradient: 'from-green-600 to-emerald-700',
        badge: 'Essencial',
      },
    ],
  },
  {
    id: 'nutrition',
    title: 'Plano Nutricional',
    description: 'Como seguir sua dieta, montar refeições e tirar as principais dúvidas.',
    icon: Utensils,
    gradient: 'from-amber-500 to-orange-700',
    embedSection: 'nutrition',
    items: [
      {
        id: 'nutri-video-1',
        title: 'Entendendo seu Plano Alimentar',
        subtitle: 'Nutrição',
        type: 'video',
        videoId: 'GnaPPoal7OQ',
        icon: Utensils,
        gradient: 'from-amber-500 to-orange-600',
      },
      {
        id: 'nutri-video-2',
        title: 'Montando suas Refeições',
        subtitle: 'Nutrição',
        type: 'video',
        videoId: '41IXoXJRc1E',
        icon: Utensils,
        gradient: 'from-amber-500 to-orange-600',
      },
      {
        id: 'nutri-video-3',
        title: 'Dúvidas Comuns da Dieta',
        subtitle: 'Nutrição',
        type: 'video',
        videoId: 'M0VtCP6Bfu0',
        icon: Utensils,
        gradient: 'from-amber-500 to-orange-600',
      },
    ],
  },
  {
    id: 'workouts',
    title: 'Treinos',
    description: 'Orientação principal e vídeos complementares de técnica e execução.',
    icon: Dumbbell,
    gradient: 'from-red-500 to-rose-800',
    embedSection: 'workouts',
    items: [
      {
        id: 'workout-main',
        title: 'Orientações Principais de Treino',
        subtitle: 'Comece por este',
        type: 'video',
        videoId: 'gUTwDr7_wpA',
        icon: Dumbbell,
        gradient: 'from-red-500 to-rose-700',
        badge: 'Principal',
      },
      {
        id: 'workout-1',
        title: 'Aquecimento e Ordem dos Exercícios',
        subtitle: 'Complementar',
        type: 'video',
        videoId: 'QBRv1gMNXn4',
        icon: TrendingUp,
        gradient: 'from-red-500 to-rose-700',
      },
      {
        id: 'workout-2',
        title: 'Cadência na Execução',
        subtitle: 'Complementar',
        type: 'video',
        videoId: 'rnsxA-WOMWU',
        icon: Clock,
        gradient: 'from-red-500 to-rose-700',
      },
      {
        id: 'workout-3',
        title: 'Amplitude de Movimento',
        subtitle: 'Complementar',
        type: 'video',
        videoId: 'M7AysVzH7wU',
        icon: Target,
        gradient: 'from-red-500 to-rose-700',
      },
      {
        id: 'workout-4',
        title: 'Descanso entre Séries',
        subtitle: 'Complementar',
        type: 'video',
        videoId: 'AVjUuppmYXE',
        icon: Clock,
        gradient: 'from-red-500 to-rose-700',
      },
      {
        id: 'workout-5',
        title: 'O que fazer ao perder um treino',
        subtitle: 'Complementar',
        type: 'video',
        videoId: '9zFo29uQiHE',
        icon: CheckCircle,
        gradient: 'from-red-500 to-rose-700',
      },
      {
        id: 'workout-6',
        title: 'Como fazer Drop Set',
        subtitle: 'Complementar',
        type: 'video',
        videoId: 'DdjB2tRuagU',
        icon: Zap,
        gradient: 'from-red-500 to-rose-700',
      },
      {
        id: 'workout-7',
        title: 'Técnica Avançada',
        subtitle: 'Complementar',
        type: 'video',
        videoId: 'e8TJsdFyMYY',
        icon: Target,
        gradient: 'from-red-500 to-rose-700',
      },
    ],
  },
  {
    id: 'checkin',
    title: 'Check-in & Evolução',
    description: 'Entenda a importância do check-in e como acompanhar sua evolução.',
    icon: CheckCircle,
    gradient: 'from-sky-500 to-blue-800',
    embedSection: 'checkin',
    items: [
      {
        id: 'checkin-video',
        title: 'Como fazer seu Check-in',
        subtitle: 'Acompanhamento',
        type: 'video',
        videoId: 'hwUYrE6cfww',
        icon: CheckCircle,
        gradient: 'from-sky-500 to-blue-700',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Ferramentas',
    description: 'Calculadora de refeição livre, substituição de alimentos e bioimpedância.',
    icon: Wrench,
    gradient: 'from-violet-500 to-purple-800',
    items: [
      {
        id: 'meal-calculator',
        title: 'Calcular Refeição Livre',
        subtitle: 'Ferramenta',
        type: 'section',
        route: '/meal-calculator',
        icon: Calculator,
        gradient: 'from-violet-500 to-purple-700',
      },
      {
        id: 'food-substitution',
        title: 'Substituição de Alimentos',
        subtitle: 'Ferramenta',
        type: 'section',
        route: '/food-substitution',
        icon: RefreshCw,
        gradient: 'from-teal-500 to-emerald-700',
      },
      {
        id: 'bioimpedance',
        title: 'Bioimpedância',
        subtitle: 'Área Premium',
        type: 'section',
        route: '/bioimpedance',
        icon: Activity,
        gradient: 'from-cyan-500 to-blue-700',
        locked: true,
        lockKey: 'bioimpedance',
        badge: 'Premium',
      },
    ],
  },
  {
    id: 'bonus',
    title: 'Bônus & Conteúdos',
    description: 'E-books, receitas saudáveis, guia de suplementos e programa de incentivo.',
    icon: Gift,
    gradient: 'from-indigo-500 to-blue-800',
    items: [
      {
        id: 'ebooks',
        title: 'E-books Bônus',
        subtitle: 'Materiais para download',
        type: 'section',
        route: '/ebooks',
        icon: BookOpen,
        gradient: 'from-indigo-500 to-blue-700',
      },
      {
        id: 'recipes',
        title: 'Receitas Saudáveis',
        subtitle: 'Para sua refeição livre',
        type: 'section',
        route: '/recipes',
        icon: ChefHat,
        gradient: 'from-orange-500 to-red-600',
      },
      {
        id: 'supplements',
        title: 'Suplementos',
        subtitle: 'Guia de suplementação',
        type: 'section',
        route: '/supplements',
        icon: Pill,
        gradient: 'from-lime-500 to-green-700',
      },
      {
        id: 'referral',
        title: 'Programa de Incentivo',
        subtitle: 'Indique e ganhe',
        type: 'section',
        route: '/referral',
        icon: Gift,
        gradient: 'from-pink-500 to-rose-700',
      },
    ],
  },
  {
    id: 'premium',
    title: 'Mentorias (Premium)',
    description: 'Área exclusiva para membros Premium: mentorias em grupo gravadas.',
    icon: Users,
    gradient: 'from-amber-500 to-yellow-700',
    badge: 'Premium',
    locked: true,
    lockKey: 'mentoring',
    embedSection: 'mentoring',
    items: [
      {
        id: 'mentoring-info',
        title: 'Mentorias em Grupo',
        subtitle: 'Área exclusiva Premium',
        type: 'section',
        route: '/mentoring',
        icon: Sparkles,
        gradient: 'from-amber-500 to-yellow-600',
        locked: true,
        lockKey: 'mentoring',
        badge: 'Premium',
      },
    ],
  },
];

export function getCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function youtubeThumb(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
