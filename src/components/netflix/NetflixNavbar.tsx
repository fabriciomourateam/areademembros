import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface NetflixNavbarProps {
  /** Exibe o botão "voltar" (usado nas páginas de seção/categoria) */
  showBack?: boolean;
}

/**
 * Barra fixa mínima — sem logo. Nas páginas internas mostra apenas um botão
 * "Voltar" premium (pílula dourada com blur), que flutua sobre o conteúdo.
 */
const NetflixNavbar = ({ showBack = false }: NetflixNavbarProps) => {
  const navigate = useNavigate();

  if (!showBack) return null;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center px-4 sm:h-16 sm:px-8">
        <button
          type="button"
          onClick={() => navigate('/')}
          aria-label="Voltar para o início"
          className="group pointer-events-auto inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/45 px-4 py-2 text-sm font-semibold text-amber-50 shadow-lg ring-1 ring-white/5 backdrop-blur-md transition-all hover:border-amber-300/60 hover:bg-black/65 hover:shadow-amber-500/10"
        >
          <ArrowLeft className="h-4 w-4 text-amber-300 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Voltar
        </button>
      </div>
    </header>
  );
};

export default NetflixNavbar;
