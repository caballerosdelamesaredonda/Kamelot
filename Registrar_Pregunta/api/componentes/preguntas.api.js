'use strict';
const model_pregunta = require('./preguntas.model');


module.exports.registrar = (req, res) =>{
    let pregunta_nueva = new model_pregunta(
        {
            pregunta : req.body.pregunta
        }
    );
    pregunta_nueva.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar la pregunta ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró la pregunta de forma correcta`
                    }
                )
            }
        }

    );
};


module.exports.listar_todos = (req ,res) =>{
    model_pregunta.find().then(
        function(pregunta){
            if(pregunta.length > 0){
                res.json(
                    {
                        success: true,
                        pregunta: pregunta
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        apregunta: 'No se encontraron preguntas'
                    }
                )
            }
        }

    )
};