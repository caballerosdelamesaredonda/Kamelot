
const codigo = document.querySelector('#txt_codigo');
const nombre = document.querySelector('#txt_nombre');
const correo = document.querySelector('#txt_correo');
const fecha = document.querySelector('#datepicker-13');


limpiarForm();

/* Días a deshabilitar en el calendario de citas mediante un arreglo */
//var disableddates = ["3-20-2019", "3-21-2019"];
var disableddates = citas_programadas();


function DisableSpecificDates(date) {

    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();

    // First convert the date in to the mm-dd-yyyy format 
    // Take note that we will increment the month count by 1 
    var currentdate = (m + 1) + '-' + d + '-' + y;

    // We will now check if the date belongs to disableddates array 
    for (var i = 0; i < disableddates.length; i++) {

        // Now check if the current date is in disabled dates array. 
        if ($.inArray(currentdate, disableddates) != -1) {
            return [false, 'highlight_citas'];
        }
    }

    // In case the date is not present in disabled array, we will now check if it is a weekend. 
    // We will use the noWeekends function
    var weekenddate = $.datepicker.noWeekends(date);
    return weekenddate;

}

// Function to show datepicker

$(function () {
    $("#datepicker").datepicker({
        beforeShowDay: DisableSpecificDates
    });
});

// Function to show limited datepicker dates

$("#datepicker").datepicker();

$(function () {
    $("#datepicker-13").datepicker({ dateFormat: 'mm-dd-yy', maxDate: '+20', minDate: '0', beforeShowDay: DisableSpecificDates /* $.datepicker.noWeekends */ });
    $("#datepicker-13").datepicker("show");
});


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


