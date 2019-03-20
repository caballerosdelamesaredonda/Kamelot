
const inputFiltro = document.querySelector('#txtFiltro');

let usuarios = listar_centroe();

let mostrar_datos_filtrados = () => {

    let tabla = document.querySelector('#tbl_centroe tbody');
    let filtro = inputFiltro.value;

    tabla.innerHTML = '';

    for (let i = 0; i < usuarios.length; i++) {
        if (
        (usuarios[i]['nombre'].toLowerCase().includes(filtro.toLowerCase()))
        || (usuarios[i]['cedula_juridica'].toLowerCase().includes(filtro.toLowerCase()))
        || (usuarios[i]['correo_electronico'].toLowerCase().includes(filtro.toLowerCase()))
        || (usuarios[i]['telefono'].toLowerCase().includes(filtro.toLowerCase()))
        ) {
            let fila = tabla.insertRow(); // Crea tr de la tabla
            fila.insertCell().innerHTML = usuarios[i]['nombre'];
            fila.insertCell().innerHTML = usuarios[i]['cedula_juridica'];
            fila.insertCell().innerHTML = usuarios[i]['correo_electronico'];
            fila.insertCell().innerHTML = usuarios[i]['telefono'];
        }
    }

};

mostrar_datos_filtrados();
inputFiltro.addEventListener('keyup', mostrar_datos_filtrados);