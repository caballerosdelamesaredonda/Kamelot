'use strict';
const express = require('express');
const router = express.Router();
const utiles_api = require('./utiles.api');

router.param('id', function (req, res, next, id) {
    req.body.id = id;
    next();
});

router.route('/registrar_utiles')
    .post(
        function (req, res) {
            utiles_api.registrar(req, res);
        }
    );

router.route('/actualizar_utiles')
    .post(
        function (req, res) {
            utiles_api.actualizar(req, res);
        }
    );

router.route('/listar_utiles')
    .post(
        function (req, res) {
            utiles_api.consultar_utiles(req, res);
        }
    );

router.route('/buscar_utiles/:id')
    .get(
        function (req, res) {
            utiles_api.buscar_por_id(req, res);
        }
    );

router.route('/desactivar_utiles')
    .post(
        function (req, res) {
            utiles_api.desactivar(req, res);
        }
    );

router.route('/activar_utiles')
    .post(
        function (req, res) {
            utiles_api.activar(req, res);
        }
    );

    router.route('/eliminar_utiles')
    .post(
        function (req, res) {
            utiles_api.eliminar(req, res);
        }
    );

module.exports = router;