const tareaModel = require('../models/tareaModel');

const addTarea=(req,res)=>{
    const tarea= tareaModel(req.body);

    tarea.save()
    .then(() => res.status(201).json(tarea))
    .catch(err => res.status(400).json({ error: err }));
};

const getTareaByUserId=(req,res)=>{
    const {idUsuario}=req.params;
    const {titulo,idStatus,idTiempo,limit,skip}=req.query;

    const queryLimit = Number(limit) || 10;
    const querySkip = Number(skip) || 0;
    
    tareaModel.find({
        usuario:idUsuario,
        $or:[
            { titulo: new RegExp(titulo, 'i') }
        ]
    })
    .populate('usuario',{nombre:1})
    .skip(querySkip)
    .limit(queryLimit)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ error: err }));
};

module.exports={
    addTarea,
    getTareaByUserId
};