const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
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

//enable cors
app.use(cors());

//permite content json
app.use(express.json());

//middleware
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server listening on port:  ${app.get('port')}`);
});
