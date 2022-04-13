const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { port } = require('./constants');

//inicializando servidor
const app = express();
app.set('port', process.env.PORT || port);

//Conexion a BD
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Exito: Conectado a base de datos');
  })
  .catch(err => {
    console.log('Error: ', err);
  });
//End Conexion a BD

app.listen(port, () => {
  console.log(`Server listening on port:  ${app.get('port')}`);
});