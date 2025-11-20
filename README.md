🍽️ Sistema de Delivery – Projeto Acadêmico

▶ Sobre o projeto

Este projeto tem como objetivo desenvolver um sistema de delivery inspirado no iFood, onde clientes podem visualizar restaurantes, montar pedidos e acompanhar o status, enquanto restaurantes e entregadores possuem áreas próprias para gerenciamento.

O sistema possui autenticação e perfis distintos de acesso:

- Cliente
- Restaurante
- Entregador
- Administrador (Super Admin)

▶ Tecnologias Utilizadas

➜ Backend
- Node.js
- Express
- MySQL
- CORS

➜ Frontend
- React
- Vite
- JavaScript
- HTML
- CSS
- TailwindCSS

▶ Modelagem do Banco de Dados

O banco de dados reflete a estrutura básica de funcionamento de um sistema de delivery real, contendo:

- Cliente
- Restaurante
- Entregador
- Item de Cardápio
- Pedido
- Itens dentro do Pedido
- Usuário para login e autenticação

▶ Tabelas

➜ Cliente
| Campo        | Tipo         |
|-------------|--------------|
| id cliente  | INT          |
| nome        | VARCHAR      |
| telefone    | VARCHAR      |
| endereço    | VARCHAR      |
| cpf         | CHAR         |

➜ Restaurante
| Campo          | Tipo     |
|----------------|----------|
| id restaurante | INT      |
| nome           | VARCHAR  |
| tipo cozinha   | VARCHAR  |
| telefone       | VARCHAR  |
| endereço       | VARCHAR  |
| cnpj           | CHAR     |

➜ Entregador
| Campo         | Tipo     |
|---------------|----------|
| id entregador | INT      |
| nome          | VARCHAR  |
| telefone      | VARCHAR  |
| cpf           | CHAR     |
| veículo       | VARCHAR  |
| placa         | CHAR     |
| disponível    | BOOLEAN  |

➜ Pedido
| Campo          | Tipo                                           |
|----------------|------------------------------------------------|
| id pedido      | INT                                            |
| id cliente     | FK                                             |
| id restaurante | FK                                             |
| id entregador  | FK                                             |
| data/hora      | DATETIME                                       |
| status         | ENUM("Em preparo", "A caminho", "Entregue")    |
| valor total    | DECIMAL                                        |

➜ Item
| Campo         | Tipo      |
|---------------|-----------|
| ItemID        | INT       |
| RestauranteID | FK        |
| nome          | VARCHAR   |
| descricao     | VARCHAR   |
| preco         | DECIMAL   |

➜ ItemPedido
| Campo          | Tipo    |
|----------------|---------|
| ItemPedidoID   | INT     |
| ItemID         | FK      |
| PedidoID       | FK      |
| quantidade     | INT     |
| preco_unitario | DECIMAL |

▶ Triggers implementados

- Atualização automática do valor total do pedido
- Alteração automática da disponibilidade do entregador
- Criação automática de usuário ao cadastrar Cliente, Restaurante ou Entregador

▶ Funcionalidades do Sistema

➜ Cliente

- Ver todos os restaurantes (com fotos)
- Acessar e editar seu perfil (exceto CPF)
- Adicionar itens ao carrinho
- Alterar quantidade de itens
- Remover itens
- Finalizar pedido (pagamento simulado)
- Visualizar histórico de pedidos

➜ Restaurante

- Ver e gerenciar seu cardápio
- Adicionar, editar e excluir itens
- Atualizar perfil (exceto CNPJ)
- Visualizar pedidos recebidos
- Atualizar status do pedido
- Selecionar um entregador disponível para o pedido

➜ Entregador

- Página de perfil (alteração exceto CPF)
- Lista de pedidos vinculados ao seu ID
- Disponibilidade controlada automaticamente pelo sistema

➜ Super Administrador (Painel Geral)

- Pode visualizar tudo
- Pode editar ou excluir qualquer registro
- Pode gerenciar usuários, restaurantes, entregadores e pedidos

▶ Endpoints da API

A API segue uma arquitetura REST organizada por entidades:

/cliente
/restaurante
/entregador
/pedido
/item
/item_pedido
/usuario

➜ Cada rota oferece métodos de:
- GET
- POST
- PUT
- DELETE

O arquivo api.js concentra todas as chamadas ao backend utilizando fetch.

▶ Estrutura — Arquivo api.js

O arquivo inclui funções como:

- criarCliente()
- listarTodosRestaurantes()
- buscarUsuarioPorLoginSenha()
- criarItemPedido()
- atualizarStatusPedido()
e dezenas de outras.

Cada função se conecta com a API Node.js para manipular os dados no MySQL.

▶ Banco de Dados

O banco pode ser criado executando o script SQL completo presente no projeto, contendo:
- Criação das tabelas
- Relacionamentos
- Triggers

▶ Interface

A interface foi desenvolvida em React + Vite, com foco em:
- Simplicidade
- Clareza
- Boa visualização da navegação
- Telas específicas para cada tipo de usuário

▶ Instalação
1️) Clonar o repositório
git clone https://github.com/viviancarvalho/amb-dados-av2

2️) Instalar dependências (backend)
cd backend
npm install

3️) Instalar dependências (frontend)
cd frontend
npm install

4️) Configurar MySQL
Execute no MySQL:

CREATE DATABASE sistema_delivery;

E depois importe o script completo disponível no projeto.

5️) Rodar servidor backend
node index.js

6️) Rodar frontend
npm run dev

▶ Autores
Projeto acadêmico desenvolvido por:

- Vivian Carvalho de Abreu Matos
- Guilherme Abrunheiro de Souza
