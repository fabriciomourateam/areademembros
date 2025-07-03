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
    <header className="glass-card sticky top-0 z-50 border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo e Trigger da Sidebar */}
          <div className="flex items-center gap-2 sm:gap-4">
            <SidebarTrigger className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 transition-colors p-1.5 sm:p-2" />
            <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg glow-effect">
              <span className="text-white font-bold text-lg sm:text-xl tracking-wide">FMTEAM</span>
            </div>
            <div className="mobile-hidden">
              <h1 className="text-gradient font-bold text-lg">Área de Membros</h1>
              <p className="text-amber-600/70 text-sm">Transforme sua vida</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
