'use strict';
const model_centroe = require ('./registro_centroe.model');

module.exports.registrar = (req, res) =>{
    let centroe_nuevo = new model_centroe(
        {
        nombre : req.body.nombre,
        alias : req.body.alias,
        cedula_juridica : req.body.cedula_juridica,
        clave : req.body.clave,
        tipo_centro : req.body.tipo_centro,
        nivel_centro : req.body.nivel_centro,
        foto : req.body.foto,
        nombre_comercial : req.body.nombre_comercial,
        provincia : req.body.provincia,
        canton : req.body.canton,
        distrito: req.body.distrito,
        direccion: req.body.direccion,
        fecha_fundacion : req.body.fecha_fundacion,
        referencia_historia : req.body.referencia_historia,
        adjuntar_documentos : req.body.adjuntar_documentos,
        telefono : req.body.telefono,
        fax : req.body.fax,
        sitio_web : req.body.sitio_web,
        cuentas_redesso : req.body.cuentas_redesso,
        correo_electronico : req.body.correo_electronico,
        contacto_nombre : req.body.contacto_nombre,
        contacto_papellido : req.body.contacto_papellido,
        contacto_sapellido : req.body.contacto_sapellido,
        identificacion : req.body.identificacion,
        departamento : req.body.departamento, 
        telefono_contacto : req.body.telefono_contacto,
        extension_contacto : req.body.extension_contacto,
        correo_electronico_contacto : req.body.correo_electronico_contacto,
        foto_contacto : req.body.foto_contacto,
        tipo_usuario : req.body.tipo_usuario
        }
    );
    
    centroe_nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se completar el registro ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró el centro educativo de manera correcta`
                    }
                )
            }
        }
    );
};