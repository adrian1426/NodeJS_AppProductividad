const express = require('express');
const { addTarea, getTareaByUserId, updateTareaById, deleteTareaById } = require('../services/tareaService');

const router = express.Router();

router.post('/tarea', addTarea);
router.get('/tarea/:idUsuario', getTareaByUserId);
router.put('/tarea/:idTarea', updateTareaById);
router.delete('/tarea/:idTarea', deleteTareaById);

module.exports = router;