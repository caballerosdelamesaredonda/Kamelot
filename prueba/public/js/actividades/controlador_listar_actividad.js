'use strict';

const tabla = document.querySelector('#tbl_actividad tbody');
let userlocal = localStorage.getItem('usuario_en_sesion');

let mostrar_datos = () =>{
    let actividad = consultar_actividad_usuario(userlocal);
    console.log(actividad);
    for(let i = 0; i < actividad.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        fila.insertCell().innerHTML = actividad[i]['actividad'];
        fila.insertCell().innerHTML = `<img src="${actividad[i]['foto']}" height="110px" width="110px"> `

    }; 

};


mostrar_datos();