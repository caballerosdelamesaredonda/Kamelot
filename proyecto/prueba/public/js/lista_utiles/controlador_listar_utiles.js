'use strict';

let utiles = listar_utiles();

let mostrar_datos = () => {

    let tabla = document.querySelector('.tabla_info tbody');
    tabla.innerHTML = '';

    for (let i = 0; i < utiles.length; i++) {
            let fila = tabla.insertRow(); // Crea tr de la tabla
            fila.insertCell().innerHTML = utiles[i]['nombre_lista'];
            fila.insertCell().innerHTML = utiles[i]['tipo'];
            fila.insertCell().innerHTML = utiles[i]['ciclo'];
            fila.insertCell().innerHTML = utiles[i]['nivel'];
            fila.insertCell().innerHTML = utiles[i]['ano'];
    }

};

mostrar_datos();

