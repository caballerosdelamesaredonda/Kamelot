'use strict';
const express = require('express');
const router = express.Router();
const actividad_api = require('./actividad.api');

router.route('/registrar_actividad')
    .post(
        function (req, res) {
            actividad_api.registrar(req, res);
        }
    );

router.route('/listar_actividad')
    .get(
        function (req, res) {
            actividad_api.listar_todos(req, res);
        }
    )

router.route('/listar_actividad_usuario')
    .post(
        function (req, res) {
            actividad_api.listar_actividades_usuario(req, res);
        }
    )


module.exports = router;