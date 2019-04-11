'use strict';

let citas = consultar_citas_pf(userPadreFamilia);

let mostrar_lista_citas = () => {

    let tabla = document.querySelector('.tabla_info tbody');

    if (citas.success = true) {
        for (let i = 0; i < citas.length; i++) {
            let newdate = new Date(citas[i]['fecha']);
            let month = newdate.getMonth() + 1;
            let day = newdate.getDate();
            let year = newdate.getFullYear();
            let dateformated = month + '-' + day + '-' + year;
            let cita_userid = obtener_usuario_por_id_avatar(citas[i]['userid']);
            let cita_centroid = obtener_usuario_por_id_centro(citas[i]['centroid']);
            //console.log(month+'-'+day+'-'+year);

            let fila = tabla.insertRow(); // Crea tr de la tabla
            fila.insertCell().innerHTML = cita_userid.nombre+' '+cita_userid.papellido;
            fila.insertCell().innerHTML = cita_centroid.nombre;
            //fila.insertCell().innerHTML = citas[i]['fecha'];
            fila.insertCell().innerHTML = citas[i]['razon'];
            fila.insertCell().innerHTML = dateformated;
            fila.insertCell().innerHTML = citas[i]['hora'];
        }
    }
};

mostrar_lista_citas();






