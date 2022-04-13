const express = require('express');
const { addUser, getUsers } = require('../services/usuarioService');

const router = express.Router();

router.post('/usuario', addUser);
router.get('/usuario', getUsers);

module.exports = router;