'use strict';

const userid = localStorage.getItem('usuario_en_sesion');
const input_nombre = document.querySelector('#txt_nombre');
const input_tipo = document.querySelector('#slt_tipo');
const input_ciclo = document.querySelector('#slt_ciclo');
const input_nivel = document.querySelector('#slt_nivel');
const input_anho = document.querySelector('#text_anho');
const input_nombre_util = document.querySelector('#slt_util_nombre');
const input_cantidad = document.querySelector('#slt_cantidad');
const btn_actualizar = document.querySelector('#btn_actualizar');


let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); 
    return id;
}

let _id = get_param('id');

let utiles = buscar_util(_id);

let mostrar_datos = () =>{
    input_nombre.value = uties[0]['nombre'];
    input_anho.value = utiles[0]['anho'];

    let opciones_tipo = document.querySelectorAll('#slt_tipo option');
    let opciones_ciclo = document.querySelectorAll('#slt_ciclo option');
    let opciones_nivel = document.querySelectorAll('#slt_nivel option');
    let opciones_anho = document.querySelectorAll('#slt_anho option');
    let opciones_nombre_util = document.querySelectorAll('#slt_nombre_util option');
    let opciones_cantidad = document.querySelectorAll('#slt_cantidad option');

    const btn_actualizar = document.querySelector('#btn_actualizar');
    
    for(let i = 0; i < opciones_tipo.length; i++){
        if(opciones_tipo[i].textContent == utiles[0]['tipo']){
            opciones_tipo[i].seleted = true;
        }
    }

    for(let i = 0; i < opciones_ciclo.length; i++){
        if(opciones_ciclo[i].textContent == utiles[0]['ciclo']){
            opciones_ciclo[i].seleted = true;
        }
    }

    for(let i = 0; i < opciones_nivel.length; i++){
        if(opciones_nivel[i].textContent == utiles[0]['nivel']){
            opciones_nivel[i].seleted = true;
        }
    }

    for(let i = 0; i < opciones_anho.length; i++){
        if(opciones_anho[i].textContent == utiles[0]['anho']){
            opciones_anho[i].seleted = true;
        }
    }

    for(let i = 0; i < opciones_nombre_util.length; i++){
        if(opciones_nombre_util[i].textContent == utiles[0]['nombre_util']){
            opciones_nombre_util[i].seleted = true;
        }
    }

    for(let i = 0; i < opciones_cantidad.length; i++){
        if(opciones_cantidad[i].textContent == utiles[0]['cantidad']){
            opciones_cantidad[i].seleted = true;
        }
    }

};

if(utiles){
   mostrar_datos();

}

let obtener_datos = () =>{
    let nombre = input_nombre.value;
    let anho = input_anho.value;
    let cantidad = slt_cantidad.selectedOptions[0].textContent;
    let ciclo = slt_ciclo.selectedOptions[0].textContent;
    let nivel = slt_nivel.selectedOptions[0].textContent;
    let nombre_util = slt_nombre_util.selectedOptions[0].textContent;
    let tipo = slt_tipo.selectedOptions[0].textContent;

    actualizar_utiles(nombre, anho, cantidad, ciclo, nivel, nombre_util, tipo, _id);
};

btn_actualizar.addEventListener('click', obtener_datos);