const express = require('express');
const router = express.Router();
const { protect } = require('../../../middleware/authMiddleware');
const { addProductToWishlist, removeProductFromWishlist } = require('../controllers/wishListController');

router.post('/add', protect, addProductToWishlist);
router.delete('/remove', protect, removeProductFromWishlist);

module.exports = router;
