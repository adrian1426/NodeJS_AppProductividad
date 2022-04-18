const mongoose = require('mongoose');

const tarea ={
    titulo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    estatus:{
        id:{
            type: Number,
            required:true
        },
        descripcion:{
            type: String,
            required: true
        }
    },
    tiempo:{
        programado:{
            type: Number,
            required: true
        },
        transcurrido:{
            type: Number,
            required: true
        },
        actual:{
            type: Number,
            required: true
        }
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario'
    },
    createdAt: { 
        type: Date, 
        default: Date.now
    },
    updatedAt: { 
        type: Date, 
        default: Date.now
    }
};

const tareaSchema = mongoose.Schema(tarea);
module.exports = mongoose.model('Tarea', tareaSchema);