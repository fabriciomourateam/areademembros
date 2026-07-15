// Registro central das seções detalhadas, reutilizado tanto pela página de
// seção isolada quanto pela visão de categoria (que "engloba" as internas).

import type { LockKey } from '@/lib/access';

import HomeSection from '@/components/sections/HomeSection';
import NutritionSection from '@/components/sections/NutritionSection';
import WorkoutsSection from '@/components/sections/WorkoutsSection';
import CheckinSection from '@/components/sections/CheckinSection';
import SupplementsSection from '@/components/sections/SupplementsSection';
import EbooksSection from '@/components/sections/EbooksSection';
import ReferralSection from '@/components/sections/ReferralSection';
import MentorshipSection from '@/components/sections/MentorshipSection';
import FoodSubstitutionSection from '@/components/sections/FoodSubstitutionSection';
import BioimpedanceSection from '@/components/sections/BioimpedanceSection';
import EvolutionReportSection from '@/components/sections/EvolutionReportSection';
import RecipesSection from '@/components/sections/RecipesSection';
import MealCalculatorSection from '@/components/sections/MealCalculatorSection';
import AppsSection from '@/components/sections/AppsSection';

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

export const SECTIONS: Record<SectionKey, { component: () => JSX.Element; lockKey?: LockKey }> = {
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
