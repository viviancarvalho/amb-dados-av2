import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card } from "../../components/ui/card";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const PerfilRestaurante = () => {
  const navigate = useNavigate();
  const [nomeRestaurante, setNomeRestaurante] = useState("Restaurante Bom Sabor");
  const [telefone, setTelefone] = useState("(11) 3456-7890");
  const [endereco, setEndereco] = useState("Av. Paulista, 1000");
  const [tipoCozinha, setTipoCozinha] = useState("Brasileira");
  const [tempoEntrega, setTempoEntrega] = useState("30-40 min");
  const [cnpj] = useState("12.345.678/0001-90"); // Read-only

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Perfil atualizado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background p-4">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/restaurante/dashboard")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">Perfil do Restaurante</h1>

          <form onSubmit={handleSalvar} className="space-y-4">
            <div>
              <Label htmlFor="nome">Nome do Restaurante</Label>
              <Input
                id="nome"
                value={nomeRestaurante}
                onChange={(e) => setNomeRestaurante(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                id="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="tipoCozinha">Tipo de Cozinha</Label>
              <Input
                id="tipoCozinha"
                value={tipoCozinha}
                onChange={(e) => setTipoCozinha(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="tempoEntrega">Tempo de Entrega</Label>
              <Input
                id="tempoEntrega"
                value={tempoEntrega}
                onChange={(e) => setTempoEntrega(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input id="cnpj" value={cnpj} disabled className="bg-muted" />
              <p className="text-xs text-muted-foreground mt-1">
                CNPJ não pode ser alterado
              </p>
            </div>

            <Button type="submit" className="w-full">
              Salvar Alterações
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PerfilRestaurante;
