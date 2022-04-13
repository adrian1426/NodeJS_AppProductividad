const express = require('express');
const mongoose = require('mongoose');
const usuarioRoute = require('./routes/usuarioRoute');
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

//permite content json
app.use(express.json());

//middleware
app.use('/api', usuarioRoute);

app.get('/status', (req, res) => {
  res.send('App listening');
});

app.listen(port, () => {
  console.log(`Server listening on port:  ${app.get('port')}`);
});
