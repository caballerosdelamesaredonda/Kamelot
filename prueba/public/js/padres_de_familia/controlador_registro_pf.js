'use strict';

let input_correo = document.querySelector('#txt_correo');
let input_nombre = document.querySelector('#txt_nombre');
let input_snombre = document.querySelector('#txt_snombre');
let input_papellido = document.querySelector('#txt_papellido');
let input_sapellido = document.querySelector('#txt_sapellido');
let input_tipo_id = document.querySelector('#slt_tipo_id');
let input_id = document.querySelector('#txt_id');
let input_telefono= document.querySelector('#txt_telefono');
let input_provincias= document.querySelector('#slt_provincias');
let input_cantones= document.querySelector('#slt_cantones');
let input_distritos= document.querySelector('#slt_distritos');
let input_direccion= document.querySelector('#txt_direccion');
let input_cant_hijos= document.querySelector('#num_cant_hijos');

let boton_registrar= document.querySelector('#btn_registrar');
const input_imagen = document.querySelector('#image_preview');


let validar = () => {
    let error = false;
    if (input_correo.value == ''){
        error = true;
        input_correo.style.border='1px solid red';
    }else{
        input_correo.style.border = '1px solid black';
    }
    if (input_nombre.value == ''){
        error = true;
        input_nombre.style.border='1px solid red';
    }else{
        input_nombre.style.border = '1px solid black';
    }
    if (input_papellido.value == ''){
        error = true;
        input_papellido.style.border='1px solid red';
    }else{
        input_papellido.style.border = '1px solid black';
    }
    if (input_tipo_id.value == ''){
        error = true;
        input_tipo_id.style.border='1px solid red';
    }else{
        input_tipo_id.style.border = '1px solid black';
    }
    if (input_id.value == ''){
        error = true;
        input_id.style.border='1px solid red';
    }else{
        input_id.style.border = '1px solid black';
    }
    if (input_telefono.value == ''){
        error = true;
        input_telefono.style.border='1px solid red';
    }else{
        input_telefono.style.border = '1px solid black';
    }
    if (input_provincias.value == ''){
        error = true;
        input_provincias.style.border='1px solid red';
    }else{
        input_provincias.style.border = '1px solid black';
    }
    if (input_cantones.value == ''){
        error = true;
        input_cantones.style.border='1px solid red';
    }else{
        input_cantones.style.border = '1px solid black';
    }
    if (input_distritos.value == ''){
        error = true;
        input_distritos.style.border='1px solid red';
    }else{
        input_distritos.style.border = '1px solid black';
    }
    if (input_direccion.value == ''){
        error = true;
        input_direccion.style.border='1px solid red';
    }else{
        input_direccion.style.border = '1px solid black';
    }
    if (input_cant_hijos.value == ''){
        error = true;
        input_cant_hijos.style.border='1px solid red';
    }else{
        input_cant_hijos.style.border = '1px solid black';
    }
    return error;
};
let obtener_datos = () => {

    let validacion = validar();

    if (validacion === false){
        let foto = input_imagen.src;        
        let correo = input_correo.value;
        let nombre = input_nombre.value;
        let snombre = input_snombre.value;
        let papellido = input_papellido.value;
        let sapellido = input_sapellido.value;
        let tipo_id = input_tipo_id.value;
        let id = input_id.value;
        let telefono = input_telefono.value;
        let provincias = input_provincias.value;
        let cantones = input_cantones.value;
        let distritos = input_distritos.value;
        let direccion= input_direccion.value;
        let cant_hijos= input_cant_hijos.value;

        registrar_pf(foto,correo, nombre,snombre, papellido, sapellido, tipo_id, id, telefono, provincias, cantones, distritos, direccion, cant_hijos);

    }else{
        swal({
            title: 'El padre de familia no fue registrado',
            text: 'Por favor revise los campos resaltados',
            icon: 'warning'
        });
    }
};

boton_registrar.addEventListener('click', obtener_datos);
