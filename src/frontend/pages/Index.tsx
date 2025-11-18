import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !senha) {
      toast.error("Preencha todos os campos");
      return;
    }

    // Simulação de login
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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            Sistema de Delivery
          </h1>
          <p className="text-muted-foreground">
            Entre com sua conta
          </p>
        </div>

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

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-3">Não tem conta?</p>
          <Link to="/cadastro">
            <Button variant="outline" className="w-full">
              Criar Conta
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Index;
