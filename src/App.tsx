import { Toaster } from "./frontend/components/ui/toaster";
import { Toaster as Sonner } from "./frontend/components/ui/sonner";
import { TooltipProvider } from "./frontend/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./frontend/pages/Index";
import NotFound from "./frontend/pages/NotFound";

// Auth
import Cadastro from "./frontend/pages/auth/Cadastro";
import CadastroCliente from "./frontend/pages/auth/CadastroCliente";
import CadastroRestaurante from "./frontend/pages/auth/CadastroRestaurante";
import CadastroEntregador from "./frontend/pages/auth/CadastroEntregador";

// Cliente
import DashboardCliente from "./frontend/pages/cliente/DashboardCliente";
import RestauranteDetalhes from "./frontend/pages/cliente/RestauranteDetalhes";
import Carrinho from "./frontend/pages/cliente/Carrinho";
import PerfilCliente from "./frontend/pages/cliente/PerfilCliente";

// Restaurante
import DashboardRestaurante from "./frontend/pages/restaurante/DashboardRestaurante";
import PerfilRestaurante from "./frontend/pages/restaurante/PerfilRestaurante";
import GerenciarCardapio from "./frontend/pages/restaurante/GerenciarCardapio";

// Entregador
import DashboardEntregador from "./frontend/pages/entregador/DashboardEntregador";
import PerfilEntregador from "./frontend/pages/entregador/PerfilEntregador";

// Super
import LoginSuper from "./frontend/pages/super/LoginSuper";
import DashboardSuper from "./frontend/pages/super/DashboardSuper";
import EditarUsuario from "./frontend/pages/super/EditarUsuario";
import EditarRestaurante from "./frontend/pages/super/EditarRestaurante";

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
