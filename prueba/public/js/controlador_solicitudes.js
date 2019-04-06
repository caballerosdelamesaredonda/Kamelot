'use strict';

const tabla = document.querySelector('#tbl_solicitudes tbody');

if(user_admin==null){
    window.location.href='index.html';
}

let mostrar_datos = () =>{
    let usuarios = listar_solicitudes();
    for(let i =0; i < usuarios.length; i++){
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.insertCell().innerHTML = usuarios[i]['nombre'];
        fila.insertCell().innerHTML = usuarios[i]['correo_electronico'];
        fila.insertCell().innerHTML = usuarios[i]['telefono'];
        fila.insertCell().innerHTML = usuarios[i]['fecha_registro'];
        fila.insertCell().innerHTML = `<a href="${usuarios[i]['adjuntar_documentos']}" download><img src="https://img.icons8.com/ios/38/000000/download.png"></a>`;
        fila.insertCell().innerHTML ='<img src="https://img.icons8.com/ios/38/000000/facebook-like.png">'
        fila.insertCell().innerHTML ='<img src="https://img.icons8.com/ios/38/000000/delete-sign.png">';

    };

    
};


mostrar_datos();