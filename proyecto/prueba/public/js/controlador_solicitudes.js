'use strict';

const tabla = document.querySelector('#tbl_solicitudes tbody');

let mostrar_datos = () =>{
    let usuarios = listar_centroe();
    for(let i =0; i < usuarios.length; i++){
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.insertCell().innerHTML = usuarios[i]['nombre'];
        fila.insertCell().innerHTML = usuarios[i]['cedula_juridica'];
        fila.insertCell().innerHTML = usuarios[i]['correo_electronico'];
        fila.insertCell().innerHTML = usuarios[i]['telefono'];
        fila.insertCell().innerHTML = usuarios[i]['fecha_registro'];
        fila.insertCell().innerHTML = '<button type="button" id="btn_enviar">Registrar</button>'
        fila.insertCell().innerHTML ='<i class="fas fa-pen-square"></i>';
        fila.insertCell().innerHTML ='<i class="fas fa-trash-alt"></i>';
        fila.insertCell().innerHTML ='<i class="fas fa-exclamation-triangle"></i>';
    };

    
};


mostrar_datos();