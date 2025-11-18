import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { LogOut, Package, User } from "lucide-react";
import { toast } from "sonner";

const entregasMock = [
  { id: 1, restaurante: "Pizzaria Bella", cliente: "João Silva", endereco: "Rua A, 123", valor: 71.80, status: "pronto" },
  { id: 2, restaurante: "Burger House", cliente: "Maria Santos", endereco: "Av B, 456", valor: 47.80, status: "em_transito" },
  { id: 3, restaurante: "Sushi Master", cliente: "Pedro Costa", endereco: "Rua C, 789", valor: 22.50, status: "entregue" },
];

const DashboardEntregador = () => {
  const navigate = useNavigate();
  const [entregas, setEntregas] = useState(entregasMock);

  const handleLogout = () => {
    toast.success("Logout realizado");
    navigate("/");
  };

  const aceitarEntrega = (entregaId: number) => {
    setEntregas(
      entregas.map((e) => (e.id === entregaId ? { ...e, status: "em_transito" } : e))
    );
    toast.success("Entrega aceita!");
  };

  const finalizarEntrega = (entregaId: number) => {
    setEntregas(
      entregas.map((e) => (e.id === entregaId ? { ...e, status: "entregue" } : e))
    );
    toast.success("Entrega finalizada!");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pronto":
        return "bg-warning/10 text-warning border-warning/20";
      case "em_transito":
        return "bg-info/10 text-info border-info/20";
      case "entregue":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pronto":
        return "Pronto para Retirada";
      case "em_transito":
        return "Em Trânsito";
      case "entregue":
        return "Entregue";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b bg-gradient-card backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Painel Entregador</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate("/entregador/perfil")}>
              <User className="w-4 h-4 mr-2" />
              Perfil
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center">
            <Package className="w-5 h-5 mr-2" />
            Entregas Disponíveis
          </h2>
        </div>

        <div className="space-y-4">
          {entregas.map((entrega) => (
            <Card key={entrega.id} className="p-6 hover:shadow-lg transition-all border-border/50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Pedido #{entrega.id}</h3>
                  <p className="text-muted-foreground">{entrega.restaurante}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cliente: {entrega.cliente}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Endereço: {entrega.endereco}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg text-primary">R$ {entrega.valor.toFixed(2)}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm mt-2 border ${getStatusColor(entrega.status)}`}>
                    {getStatusLabel(entrega.status)}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                {entrega.status === "pronto" && (
                  <Button
                    size="sm"
                    onClick={() => aceitarEntrega(entrega.id)}
                  >
                    Aceitar Entrega
                  </Button>
                )}
                {entrega.status === "em_transito" && (
                  <Button
                    size="sm"
                    onClick={() => finalizarEntrega(entrega.id)}
                  >
                    Finalizar Entrega
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardEntregador;
