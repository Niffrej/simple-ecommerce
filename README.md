
## Instalação


#### Siga estas etapas para configurar o projeto localmente:

1- Clone o repositório:

```http
  git clone https://github.com/Niffrej/simple-ecommerce.git
```



2- Instale as dependências:
```http
  npm install
```

3- Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto com as seguintes informações:

```bash
  MONGO_URI=<sua-string-de-conexão-mongodb>
  JWT_SECRET=<sua-chave-secreta>
```

4- Inicie o servidor: 
```http
  npm start
```

# Endpoints da API

## Autenticação

### Registrar Usuário

  - POST /auth/register
     - Registra um novo usuário.
     - Body:

```http
        {
        "name": "Nome",
        "email": "email@example.com",
        "password": "senha"
        }
```

### Login de Usuário

 - POST /auth/login
   - Faz login de um usuário registrado.
   - Body: 

```http
     {
        "email": "email@example.com",
        "password": "senha"
     }
```

### Registrar Usuário

  - POST /auth/register
     - Registra um novo usuário.
     - Body:

```http
        {
        "name": "Nome",
        "email": "email@example.com",
        "password": "senha"
        }
```

## Produtos

### Listar Produtos

 - GET /products
   - Retorna todos os produtos cadastrados.

### Detalhes do Produto 

 - Detalhes do Produto
   - Retorna os detalhes de um produto específico.

### Criar Produto

 - POST /products
   - Cria um novo produto.
   - Body: 

```http
    {
        "name": "Nome do produto",
        "description": "Descrição do produto",
        "price": 100.00,
        "stock": 50,
        "image": "url-da-imagem"
    }
```

## Pedidos

### Criar Pedido 

  - POST /orders
     - Cria um novo pedido.
     - Body:

```http
        {
            "userId": "ID do usuário",
            "items": [
                {
                "productId": "ID do produto",
                "quantity": 2
                }
            ],
            "total": 200.00
        }
```

### Ver Pedidos do Usuário

- GET /orders/user/:userId
  - Retorna todos os pedidos de um usuário específico.

## Carrinho de Compras

### Adicionar Produto ao Carrinho

 - POST /cart
   - Adiciona um produto ao carrinho.
   - Body: 

```http
        {
            "userId": "ID do usuário",
            "productId": "ID do produto",
            "quantity": 1
        }
```

### Visualizar Carrinho do Usuário

 - GET /cart/:userId
   - Retorna os itens do carrinho de um usuário específico.

## WishList

## Adicionar Produto à Wishlist

 - POST /wishlist
   - Adiciona um produto à lista de desejos.
   - Body: 

   ```http
        {
            "userId": "ID do usuário",
            "productId": "ID do produto"
        }
    ```

### Ver Wishlist do Usuário

 - GET /wishlist/:userId
   - Retorna a lista de desejos de um usuário específico.

## Avaliações e Reviews

### Adicionar Review ao Produto

 - POST /reviews
   - Adiciona uma avaliação ao produto.
   - Body:

   ```http
       {
        "userId": "ID do usuário",
        "productId": "ID do produto",
        "rating": 4,
        "comment": "Ótimo produto!"
        }
    ```

 ### Ver Reviews de um Produto
 
    - GET /reviews/:productId
    - Retorna todas as avaliações de um produto específico.

## ViaCEP

### Consultar CEP

- GET /cep/:cep
  - Retorna informações do CEP utilizando a API do ViaCEP.

## Estrutura do Projeto
 ```bash 
      ├── config/            # Configurações da aplicação
      ├── middleware/        # Middlewares como autenticação
      ├── modules/           # Módulos da aplicação (users, products, orders, etc)
      ├── routes/            # Definição das rotas da API
      └── server.js          # Ponto de entrada da aplicação
```
