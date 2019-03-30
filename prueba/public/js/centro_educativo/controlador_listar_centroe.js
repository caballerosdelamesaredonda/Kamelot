'use strict';

const tabla = document.querySelector('#tbl_centroe_primaria tbody');
let tablerowvalue = '';
const centro_id = '';




let mostrar_datos = () => {
    let usuarios = listar_primaria();
    for (let i = 0; i < usuarios.length; i++) {
        let fila = tabla.insertRow(); //Linea crea el tr de la table
        fila.setAttribute('id',usuarios[i]['_id']);
        fila.insertCell().innerHTML = `<img src="${usuarios[i]['foto']}" height="60px" width="60px"> `
        fila.insertCell().innerHTML = usuarios[i]['nombre'];
        fila.insertCell().innerHTML = usuarios[i]['correo_electronico'];
        fila.insertCell().innerHTML = usuarios[i]['telefono'];
        fila.insertCell().innerHTML = usuarios[i]['tipo_centro'];
        fila.insertCell().innerHTML = usuarios[i]['nivel_centro'];
        fila.insertCell().innerHTML = usuarios[i]['provincia'];
        fila.insertCell().innerHTML = usuarios[i]['canton'];

    };
};

mostrar_datos();
/*
$("#tbl_centroe tbody").on("click", "tr", function () {
    let nombre_centro = $(this).find('td:first').text();
    let id_centro_row = $(this).closest('tr').attr('id');
    //alert(nombre_centro);
    //alert(id_centro_row);
    window.localStorage.setItem('centro_id',id_centro_row);
    window.location.href='tablero_centroeducativo.html';
});

*/
;