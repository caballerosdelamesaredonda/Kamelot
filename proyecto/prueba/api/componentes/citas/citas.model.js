
'use strict';
const mongoose = require('mongoose');

let schema_citas = new mongoose.Schema(
    {
        codigo : {type : String, required : true, unique: true},
        nombre : {type : String, required: true},
        correo : {type: String, required: true},
        fecha : {type: Date, required: true}
    }
);

module.exports = mongoose.model('Cita', schema_citas);