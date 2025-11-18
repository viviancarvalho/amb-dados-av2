import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card } from "../../components/ui/card";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !senha) {
      toast.error("Preencha todos os campos");
      return;
    }

    // Simulação de login - identifica tipo de usuário pelo email
    // Em produção, isso seria feito pelo backend
    if (email === "admin@admin.com" && senha === "admin123") {
      toast.success("Login realizado com sucesso!");
      navigate("/super/dashboard");
    } else if (email.includes("restaurante")) {
      toast.success("Login realizado com sucesso!");
      navigate("/restaurante/dashboard");
    } else if (email.includes("entregador")) {
      toast.success("Login realizado com sucesso!");
      navigate("/entregador/dashboard");
    } else {
      toast.success("Login realizado com sucesso!");
      navigate("/cliente/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Link>
        
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <p className="text-muted-foreground mb-6">
          Entre com sua conta
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
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
            Entrar
          </Button>
        </form>

        <div className="mt-6 space-y-2">
          <p className="text-center text-sm text-muted-foreground">Não tem conta?</p>
          <div className="flex flex-col gap-2">
            <Link to="/cadastro/cliente">
              <Button variant="outline" className="w-full">
                Cadastrar como Cliente
              </Button>
            </Link>
            <Link to="/cadastro/restaurante">
              <Button variant="outline" className="w-full">
                Cadastrar como Restaurante
              </Button>
            </Link>
            <Link to="/cadastro/entregador">
              <Button variant="outline" className="w-full">
                Cadastrar como Entregador
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
