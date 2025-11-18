import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { LogOut, Users, Store, Bike, Package } from "lucide-react";
import { toast } from "sonner";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  tipo: string;
}

interface Restaurante {
  id: number;
  nome: string;
  endereco: string;
  tipo: string;
}

interface Pedido {
  id: number;
  cliente: string;
  restaurante: string;
  valor: number;
  status: string;
}

const DashboardSuper = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overview" | "usuarios" | "restaurantes" | "pedidos">("overview");
  
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { id: 1, nome: "João Silva", email: "joao@email.com", tipo: "Cliente" },
    { id: 2, nome: "Maria Santos", email: "maria@email.com", tipo: "Cliente" },
    { id: 3, nome: "Carlos Oliveira", email: "carlos@email.com", tipo: "Entregador" },
  ]);

  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([
    { id: 1, nome: "Restaurante Bom Sabor", endereco: "Av. Paulista, 1000", tipo: "Brasileira" },
    { id: 2, nome: "Pizza Express", endereco: "Rua Augusta, 500", tipo: "Italiana" },
  ]);

  const [pedidos, setPedidos] = useState<Pedido[]>([
    { id: 1, cliente: "João Silva", restaurante: "Bom Sabor", valor: 45.90, status: "Entregue" },
    { id: 2, cliente: "Maria Santos", restaurante: "Pizza Express", valor: 62.50, status: "Em andamento" },
  ]);

  const handleLogout = () => {
    toast.success("Logout realizado");
    navigate("/super/login");
  };

  const handleEditarUsuario = (id: number) => {
    navigate(`/super/editar-usuario?id=${id}`);
  };

  const handleEditarRestaurante = (id: number) => {
    navigate(`/super/editar-restaurante?id=${id}`);
  };

  const handleExcluirUsuario = (id: number) => {
    setUsuarios(usuarios.filter(u => u.id !== id));
    toast.success("Usuário excluído com sucesso!");
  };

  const handleExcluirRestaurante = (id: number) => {
    setRestaurantes(restaurantes.filter(r => r.id !== id));
    toast.success("Restaurante excluído com sucesso!");
  };

  const handleExcluirPedido = (id: number) => {
    setPedidos(pedidos.filter(p => p.id !== id));
    toast.success("Pedido excluído com sucesso!");
  };

  const stats = {
    clientes: usuarios.length,
    restaurantes: restaurantes.length,
    entregadores: 40,
    pedidos: pedidos.length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b bg-gradient-card backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Painel Administrativo</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 overflow-x-auto">
          <Button
            variant={activeTab === "overview" ? "default" : "outline"}
            onClick={() => setActiveTab("overview")}
          >
            Visão Geral
          </Button>
          <Button
            variant={activeTab === "usuarios" ? "default" : "outline"}
            onClick={() => setActiveTab("usuarios")}
          >
            <Users className="w-4 h-4 mr-2" />
            Usuários
          </Button>
          <Button
            variant={activeTab === "restaurantes" ? "default" : "outline"}
            onClick={() => setActiveTab("restaurantes")}
          >
            <Store className="w-4 h-4 mr-2" />
            Restaurantes
          </Button>
          <Button
            variant={activeTab === "pedidos" ? "default" : "outline"}
            onClick={() => setActiveTab("pedidos")}
          >
            <Package className="w-4 h-4 mr-2" />
            Pedidos
          </Button>
        </div>

        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all border-border/50 bg-gradient-card">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">{stats.clientes}</span>
              </div>
              <h3 className="text-lg font-semibold">Clientes</h3>
              <p className="text-muted-foreground text-sm">Total de clientes cadastrados</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all border-border/50 bg-gradient-card">
              <div className="flex items-center justify-between mb-4">
                <Store className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">{stats.restaurantes}</span>
              </div>
              <h3 className="text-lg font-semibold">Restaurantes</h3>
              <p className="text-muted-foreground text-sm">Restaurantes parceiros</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all border-border/50 bg-gradient-card">
              <div className="flex items-center justify-between mb-4">
                <Bike className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">{stats.entregadores}</span>
              </div>
              <h3 className="text-lg font-semibold">Entregadores</h3>
              <p className="text-muted-foreground text-sm">Entregadores ativos</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all border-border/50 bg-gradient-card">
              <div className="flex items-center justify-between mb-4">
                <Package className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">{stats.pedidos}</span>
              </div>
              <h3 className="text-lg font-semibold">Pedidos</h3>
              <p className="text-muted-foreground text-sm">Total de pedidos realizados</p>
            </Card>
          </div>
        )}

        {activeTab === "usuarios" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Gerenciar Usuários</h2>
            {usuarios.map((usuario) => (
              <Card key={usuario.id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{usuario.nome}</p>
                  <p className="text-sm text-muted-foreground">{usuario.email}</p>
                  <p className="text-xs text-muted-foreground">{usuario.tipo}</p>
                </div>
                <div className="space-x-2">
                  <Button size="sm" onClick={() => handleEditarUsuario(usuario.id)}>
                    Editar
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleExcluirUsuario(usuario.id)}>
                    Excluir
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "restaurantes" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Gerenciar Restaurantes</h2>
            {restaurantes.map((restaurante) => (
              <Card key={restaurante.id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{restaurante.nome}</p>
                  <p className="text-sm text-muted-foreground">{restaurante.endereco}</p>
                  <p className="text-xs text-muted-foreground">{restaurante.tipo}</p>
                </div>
                <div className="space-x-2">
                  <Button size="sm" onClick={() => handleEditarRestaurante(restaurante.id)}>
                    Editar
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleExcluirRestaurante(restaurante.id)}>
                    Excluir
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "pedidos" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Gerenciar Pedidos</h2>
            {pedidos.map((pedido) => (
              <Card key={pedido.id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">Pedido #{pedido.id}</p>
                  <p className="text-sm text-muted-foreground">
                    {pedido.cliente} - {pedido.restaurante}
                  </p>
                  <p className="text-sm">R$ {pedido.valor.toFixed(2)} - {pedido.status}</p>
                </div>
                <div className="space-x-2">
                  <Button size="sm" variant="destructive" onClick={() => handleExcluirPedido(pedido.id)}>
                    Excluir
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSuper;
