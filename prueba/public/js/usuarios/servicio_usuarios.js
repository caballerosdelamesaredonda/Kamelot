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


let deshabilitar = (pId) =>{

    let request = $.ajax({
        url: "http://localhost:4000/api/deshabilitar_usuario",
        method: 'POST',
        async: false,
        data: {
            _id : pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (response) {

        if (response.success){
            swal({
                title: 'El usuario se deshabilito con éxito',
                icon: 'success',
            });
        }else{
            swal({
                title: 'El usuario no se pudo deshabilitar',
                text: 'Ocurrió un error inesperado, por favor intente de nuevo',
                icon: 'error',
            });
        }

    });

    request.fail(function (jqXHR, textStatus) {
        swal({
            title: 'El usuario no se pudo deshabilitar',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo',
            icon: 'error',
        });
    });
};

let habilitar = (pId) =>{

    let request = $.ajax({
        url: "http://localhost:4000/api/habilitar_usuario",
        method: 'POST',
        async: false,
        data: {
            _id : pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (response) {

        if (response.success){
            swal({
                title: 'El usuario se habilito con éxito',
                icon: 'success',
            });
        }else{
            swal({
                title: 'El usuario no se pudo habilitar',
                text: 'Ocurrió un error inesperado, por favor intente de nuevo',
                icon: 'error',
            });
        }

    });
    request.fail(function (jqXHR, textStatus) {
        swal({
            title: 'El usuario no se pudo deshabilitar',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo',
            icon: 'error',
        });
    });
};

let borrar = (pId) =>{

    let request = $.ajax({
        url: "http://localhost:4000/api/borrar_usuario",
        method: 'POST',
        async: false,
        data: {
            _id : pId
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    });

    request.done(function (response) {

        if (response.success){
            swal({
                title: 'El usuario se borró con éxito',
                text: 'Ocurrió un error inesperado, por favor intente de nuevo',
                icon: 'success',
            });
        }else{
            swal({
                title: 'El usuario no se pudo habilitar',
                text: 'Ocurrió un error inesperado, por favor intente de nuevo',
                icon: 'error',
            });
        }

    });
    request.fail(function (jqXHR, textStatus) {
        swal({
            title: 'El usuario no se pudo deshabilitar',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo',
            icon: 'error',
        });
    });
};
