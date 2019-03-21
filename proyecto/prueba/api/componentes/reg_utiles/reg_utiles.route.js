'use strict';
const express = require('express');
const router =  express.Router();
const registro_api = require('./reg_utiles.api');

router.route('/registro_nuevo')
    .post(
        function(req, res){
            registro_api.registrar(req, res);
        }
    );

router.route('/listar_todos')
        .get(
            function(req, res){
                comentario_api.listar_todos(req, res);
            }
        );



module.exports = router;