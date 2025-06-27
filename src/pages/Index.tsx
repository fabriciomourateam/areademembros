
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import QuickAccess from '@/components/QuickAccess';
import ResourcesGrid from '@/components/ResourcesGrid';
import ProgressSection from '@/components/ProgressSection';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/ProtectedRoute';

const Index = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <Header />
        <WelcomeSection />
        <QuickAccess />
        <ResourcesGrid />
        <ProgressSection />
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default Index;
