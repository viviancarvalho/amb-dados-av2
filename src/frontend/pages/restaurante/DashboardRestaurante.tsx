import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { LogOut, Package, Menu as MenuIcon, User, UtensilsCrossed } from "lucide-react";
import { toast } from "sonner";

const pedidosMock = [
  { id: 1, cliente: "João Silva", itens: "2x Pizza Margherita", total: 71.80, status: "pendente" },
  { id: 2, cliente: "Maria Santos", itens: "1x Pizza Calabresa, 1x Refrigerante", total: 47.80, status: "em_preparo" },
  { id: 3, cliente: "Pedro Costa", itens: "3x Suco Natural", total: 22.50, status: "pronto" },
];

const cardapioMock = [
  { id: 1, nome: "Pizza Margherita", preco: 35.90, disponivel: true },
  { id: 2, nome: "Pizza Calabresa", preco: 38.90, disponivel: true },
  { id: 3, nome: "Refrigerante 2L", preco: 8.90, disponivel: false },
];

interface Entregador {
  id: number;
  nome: string;
  veiculo: string;
  disponivel: boolean;
}

const entregadoresMock: Entregador[] = [
  { id: 1, nome: "Carlos Silva", veiculo: "Moto Honda", disponivel: true },
  { id: 2, nome: "Pedro Santos", veiculo: "Moto Yamaha", disponivel: true },
  { id: 3, nome: "Ana Costa", veiculo: "Bicicleta", disponivel: true },
];

const DashboardRestaurante = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"pedidos" | "cardapio">("pedidos");
  const [pedidos, setPedidos] = useState(pedidosMock);
  const [dialogEntregadorAberto, setDialogEntregadorAberto] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState<number | null>(null);

  const handleLogout = () => {
    toast.success("Logout realizado");
    navigate("/");
  };

  const atualizarStatus = (pedidoId: number, novoStatus: string) => {
    setPedidos(
      pedidos.map((p) => (p.id === pedidoId ? { ...p, status: novoStatus } : p))
    );
    toast.success("Status atualizado");
  };

  const abrirSolicitarEntregador = (pedidoId: number) => {
    setPedidoSelecionado(pedidoId);
    setDialogEntregadorAberto(true);
  };

  const solicitarEntregador = (entregadorId: number) => {
    toast.success("Entregador solicitado com sucesso!");
    setDialogEntregadorAberto(false);
    setPedidoSelecionado(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pendente":
        return "bg-warning/10 text-warning border-warning/20";
      case "em_preparo":
        return "bg-info/10 text-info border-info/20";
      case "pronto":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pendente":
        return "Pendente";
      case "em_preparo":
        return "Em Preparo";
      case "pronto":
        return "Pronto";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b bg-gradient-card backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Painel Restaurante</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate("/restaurante/perfil")}>
              <User className="w-4 h-4 mr-2" />
              Perfil
            </Button>
            <Button variant="outline" onClick={() => navigate("/restaurante/cardapio")}>
              <UtensilsCrossed className="w-4 h-4 mr-2" />
              Cardápio
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8">
          <Button
            variant={activeTab === "pedidos" ? "default" : "outline"}
            onClick={() => setActiveTab("pedidos")}
          >
            <Package className="w-4 h-4 mr-2" />
            Pedidos
          </Button>
          <Button
            variant={activeTab === "cardapio" ? "default" : "outline"}
            onClick={() => setActiveTab("cardapio")}
          >
            <MenuIcon className="w-4 h-4 mr-2" />
            Cardápio
          </Button>
        </div>

        {activeTab === "pedidos" && (
          <div className="space-y-4">
            {pedidos.map((pedido) => (
              <Card key={pedido.id} className="p-6 hover:shadow-lg transition-all border-border/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Pedido #{pedido.id}</h3>
                    <p className="text-muted-foreground">{pedido.cliente}</p>
                    <p className="text-sm text-muted-foreground mt-1">{pedido.itens}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg text-primary">R$ {pedido.total.toFixed(2)}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm mt-2 border ${getStatusColor(pedido.status)}`}>
                      {getStatusLabel(pedido.status)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {pedido.status === "pendente" && (
                    <Button
                      size="sm"
                      onClick={() => atualizarStatus(pedido.id, "em_preparo")}
                    >
                      Iniciar Preparo
                    </Button>
                  )}
                  {pedido.status === "em_preparo" && (
                    <Button
                      size="sm"
                      onClick={() => atualizarStatus(pedido.id, "pronto")}
                    >
                      Marcar como Pronto
                    </Button>
                  )}
                  {pedido.status === "pronto" && (
                    <Button
                      size="sm"
                      onClick={() => abrirSolicitarEntregador(pedido.id)}
                    >
                      Solicitar Entregador
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "cardapio" && (
          <div className="space-y-4">
            {cardapioMock.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{item.nome}</h3>
                    <p className="text-muted-foreground">R$ {item.preco.toFixed(2)}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    item.disponivel
                      ? "bg-success/10 text-success"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {item.disponivel ? "Disponível" : "Indisponível"}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Dialog open={dialogEntregadorAberto} onOpenChange={setDialogEntregadorAberto}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Selecionar Entregador</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {entregadoresMock.filter(e => e.disponivel).map((entregador) => (
              <Card key={entregador.id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{entregador.nome}</p>
                  <p className="text-sm text-muted-foreground">{entregador.veiculo}</p>
                </div>
                <Button size="sm" onClick={() => solicitarEntregador(entregador.id)}>
                  Solicitar
                </Button>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardRestaurante;
