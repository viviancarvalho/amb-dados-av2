import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { LogOut, ShoppingBag, Clock, ShoppingCart, User } from "lucide-react";
import { toast } from "sonner";
import pizzariaBella from "../../../assets/pizzaria-bella.jpg";
import burgerHouse from "../../../assets/burger-house.jpg";
import sushiMaster from "../../../assets/sushi-master.jpg";
import churrascoPremiun from "../../../assets/churrasco-premium.jpg";

const restaurantes = [
  { id: 1, nome: "Pizzaria Bella", categoria: "Italiana", tempo: "30-40 min", avaliacao: 4.8, imagem: pizzariaBella },
  { id: 2, nome: "Burger House", categoria: "Hamburgueria", tempo: "25-35 min", avaliacao: 4.5, imagem: burgerHouse },
  { id: 3, nome: "Sushi Master", categoria: "Japonesa", tempo: "40-50 min", avaliacao: 4.9, imagem: sushiMaster },
  { id: 4, nome: "Churrasco Premium", categoria: "Churrascaria", tempo: "35-45 min", avaliacao: 4.7, imagem: churrascoPremiun },
];

const pedidosMock = [
  { 
    id: 1234, 
    restaurante: "Pizzaria Bella", 
    valorTotal: 45.90, 
    status: "Em preparo",
    dataHora: "2024-01-15 19:30"
  },
  { 
    id: 1233, 
    restaurante: "Burger House", 
    valorTotal: 62.50, 
    status: "Entregue",
    dataHora: "2024-01-14 18:45"
  },
  { 
    id: 1232, 
    restaurante: "Sushi Master", 
    valorTotal: 89.90, 
    status: "A caminho",
    dataHora: "2024-01-15 20:15"
  },
];

const DashboardCliente = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"restaurantes" | "pedidos">("restaurantes");
  const [pedidos, setPedidos] = useState(pedidosMock);

  const handleLogout = () => {
    toast.success("Logout realizado");
    navigate("/");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em preparo":
        return "bg-warning/10 text-warning border-warning/20";
      case "A caminho":
        return "bg-info/10 text-info border-info/20";
      case "Entregue":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b bg-gradient-card backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Área do Cliente</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate("/cliente/perfil")}>
              <User className="w-4 h-4 mr-2" />
              Perfil
            </Button>
            <Button variant="outline" onClick={() => navigate("/cliente/carrinho")}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Carrinho
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
            variant={activeTab === "restaurantes" ? "default" : "outline"}
            onClick={() => setActiveTab("restaurantes")}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Restaurantes
          </Button>
          <Button
            variant={activeTab === "pedidos" ? "default" : "outline"}
            onClick={() => setActiveTab("pedidos")}
          >
            <Clock className="w-4 h-4 mr-2" />
            Meus Pedidos
          </Button>
        </div>

        {activeTab === "restaurantes" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantes.map((rest) => (
              <Card
                key={rest.id}
                className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group border-border/50"
                onClick={() => navigate(`/cliente/restaurante/${rest.id}`)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={rest.imagem} 
                    alt={rest.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{rest.nome}</h3>
                  <p className="text-muted-foreground mb-3">{rest.categoria}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {rest.tempo}
                    </span>
                    <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      ⭐ {rest.avaliacao}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "pedidos" && (
          <div className="space-y-4">
            {pedidos.map((pedido) => (
              <Card key={pedido.id} className="p-6 hover:shadow-lg transition-all border-border/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Pedido #{pedido.id}</h3>
                    <p className="text-muted-foreground">{pedido.restaurante}</p>
                    <p className="text-sm text-muted-foreground mt-1">{pedido.dataHora}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-xl text-primary">R$ {pedido.valorTotal.toFixed(2)}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm mt-2 border ${getStatusColor(pedido.status)}`}>
                      {pedido.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCliente;
