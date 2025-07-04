import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white border-b border-yellow-700/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo e Trigger da Sidebar */}
          <div className="flex items-center gap-2 sm:gap-4">
            <SidebarTrigger className="text-amber-400 hover:text-amber-500 hover:bg-amber-900/10 transition-colors p-1.5 sm:p-2" />
            <div className="flex items-center h-full w-full">
              <img src="/topo.png" alt="Logo Topo FMTEAM" className="h-6 sm:h-8 w-auto max-w-[90px] sm:max-w-[120px] object-contain mx-auto" />
            </div>
            <div className="mobile-hidden">
              <h1 className="font-bold text-lg text-amber-400 whitespace-nowrap">Área de Membros</h1>
              <p className="text-sm font-medium bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">Time de Resultados!</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
