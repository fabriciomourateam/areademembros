import { useState } from 'react';
import Header from '@/components/Header';
import ProtectedRoute from '@/components/ProtectedRoute';
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

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

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
      case 'referral':
        return <ReferralSection />;
      case 'mentoring':
        return <MentorshipSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <ProtectedRoute>
      <SidebarProvider>
        <div className="min-h-screen w-full flex bg-gradient-to-br from-amber-50/20 to-white">
          <AppSidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <SidebarInset className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-3 sm:p-6 lg:p-8 overflow-auto">
              <div className="fade-in-up">
                {renderSection()}
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
};

export default Index;
