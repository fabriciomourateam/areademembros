import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NetflixNavbarProps {
  /** Exibe o botão "voltar" (usado nas páginas de seção) */
  showBack?: boolean;
}

const NetflixNavbar = ({ showBack = false }: NetflixNavbarProps) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-black shadow-lg' : 'bg-gradient-to-b from-black/90 to-transparent'
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-3 px-4 sm:h-16 sm:px-8">
        {showBack && (
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
            aria-label="Voltar para o início"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Início</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex items-center gap-2"
          aria-label="FM Team - Início"
        >
          <img
            src="/topo.png"
            alt="FM Team"
            className="h-6 w-auto max-w-[110px] object-contain sm:h-8"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
          <span className="font-display text-base font-bold tracking-wide text-gold sm:text-lg">
            FM TEAM
          </span>
        </button>

        <div className="ml-auto flex items-center gap-2">
          <span className="hidden text-xs font-medium text-zinc-300 sm:inline">Área de Membros</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-amber-400 to-amber-600 text-sm font-bold text-black">
            FM
          </div>
        </div>
      </div>
    </header>
  );
};

export default NetflixNavbar;
