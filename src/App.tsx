import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import NetflixHome from "./components/netflix/NetflixHome";
import SectionView from "./components/netflix/SectionView";
import NotFound from "./pages/NotFound";
import SupplementsPublic from "./pages/SupplementsPublic";
import InstallAppModal from "./components/InstallAppModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<NetflixHome />} />
          <Route path="/apps" element={<SectionView section="apps" />} />
          <Route path="/nutrition" element={<SectionView section="nutrition" />} />
          <Route path="/workouts" element={<SectionView section="workouts" />} />
          <Route path="/checkin" element={<SectionView section="checkin" />} />
          <Route path="/food-substitution" element={<SectionView section="food-substitution" />} />
          <Route path="/evolution-report" element={<SectionView section="evolution-report" />} />
          <Route path="/supplements" element={<SectionView section="supplements" />} />
          <Route path="/ebooks" element={<SectionView section="ebooks" />} />
          <Route path="/referral" element={<SectionView section="referral" />} />
          <Route path="/mentoring" element={<SectionView section="mentoring" />} />
          <Route path="/bioimpedance" element={<SectionView section="bioimpedance" />} />
          <Route path="/recipes" element={<SectionView section="recipes" />} />
          <Route path="/meal-calculator" element={<SectionView section="meal-calculator" />} />
          <Route path="/suplementos-lista" element={<SupplementsPublic />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <InstallAppModal />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
