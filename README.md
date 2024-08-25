markdown
Copiar código
# Simple E-commerce API

## Introdução
Esta API oferece funcionalidades básicas para um sistema de e-commerce, permitindo operações de CRUD (Create, Read, Update, Delete) em produtos, além de gerenciar pedidos e usuários.

## Endpoints

### 1. Autenticação

#### Registrar Usuário
- **URL:** `/api/auth/register`
- **Método:** `POST`
- **Descrição:** Cria um novo usuário.
- **Corpo da Requisição:**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
#### Resposta:
  ```json
{
  "message": "User registered successfully."
}

