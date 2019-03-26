'use strict';

const tabla = document.querySelector('#tbl_etiquetas tbody');

let mostrar_datos = () =>{
    let etiquetas = listado_etiquetas();
    for(let i =0; i < etiquetas.length; i++){
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.insertCell().innerHTML = etiquetas[i]['nombre'];
        fila.insertCell().innerHTML ='<i class="fas fa-pen-square"></i>';
        fila.insertCell().innerHTML ='<i class="fas fa-trash-alt"></i>';
        
    };

};


mostrar_datos();