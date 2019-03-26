'use strict';
const model_etiqueta = require ('./etiquetas.model');

module.exports.registrar_etiqueta = (req, res) =>{
    let nueva_etiqueta = new model_etiqueta(
        {
        userid: req.body.userid,    
        nombre : req.body.nombre
        }
    );
    nueva_etiqueta.save(
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
                        msg : `Se registró la etiqueta de manera correcta`
                    }
                )
            }
        }
    );
};


module.exports.listar_etiquetas = (req ,res) =>{
    model_etiqueta.find().then(
        function(etiqueta){
            if(etiqueta.length > 0){
                res.json(
                    {
                        success: true,
                        etiqueta: etiqueta
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron etiquetas'
                    }
                )
            }
        }

    )
};