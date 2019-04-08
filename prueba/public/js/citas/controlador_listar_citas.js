'use strict';

let citas = consultar_citas(userCentro_citas);
//console.log(citas);

let mostrar_lista_citas = () => {

    let tabla = document.querySelector('.tabla_citas tbody');

    if (citas.success = true) {
        for (let i = 0; i < citas.length; i++) {
            let newdate = new Date(citas[i]['fecha']);
            let month = newdate.getMonth() + 1;
            let day = newdate.getDate();
            let year = newdate.getFullYear();
            let dateformated = month + '-' + day + '-' + year;
            //console.log(month+'-'+day+'-'+year);

            let fila = tabla.insertRow(); // Crea tr de la tabla
            fila.insertCell().innerHTML = citas[i]['userid'];
            fila.insertCell().innerHTML = citas[i]['centroid'];
            //fila.insertCell().innerHTML = citas[i]['fecha'];
            fila.insertCell().innerHTML = citas[i]['razon'];
            fila.insertCell().innerHTML = dateformated;
            fila.insertCell().innerHTML = citas[i]['hora'];
        }
    }
};

mostrar_lista_citas();






