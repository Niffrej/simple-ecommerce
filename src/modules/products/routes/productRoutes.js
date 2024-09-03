const express = require('express');
const {
  getProducts,
  getProductById,
  createProduct,
} = require('../controllers/productController');

const router = express.Router();

// Rota para obter todos os produtos
router.get('/', getProducts);

// Rota para obter um produto por ID
router.get('/:id', getProductById);

// Rota para criar um novo produto
router.post('/', createProduct);

module.exports = router;
