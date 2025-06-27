
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/ProtectedRoute';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import HomeSection from '@/components/sections/HomeSection';
import AppsSection from '@/components/sections/AppsSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'apps':
        return <AppsSection />;
      case 'nutrition':
        return <div className="p-6">Seção de Plano Nutricional - Em desenvolvimento</div>;
      case 'workouts':
        return <div className="p-6">Seção de Treinos - Em desenvolvimento</div>;
      case 'checkin':
        return <div className="p-6">Seção de Check-in - Em desenvolvimento</div>;
      case 'supplements':
        return <div className="p-6">Seção de Suplementos - Em desenvolvimento</div>;
      case 'ebooks':
        return <div className="p-6">Seção de E-books - Em desenvolvimento</div>;
      case 'referral':
        return <div className="p-6">Programa de Incentivo - Em desenvolvimento</div>;
      case 'reports':
        return <div className="p-6">Relatórios - Em desenvolvimento</div>;
      case 'mentoring':
        return <div className="p-6">Mentorias - Em desenvolvimento</div>;
      default:
        return <HomeSection />;
    }
  };

  return (
    <ProtectedRoute>
      <SidebarProvider>
        <div className="min-h-screen w-full flex">
          <AppSidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <SidebarInset className="flex-1">
            <Header />
            <main className="flex-1 p-6">
              {renderSection()}
            </main>
            <Footer />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
};

export default Index;
