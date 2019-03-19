'use strict';



const input_descripcion_pre = document.querySelector('#slt_descripcion_pre');
const fieldset_cantidad_pre = document.querySelector('#slt_cantidad_pre');
const input_nombre_pre = document.querySelector('#txt_nombre_pre');
const input_descripcion_pri = document.querySelector('#slt_descripcion_pri');
const fieldset_cantidad_pri = document.querySelector('#slt_cantidad_pri');
const input_nombre_pri = document.querySelector('#txt_nombre_pri');
const input_descripcion_seg = document.querySelector('#slt_descripcion_seg');
const fieldset_cantidad_seg = document.querySelector('#slt_cantidad_seg');
const input_nombre_seg = document.querySelector('#txt_nombre_seg');
const boton_enviar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;


    if (input_nombre_pre.value == '') {
        error = true;
        input_nombre_pre.classList.add('error_input');
    } else {
        input_nombre_pre.classList.remove('error_input');
    }


    if (fieldset_cantidad_pre.value == null) {
        error = true;
        fieldset_cantidad_pre.classList.add('error_input');
    } else {
        fieldset_cantidad_pre.classList.remove('error_input');
    }


    if (input_descripcion_pre.value == null) {
        error = true;
        input_descripcion_pre.classList.add('error_input');
    } else {
        input_descripcion_pre.classList.remove('error_input');
    }



    if (input_nombre_pri.value == '') {
        error = true;
        input_nombre_pri.classList.add('error_input');
    } else {
        input_nombre_pri.classList.remove('error_input');
    }


    if (fieldset_cantidad_pri.value == null) {
        error = true;
        fieldset_cantidad_pri.classList.add('error_input');
    } else {
        fieldset_cantidad_pri.classList.remove('error_input');
    }


    if (input_descripcion_pri.value == null) {
        error = true;
        input_descripcion_pri.classList.add('error_input');
    } else {
        input_descripcion_pri.classList.remove('error_input');
    }


    if (input_nombre_seg.value == '') {
        error = true;
        input_nombre_seg.classList.add('error_input');
    } else {
        input_nombre_seg.classList.remove('error_input');
    }


    if (fieldset_cantidad_seg.value == null) {
        error = true;
        fieldset_cantidad_seg.classList.add('error_input');
    } else {
        fieldset_cantidad_seg.classList.remove('error_input');
    }


    if (input_descripcion_seg.value == null) {
        error = true;
        input_descripcion_seg.classList.add('error_input');
    } else {
        input_descripcion_seg.classList.remove('error_input');
    }

    return error;

};

let obtener_datos = () => {

    if (validar() == false) {

        let descripcion_pre = input_descripcion_pre.value;
        let cantidad_pre = fieldset_cantidad_pre.value;
        let nombre_pre = input_nombre_pre.value;
        let cantidad_pri = input_descripcion_pri.value;
        let descripcion_pri = fieldset_cantidad_pri.value;
        let nombre_pri = input_nombre_pri.value;
        let cantidad_seg = input_descripcion_seg.value;
        let descripcion_seg = fieldset_cantidad_seg.value;
        let nombre_seg = input_nombre_seg.value;

        registrar_utiles(descripcion_pre, cantidad_pre, nombre_pre, cantidad_pri, descripcion_pri, nombre_pri, cantidad_seg, descripcion_seg, nombre_seg);

    } else {
        swal.fire({
            type: 'warning',
            title: 'El centro educativo no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


boton_enviar.addEventListener('click', obtener_datos);
