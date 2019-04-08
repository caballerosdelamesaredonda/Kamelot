
'use strict';
const express = require('express');
const router = express.Router();
const citas_api = require('./citas.api');

router.param('id_noticia',function(req,res,next,id_noticia){
    req.body.id_noticia = id_noticia;
    next();
});


router.route('/registrar_citas')
    .post(
        function (req, res) {
            citas_api.registrar_cita(req, res);
        }
    );

router.route('/consultar_citas')
    .post(
        function (req, res) {
            citas_api.consultar_citas(req, res);
        }
    )

router.route('/buscar_inmueble/:id_noticia')
    .get(
        function (req, res) {
            citas_api.consultar_citas(req, res);
        }
    )


module.exports = router;