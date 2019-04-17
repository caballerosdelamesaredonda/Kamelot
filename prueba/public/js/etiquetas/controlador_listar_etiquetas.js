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
        fila.insertCell().innerHTML ='<button class="btn_editar_noticia" style="border: none; background-color: inherit;"><img src="/public/images/edit.png" style="width: 20px; height:20px;"></button>' + ' ' + '<button class="btn_borrar_noticia" style="border: none; background-color: inherit;"><img src="/public/images/garbage.png" style="width: 20px; height:20px;"></button>';
        //fila.querySelector('button.btn_editar_noticia').setAttribute('id', noticias[i]['_id']);
        //fila.querySelector('button.btn_borrar_noticia').setAttribute('id', noticias[i]['_id']);

    };

};


mostrar_datos();