'use strict';

const model_citas = require('./citas.model');

module.exports.registrar_cita = (req, res) => {
    let cita_nueva = new model_citas(
        {
            userid: req.body.userid,
            centroid: req.body.centroid,
            razon: req.body.razon,
            fecha: req.body.fecha,
            hora: req.body.hora
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
    model_citas.find({centroid: req.body.centroid}).then(
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
                        citas: citas
                    }
                )
            }
        }

    )
};

