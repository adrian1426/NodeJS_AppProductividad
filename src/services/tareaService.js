const addTarea=(req,res)=>{
    return res.send('aAgregar tarea');
};

const getTarea=(req,res)=>{
    return res.send('listaar tareas');
};

module.exports={
    addTarea,
    getTarea
};