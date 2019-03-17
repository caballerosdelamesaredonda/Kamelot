'use strict';

const tabla = document.querySelector('.tabla_info tbody');

let listar_citas = () => {

    let listar_citas = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_citas",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listar_citas = res.citas;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listar_citas;

};

let mostrar_datos = () => {
    let citas = listar_citas();
    for (let i = 0; i < citas.length; i++) {

        let fila = tabla.insertRow(); // Crea tr de la tabla
        fila.insertCell().innerHTML = citas[i]['codigo'];
        fila.insertCell().innerHTML = citas[i]['nombre'];
        fila.insertCell().innerHTML = citas[i]['correo'];
        fila.insertCell().innerHTML = citas[i]['fecha'];
    }
};

mostrar_datos();