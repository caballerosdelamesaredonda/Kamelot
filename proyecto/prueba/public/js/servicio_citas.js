
// Validar informacion de campos de formulario

let validar = () => {
    let error = false;

    if (codigo.value == '') {
        error = true;
        codigo.classList.add('error_input');
    } else {
        codigo.classList.remove('error_input');
    }

    if (nombre.value == '') {
        error = true;
        nombre.classList.add('error_input');
    } else {
        nombre.classList.remove('error_input');
    }

    if (correo.value == '') {
        error = true;
        correo.classList.add('error_input');
    } else {
        correo.classList.remove('error_input');
    }

    if (fecha.value == '') {
        error = true;
        fecha.classList.add('error_input');
    } else {
        fecha.classList.remove('error_input');
    }

    return error;
};


let registrar_citas = (pcodigo, pnombre, pcorreo, pfecha) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_citas",
        method: "POST",
        data: {
            codigo: pcodigo,
            nombre: pnombre,
            correo: pcorreo,
            fecha: pfecha
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'La cita fue registrada',
            text: 'Gracias por registrar una actividad'
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La cita no fue registrada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });
};


let consultar_citas = () => {

    let consultar_cita = [];

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
        consultar_cita = res.citas;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return consultar_cita;

};


