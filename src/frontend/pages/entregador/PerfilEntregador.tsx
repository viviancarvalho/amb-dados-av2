import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card } from "../../components/ui/card";
import { Switch } from "../../components/ui/switch";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const PerfilEntregador = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("Carlos Oliveira");
  const [telefone, setTelefone] = useState("(11) 91234-5678");
  const [veiculo, setVeiculo] = useState("Moto");
  const [placa, setPlaca] = useState("ABC-1234");
  const [disponivel, setDisponivel] = useState(true);
  const [cpf] = useState("987.654.321-00"); // Read-only

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Perfil atualizado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background p-4">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/entregador/dashboard")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-6">Meu Perfil</h1>

          <form onSubmit={handleSalvar} className="space-y-4">
            <div>
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
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
              <Label htmlFor="veiculo">Veículo</Label>
              <Input
                id="veiculo"
                value={veiculo}
                onChange={(e) => setVeiculo(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="placa">Placa</Label>
              <Input
                id="placa"
                value={placa}
                onChange={(e) => setPlaca(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="disponivel">Disponível para entregas</Label>
                <p className="text-xs text-muted-foreground">
                  Ative para receber solicitações de entrega
                </p>
              </div>
              <Switch
                id="disponivel"
                checked={disponivel}
                onCheckedChange={setDisponivel}
              />
            </div>

            <div>
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" value={cpf} disabled className="bg-muted" />
              <p className="text-xs text-muted-foreground mt-1">
                CPF não pode ser alterado
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

export default PerfilEntregador;
