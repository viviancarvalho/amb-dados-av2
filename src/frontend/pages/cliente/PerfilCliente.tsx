import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card } from "../../components/ui/card";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const PerfilCliente = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("João Silva");
  const [telefone, setTelefone] = useState("(11) 98765-4321");
  const [endereco, setEndereco] = useState("Rua das Flores, 123");
  const [cpf] = useState("123.456.789-00"); // Read-only

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Perfil atualizado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background p-4">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/cliente/dashboard")}
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
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                id="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
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

export default PerfilCliente;
