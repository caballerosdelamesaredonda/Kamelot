'use strict';
const mongoose = require('mongoose');

let schema_actividad = new mongoose.Schema(
    {
        actividad : {type : String, required : true}
    }
);

module.exports = mongoose.model('Actividad', schema_actividad);