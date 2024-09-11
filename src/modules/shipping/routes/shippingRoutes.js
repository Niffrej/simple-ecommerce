const express = require('express');
const router = express.Router();
const { calcularFreteController } = require('../controllers/shippingController');

// Rota para calcular o frete
router.post('/calcular-frete', calcularFreteController);

module.exports = router;
