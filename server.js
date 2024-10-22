const express = require('express');
const connectDB = require('./src/config/db');
const cors = require('cors');
const authRoutes = require('./src/modules/auth/routes/authRoutes');
const productRoutes = require('./src/modules/products/routes/productRoutes');
const orderRoutes = require('./src/modules/orders/routes/orderRoutes');
const cartRoutes = require('./src/modules/cart/routes/cartRoutes');
const wishlistRoutes = require('./src/modules/wishList/routes/wishListRoutes');
const reviewRoutes = require('./src/modules/reviews/routes/reviewRoutes');
const shippingRoutes = require('./src/modules/shipping/routes/shippingRoutes');

const app = express();

const corsOptions = {
  origin: 'https://simple-ecommerce-p704.onrender.com',
  optionsSuccessStatus: 200
};

connectDB();

app.use(express.json());
app.use(cors(corsOptions));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/frete', shippingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
