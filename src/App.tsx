
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Dienstleistungen from "./pages/Dienstleistungen";
import Angebote from "./pages/Angebote";
import AngebotDetail from "./pages/AngebotDetail";
import Erfolge from "./pages/Erfolge";
import ErfolgDetail from "./pages/ErfolgDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dienstleistungen" element={<Dienstleistungen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

//<Route path="/angebote" element={<Angebote />} />
//<Route path="/angebote/:id" element={<AngebotDetail />} />
//<Route path="/erfolge" element={<Erfolge />} />
//<Route path="/erfolge/:id" element={<ErfolgDetail />} />

export default App;
