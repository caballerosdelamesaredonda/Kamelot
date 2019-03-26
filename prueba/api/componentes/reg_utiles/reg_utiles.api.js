'use strict';
const registro_model = require('./reg_utiles.model');

module.exports.registrar = (req, res) =>{
    let registro_nuevo = new registro_model(
        {
            nombre_lista : req.body.nombre_lista,
            tipo : req.body.tipo,
            ciclo : req.body.ciclo,
            nivel : req.body.nivel,
            ano : req.body.ano
            
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



module.exports.listar_utiles = (req ,res) =>{
    registro_model.find().then(
        function(utiles){
            if(utiles.length > 0){
                res.json(
                    {
                        success: true,
                        utiles: utiles
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        utiles: 'No se encontro informacion'
                    }
                )
            }
        }

    )
};