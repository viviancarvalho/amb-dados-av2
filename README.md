# DeliveryFlow – Sistema de Gestão de Delivery

**Plataforma completa para gerenciamento de clientes, pedidos, restaurantes parceiros e status de entregas.**

O DeliveryFlow é um sistema full-stack desenvolvido para oferecer uma solução prática e eficiente de administração de delivery. Este projeto foi criado como entrega acadêmica da disciplina de Ambiente de Dados.

---

## 🛠 Tecnologias Utilizadas

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **MySQL** - Banco de dados relacional
- **CORS** - Middleware para comunicação entre frontend e backend
- **mysql2** - Driver MySQL para Node.js

### Frontend
- **React** - Biblioteca para interface de usuário
- **Vite** - Ferramenta de build e desenvolvimento
- **JavaScript** - Linguagem de programação
- **TypeScript** - Superset JavaScript com tipagem estática
- **HTML** - Estruturação de páginas web
- **CSS** - Estilização
- **TailwindCSS** - Framework CSS utilitário

---

## Pré-requisitos

Antes de iniciar o projeto, certifique-se de que o seu ambiente atende aos seguintes requisitos:

- **Node.js 18 ou superior**  
  Verifique sua versão com:
  ```bash
  node -v
  ```

- **NPM**
  ```bash
  npm -v
  ```

- **Git** instalado (recomendado para clonar o repositório)
- **VsCode** (ou outro editor de código de sua preferência)
- **MySQL Server**
- **MySQL Workbench**

> **Nota:** Para que o projeto funcione corretamente, é necessário criar o banco de dados. Esse procedimento será explicado na próxima seção.

---

## Instalação e Execução do Projeto

Siga os passos abaixo para instalar, configurar e executar o sistema DeliveryFlow no seu computador.

### 1. Clonar o repositório

Abra o terminal (CMD, PowerShell ou Bash) e execute:

```bash
git clone https://github.com/seu-usuario/deliveryflow-system.git
```

Entre na pasta do projeto:

```bash
cd deliveryflow-system
```

### 2. Configurar o Banco de Dados

Certifique-se de que o MySQL Server está instalado e ativo.

1. Abra o **MySQL Workbench**
2. Vá até a pasta `/database` do projeto
3. Abra o arquivo `script_criacao_bd.sql`
4. Execute todo o script no ícone de raio ⚡
5. Isso criará todas as tabelas necessárias e inserirá dados iniciais

### 3. Configurar o Backend

Certifique-se de que o banco foi criado corretamente antes de iniciar o backend.

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Configure as credenciais de banco de dados no arquivo `db.js` (geralmente na pasta `config`):

```javascript
const db = mysql2.createPool({
    host: "localhost",
    user: "root", 
    password: "sua_senha_aqui",
    database: "sistema_delivery",
});
```

Inicie o servidor:

```bash
npm run dev
```

O backend rodará por padrão em: **http://localhost:3000**

### 4. Configurar o Frontend

Em outro terminal, entre na pasta frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o frontend:

```bash
npm run dev
```

O frontend rodará por padrão em: **http://localhost:5173**

Copie e cole esse endereço no navegador, ou aperte `Ctrl + Click` no link que aparecerá no terminal.

> **Importante:** É necessário manter os dois terminais rodando simultaneamente, pois o frontend depende da API para funcionar. Certifique-se de que o backend continua ativo.

---

## Funcionalidades do Sistema

- **Gestão de Clientes** - Cadastro e controle de clientes
- **Restaurantes Parceiros** - Administração de estabelecimentos
- **Controle de Pedidos** - Registro completo de pedidos
- **Status de Entrega** - Acompanhamento em tempo real (em preparo, a caminho, entregue)
- **Itens do Pedido** - Gestão detalhada dos produtos solicitados

---

## Autoria

Vivian Carvalho de Abreu Matos
Guilherme Abrunheiro de Souza
4º Semestre – Ciência da Computação  
Universidade de Fortaleza - UNIFOR

---

## Licença

Projeto produzido exclusivamente para fins acadêmicos.
