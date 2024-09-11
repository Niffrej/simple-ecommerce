const { getAddressByZipCode } = require('../../../integrations/viaCepService');

// Função para calcular o frete com base no peso e na distância (simples)
async function calcularFrete(cepOrigem, cepDestino, peso) {
  try {
    // Buscar os endereços com base nos CEPs
    const enderecoOrigem = await getAddressByZipCode(cepOrigem);
    const enderecoDestino = await getAddressByZipCode(cepDestino);

    if (enderecoOrigem.erro || enderecoDestino.erro) {
      throw new Error('CEP de origem ou destino inválido');
    }

    // Regras de cálculo de distância 
    const distancia = calcularDistancia(enderecoOrigem, enderecoDestino);

    // Regras de cálculo de frete com base no peso 
    const precoBase = 10; // Preço base para frete
    const precoPorKm = 0.50; // Preço por quilômetro
    const precoPorKg = 2; // Preço por quilo

    const precoFrete = precoBase + (precoPorKm * distancia) + (precoPorKg * peso);

    return {
      origem: enderecoOrigem,
      destino: enderecoDestino,
      distancia,
      peso,
      precoFrete: precoFrete.toFixed(2) // Retornar o preço formatado
    };
  } catch (error) {
    throw new Error('Erro ao calcular o frete: ' + error.message);
  }
}

function calcularDistancia(enderecoOrigem, enderecoDestino) {
  const cepOrigem = Number(enderecoOrigem.cep.replace('-', '')); // Remove o hífen do CEP e converte para número
  const cepDestino = Number(enderecoDestino.cep.replace('-', '')); // Remove o hífen do CEP e converte para número

  // Verifica se ambos os valores são números válidos
  if (isNaN(cepOrigem) || isNaN(cepDestino)) {
    throw new Error('Erro ao calcular a distância: CEP inválido.');
  }

  // Calcula a distância de forma simples
  const distanciaSimulada = Math.abs(cepOrigem - cepDestino) / 1000; // Dividindo por 1000 para simular quilômetros
  return distanciaSimulada;
}


module.exports = {
  calcularFrete,
};
