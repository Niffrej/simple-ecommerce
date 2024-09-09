const express = require('express');
const { addReview, getProductReviews } = require('../controllers/reviewController');
const { protect } = require('../../../middleware/authMiddleware');

const router = express.Router();

// Adicionar uma avaliação (rota protegida)
router.post('/:productId', protect, addReview);

// Listar avaliações de um produto
router.get('/:productId', getProductReviews);

module.exports = router;
