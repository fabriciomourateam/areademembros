// Catálogo de conteúdo da Área de Membros no estilo Netflix.
// Cada seção antiga vira uma "fileira" (row) e cada vídeo/ferramenta/e-book
// vira uma "capa" (card). Nada é descartado: capas de vídeo abrem o player,
// capas de seção levam à seção detalhada completa, capas de link abrem o
// conteúdo externo.

import type { LucideIcon } from 'lucide-react';
import type { LockKey } from './access';
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
  ListChecks,
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

export interface CatalogRow {
  id: string;
  title: string;
  items: CatalogItem[];
}

export const HERO = {
  title: 'Comece por aqui',
  tagline: 'Bem-vindo(a) à FM Team',
  description:
    'É essencial que você veja todos os módulos antes de iniciar o planejamento. Assista ao vídeo de boas-vindas e destrave o seu melhor resultado.',
  videoId: 'ZebZRgAckcQ',
  icon: Play,
};

export const ROWS: CatalogRow[] = [
  {
    id: 'start',
    title: 'Comece por aqui',
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
      {
        id: 'nutrition-section',
        title: 'Plano Nutricional',
        subtitle: 'Como seguir sua dieta',
        type: 'section',
        route: '/nutrition',
        icon: Utensils,
        gradient: 'from-amber-500 to-orange-600',
      },
      {
        id: 'workouts-section',
        title: 'Orientações de Treino',
        subtitle: 'Técnica e progressão',
        type: 'section',
        route: '/workouts',
        icon: Dumbbell,
        gradient: 'from-red-500 to-rose-700',
      },
      {
        id: 'checkin-section',
        title: 'Importância do Check-in',
        subtitle: 'Acompanhe sua evolução',
        type: 'section',
        route: '/checkin',
        icon: CheckCircle,
        gradient: 'from-sky-500 to-blue-700',
      },
    ],
  },
  {
    id: 'nutrition',
    title: 'Plano Nutricional',
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
      {
        id: 'nutrition-full',
        title: 'Ver seção completa',
        subtitle: 'Todas as orientações',
        type: 'section',
        route: '/nutrition',
        icon: ListChecks,
        gradient: 'from-zinc-600 to-zinc-800',
      },
    ],
  },
  {
    id: 'workouts',
    title: 'Treinos',
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
      {
        id: 'workouts-full',
        title: 'Ver seção completa',
        subtitle: 'Todas as orientações',
        type: 'section',
        route: '/workouts',
        icon: ListChecks,
        gradient: 'from-zinc-600 to-zinc-800',
      },
    ],
  },
  {
    id: 'checkin',
    title: 'Check-in & Evolução',
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
      {
        id: 'checkin-full',
        title: 'Ver seção completa',
        subtitle: 'Importância do Check-in',
        type: 'section',
        route: '/checkin',
        icon: ListChecks,
        gradient: 'from-zinc-600 to-zinc-800',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Ferramentas',
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
    title: 'Premium',
    items: [
      {
        id: 'mentoring',
        title: 'Mentorias em Grupo',
        subtitle: 'Área exclusiva Premium',
        type: 'section',
        route: '/mentoring',
        icon: Users,
        gradient: 'from-amber-500 to-yellow-600',
        locked: true,
        lockKey: 'mentoring',
        badge: 'Premium',
      },
    ],
  },
];

export function youtubeThumb(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
