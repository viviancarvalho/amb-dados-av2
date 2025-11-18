import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Auth
import Cadastro from "./pages/auth/Cadastro";
import CadastroCliente from "./pages/auth/CadastroCliente";
import CadastroRestaurante from "./pages/auth/CadastroRestaurante";
import CadastroEntregador from "./pages/auth/CadastroEntregador";

// Cliente
import DashboardCliente from "./pages/cliente/DashboardCliente";
import RestauranteDetalhes from "./pages/cliente/RestauranteDetalhes";
import Carrinho from "./pages/cliente/Carrinho";
import PerfilCliente from "./pages/cliente/PerfilCliente";

// Restaurante
import DashboardRestaurante from "./pages/restaurante/DashboardRestaurante";
import PerfilRestaurante from "./pages/restaurante/PerfilRestaurante";
import GerenciarCardapio from "./pages/restaurante/GerenciarCardapio";

// Entregador
import DashboardEntregador from "./pages/entregador/DashboardEntregador";
import PerfilEntregador from "./pages/entregador/PerfilEntregador";

// Super
import LoginSuper from "./pages/super/LoginSuper";
import DashboardSuper from "./pages/super/DashboardSuper";
import EditarUsuario from "./pages/super/EditarUsuario";
import EditarRestaurante from "./pages/super/EditarRestaurante";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Rotas de Autenticação */}
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastro/cliente" element={<CadastroCliente />} />
          <Route path="/cadastro/restaurante" element={<CadastroRestaurante />} />
          <Route path="/cadastro/entregador" element={<CadastroEntregador />} />
          
          {/* Rotas Cliente */}
          <Route path="/cliente/dashboard" element={<DashboardCliente />} />
          <Route path="/cliente/restaurante/:id" element={<RestauranteDetalhes />} />
          <Route path="/cliente/carrinho" element={<Carrinho />} />
          <Route path="/cliente/perfil" element={<PerfilCliente />} />
          
          {/* Rotas Restaurante */}
          <Route path="/restaurante/dashboard" element={<DashboardRestaurante />} />
          <Route path="/restaurante/perfil" element={<PerfilRestaurante />} />
          <Route path="/restaurante/cardapio" element={<GerenciarCardapio />} />
          
          {/* Rotas Entregador */}
          <Route path="/entregador/dashboard" element={<DashboardEntregador />} />
          <Route path="/entregador/perfil" element={<PerfilEntregador />} />
          
          {/* Rotas Super */}
          <Route path="/super/login" element={<LoginSuper />} />
          <Route path="/super/dashboard" element={<DashboardSuper />} />
          <Route path="/super/editar-usuario" element={<EditarUsuario />} />
          <Route path="/super/editar-restaurante" element={<EditarRestaurante />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
