const express = require('express');
const { createOrder, getMyOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Rota para criar um novo pedido
router.post('/', protect, createOrder);

// Rota para obter pedidos do usuário logado
router.get('/myorders', protect, getMyOrders);

module.exports = router;
