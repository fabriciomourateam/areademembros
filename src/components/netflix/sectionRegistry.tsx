// Registro central das seções detalhadas, reutilizado tanto pela página de
// seção isolada quanto pela visão de categoria (que "engloba" as internas).
//
// Cada seção é carregada sob demanda (React.lazy) para reduzir o bundle
// inicial — só baixa o código da seção quando o usuário realmente a abre.

import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import type { LockKey } from '@/lib/access';

const HomeSection = lazy(() => import('@/components/sections/HomeSection'));
const NutritionSection = lazy(() => import('@/components/sections/NutritionSection'));
const WorkoutsSection = lazy(() => import('@/components/sections/WorkoutsSection'));
const CheckinSection = lazy(() => import('@/components/sections/CheckinSection'));
const SupplementsSection = lazy(() => import('@/components/sections/SupplementsSection'));
const EbooksSection = lazy(() => import('@/components/sections/EbooksSection'));
const ReferralSection = lazy(() => import('@/components/sections/ReferralSection'));
const MentorshipSection = lazy(() => import('@/components/sections/MentorshipSection'));
const FoodSubstitutionSection = lazy(() => import('@/components/sections/FoodSubstitutionSection'));
const BioimpedanceSection = lazy(() => import('@/components/sections/BioimpedanceSection'));
const EvolutionReportSection = lazy(() => import('@/components/sections/EvolutionReportSection'));
const RecipesSection = lazy(() => import('@/components/sections/RecipesSection'));
const MealCalculatorSection = lazy(() => import('@/components/sections/MealCalculatorSection'));
const AppsSection = lazy(() => import('@/components/sections/AppsSection'));

export type SectionKey =
  | 'home'
  | 'nutrition'
  | 'workouts'
  | 'checkin'
  | 'supplements'
  | 'ebooks'
  | 'referral'
  | 'mentoring'
  | 'food-substitution'
  | 'bioimpedance'
  | 'evolution-report'
  | 'recipes'
  | 'meal-calculator'
  | 'apps';

export const SECTIONS: Record<
  SectionKey,
  { component: LazyExoticComponent<ComponentType>; lockKey?: LockKey }
> = {
  home: { component: HomeSection },
  nutrition: { component: NutritionSection },
  workouts: { component: WorkoutsSection },
  checkin: { component: CheckinSection },
  supplements: { component: SupplementsSection },
  ebooks: { component: EbooksSection },
  referral: { component: ReferralSection },
  mentoring: { component: MentorshipSection, lockKey: 'mentoring' },
  'food-substitution': { component: FoodSubstitutionSection },
  bioimpedance: { component: BioimpedanceSection, lockKey: 'bioimpedance' },
  'evolution-report': { component: EvolutionReportSection },
  recipes: { component: RecipesSection },
  'meal-calculator': { component: MealCalculatorSection },
  apps: { component: AppsSection },
};
