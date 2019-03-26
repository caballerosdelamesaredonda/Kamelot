'use strict';

const input_codigo = document.querySelector('#txt_codigo');
const input_nombre = document.querySelector('#txt_nombre');
const input_correo = document.querySelector('#txt_correo');
const input_fecha = document.querySelector('#datepicker-13');
const input_hora = document.querySelector('#slct_hora');
const boton_registrar = document.querySelector('#btn_registrar');


let validar = () => {
    let error = false;

    if (input_codigo.value == '') {
        error = true;
        input_codigo.classList.add('error_input');
    } else {
        input_codigo.classList.remove('error_input');
    }

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }

    if (input_fecha.value == '') {
        error = true;
        input_fecha.classList.add('error_input');
    } else {
        input_fecha.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let codigo = input_codigo.value;
        let nombre = input_nombre.value;
        let correo = input_correo.value;
        let fecha = input_fecha.value;
        let hora = input_hora.value;

        registrar_citas(codigo, nombre, correo, fecha, hora);
        

    } else {
        swal.fire({
            type: 'warning',
            title: 'La cita no pudo ser registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

boton_registrar.addEventListener('click', obtener_datos);

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
