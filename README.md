Documentação da API - Simple E-commerce
Introdução
Esta documentação descreve a API para um e-commerce simples. A API permite realizar operações de CRUD (Create, Read, Update, Delete) em produtos, além de gerenciar pedidos e usuários.

Endpoints
1. Autenticação
Registrar Usuário
URL: /api/auth/register
Método: POST
Descrição: Cria um novo usuário.
Corpo da Requisição:
json
Copiar código
{
  "name": "string",
  "email": "string",
  "password": "string"
}
Resposta:
json
Copiar código
{
  "message": "User registered successfully."
}
Login do Usuário
URL: /api/auth/login
Método: POST
Descrição: Realiza login do usuário e retorna um token de autenticação.
Corpo da Requisição:
json
Copiar código
{
  "email": "string",
  "password": "string"
}
Resposta:
json
Copiar código
{
  "token": "string",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  }
}
2. Produtos
Listar Produtos
URL: /api/products
Método: GET
Descrição: Retorna uma lista de produtos.
Resposta:
json
Copiar código
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "price": "number",
    "stock": "number",
    "category": "string"
  }
]
Adicionar Produto
URL: /api/products
Método: POST
Descrição: Adiciona um novo produto.
Cabeçalho:
Authorization: Bearer <token>
Corpo da Requisição:
json
Copiar código
{
  "name": "string",
  "description": "string",
  "price": "number",
  "stock": "number",
  "category": "string"
}
Resposta:
json
Copiar código
{
  "message": "Product added successfully.",
  "product": {
    "id": "string",
    "name": "string",
    "description": "string",
    "price": "number",
    "stock": "number",
    "category": "string"
  }
}
Atualizar Produto
URL: /api/products/:id
Método: PUT
Descrição: Atualiza um produto existente.
Cabeçalho:
Authorization: Bearer <token>
Corpo da Requisição:
json
Copiar código
{
  "name": "string",
  "description": "string",
  "price": "number",
  "stock": "number",
  "category": "string"
}
Resposta:
json
Copiar código
{
  "message": "Product updated successfully.",
  "product": {
    "id": "string",
    "name": "string",
    "description": "string",
    "price": "number",
    "stock": "number",
    "category": "string"
  }
}
Deletar Produto
URL: /api/products/:id
Método: DELETE
Descrição: Remove um produto existente.
Cabeçalho:
Authorization: Bearer <token>
Resposta:
json
Copiar código
{
  "message": "Product deleted successfully."
}
3. Pedidos
Criar Pedido
URL: /api/orders
Método: POST
Descrição: Cria um novo pedido.
Cabeçalho:
Authorization: Bearer <token>
Corpo da Requisição:
json
Copiar código
{
  "userId": "string",
  "products": [
    {
      "productId": "string",
      "quantity": "number"
    }
  ],
  "total": "number"
}
Resposta:
json
Copiar código
{
  "message": "Order placed successfully.",
  "order": {
    "id": "string",
    "userId": "string",
    "products": [
      {
        "productId": "string",
        "quantity": "number"
      }
    ],
    "total": "number",
    "status": "string",
    "createdAt": "string"
  }
}
Listar Pedidos
URL: /api/orders
Método: GET
Descrição: Retorna uma lista de pedidos.
Cabeçalho:
Authorization: Bearer <token>
Resposta:
json
Copiar código
[
  {
    "id": "string",
    "userId": "string",
    "products": [
      {
        "productId": "string",
        "quantity": "number"
      }
    ],
    "total": "number",
    "status": "string",
    "createdAt": "string"
  }
]
4. Usuários
Listar Usuários
URL: /api/users
Método: GET
Descrição: Retorna uma lista de usuários cadastrados.
Cabeçalho:
Authorization: Bearer <token>
Resposta:
json
Copiar código
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "createdAt": "string"
  }
]
Atualizar Usuário
URL: /api/users/:id
Método: PUT
Descrição: Atualiza as informações de um usuário.
Cabeçalho:
Authorization: Bearer <token>
Corpo da Requisição:
json
Copiar código
{
  "name": "string",
  "email": "string"
}
Resposta:
json
Copiar código
{
  "message": "User updated successfully.",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "createdAt": "string"
  }
}
Deletar Usuário
URL: /api/users/:id
Método: DELETE
Descrição: Remove um usuário existente.
Cabeçalho:
Authorization: Bearer <token>
Resposta:
json
Copiar código
{
  "message": "User deleted successfully."
}
Autenticação
A maioria dos endpoints requer autenticação usando tokens JWT. Após o login, o token deve ser incluído no cabeçalho Authorization como Bearer <token>.

Erros Comuns
401 Unauthorized: Token de autenticação ausente ou inválido.
404 Not Found: Recurso não encontrado.
400 Bad Request: Requisição malformada.
500 Internal Server Error: Erro interno no servidor.
Conclusão
Essa API fornece uma base para gerenciar um e-commerce simples, permitindo a criação, atualização, leitura e exclusão de produtos, pedidos e usuários. A autenticação baseada em tokens garante que apenas usuários autorizados possam realizar operações sensíveis.