const mongoose = require('mongoose');
const connectDB = require('../../config/db'); // Ajuste o caminho conforme necessário

// Mocar o mongoose.connect
jest.mock('mongoose', () => ({
  connect: jest.fn()
}));

describe('Database Connection', () => {
  // Mocar process.exit antes de cada teste
  let mockExit;

  beforeEach(() => {
    mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
  });

  afterEach(() => {
    mockExit.mockRestore(); // Restaurar process.exit após os testes
  });

  it('should connect to MongoDB', async () => {
    // Simular uma conexão bem-sucedida
    mongoose.connect.mockResolvedValueOnce({});

    await connectDB();

    expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGO_URI);
    expect(mongoose.connect).toHaveBeenCalledTimes(1);
  });

  it('should handle connection error', async () => {
    const errorMessage = 'Failed to connect';
    mongoose.connect.mockRejectedValueOnce(new Error(errorMessage));

    // Espiar o console.error para verificar se o erro foi registrado
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await connectDB();

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error connecting to MongoDB:', errorMessage);
    expect(mockExit).toHaveBeenCalledWith(1); // Verifica se o process.exit foi chamado

    // Restaurar o console.error original
    consoleErrorSpy.mockRestore();
  });
});
