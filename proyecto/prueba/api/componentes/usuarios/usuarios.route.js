'use strict';
const express = require('express');
const router = express.Router();
const api_usuarios = require('./usuarios.api');

router.route('/centroe_nuevo')
.post(
    function(req, res){
        api_usuarios.registrar(req, res);
    }
);

router.route('/listar_centroe')
        .get(
            function(req, res){
                api_usuarios.listar_centroe(req, res);
            }
        )

module.exports = router;
