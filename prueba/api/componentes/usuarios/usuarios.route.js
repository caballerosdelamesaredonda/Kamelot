'use strict';
const express = require('express');
const router = express.Router();
const api_usuarios = require('./usuarios.api');

//end point registro ce
router.route('/registrar_ce')
.post(
    function(req, res){
        api_usuarios.registrar_ce(req, res);
    }
);
//end point lista ce

router.route('/listar_centroe')
    .get(
        function(req, res){
            api_usuarios.listar_ce(req, res);
        }
    )
//end point lista todos

router.route('/listar_todos')
    .get(
        function(req, res){
            api_usuarios.listar_todos(req, res);
    }
)

//end point lista ce pendientes

router.route('/listar_ce_pendientes')
    .get(
        function(req, res){
            api_usuarios.listar_solicitud_pendiente(req, res);
    }
)

//end point validar sesion usuario
router.route('/validar_sesion')
    .post(
        function(req, res){
            api_usuarios.validar_sesion(req, res);
        }
    );

//end point buscar usuario por id

router.route('/buscar_usuario')
    .post(
        function(req, res){
            api_usuarios.buscar_usuario(req, res);
        }
    );


//end point registro ce
router.route('/registrar_pf')
.post(
    function(req, res){
        api_usuarios.registrar_pf(req, res);
    }
);


//end point lista primaria

router.route('/listar_primaria')
    .get(
        function(req, res){
            api_usuarios.listar_primaria(req, res);
    }
)



module.exports = router;
