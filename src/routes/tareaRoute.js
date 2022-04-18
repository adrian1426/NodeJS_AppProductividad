const express = require('express');
const {addTarea,getTareaByUserId}=require('../services/tareaService');

const router = express.Router();

router.post('/tarea', addTarea);
router.get('/tarea/:idUsuario', getTareaByUserId);

module.exports = router;