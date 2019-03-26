'use strict';
const express = require('express');
const router = express.Router();
const registro_api = require('./reg_utiles.api');

router.route('/registrar_utiles')
    .post(
        function (req, res) {
            registro_api.registrar(req, res);
        }
    );

router.route('/listar_utiles')
    .get(
        function (req, res) {
            registro_api.listar_utiles(req, res);
        }
    );

module.exports = router;