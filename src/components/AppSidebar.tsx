
import { Home, Smartphone, Utensils, Dumbbell, CheckCircle, Pill, BookOpen, Gift, BarChart3, Users } from 'lucide-react';
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
  useSidebar,
} from '@/components/ui/sidebar';

const menuItems = [
  {
    title: "Página Inicial",
    icon: Home,
    id: "home",
    description: "Boas-vindas e Informações Gerais"
  },
  {
    title: "Acesso aos Aplicativos",
    icon: Smartphone,
    id: "apps",
    description: "WebDiet e MFit Personal"
  },
  {
    title: "Plano Nutricional",
    icon: Utensils,
    id: "nutrition",
    description: "Orientações sobre alimentação"
  },
  {
    title: "Orientações sobre Treinos",
    icon: Dumbbell,
    id: "workouts",
    description: "Metodologia e exercícios"
  },
  {
    title: "Importância do Check-in",
    icon: CheckCircle,
    id: "checkin",
    description: "Check-in quinzenal"
  },
  {
    title: "Suplementos",
    icon: Pill,
    id: "supplements",
    description: "Lista com bom custo-benefício"
  },
  {
    title: "E-books Bônus",
    icon: BookOpen,
    id: "ebooks",
    description: "Downloads gratuitos"
  },
  {
    title: "Programa de Incentivo",
    icon: Gift,
    id: "referral",
    description: "Indique e ganhe"
  },
  {
    title: "Relatório de Evolução",
    icon: BarChart3,
    id: "reports",
    description: "Acompanhe seu progresso"
  },
  {
    title: "Mentorias em Grupo",
    icon: Users,
    id: "mentoring",
    description: "Com nossa psicóloga"
  }
];

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { state } = useSidebar();
  
  return (
    <Sidebar className="border-r border-primary-200/30">
      <SidebarHeader className="border-b border-primary-200/30 p-4">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-primary p-2 rounded-lg">
            <span className="text-white font-bold text-sm">FM</span>
          </div>
          {state === "expanded" && (
            <div>
              <h2 className="font-semibold text-gray-900">FMTEAM</h2>
              <p className="text-xs text-gray-600">Área de Membros</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    onClick={() => onSectionChange(item.id)}
                    isActive={activeSection === item.id}
                    tooltip={state === "collapsed" ? item.title : undefined}
                  >
                    <item.icon className="h-4 w-4" />
                    {state === "expanded" && (
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{item.title}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
