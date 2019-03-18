'use strict';
const model_comentario = require('./reg_utiles.model');

module.exports.registrar = (req, res) =>{
    let comentario_nuevo = new model_comentario(
        {
            descripcion_pre : req.body.descripcion_pre,
            cantidad_pre : req.body.cantidad_pre,
            texto_pre : req.body.texto_pre,
            descripcion_pri : req.body.descripcion_pri,
            cantidad_pri : req.body.cantidad_pri,
            texto_pri : req.body.texto_pri,
            descripcion_seg : req.body.descripcion_seg,
            cantidad_seg : req.body.cantidad_seg,
            texto_seg : req.body.texto_seg
            
        }
    );
    
    comentario_nuevo.save(
        function(error){
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
    model_comentario.find().then(
        function(comentarios){
            if(comentarios.length > 0){
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