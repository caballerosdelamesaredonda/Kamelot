'use strict';

let utiles = consultar_utiles(userid);
let user_local_utiles = localStorage.getItem('usuario_en_sesion');

if (user_local_utiles == null) {
    window.location.href = 'index.html';
}

let mostrar_datos = () => {

    let tabla = document.querySelector('.tabla_info tbody');
    tabla.innerHTML = '';
        for (let i = 0; i < utiles.length; i++) {
            let fila = tabla.insertRow(); // Crea tr de la tabla
            fila.insertCell().innerHTML = utiles[i]['nombre'];
            fila.insertCell().innerHTML = utiles[i]['tipo'];
            fila.insertCell().innerHTML = utiles[i]['ciclo'];
            fila.insertCell().innerHTML = utiles[i]['nivel'];
            fila.insertCell().innerHTML = utiles[i]['anho'];
            fila.insertCell().innerHTML = utiles[i]['util'];
            fila.insertCell().innerHTML = utiles[i]['cantidad'];
        }
};

mostrar_datos();
