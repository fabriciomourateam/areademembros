import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Lock } from 'lucide-react';
import Header from '@/components/Header';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import HomeSection from '@/components/sections/HomeSection';
import AppsSection from '@/components/sections/AppsSection';
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

const MENTORING_PASSWORD = 'fmteammentoria'; // Você pode alterar a senha aqui
const BIOIMPEDANCE_PASSWORD = 'fmteambio'; // Senha exclusiva para bioimpedância

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [mentoringUnlocked, setMentoringUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Estados para Bioimpedância
  const [showBioimpedanceDialog, setShowBioimpedanceDialog] = useState(false);
  const [bioimpedanceUnlocked, setBioimpedanceUnlocked] = useState(false);
  const [bioPasswordInput, setBioPasswordInput] = useState('');
  const [bioPasswordError, setBioPasswordError] = useState('');

  const handleSectionChange = (sectionId: string) => {
    if (sectionId === 'mentoring' && !mentoringUnlocked) {
      setShowPasswordDialog(true);
      return;
    }
    if (sectionId === 'bioimpedance' && !bioimpedanceUnlocked) {
      setShowBioimpedanceDialog(true);
      return;
    }
    setActiveSection(sectionId);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === MENTORING_PASSWORD) {
      setMentoringUnlocked(true);
      setShowPasswordDialog(false);
      setActiveSection('mentoring');
      setPasswordInput('');
      setPasswordError('');
    } else {
      setPasswordError('Senha incorreta.');
    }
  };

  const handleBioPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bioPasswordInput === BIOIMPEDANCE_PASSWORD) {
      setBioimpedanceUnlocked(true);
      setShowBioimpedanceDialog(false);
      setActiveSection('bioimpedance');
      setBioPasswordInput('');
      setBioPasswordError('');
    } else {
      setBioPasswordError('Senha incorreta.');
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'apps':
        return <AppsSection />;
      case 'nutrition':
        return <NutritionSection />;
      case 'workouts':
        return <WorkoutsSection />;
      case 'checkin':
        return <CheckinSection />;
      case 'supplements':
        return <SupplementsSection />;
      case 'ebooks':
        return <EbooksSection />;
      case 'evolution-report':
        return <EvolutionReportSection />;
      case 'referral':
        return <ReferralSection />;
      case 'food-substitution':
        return <FoodSubstitutionSection />;
      case 'bioimpedance':
        return <BioimpedanceSection />;
      case 'mentoring':
        return <MentorshipSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gradient-to-br from-amber-50/20 to-white">
        <AppSidebar 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange} 
        />
        <SidebarInset className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-3 sm:p-6 lg:p-8 overflow-auto">
            <div className="fade-in-up">
              {renderSection()}
            </div>
            <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
              <DialogContent>
                <DialogHeader>
                  <div className="flex flex-col items-center gap-2">
                    <Lock className="h-10 w-10 text-amber-400 mb-2" />
                    <DialogTitle className="text-center">Área Premium</DialogTitle>
                    <p className="text-sm text-muted-foreground text-center mb-2">Caso você possua o Plano PREMIUM solicite a senha ao Fabricio Moura e acesse essa área exclusiva</p>
                  </div>
                </DialogHeader>
                <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-3 items-center">
                  <input
                    type="password"
                    className="border border-amber-400 rounded px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white text-black placeholder:text-amber-400"
                    placeholder="Senha"
                    value={passwordInput}
                    onChange={e => setPasswordInput(e.target.value)}
                    autoFocus
                  />
                  {passwordError && <span className="text-red-600 text-sm">{passwordError}</span>}
                  <button
                    type="submit"
                    className="bg-amber-400 border border-amber-400 text-black font-semibold px-6 py-2 rounded transition-all shadow-lg hover:bg-black hover:text-amber-400"
                  >
                    Entrar
                  </button>
                </form>
              </DialogContent>
            </Dialog>
            <Dialog open={showBioimpedanceDialog} onOpenChange={setShowBioimpedanceDialog}>
              <DialogContent>
                <DialogHeader>
                  <div className="flex flex-col items-center gap-2">
                    <Lock className="h-10 w-10 text-amber-400 mb-2" />
                    <DialogTitle className="text-center">Área Premium</DialogTitle>
                    <p className="text-sm text-muted-foreground text-center mb-2">Caso você possua o Plano PREMIUM solicite a senha ao Fabricio Moura e acesse essa área exclusiva</p>
                  </div>
                </DialogHeader>
                <form onSubmit={handleBioPasswordSubmit} className="flex flex-col gap-3 items-center">
                  <input
                    type="password"
                    className="border border-amber-400 rounded px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white text-black placeholder:text-amber-400"
                    placeholder="Senha"
                    value={bioPasswordInput}
                    onChange={e => setBioPasswordInput(e.target.value)}
                    autoFocus
                  />
                  {bioPasswordError && <span className="text-red-600 text-sm">{bioPasswordError}</span>}
                  <button
                    type="submit"
                    className="bg-amber-400 border border-amber-400 text-black font-semibold px-6 py-2 rounded transition-all shadow-lg hover:bg-black hover:text-amber-400"
                  >
                    Entrar
                  </button>
                </form>
              </DialogContent>
            </Dialog>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
