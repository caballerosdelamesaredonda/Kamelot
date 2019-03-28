'use strict';

const input_busqueda = document.querySelector('#textBusqueda');

const tabla = document.querySelector('#tbl_actividad tbody');

//recibe tipo de filtro, ejm: "tipo", "nombre",
let filtrar_por = (filtro, valor) =>{
    return usuarios[`${filtro}`] == valor;
};

let mostrar_datos = () =>{

    let usuarios = obtener_usuarios;

    let usuarios_filtrados = usuarios.filter(filtrar_por('nombre', input_busqueda.value));

    let tabla = document.querySelector('#tabla_usuarios tbody');
    tabla.innerHTML = '';

    for(let i = 0; i < usuarios_filtrados.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        let celda_nombre = fila.insertCell();
        let celda_apellido = fila.insertCell();
        let celda_correo = fila.insertCell();
        let celda_tipo = fila.insertCell();
        let estado = fila.insertCell();

        fila.insertCell().innerHTML = actividad[i]['actividad'];
    };

};


mostrar_datos();