
const inputFiltro = document.querySelector('#txtFiltro');

let mostrar_datos_filtrados = () => {

    let tabla = document.querySelector('.tabla_info tbody');
    let filtro = inputFiltro.value;

    tabla.innerHTML = '';

    for (let i = 0; i < citas.length; i++) {
        if (
        (citas[i]['codigo'].toLowerCase().includes(filtro.toLowerCase()))
        || (citas[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()))
        || (citas[i]['correo'].toLowerCase().includes(filtro.toLowerCase()))
        ) {
            let newdate = new Date(citas[i]['fecha']);
            let month = newdate.getMonth() + 1;
            let day = newdate.getDate();
            let year = newdate.getFullYear();
            let dateformated = month + '-' + day + '-' + year;
            //console.log(month+'-'+day+'-'+year);

            let fila = tabla.insertRow(); // Crea tr de la tabla
            fila.insertCell().innerHTML = citas[i]['codigo'];
            fila.insertCell().innerHTML = citas[i]['nombre'];
            fila.insertCell().innerHTML = citas[i]['correo'];
            //fila.insertCell().innerHTML = citas[i]['fecha'];
            fila.insertCell().innerHTML = dateformated;
        }
    }

};

mostrar_datos_filtrados();
inputFiltro.addEventListener('keyup', mostrar_datos_filtrados);