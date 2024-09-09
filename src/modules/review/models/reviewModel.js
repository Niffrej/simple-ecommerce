const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product', // Referência ao modelo de produto
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Referência ao modelo de usuário
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5, // Classificação de 1 a 5 estrelas
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'], // O comentário é obrigatório
    },
  },
  {
    timestamps: true, // Adiciona data de criação e atualização automaticamente
  }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
