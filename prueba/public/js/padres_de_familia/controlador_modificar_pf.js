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
let input_foto= document.querySelector('#image_preview');
let tabla_mostrar_hijos = document.querySelector('#tbl_hijos tbody');
let arreglo_hijos =[
    {edad: 16},
    {edad: 10},
    {edad: 12},
    ];

const boton_registrar = document.querySelector('#btn_registrar');

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    return url.searchParams.get(param);
};

let id = get_param('id');
let pf = obtener_usuario_por_id_avatar(id);

let cargar_hijos = (parreglo_hijos) =>{
    if (parreglo_hijos.length > 0){
        for (let i=0; i<parreglo_hijos.length; i++){
            let fila = tabla_mostrar_hijos.insertRow();

            let c_numero = fila.insertCell();
            let c_edad = fila.insertCell();
            let c_opt = fila.insertCell();

            c_numero.classList.add('column1');
            c_edad.classList.add('column2');
            c_opt.classList.add('column3');

            c_numero.innerHTML = i+1;
            c_edad.innerHTML =  parreglo_hijos[i]['edad'];

            let boton_remover = document.createElement('button');
            boton_remover.dataset.index = i.toString();
            boton_remover.classList.add('btn_remover');
            
            boton_remover.addEventListener('click', function () {
                arreglo_hijos.splice(this.dataset.index,1);
                cargar_hijos();
            });

            c_opt.appendChild(boton_remover);
        }
    }
};

let mostrar_datos = () =>{

    input_correo.value = pf['correo_electronico'];
    input_nombre.value = pf['nombre'];
    input_snombre.value = pf['segundo_nombre'];
    input_papellido.value = pf['papellido'];
    input_sapellido.value = pf['sapellido'];
    input_id.value = pf['identificacion'];
    input_telefono.value = pf['telefono'];
    input_direccion.value = pf['direccion'];
    input_cant_hijos.value = pf['cantidad_hijos'];
    input_foto.src = pf['foto'];

    cargar_hijos(arreglo_hijos);

    let opciones_tipo_id = document.querySelectorAll('#slt_tipo_id option');

    for(let i = 0; i < opciones_tipo_id.length; i++){
        if(opciones_tipo_id[i].value === pf['tipo_id']){
            opciones_tipo_id[i].selected = true;
        }
    }



    let opciones_provincias = document.querySelectorAll('#slt_provincias option');

    for(let i = 0; i < opciones_provincias.length; i++){
        if(opciones_provincias[i].innerText === pf['provincia']){
            opciones_provincias[i].selected = true;
            llenar_cantones();
        }
    }
    let opciones_cantones = document.querySelectorAll('#slt_cantones option');

    for(let i = 0; i < opciones_cantones.length; i++){
        if(opciones_cantones[i].innerText === pf['canton']){
            opciones_cantones[i].selected = true;
            llenar_distritos();
        }
    }

    let opciones_distritos = document.querySelectorAll('#slt_distritos option');

    for(let i = 0; i < opciones_distritos.length; i++){
        console.log(`indice: ${i}, texto opcion: ${opciones_distritos[i].innerText}, `);
        if(opciones_distritos[i].innerText === pf['distrito']){

            opciones_distritos[i].selected = true;
            console.log(`indice: ${i}, opcion seleccionada: ${opciones_distritos[i].value}, `);

        }
    }
};


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
    if (input_sapellido.value == ''){
        error = true;
        input_sapellido.style.border='1px solid red';
    }else{
        input_sapellido.style.border = '1px solid black';
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


    if (validar() == false){
        let correo = input_correo.value;
        let nombre = input_nombre.value;
        let snombre = input_snombre.value;
        let papellido = input_papellido.value;
        let sapellido = input_sapellido.value;
        let tipo_id = input_tipo_id.options[slt_tipo_id.selectedIndex].value;
        let identificacion = input_id.value;
        let telefono = input_telefono.value;
        let provincias = input_provincias.options[slt_provincias.selectedIndex].textContent;
        let cantones = input_cantones.options[slt_cantones.selectedIndex].textContent;
        let distritos = input_distritos.options[slt_distritos.selectedIndex].textContent;
        let direccion= input_direccion.value;
        let foto = input_foto.src;
        let cant_hijos= input_cant_hijos.value;


        modificar_pf(correo, nombre,snombre, papellido, sapellido, identificacion, telefono, provincias, cantones, distritos, direccion, cant_hijos, foto, tipo_id, id);

    }else{
        swal.fire({
            type: 'warning',
            title: 'El padre de familia no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }
};


mostrar_datos();
boton_registrar.addEventListener('click', obtener_datos);
