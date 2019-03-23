'use strict';
const express = require('express');
const router = express.Router();
const api_etiquetas = require('./etiquetas.api');

router.route('/registrar_etiqueta')
.post(
    function(req, res){
        api_etiquetas.registrar(req, res);
    }
);

router.route('/listar_etiquetas')
        .get(
            function(req, res){
                api_etiquetas.listar_etiquetas(req, res);
            }
        )

module.exports = router;
