const { calcularFrete } = require('../services/shippingService');

// Controller para calcular o frete
async function calcularFreteController(req, res) {
  const { cepOrigem, cepDestino, peso } = req.body;
  try {
    const resultadoFrete = await calcularFrete(cepOrigem, cepDestino, peso);
    res.json(resultadoFrete);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  calcularFreteController,
};
