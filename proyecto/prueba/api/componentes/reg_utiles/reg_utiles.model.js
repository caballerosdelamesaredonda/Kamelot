'use strict';
const mongoose = require('mongoose');

let schema_registro = new mongoose.Schema(
    {
        
        nombre_lista : {type : String, required: true},
        tipo : {type: String, required: true},
        ciclo : {type: String, required: true},
        nivel : {type : String, required: true},
        ano : {type: String, required: true}
        
    }
);

module.exports = mongoose.model('utiles', schema_registro);