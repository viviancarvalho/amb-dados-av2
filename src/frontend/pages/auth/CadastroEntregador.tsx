import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card } from "../../components/ui/card";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const CadastroEntregador = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [placa, setPlaca] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome || !cpf || !email || !telefone || !veiculo || !placa || !senha) {
      toast.error("Preencha todos os campos");
      return;
    }

    toast.success("Cadastro realizado com sucesso!");
    navigate("/entregador/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 max-h-[90vh] overflow-y-auto">
        <Link to="/login" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Login
        </Link>
        
        <h1 className="text-3xl font-bold mb-2">Cadastro de Entregador</h1>
        <p className="text-muted-foreground mb-6">
          Cadastre-se para realizar entregas
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
            />
          </div>

          <div>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="000.000.000-00"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="entregador@email.com"
            />
          </div>

          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <Label htmlFor="veiculo">Tipo de Veículo</Label>
            <Input
              id="veiculo"
              type="text"
              value={veiculo}
              onChange={(e) => setVeiculo(e.target.value)}
              placeholder="Ex: Moto, Bicicleta, Carro"
            />
          </div>

          <div>
            <Label htmlFor="placa">Placa do Veículo</Label>
            <Input
              id="placa"
              type="text"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              placeholder="ABC-1234"
            />
          </div>

          <div>
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" className="w-full">
            Cadastrar como Entregador
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CadastroEntregador;
