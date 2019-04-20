'use strict';
const express = require('express');
const router =  express.Router();
const pregunta_api = require('./preguntas.api');

router.route('/registrar_pregunta')
    .post(
        function(req, res){
            pregunta_api.registrar(req, res);
        }
    );

router.route('/listar_pregunta')
        .get(
            function(req, res){
                pregunta_api.listar_todos(req, res);
            }
        )

module.exports = router;