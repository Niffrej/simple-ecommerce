const express = require('express');
const router = express.Router();
const { protect } = require('../../auth/middlewares/authMiddleware');
const { addProductToCart, removeProductFromCart } = require('../controllers/cartController');

router.post('/add', protect, addProductToCart);
router.delete('/remove', protect, removeProductFromCart);

module.exports = router;
