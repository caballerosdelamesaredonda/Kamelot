'use strict';

const inputFiltrarUsuario = document.querySelector('#textBusquedaUsuario');

const tabla = document.querySelector('#tbl_actividad tbody');


let mostrar_datos = () =>{

    let usuarios = obtener_usuarios;

    let filtrar_por = (filtro, valor) =>{
        return usuarios[`${filtro}`] == valor;
    };

    let usuarios_filtrados = usuarios.filter(filtrar_por())



    let actividad = listar_actividad();
    for(let i = 0; i < actividad.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        fila.insertCell().innerHTML = actividad[i]['actividad'];
    };

};


mostrar_datos();