import React from "react";
import { useNavigate } from "react-router-dom";

const LoginSuper = () => {
  const navigate = useNavigate();

  // Redireciona para o login único
  React.useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return null;
};

export default LoginSuper;
