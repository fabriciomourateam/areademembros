
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import QuickAccess from '@/components/QuickAccess';
import ResourcesGrid from '@/components/ResourcesGrid';
import ProgressSection from '@/components/ProgressSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WelcomeSection />
      <QuickAccess />
      <ResourcesGrid />
      <ProgressSection />
      <Footer />
    </div>
  );
};

export default Index;
