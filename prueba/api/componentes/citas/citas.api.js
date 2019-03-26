'use strict';

const model_citas = require('./citas.model');

module.exports.registrar_cita = (req, res) => {
    let cita_nueva = new model_citas(
        {
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            correo: req.body.correo,
            fecha: req.body.fecha
        }
    );

    cita_nueva.save(
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo registrar la cita, ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Se registró la cita de forma correcta`
                    }
                )
            }
        }

    );
};



module.exports.consultar_citas = (req, res) => {
    model_citas.findOne({_id: req.body._id}).then(
        function (citas) {
            if (citas.length > 0) {
                res.json(
                    {
                        success: true,
                        citas: citas
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        citas: 'No se encontraron citas'
                    }
                )
            }
        }

    )
};

