'use strict';

const input_busqueda = document.querySelector('#txt_buscar');

let usuarios = listar_usuarios;
let tabla = document.querySelector('#tabla_usuarios tbody');

let mostrar_datos = () =>{



    /*
    let busqueda = '';
    if (input_busqueda.value !== null){
        busqueda = input_busqueda.value;
    }
    let resultado =[];

    resultado = usuarios.filter(usuario => {busqueda.length > 0 ? usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) : usuario});

    */


    for(let i = 0; i < usuarios.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla

        let celda_nombre = fila.insertCell();
        let celda_apellido = fila.insertCell();
        let celda_correo = fila.insertCell();
        let celda_tipo = fila.insertCell();
        let estado = fila.insertCell();

        celda_nombre.innerHTML = usuarios[i]['nombre'];
        celda_apellido.innerHTML = usuarios[i]['papellido'];
        celda_correo.innerHTML = usuarios[i]['correo_electronico'];
        celda_tipo.innerHTML = usuarios[i]['tipo_usuario'];
        estado.innerHTML = usuarios[i]['estado'];

    }

};

mostrar_datos();