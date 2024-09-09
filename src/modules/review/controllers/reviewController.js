const Review = require('../../review/models/reviewModel');
const Product = require('../../products/models/Product');

// Adicionar uma avaliação
const addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const productId = req.params.productId;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const alreadyReviewed = await Review.findOne({
      product: productId,
      user: req.user._id,
    });

    if (alreadyReviewed) {
      return res.status(400).json({ message: 'Product already reviewed' });
    }

    const review = new Review({
      rating,
      comment,
      product: productId,
      user: req.user._id,
    });

    await review.save();

    // Recalcular a nota média do produto
    const reviews = await Review.find({ product: productId });
    product.rating =
      reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;

    await product.save();

    res.status(201).json({ message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Listar avaliações de um produto
const getProductReviews = async (req, res) => {
  const productId = req.params.productId;

  try {
    const reviews = await Review.find({ product: productId }).populate('user', 'name');

    if (!reviews) {
      return res.status(404).json({ message: 'No reviews found' });
    }

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { addReview, getProductReviews };
