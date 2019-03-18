'use strict';



const fieldset_descripcion_pre = document.querySelector('#slt_descripcion_pre');
const fieldset_cantidad_pre = document.querySelector('#slt_cantidad_pre');
const input_tipo_pre = document.querySelector('#txt_tipo_pre');
const fieldset_descripcion_pri = document.querySelector('#slt_descripcion_pri');
const fieldset_cantidad_pri = document.querySelector('#slt_cantidad_pri');
const input_tipo_pri = document.querySelector('#txt_tipo_pri');
const fieldset_descripcion_seg = document.querySelector('#slt_descripcion_seg');
const fieldset_cantidad_seg = document.querySelector('#slt_cantidad_seg');
const input_tipo_seg = document.querySelector('#txt_tipo_seg');

let validar = () => {
    let error = false;


    if (input_tipo_pre.value == '') {
        error = true;
        input_tipo_pre.classList.add('error_input');
    } else {
        input_tipo_pre.classList.remove('error_input');
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




    return error;
};

let mostrar_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error

        let tipo = input_tipo_pre.value;
        let descripcion = fieldset_descripcion_pre.value;
        let cantidad = fieldset_cantidad_pre.value;




        swal.fire({
            type: 'success',
            title: 'Comentario enviado correctamente',
            text: `La utiles de primaria se agregaron correctamente`
        });


    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no fue enviado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


let validar = () => {
    let error = false;


    if (input_tipo_pri.value == '') {
        error = true;
        input_tipo_pri.classList.add('error_input');
    } else {
        input_tipo_pri.classList.remove('error_input');
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




    return error;
};

let mostrar_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error

        let tipo = input_tipo_pri.value;
        let descripcion = fieldset_descripcion_pri.value;
        let cantidad = fieldset_cantidad_pri.value;




        swal.fire({
            type: 'success',
            title: 'Comentario enviado correctamente',
            text: `La informacion se agrego correctamente`
        });


    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no fue enviado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


let validar = () => {
    let error = false;


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

let mostrar_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error

        let tipo = input_tipo_seg.value;
        let descripcion = fieldset_descripcion_seg.value;
        let cantidad = fieldset_cantidad_seg.value;




        swal.fire({
            type: 'success',
            title: 'Comentario enviado correctamente',
            text: `La informacion se agrego correctamente`
        });


    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no fue enviado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


boton_enviar.addEventListener('click', mostrar_datos);
