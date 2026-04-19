import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import LeistungenIndex from "./pages/LeistungenIndex.tsx";
import UeberUns from "./pages/UeberUns.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import ReferenzenIndex from "./pages/ReferenzenIndex.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/leistungen" element={<LeistungenIndex />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/leistungen/:slug" element={<ServiceDetail />} />
          <Route path="/referenzen" element={<ReferenzenIndex />} />
          <Route path="/referenzen/:slug" element={<ProjectDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
