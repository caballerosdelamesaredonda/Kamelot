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



module.exports.listar_todos = (req ,res) =>{
    registro_model.find().then(
        function(lista){
            if(lista.length > 0){
                res.json(
                    {
                        success: true,
                        lista: lista
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        lista: 'No se encontro informacion'
                    }
                )
            }
        }

    )
};