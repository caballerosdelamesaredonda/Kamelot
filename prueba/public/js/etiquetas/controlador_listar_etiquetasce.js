'use strict';

const tabla = document.querySelector('#tbl_etiquetas tbody');

let userlocal = localStorage.getItem('usuario_en_sesion');

if(userlocal==null){
    window.location.href='index.html';
}

let mostrar_datos = () =>{
    let etiquetas = listado_etiquetas();
    for(let i =0; i < etiquetas.length; i++){
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.insertCell().innerHTML = etiquetas[i]['nombre'];
        fila.insertCell().innerHTML ='<button type="button" id="btn_asociar">Asociar</button>';
        fila.insertCell().innerHTML ='<button type="button" id="btn_modificar">Remover</button>';
    };

};


mostrar_datos();