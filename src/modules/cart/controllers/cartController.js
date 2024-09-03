const Cart = require('../models/Cart');
const Product = require('../../products/models/Product');

async function addProductToCart(req, res) {
  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [], totalPrice: 0 });
    }

    const product = await Product.findById(req.body.productId);
    if (!product) throw new Error('Product not found');

    const existingItemIndex = cart.items.findIndex(item => item.product.equals(req.body.productId));

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += req.body.quantity;
    } else {
      cart.items.push({ product: req.body.productId, quantity: req.body.quantity });
    }

    cart.totalPrice = cart.items.reduce((total, item) => total + (item.quantity * product.price), 0);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function removeProductFromCart(req, res) {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) throw new Error('Cart not found');

    cart.items = cart.items.filter(item => !item.product.equals(req.body.productId));
    cart.totalPrice = cart.items.reduce((total, item) => total + (item.quantity * item.product.price), 0);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  addProductToCart,
  removeProductFromCart
};
