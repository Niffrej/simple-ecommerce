const axios = require('axios');

const viaCepApiUrl = 'https://viacep.com.br/ws';

// Função para buscar endereço pelo CEP
async function getAddressByZipCode(zipCode) {
  try {
    const response = await axios.get(`${viaCepApiUrl}/${zipCode}/json`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar o endereço: ' + error.message);
  }
}

module.exports = {
  getAddressByZipCode,
};
