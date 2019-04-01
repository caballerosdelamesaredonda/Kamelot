'use strict';

const userPadre_citas = localStorage.getItem('usuario_en_sesion');
const userCentro_citas = localStorage.getItem('centro_id');
const input_fecha = document.querySelector('#datepicker-13');
const input_hora = document.querySelector('#slct_hora');
const boton_registrar = document.querySelector('#btn_registrar');



if (userPadre_citas == null) {
    window.location.href = 'index.html';
}

let validar = () => {
    let error = false;

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
        let userLoggeado = userPadre_citas;
        let userCentro = userCentro_citas;
        let fecha = input_fecha.value;
        let hora = input_hora.value;

        registrar_citas(userLoggeado, userCentro, fecha, hora);


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

$(function () {
    $("#datepicker-13").datepicker({ dateFormat: 'mm-dd-yy', maxDate: '+20', minDate: '0', beforeShowDay: DisableSpecificDates /* $.datepicker.noWeekends */ });
    //$("#datepicker-13").datepicker("show");
});
