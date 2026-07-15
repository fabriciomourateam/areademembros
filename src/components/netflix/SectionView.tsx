import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import NetflixNavbar from './NetflixNavbar';
import PasswordDialog from './PasswordDialog';
import { SECTIONS, type SectionKey } from './sectionRegistry';
import { isUnlocked } from '@/lib/access';

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
