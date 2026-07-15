import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import NetflixNavbar from './NetflixNavbar';
import PasswordDialog from './PasswordDialog';
import { isUnlocked, type LockKey } from '@/lib/access';

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

type SectionKey =
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

const SECTIONS: Record<SectionKey, { component: () => JSX.Element; lockKey?: LockKey }> = {
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

interface SectionViewProps {
  section: SectionKey;
}

const SectionView = ({ section }: SectionViewProps) => {
  const navigate = useNavigate();
  const config = SECTIONS[section];
  const lockKey = config?.lockKey;

  const [granted, setGranted] = useState(() => !lockKey || isUnlocked(lockKey));

  // Rola para o topo ao abrir uma seção
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [section]);

  if (!config) {
    navigate('/');
    return null;
  }

  // Área bloqueada e sem acesso: mostra o diálogo de senha; ao fechar, volta pra home.
  if (lockKey && !granted) {
    return (
      <div className="min-h-screen bg-[#0b0b0b]">
        <NetflixNavbar showBack />
        <PasswordDialog
          lockKey={lockKey}
          onClose={() => navigate('/')}
          onSuccess={() => setGranted(true)}
        />
      </div>
    );
  }

  const SectionComponent = config.component;

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-gradient-to-br from-amber-50/20 to-white">
        <NetflixNavbar showBack />
        <main className="px-3 pb-16 pt-20 sm:px-6 sm:pt-24 lg:px-8">
          <div className="fade-in-up">
            <SectionComponent />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default SectionView;
