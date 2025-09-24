import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apps" element={<Index defaultSection="apps" />} />
          <Route path="/nutrition" element={<Index defaultSection="nutrition" />} />
          <Route path="/workouts" element={<Index defaultSection="workouts" />} />
          <Route path="/checkin" element={<Index defaultSection="checkin" />} />
          <Route path="/food-substitution" element={<Index defaultSection="food-substitution" />} />

          <Route path="/evolution-report" element={<Index defaultSection="evolution-report" />} />
          <Route path="/supplements" element={<Index defaultSection="supplements" />} />
          <Route path="/ebooks" element={<Index defaultSection="ebooks" />} />
          <Route path="/referral" element={<Index defaultSection="referral" />} />
          <Route path="/mentoring" element={<Index defaultSection="mentoring" />} />
          <Route path="/bioimpedance" element={<Index defaultSection="bioimpedance" />} />
          <Route path="/recipes" element={<Index defaultSection="recipes" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
