'use strict';
const express = require('express');
const router = express.Router();
const api_registro_centroe = require('./registro_centroe.api');

router.route('/centroe_nuevo')
.post(
    function(req, res){
        api_registro_centroe.registrar(req, res);
    }
);
module.exports = router;