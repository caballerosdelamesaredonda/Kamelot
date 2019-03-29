
'use strict';
const express = require('express');
const router = express.Router();
const citas_api = require('./citas.api');

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

module.exports = router;