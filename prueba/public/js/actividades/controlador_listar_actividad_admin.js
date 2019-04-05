'use strict';

const tabla = document.querySelector('#tbl_actividad tbody');
let user_local_actividad = localStorage.getItem('usuario_en_sesion');

if(user_local_actividad==null){
    window.location.href='index.html';
}

let mostrar_lista_actividades = () =>{
    let actividad = consultar_actividad_usuario(user_local_actividad);
    console.log(actividad);
    for(let i = 0; i < actividad.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        fila.insertCell().innerHTML = actividad[i]['titulo'];
        fila.insertCell().innerHTML = actividad[i]['actividad'];
        fila.insertCell().innerHTML = `<img src="${actividad[i]['foto']}" height="110px" width="110px"> `

    }; 

};

mostrar_lista_actividades();

