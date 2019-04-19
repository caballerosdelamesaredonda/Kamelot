'use strict';

const input_pregunta = document.querySelector('#txt_pregunta');
const input_respuesta = document.querySelector('#txt_respuesta');
const btn_actualizar = document.querySelector('#btn_registrar');


let get_param = (param) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get(param); // Toma el parametro id del URL
    return id;
}

let pregunta_id = get_param("id");

let pregunta = buscarpregunta_pregunta(pregunta_id);

let mostrar_datos_pregunta = () => {

    input_pregunta.value = pregunta[0]['pregunta'];
    input_respuesta.value = respuesta[0]['respuesta'];
}

if (pregunta) {
    mostrar_datos_pregunta();
}

let obtener_datos_update = () => {
    let pregunta = input_pregunta.value;
    let respuesta = input_respuesta.value;

    actualizar_pregunta(pregunta_id, pregunta, respuesta);
}


btn_actualizar.addEventListener('click', obtener_datos_update);



