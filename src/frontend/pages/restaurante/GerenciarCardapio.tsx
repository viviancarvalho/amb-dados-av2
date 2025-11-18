import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card } from "../../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Textarea } from "../../components/ui/textarea";
import { toast } from "sonner";
import { ArrowLeft, Plus, Pencil, Trash2 } from "lucide-react";

interface ItemCardapio {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
}

const GerenciarCardapio = () => {
  const navigate = useNavigate();
  const [itens, setItens] = useState<ItemCardapio[]>([
    { id: 1, nome: "Pizza Margherita", descricao: "Molho, mussarela e manjericão", preco: 45.90 },
    { id: 2, nome: "Hambúrguer Artesanal", descricao: "180g de carne, queijo e bacon", preco: 32.50 },
    { id: 3, nome: "Salada Caesar", descricao: "Alface, frango, croutons e molho caesar", preco: 28.00 },
  ]);
  
  const [editandoItem, setEditandoItem] = useState<ItemCardapio | null>(null);
  const [dialogAberto, setDialogAberto] = useState(false);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  const abrirDialog = (item?: ItemCardapio) => {
    if (item) {
      setEditandoItem(item);
      setNome(item.nome);
      setDescricao(item.descricao);
      setPreco(item.preco.toString());
    } else {
      setEditandoItem(null);
      setNome("");
      setDescricao("");
      setPreco("");
    }
    setDialogAberto(true);
  };

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editandoItem) {
      setItens(itens.map(item => 
        item.id === editandoItem.id 
          ? { ...item, nome, descricao, preco: parseFloat(preco) }
          : item
      ));
      toast.success("Item atualizado com sucesso!");
    } else {
      const novoItem: ItemCardapio = {
        id: Math.max(...itens.map(i => i.id)) + 1,
        nome,
        descricao,
        preco: parseFloat(preco),
      };
      setItens([...itens, novoItem]);
      toast.success("Item adicionado com sucesso!");
    }
    
    setDialogAberto(false);
  };

  const handleExcluir = (id: number) => {
    setItens(itens.filter(item => item.id !== id));
    toast.success("Item excluído com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/restaurante/dashboard")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>

          <Dialog open={dialogAberto} onOpenChange={setDialogAberto}>
            <DialogTrigger asChild>
              <Button onClick={() => abrirDialog()}>
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Item
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editandoItem ? "Editar Item" : "Novo Item"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSalvar} className="space-y-4">
                <div>
                  <Label htmlFor="nome">Nome</Label>
                  <Input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea
                    id="descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="preco">Preço (R$)</Label>
                  <Input
                    id="preco"
                    type="number"
                    step="0.01"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {editandoItem ? "Atualizar" : "Adicionar"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">Gerenciar Cardápio</h1>

          <div className="space-y-4">
            {itens.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.nome}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.descricao}
                    </p>
                    <p className="font-bold text-primary">
                      R$ {item.preco.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => abrirDialog(item)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => handleExcluir(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GerenciarCardapio;
