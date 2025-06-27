
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
import { LogOut, User, Crown } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso.",
      });
      navigate('/auth');
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao fazer logout.",
        variant: "destructive",
      });
    }
  };

  const handleLoginClick = () => {
    navigate('/auth');
  };

  return (
    <header className="glass-card sticky top-0 z-50 border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo e Trigger da Sidebar */}
          <div className="flex items-center gap-2 sm:gap-4">
            {user && <SidebarTrigger className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 transition-colors p-1.5 sm:p-2" />}
            <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg glow-effect">
              <span className="text-white font-bold text-lg sm:text-xl tracking-wide">FMTEAM</span>
            </div>
            <div className="mobile-hidden">
              <h1 className="text-gradient font-bold text-lg">Área de Membros</h1>
              <p className="text-amber-600/70 text-sm">Transforme sua vida</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {user ? (
              <>
                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl hover:bg-amber-50 transition-all duration-300">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10 ring-1 sm:ring-2 ring-amber-200 ring-offset-1 sm:ring-offset-2">
                        <AvatarImage src="" alt="Avatar" />
                        <AvatarFallback className="bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700 font-semibold">
                          <User className="h-4 w-4 sm:h-5 sm:w-5" />
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 sm:w-64 glass-card border-amber-200/50 rounded-xl mr-2 sm:mr-0" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal p-3 sm:p-4">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center gap-2">
                          <Crown className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500" />
                          <p className="text-xs sm:text-sm font-semibold text-gradient">Membro VIP</p>
                        </div>
                        <p className="text-xs text-amber-600/70 truncate">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-amber-200/50" />
                    <DropdownMenuItem 
                      onClick={handleSignOut}
                      className="hover:bg-red-50 rounded-lg mx-2 transition-colors text-red-600 text-sm"
                    >
                      <LogOut className="mr-2 sm:mr-3 h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Sair</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button 
                onClick={handleLoginClick} 
                className="btn-primary-modern"
              >
                Entrar
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
