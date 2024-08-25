# Simple E-commerce

Este projeto é uma aplicação de e-commerce simples construída com Node.js e MongoDB. O objetivo principal é fornecer um exemplo básico de uma API RESTful para operações CRUD em um e-commerce, incluindo funcionalidades para gerenciamento de produtos, usuários e pedidos.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para back-end.
- **Express.js**: Framework para criação da API.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar os dados.
- **Mongoose**: Biblioteca ODM para modelagem de dados no MongoDB.
- **JWT (JSON Web Tokens)**: Autenticação e autorização de usuários.
- **BCrypt**: Criptografia de senhas.

## Funcionalidades

- **CRUD de Produtos**: Criação, leitura, atualização e exclusão de produtos.
- **CRUD de Usuários**: Criação, leitura, atualização e exclusão de usuários.
- **Autenticação de Usuários**: Registro, login e logout utilizando JWT.
- **Gestão de Pedidos**: Criação e gerenciamento de pedidos de compra.

## Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Compass](https://www.mongodb.com/products/compass) (opcional para visualização do banco de dados)

## Configuração do Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Niffrej/simple-ecommerce.git
   cd simple-ecommerce

2. Instale as dependências:

 - npm install

 3. Configuração do MongoDB:

 No arquivo .env, configure a conexão com seu banco de dados MongoDB. Por exemplo:

 MONGODB_URI=mongodb://localhost:27017/simple-ecommerce
JWT_SECRET=sua_chave_secreta

4. Execute a aplicação:

 - npm start

 A aplicação estará rodando em `http://localhost:3000`

# Endpoints da API

### Autenticação
* POST /api/register: Registro de um novo usuário.
* POST /api/login: Autenticação de um usuário.
* POST /api/logout: Logout do usuário autenticado.

### Produtos
* GET /api/products: Lista todos os produtos.
* GET /api/products/
: Detalhes de um produto específico.
* POST /api/products: Cria um novo produto.
* PUT /api/products/
: Atualiza um produto existente.
* DELETE /api/products/
: Remove um produto.

### Usuários
* GET /api/users: Lista todos os usuários.
* GET /api/users/
: Detalhes de um usuário específico.
* PUT /api/users/
: Atualiza um usuário existente.
* DELETE /api/users/
: Remove um usuário.

### Pedidos
* GET /api/orders: Lista todos os pedidos.
* GET /api/orders/
: Detalhes de um pedido específico.
* POST /api/orders: Cria um novo pedido.
* PUT /api/orders/
: Atualiza um pedido existente.
* DELETE /api/orders/
: Remove um pedido.

### Conclusão
Essa API fornece uma base para gerenciar um e-commerce simples, permitindo a criação, atualização, leitura e exclusão de produtos, pedidos e usuários. A autenticação baseada em tokens garante que apenas usuários autorizados possam realizar operações sensíveis.