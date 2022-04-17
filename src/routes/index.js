const express = require('express');

const statusRoute = require('./statusRoute');
const usuarioRoutea = require('./usuarioRoute');
const tareaRoute=require('./tareaRoute');

const app = express();

app.use('',statusRoute);
app.use('',usuarioRoutea);
app.use('',tareaRoute);

module.exports = app;