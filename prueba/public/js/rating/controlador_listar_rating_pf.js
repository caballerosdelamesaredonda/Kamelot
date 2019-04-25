
'use strict';

const tabla = document.querySelector('#tbl_ratings tbody');
let id_padrefamilia_evaluacion = localStorage.getItem('usuario_en_sesion');

if(id_padrefamilia_evaluacion==null){
    window.location.href='index.html';
}

let mostrar_listar_ratings = () =>{
    let ratings = consultar_ratings_pf(id_padrefamilia_evaluacion);
    console.log(ratings);
    for(let i = 0; i < ratings.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla
        let usuario = obtener_usuario_por_id(ratings[i]['centroid']);
        fila.insertCell().innerHTML = usuario.nombre;
        fila.insertCell().innerHTML = ratings[i]['comentario'];
        fila.insertCell().innerHTML = ratings[i]['rating'];
        fila.insertCell().innerHTML = '';
        fila.insertCell().innerHTML = 'Editar / Eliminar';

    }; 

};

mostrar_listar_ratings();
