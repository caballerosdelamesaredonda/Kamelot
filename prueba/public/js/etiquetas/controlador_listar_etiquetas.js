'use strict';

const tabla = document.querySelector('#tbl_etiquetas tbody');

let mostrar_datos = () =>{
    let etiquetas = listado_etiquetas();
    for(let i =0; i < etiquetas.length; i++){
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.insertCell().innerHTML = etiquetas[i]['nombre'];
        fila.insertCell().innerHTML ='<button type="button" id="btn_asociar">Asociar</button>';
        fila.insertCell().innerHTML ='<button type="button" id="btn_modificar">Modificar</button>';
        fila.insertCell().innerHTML ='<button type="button" id="btn_eliminar">Eliminar</button>';

    };

};


mostrar_datos();