import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Cadastro = () => {
  const navigate = useNavigate();

  // Cliente
  const [nomeCliente, setNomeCliente] = useState("");
  const [emailCliente, setEmailCliente] = useState("");
  const [telefoneCliente, setTelefoneCliente] = useState("");
  const [senhaCliente, setSenhaCliente] = useState("");

  // Restaurante
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [categoria, setCategoria] = useState("");
  const [endereco, setEndereco] = useState("");
  const [emailRestaurante, setEmailRestaurante] = useState("");
  const [telefoneRestaurante, setTelefoneRestaurante] = useState("");
  const [senhaRestaurante, setSenhaRestaurante] = useState("");

  // Entregador
  const [nomeEntregador, setNomeEntregador] = useState("");
  const [cpf, setCpf] = useState("");
  const [emailEntregador, setEmailEntregador] = useState("");
  const [telefoneEntregador, setTelefoneEntregador] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [placa, setPlaca] = useState("");
  const [senhaEntregador, setSenhaEntregador] = useState("");

  const handleCadastroCliente = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomeCliente || !emailCliente || !telefoneCliente || !senhaCliente) {
      toast.error("Preencha todos os campos");
      return;
    }
    toast.success("Cadastro realizado com sucesso!");
    navigate("/cliente/dashboard");
  };

  const handleCadastroRestaurante = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomeRestaurante || !cnpj || !categoria || !endereco || !emailRestaurante || !telefoneRestaurante || !senhaRestaurante) {
      toast.error("Preencha todos os campos");
      return;
    }
    toast.success("Cadastro realizado com sucesso!");
    navigate("/restaurante/dashboard");
  };

  const handleCadastroEntregador = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomeEntregador || !cpf || !emailEntregador || !telefoneEntregador || !veiculo || !placa || !senhaEntregador) {
      toast.error("Preencha todos os campos");
      return;
    }
    toast.success("Cadastro realizado com sucesso!");
    navigate("/entregador/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Login
        </Link>
        
        <h1 className="text-3xl font-bold mb-2">Criar Conta</h1>
        <p className="text-muted-foreground mb-6">
          Escolha o tipo de conta que deseja criar
        </p>

        <Tabs defaultValue="cliente" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="cliente">Cliente</TabsTrigger>
            <TabsTrigger value="restaurante">Restaurante</TabsTrigger>
            <TabsTrigger value="entregador">Entregador</TabsTrigger>
          </TabsList>

          <TabsContent value="cliente">
            <form onSubmit={handleCadastroCliente} className="space-y-4">
              <div>
                <Label htmlFor="nome-cliente">Nome Completo</Label>
                <Input
                  id="nome-cliente"
                  type="text"
                  value={nomeCliente}
                  onChange={(e) => setNomeCliente(e.target.value)}
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <Label htmlFor="email-cliente">Email</Label>
                <Input
                  id="email-cliente"
                  type="email"
                  value={emailCliente}
                  onChange={(e) => setEmailCliente(e.target.value)}
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="telefone-cliente">Telefone</Label>
                <Input
                  id="telefone-cliente"
                  type="tel"
                  value={telefoneCliente}
                  onChange={(e) => setTelefoneCliente(e.target.value)}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <Label htmlFor="senha-cliente">Senha</Label>
                <Input
                  id="senha-cliente"
                  type="password"
                  value={senhaCliente}
                  onChange={(e) => setSenhaCliente(e.target.value)}
                  placeholder="••••••••"
                />
              </div>

              <Button type="submit" className="w-full">
                Cadastrar como Cliente
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="restaurante">
            <form onSubmit={handleCadastroRestaurante} className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <Label htmlFor="nome-restaurante">Nome do Restaurante</Label>
                <Input
                  id="nome-restaurante"
                  type="text"
                  value={nomeRestaurante}
                  onChange={(e) => setNomeRestaurante(e.target.value)}
                  placeholder="Nome do estabelecimento"
                />
              </div>

              <div>
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input
                  id="cnpj"
                  type="text"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                  placeholder="00.000.000/0000-00"
                />
              </div>

              <div>
                <Label htmlFor="categoria">Categoria</Label>
                <Input
                  id="categoria"
                  type="text"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  placeholder="Ex: Italiana, Japonesa, Hamburgueria"
                />
              </div>

              <div>
                <Label htmlFor="endereco">Endereço</Label>
                <Input
                  id="endereco"
                  type="text"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  placeholder="Rua, número, bairro"
                />
              </div>

              <div>
                <Label htmlFor="email-restaurante">Email</Label>
                <Input
                  id="email-restaurante"
                  type="email"
                  value={emailRestaurante}
                  onChange={(e) => setEmailRestaurante(e.target.value)}
                  placeholder="restaurante@email.com"
                />
              </div>

              <div>
                <Label htmlFor="telefone-restaurante">Telefone</Label>
                <Input
                  id="telefone-restaurante"
                  type="tel"
                  value={telefoneRestaurante}
                  onChange={(e) => setTelefoneRestaurante(e.target.value)}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <Label htmlFor="senha-restaurante">Senha</Label>
                <Input
                  id="senha-restaurante"
                  type="password"
                  value={senhaRestaurante}
                  onChange={(e) => setSenhaRestaurante(e.target.value)}
                  placeholder="••••••••"
                />
              </div>

              <Button type="submit" className="w-full">
                Cadastrar Restaurante
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="entregador">
            <form onSubmit={handleCadastroEntregador} className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <Label htmlFor="nome-entregador">Nome Completo</Label>
                <Input
                  id="nome-entregador"
                  type="text"
                  value={nomeEntregador}
                  onChange={(e) => setNomeEntregador(e.target.value)}
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
                <Label htmlFor="email-entregador">Email</Label>
                <Input
                  id="email-entregador"
                  type="email"
                  value={emailEntregador}
                  onChange={(e) => setEmailEntregador(e.target.value)}
                  placeholder="entregador@email.com"
                />
              </div>

              <div>
                <Label htmlFor="telefone-entregador">Telefone</Label>
                <Input
                  id="telefone-entregador"
                  type="tel"
                  value={telefoneEntregador}
                  onChange={(e) => setTelefoneEntregador(e.target.value)}
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
                <Label htmlFor="senha-entregador">Senha</Label>
                <Input
                  id="senha-entregador"
                  type="password"
                  value={senhaEntregador}
                  onChange={(e) => setSenhaEntregador(e.target.value)}
                  placeholder="••••••••"
                />
              </div>

              <Button type="submit" className="w-full">
                Cadastrar como Entregador
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Cadastro;
