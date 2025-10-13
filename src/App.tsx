import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import CarSales from "./pages/services/CarSales";
import Financing from "./pages/services/Financing";
import TradeIn from "./pages/services/TradeIn";
import Maintenance from "./pages/services/Maintenance";
import Warranty from "./pages/services/Warranty";
import TestDrive from "./pages/services/TestDrive";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="services" element={<Services />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/services/car-sales" element={<CarSales />} />
            <Route path="/services/financing" element={<Financing />} />
            <Route path="/services/trade-in" element={<TradeIn />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
            <Route path="/services/warranty" element={<Warranty />} />
            <Route path="/services/test-drive" element={<TestDrive />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
