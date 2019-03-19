'use strict';

import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";



const fieldset_descripcion_pre = document.querySelector('#slt_descripcion_pre');
const fieldset_cantidad_pre = document.querySelector('#slt_cantidad_pre');
const input_nombre_pre = document.querySelector('#txt_tipo_pre');
const fieldset_descripcion_pri = document.querySelector('#slt_descripcion_pri');
const fieldset_cantidad_pri = document.querySelector('#slt_cantidad_pri');
const input_nombre_pri = document.querySelector('#txt_tipo_pri');
const fieldset_descripcion_seg = document.querySelector('#slt_descripcion_seg');
const fieldset_cantidad_seg = document.querySelector('#slt_cantidad_seg');
const input_nombre_seg = document.querySelector('#txt_tipo_seg');

let validar = () => {
    let error = false;


    if (input_nombre_pre.value == '') {
        error = true;
        input_nombre_pre.classList.add('error_input');
    } else {
        input_nombre_pre.classList.remove('error_input');
    }


    if (fieldset_cantidad_pre == null) {
        error = true;
        fieldset_cantidad_pre.classList.add('error_input');
    } else {
        fieldset_cantidad_pre.classList.remove('error_input');
    }


    if (fieldset_descripcion_pre == null) {
        error = true;
        fieldset_descripcion_pre.classList.add('error_input');
    } else {
        fieldset_descripcion_pre.classList.remove('error_input');
    }



    if (input_nombre_pri.value == '') {
        error = true;
        input_nombre_pri.classList.add('error_input');
    } else {
        input_nombre_pri.classList.remove('error_input');
    }


    if (fieldset_cantidad_pri == null) {
        error = true;
        fieldset_cantidad_pri.classList.add('error_input');
    } else {
        fieldset_cantidad_pri.classList.remove('error_input');
    }


    if (fieldset_descripcion_pri == null) {
        error = true;
        fieldset_descripcion_pri.classList.add('error_input');
    } else {
        fieldset_descripcion_pri.classList.remove('error_input');
    }


    if (input_tipo_seg.value == '') {
        error = true;
        input_tipo_seg.classList.add('error_input');
    } else {
        input_tipo_seg.classList.remove('error_input');
    }


    if (fieldset_cantidad_seg == null) {
        error = true;
        fieldset_cantidad_seg.classList.add('error_input');
    } else {
        fieldset_cantidad_seg.classList.remove('error_input');
    }


    if (fieldset_descripcion_seg == null) {
        error = true;
        fieldset_descripcion_seg.classList.add('error_input');
    } else {
        fieldset_descripcion_seg.classList.remove('error_input');
    }

    return error;

};

let optener_datos = () => {

    if (validar() == false) {

        let nombre = igual nombre del imput de arriba.value;

        nombre de la variable en servicio **** (poner todas las variables del let)

    } else {
        swal.fire({
            type: 'warning',
            title: 'El centro educativo no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

}


boton_enviar.addEventListener('click', optener_datos);
