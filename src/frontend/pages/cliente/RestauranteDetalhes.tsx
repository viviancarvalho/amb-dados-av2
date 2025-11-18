import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react";
import { toast } from "sonner";

// Mock data
const cardapio = [
  { id: 1, nome: "Pizza Margherita", descricao: "Molho, mussarela, tomate", preco: 35.90, categoria: "Pizzas" },
  { id: 2, nome: "Pizza Calabresa", descricao: "Molho, mussarela, calabresa", preco: 38.90, categoria: "Pizzas" },
  { id: 3, nome: "Refrigerante 2L", descricao: "Coca-cola, Guaraná ou Fanta", preco: 8.90, categoria: "Bebidas" },
  { id: 4, nome: "Suco Natural", descricao: "Laranja, limão ou morango", preco: 7.50, categoria: "Bebidas" },
];

interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

const RestauranteDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  const adicionarAoCarrinho = (item: typeof cardapio[0]) => {
    const itemExistente = carrinho.find((i) => i.id === item.id);
    
    if (itemExistente) {
      setCarrinho(
        carrinho.map((i) =>
          i.id === item.id ? { ...i, quantidade: i.quantidade + 1 } : i
        )
      );
    } else {
      setCarrinho([...carrinho, { id: item.id, nome: item.nome, preco: item.preco, quantidade: 1 }]);
    }
    toast.success(`${item.nome} adicionado ao carrinho`);
  };

  const incrementarQuantidade = (itemId: number) => {
    setCarrinho(
      carrinho.map((i) =>
        i.id === itemId ? { ...i, quantidade: i.quantidade + 1 } : i
      )
    );
  };

  const removerDoCarrinho = (itemId: number) => {
    const itemExistente = carrinho.find((i) => i.id === itemId);
    
    if (itemExistente && itemExistente.quantidade > 1) {
      setCarrinho(
        carrinho.map((i) =>
          i.id === itemId ? { ...i, quantidade: i.quantidade - 1 } : i
        )
      );
    } else {
      setCarrinho(carrinho.filter((i) => i.id !== itemId));
    }
  };

  const total = carrinho.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  const finalizarPedido = () => {
    if (carrinho.length === 0) {
      toast.error("Adicione itens ao carrinho");
      return;
    }
    toast.success("Pedido realizado com sucesso!");
    navigate("/cliente/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/cliente/dashboard")}
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </button>
          <h1 className="text-2xl font-bold">Pizzaria Bella</h1>
          <p className="text-muted-foreground">Italiana • 30-40 min</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Pizzas</h2>
              <div className="grid gap-4">
                {cardapio
                  .filter((item) => item.categoria === "Pizzas")
                  .map((item) => (
                    <Card key={item.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{item.nome}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.descricao}
                          </p>
                          <p className="font-semibold text-primary">
                            R$ {item.preco.toFixed(2)}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => adicionarAoCarrinho(item)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Bebidas</h2>
              <div className="grid gap-4">
                {cardapio
                  .filter((item) => item.categoria === "Bebidas")
                  .map((item) => (
                    <Card key={item.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{item.nome}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.descricao}
                          </p>
                          <p className="font-semibold text-primary">
                            R$ {item.preco.toFixed(2)}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => adicionarAoCarrinho(item)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="p-6 sticky top-4">
              <h3 className="font-semibold mb-4 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Carrinho
              </h3>
              
              {carrinho.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Carrinho vazio
                </p>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {carrinho.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.nome}</p>
                          <p className="text-sm text-muted-foreground">
                            R$ {item.preco.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removerDoCarrinho(item.id)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantidade}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => incrementarQuantidade(item.id)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between items-center font-semibold text-lg">
                      <span>Total</span>
                      <span>R$ {total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button className="w-full" onClick={finalizarPedido}>
                    Finalizar Pedido
                  </Button>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestauranteDetalhes;
