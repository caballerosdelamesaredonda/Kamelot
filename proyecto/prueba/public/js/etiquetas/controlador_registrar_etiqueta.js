'use strict';

const input_nombre = document.querySelector('#txt_nombre');
const boton_enviar = document.querySelector('#btn_enviar');
let userlocal = localStorage.getItem('usuario_en_sesion');

let validar = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }
    return error;
}

let obtener_datos = () => {

    if (validar() == false) {
    let nombre = input_nombre.value;
    
    registrar_etiqueta(userlocal,nombre);

} else {
    swal.fire({
        type: 'warning',
        title: 'El centro educativo no fue registrado',
        text: 'Por favor revise los campos resaltados'
    });
}

};

boton_enviar.addEventListener('click', obtener_datos);
