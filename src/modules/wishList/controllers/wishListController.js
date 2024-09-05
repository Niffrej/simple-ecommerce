const Wishlist = require('../models/wishList');

// Adicionar produto à wishlist
const addProductToWishlist = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user._id;

  let wishlist = await Wishlist.findOne({ user: userId });

  if (!wishlist) {
    wishlist = new Wishlist({ user: userId, products: [productId] });
  } else {
    if (wishlist.products.includes(productId)) {
      return res.status(400).json({ message: 'Produto já está na wishlist.' });
    }
    wishlist.products.push(productId);
  }

  await wishlist.save();
  res.status(201).json(wishlist);
};

// Remover produto da wishlist
const removeProductFromWishlist = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user._id;

  let wishlist = await Wishlist.findOne({ user: userId });

  if (wishlist && wishlist.products.includes(productId)) {
    wishlist.products.pull(productId);
    await wishlist.save();
    return res.status(200).json(wishlist);
  } else {
    return res.status(404).json({ message: 'Produto não encontrado na wishlist.' });
  }
};

module.exports = {
  addProductToWishlist,
  removeProductFromWishlist,
};
