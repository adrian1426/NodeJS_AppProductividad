const tareaModel = require('../models/tareaModel');

const addTarea=(req,res)=>{
    const tarea= tareaModel(req.body);

    tarea.save()
    .then(() => res.status(201).json(tarea))
    .catch(err => res.status(400).json({ error: err }));
};

const getTarea=(req,res)=>{
    return res.send('listaar tareas');
};

module.exports={
    addTarea,
    getTarea
};