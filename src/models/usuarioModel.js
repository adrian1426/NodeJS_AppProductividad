const mongoose = require('mongoose');

const usuario = {
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  }
};

const usuarioSchema = mongoose.Schema(usuario);
module.exports = mongoose.model('Usuario', usuarioSchema);