'use strict';
const mongoose = require('mongoose');

let schema_comentario = new mongoose.Schema(
    {
        
        descripcion_pre : {type : String, required: true},
        cantidad_pre : {type: String, required: true},
        texto_pre : {type: String, required: true},
        descripcion_pri : {type : String, required: true},
        cantidad_pri : {type: String, required: true},
        texto_pri : {type: String, required: true},
        descripcion_seg : {type : String, required: true},
        cantidad_seg : {type: String, required: true},
        texto_seg : {type: String, required: true}
        
    }
);

module.exports = mongoose.model('Comentario', schema_comentario);