'use strict';
const mongoose = require('mongoose');

let schema_registro = new mongoose.Schema(
    {
        
        descripcion_pre : {type : String, required: true},
        cantidad_pre : {type: String, required: true},
        nombre_pre : {type: String, required: true},
        descripcion_pri : {type : String, required: true},
        cantidad_pri : {type: String, required: true},
        nombre_pri : {type: String, required: true},
        descripcion_seg : {type : String, required: true},
        cantidad_seg : {type: String, required: true},
        nombre_seg : {type: String, required: true}
        
    }
);

module.exports = mongoose.model('registro_utiles', schema_registro);