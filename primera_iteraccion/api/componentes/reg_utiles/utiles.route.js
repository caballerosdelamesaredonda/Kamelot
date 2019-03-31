'use strict';
const express = require('express');
const router =  express.Router();
const utiles_api = require('./utiles.api');

router.route('/registrar_utiles')
    .post(
        function(req, res){
            utiles_api.registrar(req, res);
        }
    );

router.route('/listar_utiles')
        .post(
            function(req, res){
                utiles_api.consultar_utiles(req, res);
            }
        )

module.exports = router;