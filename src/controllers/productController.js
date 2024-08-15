const Product = require('../models/Product');

// Obter todos os produtos
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obter um produto por ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Criar um novo produto
exports.createProduct = async (req, res) => {
  const { name, description, price, countInStock, image } = req.body;

  try {
    const product = new Product({
      name,
      description,
      price,
      countInStock,
      image,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
