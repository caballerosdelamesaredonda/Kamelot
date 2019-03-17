'use strict';

const input_codigo = document.querySelector('#txt_codigo');
const input_nombre = document.querySelector('#txt_nombre');
const input_correo = document.querySelector('#txt_correo');
const input_fecha = document.querySelector('#datepicker-13');
const boton_registrar = document.querySelector('#btn_registrar');

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let codigo = input_codigo.value;
        let nombre = input_nombre.value;
        let correo = input_correo.value;
        let fecha = input_fecha.value;

        registrar_mascotas(codigo, nombre, correo, fecha);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La cita no pudo ser registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

boton_registrar.addEventListener('click', obtener_datos);

