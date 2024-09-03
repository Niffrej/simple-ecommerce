const express = require('express');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/modules/auth/routes/authRoutes');
const productRoutes = require('./src/modules/products/routes/productRoutes');
const orderRoutes = require('./src/modules/orders/routes/orderRoutes');
const cors = require('cors'); // Importação do CORS

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware para interpretar JSON
app.use(express.json());

// Configurações do CORS
app.use(cors({
  origin: 'http://localhost:3000', // Permite requisições do front-end em localhost:3000
  methods: 'GET,POST,PUT,DELETE',
}));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
