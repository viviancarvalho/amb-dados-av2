◆ Sistema de Delivery – Projeto Acadêmico  
► Sobre o Projeto  

Este projeto tem como objetivo desenvolver um sistema de delivery inspirado no iFood, onde clientes podem visualizar restaurantes, montar pedidos e acompanhar o status, enquanto restaurantes e entregadores possuem suas próprias áreas de gerenciamento.  

Possui autenticação e perfis distintos:  
  
- Cliente  
- Restaurante  
- Entregador  
- Administrador (Super Admin)  

► Tecnologias Utilizadas  

◆ Backend  

- Node.js  
- Express  
- MySQL  
- CORS  

◆ Frontend  
  
- React  
- Vite  
- JavaScript  
- HTML  
- CSS  
- TailwindCSS  

► Modelagem do Banco de Dados  

O banco reflete a estrutura de um sistema de delivery real, com entidades:  
- Cliente  
- Restaurante  
- Entregador  
- Item  
- Pedido  
- ItemPedido  
- Usuário (para login e autenticação)  

► Tabelas  

◆ Cliente
| Campo        | Tipo    |
|--------------|---------|
| id cliente   | INT     |
| nome         | VARCHAR |
| telefone     | VARCHAR |
| endereço     | VARCHAR |
| cpf          | CHAR    |

◆ Restaurante
| Campo          | Tipo    |
|----------------|---------|
| id restaurante | INT     |
| nome           | VARCHAR |
| tipo cozinha   | VARCHAR |
| telefone       | VARCHAR |
| endereço       | VARCHAR |
| cnpj           | CHAR    |

◆ Entregador
| Campo         | Tipo     |
|---------------|----------|
| id entregador | INT      |
| nome          | VARCHAR  |
| telefone      | VARCHAR  |
| cpf           | CHAR     |
| veículo       | VARCHAR  |
| placa         | CHAR     |
| disponível    | BOOLEAN  |

◆ Pedido
| Campo          | Tipo                                        |
|----------------|---------------------------------------------|
| id pedido      | INT                                         |
| id cliente     | FK                                          |
| id restaurante | FK                                          |
| id entregador  | FK                                          |
| data/hora      | DATETIME                                    |
| status         | ENUM("Em preparo", "A caminho", "Entregue") |
| valor total    | DECIMAL                                     |

◆ Item (Cardápio)
| Campo         | Tipo    |
|---------------|---------|
| ItemID        | INT     |
| RestauranteID | FK      |
| nome          | VARCHAR |
| descricao     | VARCHAR |
| preco         | DECIMAL |

◆ ItemPedido
| Campo          | Tipo    |
|----------------|---------|
| ItemPedidoID   | INT     |
| ItemID         | FK      |
| PedidoID       | FK      |
| quantidade     | INT     |
| preco_unitario | DECIMAL |

► Triggers Implementados  

- Atualiza automaticamente o valor total do pedido  
- Altera automaticamente a disponibilidade do entregador  

Cria automaticamente um usuário ao cadastrar:  
- Cliente  
- Restaurante  
- Entregador  

► Funcionalidades  
  
◆ Cliente  
- Ver lista de restaurantes  
- Editar perfil (exceto CPF)  
- Adicionar itens ao carrinho  
- Atualizar quantidade  
- Remover itens  
- Finalizar compra  
- Ver histórico de pedidos  

▣ Restaurante  
- Gerenciar cardápio (CRUD)  
- Editar perfil (exceto CNPJ)  
- Visualizar pedidos recebidos  
- Atualizar status  
- Escolher entregador disponível  

◆ Entregador  
- Editar perfil (exceto CPF)  
- Ver pedidos vinculados  
- Disponibilidade controlada automaticamente  

◆ Super Administrador  
- Visualiza tudo  
- Pode editar ou remover qualquer registro  
- Gerencia restaurantes, clientes, entregadores e pedidos  


► Endpoints da API  

Organização REST por entidade:  
/cliente  
/restaurante  
/entregador  
/pedido  
/item  
/item_pedido  
/usuario  

Cada rota possui métodos:  
- GET  
- POST  
- PUT  
- DELETE  

► Arquivo api.js  

Contém funções como:  
- criarCliente()  
- listarTodosRestaurantes()  
- buscarUsuarioPorLoginSenha()  
- criarItemPedido()  
- atualizarStatusPedido()  
  
Cada função realiza uma chamada fetch para o backend Node.js que manipula o MySQL.  
  
► Banco de Dados  
Pode ser criado executando o script SQL que acompanha o projeto, contendo:  
- Criação das tabelas  
- Relacionamentos  
- Triggers  
  
► Interface  
  
Criada com React, com foco em:  
- Navegação clara  
- Layout simples  
- Telas específicas por tipo de usuário  
  
► Instalação  
1) Clonar repositório  
git clone https://github.com/viviancarvalho/amb-dados-av2  
  
2) Instalar dependências do backend  
cd backend  
npm install  
  
4) Instalar dependências do frontend  
cd frontend  
npm install  
  
5) Configurar MySQL:  

- No MySQL:  
  CREATE DATABASE sistema_delivery;  
  Depois importe o script SQL completo do projeto.  
  
5) Rodar servidor backend  
node index.js  
  
6) Rodar frontend  
npm run dev  
  
► Autores  
Vivian Carvalho de Abreu Matos  
Guilherme Abrunheiro de Souza  
