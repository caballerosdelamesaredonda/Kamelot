'use strict';

const tabla = document.querySelector('#tbl_preguntas tbody');

let mostrar_datos = () =>{
    let pregunta = listar_pregunta();
    for(let i = 0; i < pregunta.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        fila.insertCell().innerHTML = pregunta[i]['pregunta'];
       
    }; 

};


mostrar_datos();