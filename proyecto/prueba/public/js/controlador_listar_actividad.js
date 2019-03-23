'use strict';

const tabla = document.querySelector('#tbl_actividad tbody');

let mostrar_datos = () =>{
    let actividad = listar_actividad();
    for(let i = 0; i < actividad.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        fila.insertCell().innerHTML = actividad[i]['actividad'];
       
    }; 

};


mostrar_datos();