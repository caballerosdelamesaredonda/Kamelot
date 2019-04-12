
// Validar informacion de campos de formulario

let registrar_citas = (puserId, puserCentro,pRazon, pFecha, pHora) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_citas",
        method: "POST",
        data: {
            userid: puserId,
            centroid: puserCentro,
            razon: pRazon,
            fecha: pFecha,
            hora: pHora
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'La cita fue registrada',
            text: `Gracias por registrar una cita con el centro. Fecha: ${pFecha} Hora: ${pHora}`
        }).then(function() {
            window.location = "/public/padrefamilia/listar_citas_pf.html";
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


let consultar_citas = (pCentroID) => {

    let consultar_cita = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_citas",
        method: "POST",
        data: {
            centroid : pCentroID
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

let consultar_citas_pf = (pUserPF) => {

    let consultar_cita = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_citas_pf",
        method: "POST",
        data: {
            userid : pUserPF
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


