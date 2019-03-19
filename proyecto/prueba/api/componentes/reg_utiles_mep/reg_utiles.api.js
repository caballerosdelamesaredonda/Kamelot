'use strict';
const registroModel = require('./reg_utiles.model');

module.exports.registrar = (req, res) =>{
    let registro_nuevo = new registroModel(
        {
            descripcion_pre : req.body.descripcion_pre,
            cantidad_pre : req.body.cantidad_pre,
            nombre_pre : req.body.texto_pre,
            descripcion_pri : req.body.descripcion_pri,
            cantidad_pri : req.body.cantidad_pri,
            nombre_pri : req.body.texto_pri,
            descripcion_seg : req.body.descripcion_seg,
            cantidad_seg : req.body.cantidad_seg,
            nombre_seg : req.body.texto_seg
            
        }
    );
    
    registro_nuevo.save(function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar la informacion ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registro la informacion de forma correcta`
                    }
                )
            }
        }

    );
};



module.exports.listar_todos = (req ,res) =>{
    registroModelo.find().then(
        function(registro){
            if(registro.length > 0){
                res.json(
                    {
                        success: true,
                        comentarios: comentarios
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontro informacion'
                    }
                )
            }
        }

    )
};