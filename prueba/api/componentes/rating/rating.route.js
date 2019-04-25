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

router.route('/listar_ratings_usuario')
    .post(
        function (req, res) {
            rating_api.listar_ratings_usuario(req, res);
        }
    )

router.route('/listar_ratings_usuario_pf')
    .post(
        function (req, res) {
            rating_api.listar_ratings_usuario_pf(req, res);
        }
    )



module.exports = router;