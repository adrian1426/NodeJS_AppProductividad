const express = require('express');
const {addTarea,getTarea}=require('../services/tareaService');

const router = express.Router();

router.post('/tarea', addTarea);
router.get('/tarea', getTarea);

module.exports = router;