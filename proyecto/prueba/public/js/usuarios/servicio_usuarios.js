'use strict';


let listar_usuarios = () => {

    let listar_usuarios = [];

    let request = $.ajax({

        url: "http://localhost:4000/api/listar_todos",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
    });

    request.done(function (res) {
        listar_usuarios = res.usuarios;
    });

    request.fail(function (jqXHR, textStatus) {
    });
    return listar_usuarios;

};

