import { Home, Smartphone, Utensils, Dumbbell, CheckCircle, Pill, BookOpen, Gift, Users, Star, Lock, RefreshCw, Activity, Video, ChefHat } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';

const menuItems = [
  {
    title: "Página Inicial",
    icon: Home,
    id: "home"
  },
  {
    title: "Acesso aos Aplicativos",
    icon: Smartphone,
    id: "apps"
  },
  {
    title: "Plano Nutricional",
    icon: Utensils,
    id: "nutrition"
  },
  {
    title: "Orientações sobre Treinos",
    icon: Dumbbell,
    id: "workouts"
  },
  {
    title: "Importância do Check-in",
    icon: CheckCircle,
    id: "checkin"
  },
  {
    title: "Substituição de Alimentos",
    icon: RefreshCw,
    id: "food-substitution"
  },
  {
    title: "Receitas",
    icon: ChefHat,
    id: "recipes"
  },

  {
    title: "Relatório de Evolução",
    icon: BookOpen,
    id: "evolution-report"
  },
  {
    title: "Suplementos",
    icon: Pill,
    id: "supplements"
  },
  {
    title: "E-books Bônus",
    icon: BookOpen,
    id: "ebooks"
  },
  {
    title: "Programa de Incentivo",
    icon: Gift,
    id: "referral"
  },
  {
    title: "Mentorias em Grupo",
    icon: Users,
    id: "mentoring"
  },
  {
    title: "Bioimpedância Online",
    icon: Activity,
    id: "bioimpedance"
  },
];

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { state, isMobile, setOpenMobile } = useSidebar();
  
  return (
    <Sidebar className="h-full bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white border-r border-yellow-700/40 shadow-xl">
      <SidebarHeader className="border-b border-yellow-600/30 p-6 bg-gradient-to-br from-black via-zinc-900 to-zinc-800">
        <div className="flex items-center gap-3">
          <div className="rounded-xl shadow-lg glow-effect flex items-center justify-center w-16 h-16">
            <img src="/logo.png" alt="Logo FMTEAM" className="w-16 h-16 object-cover rounded-xl" />
          </div>
          {state === "expanded" && (
            <div className="fade-in-up">
              <h2 className="font-bold text-xl text-gradient">🏆 FM Team</h2>
              <div className="flex items-center gap-2">
                <Star className="h-3 w-3 text-amber-400" />
                <p className="text-sm font-medium bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">Área de Membros</p>
              </div>
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-gradient-to-b from-white to-amber-50/30">
        <SidebarGroup>
          <SidebarGroupLabel className="text-amber-700 font-semibold text-sm uppercase tracking-wider px-4 py-3">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-2">
            <SidebarMenu className="space-y-1">
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={item.id} className="slide-in-right" style={{ animationDelay: `${index * 0.05}s` }}>
                  <SidebarMenuButton 
                    onClick={() => {
                      onSectionChange(item.id);
                      if (isMobile) setOpenMobile(false);
                    }}
                    isActive={activeSection === item.id}
                    tooltip={state === "collapsed" ? item.title : undefined}
                    className={
                      `
                      relative rounded-lg sm:rounded-xl transition-all duration-300 group
                      ${activeSection === item.id 
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-lg glow-effect' 
                        : 'hover:bg-amber-50 text-amber-700 hover:text-amber-800'
                      }
                      ${state === "expanded" ? 'p-2.5 sm:p-3' : 'p-2.5 sm:p-3'}
                      flex items-center justify-between'
                      `
                    }
                  >
                    <div className="flex items-center gap-2">
                      <item.icon 
                        className={
                          `
                          h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:scale-110
                          ${activeSection === item.id ? 'text-white' : 'text-amber-600'}
                          `
                        } 
                      />
                      {state === "expanded" && (
                        <span className={
                          `
                          text-xs sm:text-sm font-semibold
                          ${activeSection === item.id ? 'text-white' : 'text-amber-800'}
                          `
                        }>
                          {item.title}
                        </span>
                      )}
                    </div>
                    {item.id === 'mentoring' && state === "expanded" && (
                      <Lock className="ml-2 h-4 w-4 text-amber-500" />
                    )}
                    {item.id === 'bioimpedance' && state === "expanded" && (
                      <Lock className="ml-2 h-4 w-4 text-amber-500" />
                    )}
                    {activeSection === item.id && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/20 to-amber-500/20 animate-pulse" />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {state === "expanded" && (
          <div className="mt-auto p-4 border-t border-amber-200/50">
            <div className="gradient-card p-4 rounded-xl text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-semibold text-amber-800">Status VIP</span>
              </div>
              <p className="text-xs text-amber-600/80">
                Aproveite todos os benefícios exclusivos
              </p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
