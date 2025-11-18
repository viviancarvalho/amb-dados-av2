import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

const Carrinho = () => {
  const navigate = useNavigate();
  const [itens, setItens] = useState<ItemCarrinho[]>([
    { id: 1, nome: "Pizza Margherita", preco: 45.90, quantidade: 2 },
    { id: 2, nome: "Refrigerante 2L", preco: 12.00, quantidade: 1 },
  ]);

  const removerItem = (id: number) => {
    setItens(itens.filter(item => item.id !== id));
    toast.success("Item removido do carrinho");
  };

  const atualizarQuantidade = (id: number, novaQuantidade: number) => {
    if (novaQuantidade < 1) {
      removerItem(id);
      return;
    }
    setItens(itens.map(item => 
      item.id === id ? { ...item, quantidade: novaQuantidade } : item
    ));
  };

  const calcularTotal = () => {
    return itens.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  };

  const handlePagar = () => {
    if (itens.length === 0) {
      toast.error("Carrinho vazio");
      return;
    }
    toast.success("Pedido realizado com sucesso!");
    navigate("/cliente/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link to="/cliente/dashboard" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Meu Carrinho</h1>

        {itens.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">Seu carrinho está vazio</p>
            <Link to="/cliente/dashboard">
              <Button>Ver Restaurantes</Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card className="p-6">
              <div className="space-y-4">
                {itens.map((item) => (
                  <div key={item.id} className="flex items-center justify-between pb-4 border-b last:border-b-0 last:pb-0">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.nome}</h3>
                      <p className="text-sm text-muted-foreground">
                        R$ {item.preco.toFixed(2)} cada
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantidade}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                        >
                          +
                        </Button>
                      </div>

                      <div className="w-24 text-right font-semibold">
                        R$ {(item.preco * item.quantidade).toFixed(2)}
                      </div>

                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => removerItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>R$ {calcularTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Taxa de entrega</span>
                  <span>R$ 5.00</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-3 border-t">
                  <span>Total</span>
                  <span>R$ {(calcularTotal() + 5).toFixed(2)}</span>
                </div>
              </div>

              <Button 
                className="w-full mt-6" 
                size="lg"
                onClick={handlePagar}
              >
                Finalizar Pedido
              </Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrinho;
