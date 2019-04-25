
'use strict';

const tabla = document.querySelector('#tbl_ratings tbody');
let id_centro_evaluacion = localStorage.getItem('centro_id');

if(id_centro_evaluacion==null){
    window.location.href='index.html';
}

let mostrar_listar_ratings = () =>{
    let ratings = consultar_ratings(id_centro_evaluacion);
    //console.log(ratings);
    for(let i = 0; i < ratings.length; i++){

        let fila = tabla.insertRow();// Crea el tr de la tabla
        let usuario = obtener_usuario_por_id(ratings[i]['userid']);
        let newdate = new Date(ratings[i]['fecha']);
        let month = newdate.getMonth() + 1;
        let day = newdate.getDate();
        let year = newdate.getFullYear();
        let dateformated = month + '-' + day + '-' + year;

        fila.insertCell().innerHTML = usuario.nombre + ' ' + usuario.papellido;
        fila.insertCell().innerHTML = ratings[i]['comentario'];
        fila.insertCell().innerHTML = ratings[i]['rating'];
        fila.insertCell().innerHTML = dateformated;

    }; 

};

mostrar_listar_ratings();


let mostrar_promedio_ratings = () =>{
    
    let ratings = consultar_ratings(id_centro_evaluacion);
    let total_rating = 0;
    let promedio_rating = 0;
    for(let i = 0; i < ratings.length; i++){
        total_rating = total_rating + ratings[i]['rating'];
    };

    promedio_rating = total_rating / (ratings.length);
    //console.log(promedio_rating);
    document.querySelector('p#p_promedio').innerHTML = promedio_rating;
};

mostrar_promedio_ratings();