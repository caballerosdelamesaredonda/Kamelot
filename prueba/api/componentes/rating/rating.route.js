'use strict';
const express = require('express');
const router = express.Router();
const rating_api = require('./rating.api');

router.route('/registrar_rating')
    .post(
        function (req, res) {
            rating_api.registrar(req, res);
        }
    );

router.route('/listar_rating')
    .get(
        function (req, res) {
            rating_api.listar_todos(req, res);
        }
    )

router.route('/listar_actividad_usuario')
    .post(
        function (req, res) {
            rating_api.listar_actividades_usuario(req, res);
        }
    )


module.exports = router;