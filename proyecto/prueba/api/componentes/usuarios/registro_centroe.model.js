'use strict';
const mongoose = require ('mongoose');

let schema_centroe = new mongoose.Schema(
    {
        nombre : {type : String, required : true},
        alias : {type : String, required : true},
        cedula_juridica : {type : String, required : true},
        tipo_centro : {type : String, required : true},
        nivel_centro : {type : String, required : true},
        foto : {type : String, required : false},
        nombre_comercial : {type : String, required : true},
        provincia : {type : String, required : true},
        canton : {type : String, required : true},
        distrito: {type : String, required : true},
        direccion: {type : String, required : true},
        fecha_fundacion : {type : String, required : true},
        referencia_historia : {type : String, required : true},
        adjuntar_documentos : {type : String, required : true},
        telefono : {type : String, required : true},
        fax : {type : String, required : true},
        sitio_web : {type : String, required : true},
        cuentas_redesso : {type : String, required : true},
        correo_electronico : {type : String, required : true},
        contacto_nombre : {type : String, required : true},
        contacto_papellido : {type : String, required : true},
        contacto_sapellido : {type : String, required : true},
        identificacion : {type : String, required : true},
        departamento : {type : String, required : true}, 
        telefono_contacto : {type : String, required : true},
        extension_contacto : {type : String, required : false},
        correo_electronico_contacto : {type : String, required : true},
        foto_contacto : {type : String, required : false},
        tipo_usuario : {type : String, required : false}
    }
);

module.exports = mongoose.model('centro_educativo', schema_centroe);