const { skipDefault, limitDefault, idStatusAll, tiempo1, tiempo2, tiempo3 } = require('../constants');
const tareaModel = require('../models/tareaModel');

const addTarea = (req, res) => {
    const tarea = tareaModel(req.body);

    tarea.save()
        .then(() => res.status(201).json(tarea))
        .catch(err => res.status(400).json({ error: err }));
};

const getTareaByUserId = (req, res) => {
    const { idUsuario } = req.params;
    const { titulo, idStatus, idTiempo, limit, skip } = req.query;

    const queryLimit = Number(limit) || limitDefault;
    const querySkip = Number(skip) || skipDefault;

    const filEstatusId = Number(idStatus) !== idStatusAll && { "estatus.id": idStatus };
    const filTiempoProg = Number(idTiempo) === tiempo1.id ? { "tiempo.programado": { $gt: tiempo1.rangeStart, $lt: tiempo1.ramgeFinal } }
        : Number(idTiempo) === tiempo2.id ? { "tiempo.programado": { $gt: tiempo2.rangeStart, $lt: tiempo2.ramgeFinal } }
            : Number(idTiempo) === tiempo3.id ? { "tiempo.programado": { $gt: tiempo3.rangeStart, $lt: tiempo3.ramgeFinal } }
                : {};

    const objFilter = {
        ...filEstatusId,
        ...filTiempoProg
    };

    tareaModel.find({
        usuario: idUsuario,
        ...objFilter,
        $or: [
            { titulo: new RegExp(titulo, 'i') }
        ]
    })
        .populate('usuario', { nombre: 1 })
        .skip(querySkip)
        .limit(queryLimit)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ error: err }));
};

module.exports = {
    addTarea,
    getTareaByUserId
};