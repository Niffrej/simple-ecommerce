const express = require('express');
const { registerUser, authUser } = require('../controllers/authcontroller');

const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', registerUser);

// Rota para autenticar um usuário (login)
router.post('/login', authUser);

module.exports = router;
